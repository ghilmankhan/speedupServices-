import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n';
import { clientReviews } from './ClientReviewsData';

export default function ClientReviews() {
  const { isArabic, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const length = clientReviews.length;

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
        setActiveIndex((prev) => (prev + 1) % length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + length) % length);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [length]);

  const cards = useMemo(() => clientReviews, []);

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
        x: direction * 76,
        rotate: direction * 5,
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
      className="relative py-24 bg-bg-light overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Client testimonials"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest font-semibold text-primary">CLIENT TESTIMONIALS</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Trusted by Businesses. Backed by Results.</h2>
          <p className="text-text-muted max-w-2xl mx-auto mt-4">Long-term partnerships built through trust, speed, quality, and measurable outcomes.</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-bg-light/100 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-bg-light/100 to-transparent" />

          <div className="relative flex justify-center items-center gap-6 h-[430px] md:h-[420px] lg:h-[420px]">
            {cards.map((item, idx) => {
              const styles = getCardStyles(idx);
              return (
                <motion.div
                  key={item.id}
                  className={`absolute w-[92%] sm:w-[62%] lg:w-[34%] xl:w-[30%] ${styles.pointerEvents === 'none' ? 'pointer-events-none' : 'pointer-events-auto'}`}
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
                  <div className={`h-full rounded-3xl bg-white border border-gray-100 p-6 md:p-8 ${styles.opacity === 1 ? 'ring-1 ring-primary/30' : ''}`}>
                    <div className="flex items-center justify-between mb-4 text-text-muted">
                      <span className="text-sm font-semibold text-text-main">{item.companyName}</span>
                      <span className="text-xs text-text-muted">• • •</span>
                    </div>
                    <div className="mb-5 text-2xl text-primary/20">
                      <Quote size={28} />
                    </div>
                    <p className="text-text-main text-base md:text-lg leading-relaxed mb-6">{item.testimonial}</p>
                    <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                      <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold">{item.clientName.charAt(0)}</div>
                      <div className="">
                        <p className="font-semibold text-text-main">{item.clientName}</p>
                        <p className="text-sm text-text-muted">{item.clientTitle}</p>
                      </div>
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="ml-auto text-primary hover:text-primary-dark">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev - 1 + length) % length)}
            className="p-3 rounded-full border border-gray-200 bg-white text-text-main shadow-sm hover:bg-primary/10 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % length)}
            className="p-3 rounded-full border border-gray-200 bg-white text-text-main shadow-sm hover:bg-primary/10 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
