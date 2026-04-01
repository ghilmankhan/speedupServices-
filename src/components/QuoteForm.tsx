import React, { useEffect, useState } from 'react';
import GradientAnimatedButton from './GradientAnimatedButton';

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

export default function QuoteForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serviceError, setServiceError] = useState('');

  useEffect(() => {
    if (!isSubmitted) {
      return;
    }

    const timeoutId = window.setTimeout(() => setIsSubmitted(false), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [isSubmitted]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
    setServiceError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setServiceError('Please select at least one service.');
      return;
    }

    setIsSubmitted(true);
    setServiceError('');
    e.currentTarget.reset();
    setSelectedServices([]);
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
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name<span className="text-red-500">*</span></label>
              <input required type="text" className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name<span className="text-red-500">*</span></label>
              <input required type="text" className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email<span className="text-red-500">*</span></label>
            <input required type="email" className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number<span className="text-red-500">*</span></label>
            <input required type="tel" className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message<span className="text-red-500">*</span></label>
            <textarea required rows={4} className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-green/20" />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium">Select Services<span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-2">
              {servicesList.map((service, idx) => (
                <button 
                  type="button"
                  key={idx} 
                  onClick={() => toggleService(service)}
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
            {serviceError && (
              <p className="text-sm text-red-500" role="alert">
                {serviceError}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <GradientAnimatedButton type="submit" className="w-fit">
              Send Message
            </GradientAnimatedButton>
            {isSubmitted && (
              <span className="text-green-600 font-medium animate-pulse">
                Message sent successfully!
              </span>
            )}
          </div>
        </form>

        {/* Image Side */}
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-full">
          <img 
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1200" 
            alt="Contact" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-10 left-10 right-10 bg-primary-green/80 backdrop-blur-md p-8 rounded-2xl text-white text-center">
            <p className="text-lg font-medium mb-2">Built for Speed. Designed for Success.</p>
            <p className="text-sm opacity-80">We Don't Just Support Business - We Speed It Up.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
