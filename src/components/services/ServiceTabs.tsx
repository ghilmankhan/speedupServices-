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
    <div className="relative w-full">
      <div
        dir={isArabic ? 'rtl' : 'ltr'}
        className="overflow-x-auto pb-2 scrollbar-none"
      >
        <div className="flex min-w-max justify-center px-1">
          <div className="relative mx-auto flex w-fit min-w-max items-center gap-1.5 rounded-[28px] border border-black/5 bg-white px-3 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-10 bottom-2 h-5 rounded-full bg-primary/8 blur-2xl" />
            {tabs.map((tab) => {
              const label = isArabic ? tab.label.ar : tab.label.en;
              const isActive = tab.id === activeTab;
              const isHinted = hintTab === tab.id && !isActive;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onChange(tab.id)}
                  className={`relative shrink-0 whitespace-nowrap rounded-full px-3.5 py-3 text-[13px] font-medium tracking-[-0.01em] transition-all duration-300 lg:px-4 lg:text-[14px] ${
                    isActive
                      ? ''
                      : 'text-slate-600 hover:bg-black/[0.03] hover:text-slate-900'
                  } ${
                    isHinted ? 'shadow-[0_0_0_1px_rgba(140,198,63,0.12)]' : ''
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="services-active-pill"
                      className="absolute inset-0 rounded-full bg-primary shadow-[0_10px_24px_rgba(140,198,63,0.28)]"
                      transition={{ type: 'spring', stiffness: 360, damping: 32, duration: 0.35 }}
                    />
                  )}
                  {isActive && (
                    <span className="pointer-events-none absolute inset-x-6 -bottom-1 h-3 rounded-full bg-primary/35 blur-md" />
                  )}
                  {isHinted && (
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-full bg-primary/10"
                      animate={{ opacity: [0.15, 0.35, 0.15] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                  <span
                    className={`relative z-10 block whitespace-nowrap text-center leading-none transition-all duration-300 ${
                      isActive ? 'scale-[1.02] text-white' : ''
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
