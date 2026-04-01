import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type TabId = 'facility' | 'manpower' | 'marketing';
type CardSize = 'large' | 'wide' | 'tall' | 'small';

interface ServiceCard {
  title: string;
  subtitle?: string;
  tag: string;
  type: 'image' | 'video';
  media: string;
  poster?: string;
  size: CardSize;
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'facility', label: 'Facility Management' },
  { id: 'manpower', label: 'Manpower Supply' },
  { id: 'marketing', label: 'Marketing Services' },
];

const sizeClasses: Record<CardSize, string> = {
  large: 'xl:col-span-2 xl:row-span-2',
  wide: 'xl:col-span-2',
  tall: 'xl:row-span-2',
  small: '',
};

const serviceGalleryData: Record<TabId, ServiceCard[]> = {
  facility: [
    {
      title: 'Commercial Cleaning',
      subtitle: 'Office, mall & building cleaning',
      tag: 'Facility',
      type: 'video',
      media: '/videos/commercial-cleaning.mp4',
      poster: '/images/commercial-cleaning.jpg',
      size: 'large',
    },
    {
      title: 'Landscaping',
      subtitle: 'Landscaping & gardening services',
      tag: 'Soft Services',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'Pest Control',
      subtitle: 'Safe and compliant pest control',
      tag: 'Soft Services',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'HVAC Maintenance',
      subtitle: 'Cooling and ventilation systems',
      tag: 'Hard Services',
      type: 'video',
      media: '/videos/hvac-maintenance.mp4',
      poster: '/images/hvac-maintenance.jpg',
      size: 'wide',
    },
    {
      title: 'Electrical Maintenance',
      subtitle: 'Power and safety inspections',
      tag: 'Hard Services',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'Plumbing Services',
      subtitle: 'Pipeline and fixture support',
      tag: 'Hard Services',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'Housekeeping Services',
      subtitle: 'Daily professional upkeep',
      tag: 'Soft Services',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      size: 'wide',
    },
  ],
  manpower: [
    {
      title: 'Skilled Technicians',
      subtitle: 'Certified manpower deployment',
      tag: 'Manpower',
      type: 'video',
      media: '/videos/skilled-technicians.mp4',
      poster: '/images/skilled-technicians.jpg',
      size: 'large',
    },
    {
      title: 'Construction Workers',
      subtitle: 'On-site execution teams',
      tag: 'Field',
      type: 'video',
      media: '/videos/construction-workers.mp4',
      poster: '/images/construction-workers.jpg',
      size: 'small',
    },
    {
      title: 'Housekeeping Staff',
      subtitle: 'Reliable operational support',
      tag: 'Operations',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'Warehouse & Logistics Staff',
      subtitle: 'Inventory and dispatch handling',
      tag: 'Logistics',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      size: 'wide',
    },
    {
      title: 'Machine Operators',
      subtitle: 'Industrial equipment specialists',
      tag: 'Technical',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'Office Assistants',
      subtitle: 'Administrative workforce support',
      tag: 'Admin',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'Helpers & Loaders',
      subtitle: 'Flexible labor for daily needs',
      tag: 'Operations',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      size: 'wide',
    },
  ],
  marketing: [
    {
      title: 'POSM',
      subtitle: 'Point of sale branding materials',
      tag: 'Marketing',
      type: 'video',
      media: '/videos/posm.mp4',
      poster: '/images/posm.jpg',
      size: 'large',
    },
    {
      title: 'Business Cards',
      subtitle: 'Professional identity collateral',
      tag: 'Print',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'Flyers & Booklets',
      subtitle: 'Campaign print communication',
      tag: 'Print',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'PR Kits',
      subtitle: 'Branded launch and outreach kits',
      tag: 'Brand Assets',
      type: 'video',
      media: '/videos/pr-kits.mp4',
      poster: '/images/pr-kits.jpg',
      size: 'wide',
    },
    {
      title: 'Tissue Boxes',
      subtitle: 'Custom printed packaging',
      tag: 'Packaging',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'Promo Boxes',
      subtitle: 'Promotional presentation boxes',
      tag: 'Packaging',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      size: 'small',
    },
    {
      title: 'Paper Cups',
      subtitle: 'Branded beverage touchpoints',
      tag: 'Print',
      type: 'image',
      media: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      size: 'wide',
    },
  ],
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<TabId>('facility');

  return (
    <section id="services" className="relative bg-[#f3f4f1] py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-green-500/12 blur-3xl" />
        <div className="absolute -right-20 bottom-14 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary-green/30 bg-primary-green/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-primary-green">
            OUR SERVICES
          </span>
          <h2 className="mt-5 text-4xl font-bold text-text-main md:text-5xl">
            Explore Our Services
          </h2>
          <p className="mt-4 text-text-muted">
            Discover integrated facility, manpower, and marketing solutions through our interactive showcase.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/85 p-2 shadow-lg backdrop-blur-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative rounded-full px-6 py-2.5 text-sm font-medium transition"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeServicesTab"
                    className="absolute inset-0 rounded-full bg-primary-green shadow-md"
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeTab === tab.id ? 'text-white' : 'text-gray-700'}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-[170px] gap-5"
          >
            {serviceGalleryData[activeTab].map((item, idx) => (
              <motion.article
                key={`${activeTab}-${item.title}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`
                  group relative overflow-hidden rounded-3xl
                  bg-[#17181c]
                  min-h-[170px]
                  ${sizeClasses[item.size]}
                `}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.media}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      console.error(`Failed to load video: ${item.media}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <img
                    src={item.media}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

                <div className="absolute bottom-0 left-0 z-10 p-6">
                  <div className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                    {item.tag}
                  </div>

                  <h3 className="text-white text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-2 max-w-xs text-sm text-white/75">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
