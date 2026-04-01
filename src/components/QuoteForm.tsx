import React, { useEffect, useState } from 'react';
import GradientAnimatedButton from './GradientAnimatedButton';

interface QuoteFormData {
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

const servicesList = [
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
  "Administrative Support Staff", "Soft POSM", "Hard POSM"
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormData: QuoteFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  selectedServices: [],
  website: '',
};

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const selectedServices = formData.selectedServices;

  useEffect(() => {
    if (!submitSuccess) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [submitSuccess]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }

    if (submitError) {
      setSubmitError('');
    }
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(selectedService => selectedService !== service)
        : [...prev.selectedServices, service],
    }));

    if (errors.selectedServices) {
      setErrors(prev => ({
        ...prev,
        selectedServices: undefined,
      }));
    }

    if (submitError) {
      setSubmitError('');
    }
  };

  const validateForm = (data: QuoteFormData): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.firstName) {
      nextErrors.firstName = 'First name is required.';
    } else if (data.firstName.length < 2) {
      nextErrors.firstName = 'First name must be at least 2 characters.';
    }

    if (!data.lastName) {
      nextErrors.lastName = 'Last name is required.';
    } else if (data.lastName.length < 2) {
      nextErrors.lastName = 'Last name must be at least 2 characters.';
    }

    if (!data.email) {
      nextErrors.email = 'Email is required.';
    } else if (!EMAIL_REGEX.test(data.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!data.phone) {
      nextErrors.phone = 'Phone number is required.';
    } else if (data.phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = 'Phone number must contain at least 7 digits.';
    }

    if (!data.message) {
      nextErrors.message = 'Message is required.';
    } else if (data.message.length < 10) {
      nextErrors.message = 'Message must be at least 10 characters.';
    }

    if (data.selectedServices.length === 0) {
      nextErrors.selectedServices = 'Please select at least one service.';
    }

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess(false);

    if (formData.website) {
      return;
    }

    const trimmedFormData: QuoteFormData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      selectedServices,
      website: formData.website,
    };

    const nextErrors = validateForm(trimmedFormData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedFormData),
      });

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string; errors?: FormErrors }
        | null;

      if (response.ok && data?.success) {
        setFormData(initialFormData);
        setErrors({});
        setSubmitSuccess(true);
        setSubmitError('');
      } else {
        if (data?.errors) {
          setErrors(data.errors);
        }

        setSubmitError(
          data?.message || 'Failed to submit. Please try again later.'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        'An error occurred while submitting. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Wanna Get A Quotation?</h2>
        <p className="text-text-muted max-w-4xl mx-auto">
          Have a question or need a quotation? Our team is here to assist you and will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {submitError && (
            <div
              className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
              role="alert"
            >
              {submitError}
            </div>
          )}

          {submitSuccess && (
            <div
              className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-600 text-sm"
              role="status"
              aria-live="polite"
            >
              ✓ Thank you! Your quotation request has been sent successfully.
            </div>
          )}

          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${
                  errors.firstName
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-200 focus:ring-primary-green/20'
                }`}
              />
              {errors.firstName && (
                <p
                  id="firstName-error"
                  className="text-sm text-red-500"
                  role="alert"
                >
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${
                  errors.lastName
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-200 focus:ring-primary-green/20'
                }`}
              />
              {errors.lastName && (
                <p
                  id="lastName-error"
                  className="text-sm text-red-500"
                  role="alert"
                >
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-200 focus:ring-primary-green/20'
              }`}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-sm text-red-500"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-200 focus:ring-primary-green/20'
              }`}
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="text-sm text-red-500"
                role="alert"
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your requirements (minimum 10 characters)"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${
                errors.message
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-200 focus:ring-primary-green/20'
              }`}
            />
            {errors.message && (
              <p
                id="message-error"
                className="text-sm text-red-500"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <label htmlFor="quote-services" className="text-sm font-medium">
              Select Services<span className="text-red-500">*</span>
            </label>
            <div
              id="quote-services"
              className="flex flex-wrap gap-2"
              aria-invalid={!!errors.selectedServices}
              aria-describedby={errors.selectedServices ? 'selectedServices-error' : undefined}
            >
              {servicesList.map((service, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleService(service)}
                  aria-pressed={selectedServices.includes(service)}
                  className={`px-4 py-2 border rounded-lg text-xs transition-colors ${
                    selectedServices.includes(service)
                      ? 'bg-primary-green text-white border-primary-green'
                      : 'bg-white border-gray-200 hover:border-primary-green'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
            {errors.selectedServices && (
              <p
                id="selectedServices-error"
                className="text-sm text-red-500"
                role="alert"
              >
                {errors.selectedServices}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <GradientAnimatedButton
              type="submit"
              className="w-fit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : submitSuccess ? 'Message Sent' : 'Send Message'}
            </GradientAnimatedButton>
          </div>
        </form>

        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1200"
            alt="Contact form"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-10 left-10 right-10 bg-primary-green/80 backdrop-blur-md p-8 rounded-2xl text-white text-center">
            <p className="text-lg font-medium mb-2">Built for Speed. Designed for Success.</p>
            <p className="text-sm opacity-80">We Don’t Just Support Business—We Speed It Up.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
