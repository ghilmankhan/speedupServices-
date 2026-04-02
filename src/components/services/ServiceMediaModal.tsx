import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Film, ImageIcon, X } from 'lucide-react';
import { ServiceItemData } from './types';

interface ServiceMediaModalProps {
  item: ServiceItemData | null;
  isArabic: boolean;
  onClose: () => void;
}

export function ServiceMediaModal({ item, isArabic, onClose }: ServiceMediaModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!item) {
      return;
    }

    setActiveIndex(0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  const title = isArabic ? item.title.ar : item.title.en;
  const description = isArabic ? item.description.ar : item.description.en;
  const gallery = item.gallery || [];
  const hasMedia = gallery.length > 0;
  const activeAsset = hasMedia ? gallery[activeIndex] : null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(event) => event.stopPropagation()}
          className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.32)]"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/65 text-white transition hover:bg-slate-950"
            aria-label={isArabic ? 'إغلاق' : 'Close'}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid min-h-[540px] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#dff2bf,transparent_52%),linear-gradient(180deg,#f7fbf1_0%,#eef7e2_100%)] p-8">
              {hasMedia && activeAsset ? (
                <div className="w-full">
                  {activeAsset.type === 'video' ? (
                    <video
                      controls
                      poster={activeAsset.poster}
                      className="h-full max-h-[460px] w-full rounded-[1.5rem] border border-white/70 object-cover shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
                    >
                      <source src={activeAsset.src} />
                    </video>
                  ) : (
                    <img
                      src={activeAsset.src}
                      alt={isArabic ? activeAsset.alt.ar : activeAsset.alt.en}
                      className="h-full max-h-[460px] w-full rounded-[1.5rem] border border-white/70 object-cover shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
                    />
                  )}
                </div>
              ) : (
                <div className="flex w-full max-w-md flex-col items-center rounded-[1.75rem] border border-white/70 bg-white/70 px-8 py-12 text-center shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/12 text-primary shadow-[0_0_0_14px_rgba(140,198,63,0.08)]">
                    {item.mediaType === 'video' ? <Film className="h-9 w-9" /> : <ImageIcon className="h-9 w-9" />}
                  </div>
                  <h4 className="text-2xl font-semibold text-text-main">{title}</h4>
                  <p className="mt-4 text-sm leading-7 text-text-muted">
                    {isArabic ? 'الوسائط قيد الإعداد حالياً وسيتم إضافتها قريباً.' : 'Media coming soon. This service is ready for images and video once the final assets are approved.'}
                  </p>
                </div>
              )}

              {hasMedia && gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((activeIndex - 1 + gallery.length) % gallery.length)}
                    className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-700 shadow-lg transition hover:bg-white"
                    aria-label={isArabic ? 'السابق' : 'Previous'}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((activeIndex + 1) % gallery.length)}
                    className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-700 shadow-lg transition hover:bg-white"
                    aria-label={isArabic ? 'التالي' : 'Next'}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className={`flex flex-col justify-between bg-white p-8 lg:p-10 ${isArabic ? 'text-right' : 'text-left'}`}>
              <div>
                <span className="inline-flex rounded-full border border-primary/15 bg-primary/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {isArabic ? 'تفاصيل الخدمة' : 'Service Detail'}
                </span>
                <h3 className="mt-5 text-3xl font-semibold text-text-main">{title}</h3>
                <p className="mt-4 text-base leading-8 text-text-muted">{description}</p>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
                <p className="text-sm font-semibold text-text-main">{isArabic ? 'حالة الوسائط' : 'Media Status'}</p>
                <p className="mt-2 text-sm leading-7 text-text-muted">
                  {hasMedia
                    ? (isArabic ? 'تتوفر وسائط مرتبطة بهذه الخدمة ويمكن توسيع المعرض بسهولة من خلال كائن البيانات.' : 'Media is available for this service and the gallery can be expanded easily from the data object.')
                    : (isArabic ? 'لا توجد وسائط نهائية حتى الآن. أضف الصور أو الفيديوهات لاحقاً داخل مجلدات الخدمات وسيظهر المعرض مباشرة.' : 'No final media is attached yet. Add images or videos later inside the service folders and the gallery will render immediately.')}
                </p>
              </div>

              {hasMedia && gallery.length > 1 && (
                <div className="mt-6 flex gap-3 overflow-x-auto pb-1">
                  {gallery.map((asset, index) => (
                    <button
                      key={`${asset.src}-${index}`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-16 w-20 shrink-0 overflow-hidden rounded-2xl border transition ${activeIndex === index ? 'border-primary shadow-[0_10px_24px_rgba(140,198,63,0.2)]' : 'border-slate-200'}`}
                    >
                      {asset.type === 'image' ? (
                        <img
                          src={asset.src}
                          alt={isArabic ? asset.alt.ar : asset.alt.en}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-900 text-white">
                          <Film className="h-5 w-5" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
