import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { ServiceCard } from './services/ServiceCard';
import { ServiceMediaModal } from './services/ServiceMediaModal';
import { ServiceTabs } from './services/ServiceTabs';
import { serviceTabOrder, servicesData } from './services/servicesData';
import { ServiceItemData, ServiceTabId } from './services/types';

export default function Services() {
  const [activeTab, setActiveTab] = useState<ServiceTabId>('marketing');
  const [selectedItem, setSelectedItem] = useState<ServiceItemData | null>(null);
  const [hintTab, setHintTab] = useState<ServiceTabId | null>(null);
  const { isArabic, t } = useLanguage();
  const tabs = useMemo(() => serviceTabOrder.map((tabId) => servicesData[tabId]), []);
  const activeCategory = servicesData[activeTab];

  const layoutClassName = {
    split: 'grid gap-6 lg:grid-cols-2',
    balanced: 'grid gap-6 lg:grid-cols-2',
    compact: 'grid gap-6 lg:grid-cols-2',
    wide: 'grid gap-6',
  }[activeCategory.layout];

  useEffect(() => {
    setHintTab(null);

    const timeout = window.setTimeout(() => {
      const currentIndex = serviceTabOrder.indexOf(activeTab);
      const nextTab = serviceTabOrder[(currentIndex + 1) % serviceTabOrder.length];
      setHintTab(nextTab);
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [activeTab]);

  return (
    <motion.section
      id="services"
      className="bg-site-services relative overflow-hidden py-22"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 28, -10, 0], y: [0, -18, 12, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[10%] bottom-[14%] h-72 w-72 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, -20, 10, 0], y: [0, 10, -14, 0], scale: [1, 0.96, 1.04, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className={`mx-auto mb-9 max-w-4xl text-center ${isArabic ? 'md:text-right' : ''}`}>
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-primary">
            {t.services.badge}
          </span>
          <h2 className="mt-4 text-[2.8rem] font-bold leading-[1.02] text-text-main md:text-[3.75rem]">
            {t.services.title}
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-text-muted md:text-base">
            {t.services.description}
          </p>
        </div>

        <div className="mb-8">
          <ServiceTabs
            tabs={tabs}
            activeTab={activeTab}
            hintTab={hintTab}
            isArabic={isArabic}
            onChange={(tab) => {
              setHintTab(null);
              setActiveTab(tab);
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 text-center">
              <span className="inline-flex rounded-full border border-primary/20 bg-white/70 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary shadow-[0_10px_24px_rgba(140,198,63,0.08)]">
                {isArabic ? activeCategory.eyebrow.ar : activeCategory.eyebrow.en}
              </span>
              <p className="mx-auto mt-3 max-w-4xl text-[15px] leading-7 text-text-muted md:text-base">
                {isArabic ? activeCategory.intro.ar : activeCategory.intro.en}
              </p>
            </div>

            <div className={layoutClassName}>
              {activeCategory.groups.map((group) => (
                <ServiceCard
                  key={group.id}
                  group={group}
                  isArabic={isArabic}
                  onSelectItem={setSelectedItem}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <ServiceMediaModal
          item={selectedItem}
          isArabic={isArabic}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </motion.section>
  );
}
