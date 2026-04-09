import React, { useState } from 'react';
import GradientAnimatedButton from './GradientAnimatedButton';
import { useLanguage } from '../i18n';

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
  website?: string;
}

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
  const { isArabic, t } = useLanguage();
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const selectedServices = formData.selectedServices;

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

  const getFieldErrorId = (fieldName: keyof FormErrors): string => `${fieldName}-error`;

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
      nextErrors.firstName = t.quoteForm.validation.firstNameRequired;
    } else if (data.firstName.length < 2) {
      nextErrors.firstName = t.quoteForm.validation.firstNameMin;
    }

    if (!data.lastName) {
      nextErrors.lastName = t.quoteForm.validation.lastNameRequired;
    } else if (data.lastName.length < 2) {
      nextErrors.lastName = t.quoteForm.validation.lastNameMin;
    }

    if (!data.email) {
      nextErrors.email = t.quoteForm.validation.emailRequired;
    } else if (!EMAIL_REGEX.test(data.email)) {
      nextErrors.email = t.quoteForm.validation.emailInvalid;
    }

    if (!data.phone) {
      nextErrors.phone = t.quoteForm.validation.phoneRequired;
    } else if (data.phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = t.quoteForm.validation.phoneInvalid;
    }

    if (!data.message) {
      nextErrors.message = t.quoteForm.validation.messageRequired;
    } else if (data.message.length < 10) {
      nextErrors.message = t.quoteForm.validation.messageMin;
    }

    if (data.selectedServices.length === 0) {
      nextErrors.selectedServices = t.quoteForm.validation.servicesRequired;
    }

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess(false);

    if (formData.website) {
      setSubmitError(t.quoteForm.messages.genericError);
      return;
    }

    const trimmedFormData: QuoteFormData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      selectedServices: selectedServices.map(service => service.trim()),
      website: formData.website.trim(),
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

      if (!response.ok || !data?.success) {
        if (data?.errors) {
          setErrors(data.errors);
        }

        throw new Error(
          data?.message || t.quoteForm.messages.genericError
        );
      }

      if (response.ok && data?.success) {
        setFormData(initialFormData);
        setErrors({});
        setSubmitSuccess(true);
        setSubmitError('');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      const message = error instanceof Error
        ? error.message
        : t.quoteForm.messages.networkError;
      setSubmitError(message || t.quoteForm.messages.networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="bg-site-quote">
      <div className="section-container">
      <div className={`text-center mb-16 ${isArabic ? 'md:text-right' : ''}`}>
        <h2 className="text-4xl font-bold mb-6">{t.quoteForm.title}</h2>
        <p className="text-text-muted max-w-4xl mx-auto">
          {t.quoteForm.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <form onSubmit={handleSubmit} noValidate className={`space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
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
              className="p-4 bg-primary/10 border border-primary/25 rounded-xl text-primary-dark text-sm"
              role="status"
              aria-live="polite"
            >
              {t.quoteForm.messages.success}
            </div>
          )}

          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className={`text-sm font-medium ${isArabic ? 'text-right block' : ''}`}>
                {t.quoteForm.labels.firstName}<span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder={t.quoteForm.placeholders.firstName}
                autoComplete="given-name"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? getFieldErrorId('firstName') : undefined}
                className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${isArabic ? 'text-right' : 'text-left'} ${
                  errors.firstName
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-200 focus:ring-primary/20'
                }`}
              />
              {errors.firstName && (
                <p
                  id={getFieldErrorId('firstName')}
                  className="text-sm text-red-500"
                  role="alert"
                >
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className={`text-sm font-medium ${isArabic ? 'text-right block' : ''}`}>
                {t.quoteForm.labels.lastName}<span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={t.quoteForm.placeholders.lastName}
                autoComplete="family-name"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? getFieldErrorId('lastName') : undefined}
                className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${isArabic ? 'text-right' : 'text-left'} ${
                  errors.lastName
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-200 focus:ring-primary/20'
                }`}
              />
              {errors.lastName && (
                <p
                  id={getFieldErrorId('lastName')}
                  className="text-sm text-red-500"
                  role="alert"
                >
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className={`text-sm font-medium ${isArabic ? 'text-right block' : ''}`}>
              {t.quoteForm.labels.email}<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t.quoteForm.placeholders.email}
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? getFieldErrorId('email') : undefined}
              className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${isArabic ? 'text-right' : 'text-left'} ${
                errors.email
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-200 focus:ring-primary/20'
              }`}
            />
            {errors.email && (
              <p
                id={getFieldErrorId('email')}
                className="text-sm text-red-500"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className={`text-sm font-medium ${isArabic ? 'text-right block' : ''}`}>
              {t.quoteForm.labels.phone}<span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t.quoteForm.placeholders.phone}
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? getFieldErrorId('phone') : undefined}
              className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${isArabic ? 'text-right' : 'text-left'} ${
                errors.phone
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-200 focus:ring-primary/20'
              }`}
            />
            {errors.phone && (
              <p
                id={getFieldErrorId('phone')}
                className="text-sm text-red-500"
                role="alert"
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className={`text-sm font-medium ${isArabic ? 'text-right block' : ''}`}>
              {t.quoteForm.labels.message}<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t.quoteForm.placeholders.message}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? getFieldErrorId('message') : undefined}
              className={`w-full p-3 bg-white border rounded-xl focus:outline-none focus:ring-2 ${isArabic ? 'text-right' : 'text-left'} ${
                errors.message
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-200 focus:ring-primary/20'
              }`}
            />
            {errors.message && (
              <p
                id={getFieldErrorId('message')}
                className="text-sm text-red-500"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <label id="quote-services-label" htmlFor="quote-services" className={`text-sm font-medium ${isArabic ? 'text-right block' : ''}`}>
              {t.quoteForm.labels.services}<span className="text-red-500">*</span>
            </label>
            <div
              id="quote-services"
              role="group"
              aria-labelledby="quote-services-label"
              className={`flex flex-wrap gap-2 ${isArabic ? 'justify-end' : ''}`}
              aria-invalid={!!errors.selectedServices}
              aria-describedby={errors.selectedServices ? getFieldErrorId('selectedServices') : undefined}
            >
              {t.quoteForm.serviceOptions.map((service, idx) => (
                <button
                  key={service.value}
                  type="button"
                  onClick={() => toggleService(service.value)}
                  aria-pressed={selectedServices.includes(service.value)}
                  className={`px-4 py-2 border rounded-lg text-xs transition-colors ${
                    selectedServices.includes(service.value)
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white border-gray-200 hover:border-primary'
                  }`}
                >
                  {service.label}
                </button>
              ))}
            </div>
            {errors.selectedServices && (
              <p
                id={getFieldErrorId('selectedServices')}
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
              {isSubmitting ? t.quoteForm.buttons.sending : submitSuccess ? t.quoteForm.buttons.sent : t.quoteForm.buttons.send}
            </GradientAnimatedButton>
          </div>
        </form>

        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-full">
          {submitSuccess ? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-white p-8 transition-all duration-500 ease-out opacity-100 scale-100">
              <div className="flex w-full max-w-md flex-col items-center justify-center rounded-[28px] border border-primary/15 bg-white/80 px-8 py-10 text-center shadow-[0_24px_80px_rgba(22,163,74,0.12)] backdrop-blur-sm">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/15 bg-primary/10 shadow-[0_12px_32px_rgba(22,163,74,0.16)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </div>
                </div>

                <h3 className="mb-4 text-3xl font-bold text-primary-dark">
                  {isArabic ? 'شكراً لك!' : 'Thank You!'}
                </h3>

                <p className="mb-3 text-base leading-7 text-slate-700">
                  {isArabic
                    ? 'تم إرسال طلب عرض السعر الخاص بك بنجاح. سيقوم فريقنا بالتواصل معك قريباً.'
                    : 'Your quotation request has been sent successfully. Our team will contact you shortly.'}
                </p>

                <p className="mb-6 text-sm leading-6 text-slate-500">
                  {isArabic
                    ? 'نقدّر وقتك ونتطلع إلى مساعدتك.'
                    : 'We appreciate your interest and look forward to helping you.'}
                </p>

                <div className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {isArabic ? 'تم استلام الطلب' : 'Request Received'}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full w-full transition-all duration-500 ease-out opacity-100 scale-100">
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1200"
                alt={t.quoteForm.imageAlt}
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-primary/80 backdrop-blur-md p-8 rounded-2xl text-white text-center">
                <p className="text-lg font-medium mb-2">{t.quoteForm.cardTagline}</p>
                <p className="text-sm opacity-80">{t.quoteForm.cardSubtagline}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
