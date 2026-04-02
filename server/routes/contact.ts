import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

interface ContactRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  selectedServices: string[];
  website: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  selectedServices?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const allowedServices = new Set([
  "Facility Management", "Manpower Supply", "Marketing Services",
  "Soft Services", "Hard Services", "Housekeeping Services",
  "Office & Commercial Cleaning", "Industrial Cleaning", "Waste Management",
  "Landscaping & Gardening", "Pest Control Coordination",
  "Pantry & Office Support Services", "Electrical Maintenance",
  "HVAC Installation & Maintenance", "Plumbing Services",
  "Carpentry & Civil Maintenance", "Building & Infrastructure Maintenance",
  "Equipment Maintenance", "Skilled Technicians",
  "Construction Workers", "Warehouse & Logistics Staff",
  "Office Assistants", "Helpers & Loaders",
  "Machine Operators", "Facility Supervisors",
  "Administrative Support Staff", "Soft POSM", "Hard POSM",
]);

const rateLimitStore = new Map<string, number[]>();

const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[character] || character);

const getTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials are not configured.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const getReceiverEmail = (): string => {
  if (!process.env.CONTACT_RECEIVER) {
    throw new Error('Contact receiver email is not configured.');
  }

  return process.env.CONTACT_RECEIVER;
};

const getClientIp = (req: Request): string => {
  const forwardedFor = req.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
    return forwardedFor.split(',')[0].trim();
  }

  return req.ip || req.socket.remoteAddress || 'unknown';
};

const checkRateLimit = (clientIp: string): boolean => {
  const now = Date.now();
  const recentRequests = (rateLimitStore.get(clientIp) || []).filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(clientIp, recentRequests);
    return false;
  }

  recentRequests.push(now);
  rateLimitStore.set(clientIp, recentRequests);
  return true;
};

const normalizePayload = (body: Partial<ContactRequestBody>) => ({
  firstName: String(body.firstName || '').trim(),
  lastName: String(body.lastName || '').trim(),
  email: String(body.email || '').trim().toLowerCase(),
  phone: String(body.phone || '').trim(),
  message: String(body.message || '').trim(),
  selectedServices: Array.isArray(body.selectedServices)
    ? body.selectedServices.map(service => String(service).trim()).filter(Boolean)
    : [],
  website: String(body.website || '').trim(),
});

const validateContactData = (
  data: ReturnType<typeof normalizePayload>,
): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};

  if (!data.firstName) {
    errors.firstName = 'First name is required.';
  } else if (data.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters.';
  }

  if (!data.lastName) {
    errors.lastName = 'Last name is required.';
  } else if (data.lastName.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters.';
  }

  if (!data.email) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.phone) {
    errors.phone = 'Phone number is required.';
  } else if (data.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Phone number must contain at least 7 digits.';
  }

  if (!data.message) {
    errors.message = 'Message is required.';
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  if (data.selectedServices.length === 0) {
    errors.selectedServices = 'Please select at least one service.';
  } else if (data.selectedServices.some(service => !allowedServices.has(service))) {
    errors.selectedServices = 'One or more selected services are invalid.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

const generateEmailHtml = (data: ReturnType<typeof normalizePayload>): string => {
  const servicesList = data.selectedServices
    .map(service => `<li>${escapeHtml(service)}</li>`)
    .join('');

  return `
    <h2>New Quote Request</h2>
    <p><strong>First Name:</strong> ${escapeHtml(data.firstName)}</p>
    <p><strong>Last Name:</strong> ${escapeHtml(data.lastName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Selected Services:</strong></p>
    <ul>
      ${servicesList}
    </ul>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, '<br />')}</p>
    <p><strong>Date Submitted:</strong> ${escapeHtml(new Date().toLocaleString())}</p>
  `;
};

const generateEmailText = (data: ReturnType<typeof normalizePayload>): string => {
  const servicesList = data.selectedServices.map(service => `- ${service}`).join('\n');

  return [
    'New Quote Request',
    '',
    `First Name: ${data.firstName}`,
    `Last Name: ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    '',
    'Selected Services:',
    servicesList,
    '',
    'Message:',
    data.message,
    '',
    `Date Submitted: ${new Date().toLocaleString()}`,
  ].join('\n');
};

router.post('/contact', async (req: Request, res: Response) => {
  try {
    const clientIp = getClientIp(req);

    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.',
      });
    }

    const data = normalizePayload(req.body as Partial<ContactRequestBody>);

    if (data.website) {
      return res.status(200).json({ success: true });
    }

    const validation = validateContactData(data);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors,
      });
    }

    const transporter = getTransporter();
    const receiverEmail = getReceiverEmail();

    try {
      await transporter.verify();
      console.log('SMTP server ready');
    } catch (smtpError) {
      console.error('SMTP verification failed:', smtpError);
      throw smtpError;
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: receiverEmail,
      replyTo: data.email,
      subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
      html: generateEmailHtml(data),
      text: generateEmailText(data),
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to send email',
    });
  }
});

export default router;
