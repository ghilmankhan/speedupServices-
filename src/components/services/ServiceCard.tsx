import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Film, ImageIcon } from 'lucide-react';
import { ServiceGroupData, ServiceItemData } from './types';
import { ServiceItem } from './ServiceItem';

interface ServiceCardProps {
  group: ServiceGroupData;
  isArabic: boolean;
  onSelectItem: (item: ServiceItemData) => void;
}

export function ServiceCard({ group, isArabic, onSelectItem }: ServiceCardProps) {
  const [hoveredItem, setHoveredItem] = useState<ServiceItemData | null>(null);
  const [selectedItem, setSelectedItem] = useState<ServiceItemData | null>(null);
  const title = isArabic ? group.title.ar : group.title.en;
  const description = isArabic ? group.description.ar : group.description.en;
  const previewItem = useMemo(() => hoveredItem || selectedItem, [hoveredItem, selectedItem]);
  const previewTitle = previewItem ? (isArabic ? previewItem.title.ar : previewItem.title.en) : '';
  const previewDescription = previewItem ? (isArabic ? previewItem.description.ar : previewItem.description.en) : '';
  const previewAsset = previewItem?.gallery?.[0];
  const showPreviewMedia = Boolean(previewAsset);

  return (
    <motion.article
      layout
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseLeave={() => setHoveredItem(null)}
      className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/78 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_24px_58px_rgba(15,23,42,0.10)] md:p-6"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
      <div className={isArabic ? 'text-right' : 'text-left'}>
        <h3 className="text-[1.85rem] font-bold leading-tight text-text-main md:text-[2rem]">
          {title}
        </h3>
        <p className="mt-2 max-w-2xl text-[15px] leading-6 text-text-muted">
          {description}
        </p>
      </div>

      <div className="mt-5">
        <div className={`grid gap-x-4 gap-y-1 ${group.columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
          {group.items.map((item, index) => (
            <ServiceItem
              key={item.id}
              item={item}
              index={index}
              isArabic={isArabic}
              isActive={previewItem?.id === item.id}
              onHover={setHoveredItem}
              onSelect={(nextItem) => {
                setSelectedItem(current => current?.id === nextItem.id ? null : nextItem);
                setHoveredItem(nextItem);
              }}
            />
          ))}
        </div>

        <AnimatePresence initial={false} mode="wait">
          {previewItem && (
            <motion.aside
              key={previewItem.id}
              initial={{ height: 0, opacity: 0, y: 12 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 8 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-[1.5rem] border border-primary/12 bg-primary-soft/75 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_14px_30px_rgba(140,198,63,0.06)] md:p-4">
                <div className="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
                  <div className="overflow-hidden rounded-[1.25rem] border border-white/80 bg-white/85">
                    {showPreviewMedia && previewAsset ? (
                      previewAsset.type === 'video' ? (
                        <video
                          className="h-40 w-full object-cover"
                          poster={previewAsset.poster}
                          muted
                          autoPlay
                          loop
                          playsInline
                        >
                          <source src={previewAsset.src} />
                        </video>
                      ) : (
                        <img
                          src={previewAsset.src}
                          alt={isArabic ? previewAsset.alt.ar : previewAsset.alt.en}
                          className="h-40 w-full object-cover"
                        />
                      )
                    ) : (
                      <div className="flex h-40 w-full flex-col items-center justify-center bg-white/80 p-5 text-center">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary shadow-[0_0_0_8px_rgba(140,198,63,0.08)]">
                          {previewItem.mediaType === 'video' ? <Film className="h-5 w-5" /> : <ImageIcon className="h-5 w-5" />}
                        </div>
                        <p className="text-sm font-semibold text-text-main">{previewTitle}</p>
                        <p className="mt-1 text-xs text-text-muted">
                          {isArabic ? 'المعاينة قريباً' : 'Preview coming soon'}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className={isArabic ? 'text-right' : 'text-left'}>
                    <div className="inline-flex rounded-full border border-primary/12 bg-white/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {isArabic ? 'تفاصيل الخدمة' : 'Service Details'}
                    </div>
                    <h4 className="mt-3 text-lg font-semibold text-text-main">{previewTitle}</h4>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-text-muted">
                      {previewDescription}
                    </p>
                    <button
                      type="button"
                      onClick={() => onSelectItem(previewItem)}
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary/25 hover:bg-white"
                    >
                      <span>{isArabic ? 'فتح المعرض' : 'Open Gallery'}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
