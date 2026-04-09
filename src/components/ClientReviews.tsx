import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function ClientReviews() {
  const { isArabic, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextIcon = isArabic ? ChevronLeft : ChevronRight;
  const prevIcon = isArabic ? ChevronRight : ChevronLeft;
  const directionFactor = isArabic ? -1 : 1;
  const timerRef = useRef<number | null>(null);

  const reviews = t.clientReviews.reviews;
  const length = reviews.length;

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, 5000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isPaused, length]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + (isArabic ? -1 : 1) + length) % length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev + (isArabic ? 1 : -1) + length) % length);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [length]);

  const cards = useMemo(() => reviews, [reviews]);

  const getCardStyles = (index: number) => {
    const diff = (index - activeIndex + length) % length;

    if (diff === 0) {
      return {
        opacity: 1,
        zIndex: 30,
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
        shadow: '0 18px 34px rgba(140,198,63,0.12)',
      };
    }

    if (diff === 1 || diff === length - 1) {
      const direction = diff === 1 ? 1 : -1;
      return {
        opacity: 0.14,
        zIndex: 20,
        scale: 0.86,
        x: direction * 230 * directionFactor,
        y: 16,
        rotate: direction * 2 * directionFactor,
        shadow: '0 10px 22px rgba(0,0,0,0.03)',
      };
    }

    return {
      opacity: 0,
      zIndex: 10,
      scale: 0.88,
      x: 0,
      y: 0,
      rotate: 0,
      shadow: 'none',
      pointerEvents: 'none',
    };
  };

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="bg-site-testimonials relative py-24 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={t.clientReviews.title}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[18rem] h-72 w-[32rem] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[120px]" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest font-semibold text-primary">{t.clientReviews.title}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">{t.clientReviews.subtitle}</h2>
          <p className="text-text-muted max-w-2xl mx-auto mt-4">{t.clientReviews.description}</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-bg-light/100 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-bg-light/100 to-transparent" />

          <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] overflow-hidden px-2 sm:px-4">
            {cards.map((item, idx) => {
              const styles = getCardStyles(idx);
              return (
                <motion.div
                  key={item.id}
                  className={`absolute w-[92%] sm:w-[84%] md:w-[720px] lg:w-[760px] max-w-[760px] ${
                    styles.pointerEvents === 'none'
                      ? 'pointer-events-none'
                      : 'pointer-events-auto'
                  }`}
                  initial={false}
                  animate={{
                    opacity: styles.opacity,
                    scale: styles.scale,
                    x: styles.x,
                    y: styles.y ?? 0,
                    rotate: styles.rotate,
                  }}
                  transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
                  style={{ zIndex: styles.zIndex, boxShadow: styles.shadow }}
                >
                  <div
                    className={`relative min-h-[300px] sm:min-h-[320px] lg:min-h-[340px] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] bg-white border px-5 py-5 sm:px-7 sm:py-6 md:px-8 md:py-7 lg:px-10 lg:py-8 flex flex-col overflow-hidden transition-all duration-500 ${
                      styles.opacity === 1 ? 'border-primary/10 ring-1 ring-primary/12' : 'border-primary/5'
                    }`}
                  >
                    <div className="absolute left-1/2 bottom-0 h-16 w-[70%] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-2xl opacity-60 pointer-events-none" />
                    <div className={`relative z-10 flex items-center justify-between mb-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                      <span className="text-[14px] sm:text-[15px] font-semibold leading-tight tracking-[-0.01em] text-text-main max-w-[80%]">{item.companyName[isArabic ? 'ar' : 'en']}</span>
                      <span className="text-xs text-text-muted">• • •</span>
                    </div>
                    <div className={`relative z-10 mb-4 text-2xl text-primary/8 ${isArabic ? 'text-right' : 'text-left'}`}>
                      <Quote size={42} className={isArabic ? 'rotate-180' : ''} />
                    </div>
                    <div className="relative z-10 flex-1 mb-4">
                      <p
                        className={`text-text-main text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] tracking-[-0.01em] line-clamp-4 overflow-hidden max-w-[95%] ${
                          isArabic ? 'text-right' : 'text-left'
                        }`}
                      >
                        {item.testimonial[isArabic ? 'ar' : 'en']}
                      </p>
                    </div>
                    <div
                      className={`relative z-10 pt-4 border-t border-gray-100 flex items-center gap-3 ${
                        isArabic ? 'flex-row-reverse text-right' : 'text-left'
                      }`}
                    >
                      <div className="h-12 w-12 flex-shrink-0 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold sm:h-14 sm:w-14">{item.clientName[isArabic ? 'ar' : 'en'].charAt(0)}</div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[16px] sm:text-[18px] leading-tight text-text-main">{item.clientName[isArabic ? 'ar' : 'en']}</p>
                        <p className="text-[13px] sm:text-sm leading-5 text-text-muted mt-1 max-w-[220px]">{item.clientTitle[isArabic ? 'ar' : 'en']}</p>
                      </div>
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={`${isArabic ? 'mr-3' : 'ml-3'} flex-shrink-0 text-primary/70 hover:text-primary transition-colors duration-300`}>
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-1 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev - 1 + length) % length)}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-text-main shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_28px_rgba(140,198,63,0.16)] focus:outline-none focus:ring-2 focus:ring-primary/20 sm:h-14 sm:w-14"
              aria-label={isArabic ? 'التالي' : 'Previous testimonial'}
            >
              <span className="absolute inset-0 rounded-full bg-primary opacity-0 scale-90 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {React.createElement(prevIcon, { size: 18, strokeWidth: 2.25 })}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev + 1) % length)}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-text-main shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_28px_rgba(140,198,63,0.16)] focus:outline-none focus:ring-2 focus:ring-primary/20 sm:h-14 sm:w-14"
              aria-label={isArabic ? 'السابق' : 'Next testimonial'}
            >
              <span className="absolute inset-0 rounded-full bg-primary opacity-0 scale-90 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {React.createElement(nextIcon, { size: 18, strokeWidth: 2.25 })}
              </span>
            </button>
          </div>

          <div
            className="flex items-center justify-center gap-2.5"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative transition-all duration-300 ${
                  idx === activeIndex
                    ? 'h-3 w-8 rounded-full bg-primary shadow-[0_4px_14px_rgba(140,198,63,0.35)]'
                    : 'h-3 w-3 rounded-full bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                role="tab"
                aria-selected={idx === activeIndex}
              />
            ))}
          </div>

          <p
            className="mt-1 text-xs font-medium tracking-[0.18em] uppercase text-text-muted/70"
            aria-live="polite"
          >
            {String(activeIndex + 1).padStart(2, '0')} / {String(length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </section>
  );
}
