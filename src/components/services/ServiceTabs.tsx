import React from 'react';
import { motion } from 'motion/react';
import { ServiceCategoryData, ServiceTabId } from './types';

interface ServiceTabsProps {
  tabs: ServiceCategoryData[];
  activeTab: ServiceTabId;
  isArabic: boolean;
  hintTab?: ServiceTabId | null;
  onChange: (tab: ServiceTabId) => void;
}

export function ServiceTabs({ tabs, activeTab, isArabic, hintTab, onChange }: ServiceTabsProps) {
  return (
    <div className="relative mx-auto w-full max-w-4xl rounded-[2rem] border border-gray-100 bg-white/80 p-2.5 shadow-sm backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-20 bottom-3 h-6 rounded-full bg-primary/10 blur-2xl" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {tabs.map((tab) => {
        const label = isArabic ? tab.label.ar : tab.label.en;
        const isActive = tab.id === activeTab;
        const isHinted = hintTab === tab.id && !isActive;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative min-w-0 rounded-full px-3 py-2.5 text-[13px] font-semibold transition duration-300 md:px-4 md:text-sm ${
              isHinted ? 'shadow-[0_0_0_1px_rgba(140,198,63,0.12)]' : ''
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="services-active-pill"
                className="absolute inset-0 rounded-full bg-primary shadow-[0_12px_28px_rgba(140,198,63,0.34)]"
                transition={{ type: 'spring', stiffness: 360, damping: 32, duration: 0.35 }}
              />
            )}
            {isActive && (
              <span className="pointer-events-none absolute inset-x-6 -bottom-1 h-3 rounded-full bg-primary/40 blur-md" />
            )}
            {isHinted && (
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full bg-primary/10"
                animate={{ opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            <span className={`relative z-10 block whitespace-normal text-center leading-4 transition-all duration-300 ${isActive ? 'scale-[1.02] text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              {label}
            </span>
          </button>
        );
      })}
      </div>
    </div>
  );
}
