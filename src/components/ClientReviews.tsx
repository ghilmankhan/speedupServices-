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
        rotate: 0,
        shadow: '0 20px 35px rgba(140,198,63,0.25)',
      };
    }

    if (diff === 1 || diff === length - 1) {
      const direction = diff === 1 ? 1 : -1;
      return {
        opacity: 0.6,
        zIndex: 20,
        scale: 0.94,
        x: direction * 76 * directionFactor,
        rotate: direction * 5 * directionFactor,
        shadow: '0 10px 22px rgba(0,0,0,0.1)',
      };
    }

    return {
      opacity: 0,
      zIndex: 10,
      scale: 0.88,
      x: 0,
      rotate: 0,
      shadow: 'none',
      pointerEvents: 'none',
    };
  };

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative py-24 bg-bg-light overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={t.clientReviews.title}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
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

          <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] overflow-visible px-4">
            {cards.map((item, idx) => {
              const styles = getCardStyles(idx);
              return (
                <motion.div
                  key={item.id}
                  className={`absolute w-[95%] sm:w-[82%] md:w-[68%] lg:w-[540px] ${
                    styles.pointerEvents === 'none'
                      ? 'pointer-events-none'
                      : 'pointer-events-auto'
                  }`}
                  initial={false}
                  animate={{
                    opacity: styles.opacity,
                    scale: styles.scale,
                    x: styles.x,
                    rotate: styles.rotate,
                  }}
                  transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
                  style={{ zIndex: styles.zIndex, boxShadow: styles.shadow }}
                >
                  <div
                    className={`relative min-h-[400px] sm:min-h-[430px] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] bg-white border border-primary/15 px-4 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8 lg:px-8 lg:py-8 flex flex-col overflow-hidden transition-all duration-500 ${
                      styles.opacity === 1 ? 'ring-1 ring-primary/25' : ''
                    }`}
                  >
                    <div className="absolute inset-x-8 bottom-0 h-24 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent blur-2xl opacity-80 pointer-events-none" />
                    <div className={`relative z-10 flex items-center justify-between mb-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                      <span className="text-[15px] font-semibold leading-tight tracking-tight text-text-main max-w-[80%]">{item.companyName[isArabic ? 'ar' : 'en']}</span>
                      <span className="text-xs text-text-muted">• • •</span>
                    </div>
                    <div className={`relative z-10 mb-4 text-2xl text-primary/20 ${isArabic ? 'text-right' : 'text-left'}`}>
                      <Quote size={42} className={isArabic ? 'rotate-180' : ''} />
                    </div>
                    <div className="relative z-10 flex-1 mb-6">
                      <p
                        className={`text-text-main text-[18px] md:text-[19px] leading-[1.8] tracking-[-0.01em] line-clamp-4 overflow-hidden ${
                          isArabic ? 'text-right' : 'text-left'
                        }`}
                      >
                        {item.testimonial[isArabic ? 'ar' : 'en']}
                      </p>
                    </div>
                    <div
                      className={`relative z-10 pt-4 pb-6 border-t border-gray-100 flex items-center ${
                        isArabic ? 'flex-row-reverse text-right' : 'text-left'
                      }`}
                    >
                      <div className="h-12 w-12 flex-shrink-0 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold">{item.clientName[isArabic ? 'ar' : 'en'].charAt(0)}</div>
                      <div className="flex-1 ml-3">
                        <p className="font-semibold text-[18px] leading-tight text-text-main">{item.clientName[isArabic ? 'ar' : 'en']}</p>
                        <p className="text-sm leading-6 text-text-muted mt-1 max-w-[220px]">{item.clientTitle[isArabic ? 'ar' : 'en']}</p>
                      </div>
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={`${isArabic ? 'mr-auto' : 'ml-auto'} text-primary/80 hover:text-primary transition-colors duration-300 flex-shrink-0`}>
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-6 flex flex-col items-center gap-5">
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev - 1 + length) % length)}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-text-main shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_28px_rgba(140,198,63,0.16)] focus:outline-none focus:ring-2 focus:ring-primary/20"
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
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-text-main shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_28px_rgba(140,198,63,0.16)] focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label={isArabic ? 'السابق' : 'Next testimonial'}
            >
              <span className="absolute inset-0 rounded-full bg-primary opacity-0 scale-90 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {React.createElement(nextIcon, { size: 18, strokeWidth: 2.25 })}
              </span>
            </button>
          </div>

          <div
            className="flex items-center justify-center gap-3"
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
            className="text-xs font-medium tracking-[0.18em] uppercase text-text-muted/70"
            aria-live="polite"
          >
            {String(activeIndex + 1).padStart(2, '0')} / {String(length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </section>
  );
}
