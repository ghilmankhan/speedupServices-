import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import GradientAnimatedButton from './GradientAnimatedButton';
import { useLanguage } from '../i18n';

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { isArabic, t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    setMouse({
      x: (e.clientX / innerWidth - 0.5) * 30,
      y: (e.clientY / innerHeight - 0.5) * 30,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-20 bg-[#f3f4f1]"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f3f4f1_0%,#eef1e9_60%,#e8ece3_100%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[52%] overflow-hidden">
          <motion.div
            className="absolute bottom-0 left-0 flex h-full w-[200%]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <defs>
                <linearGradient id="waveBackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary-light)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path
                d="M0,300 C140,240 280,350 420,300 C560,250 700,350 840,305 C980,260 1090,330 1200,290 L1200,420 L0,420 Z"
                fill="url(#waveBackGradient)"
              />
            </svg>
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <path
                d="M0,300 C140,240 280,350 420,300 C560,250 700,350 840,305 C980,260 1090,330 1200,290 L1200,420 L0,420 Z"
                fill="url(#waveBackGradient)"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 flex h-[90%] w-[200%]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 27, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <defs>
                <linearGradient id="waveMiddleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="var(--color-primary-dark)" stopOpacity="0.24" />
                </linearGradient>
              </defs>
              <path
                d="M0,315 C110,280 250,350 390,320 C530,290 680,365 820,325 C960,285 1080,350 1200,320 L1200,420 L0,420 Z"
                fill="url(#waveMiddleGradient)"
              />
            </svg>
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <path
                d="M0,315 C110,280 250,350 390,320 C530,290 680,365 820,325 C960,285 1080,350 1200,320 L1200,420 L0,420 Z"
                fill="url(#waveMiddleGradient)"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 flex h-[82%] w-[200%]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <defs>
                <linearGradient id="waveFrontGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.42" />
                  <stop offset="100%" stopColor="var(--color-primary-dark)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M0,330 C130,300 260,370 400,340 C540,310 700,385 840,345 C980,305 1100,375 1200,340 L1200,420 L0,420 Z"
                fill="url(#waveFrontGradient)"
              />
            </svg>
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <path
                d="M0,330 C130,300 260,370 400,340 C540,310 700,385 840,345 C980,305 1100,375 1200,340 L1200,420 L0,420 Z"
                fill="url(#waveFrontGradient)"
              />
            </svg>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent via-[#f3f4f1]/65 to-[#f3f4f1]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className={`section-container relative z-10 text-center ${isArabic ? 'md:text-right' : 'md:text-left'}`}>
        <div className="max-w-4xl">

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-[#7c7f87] text-sm uppercase tracking-[0.35em] mb-6 font-medium"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="text-[#17181c] text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.02] tracking-[-0.04em] mb-8 max-w-5xl"
          >
            <span className="block text-text-main">
              {t.hero.titleLine1}
            </span>
            <span className="relative block text-primary">
              {t.hero.titleLine2}
              <span className="absolute left-0 bottom-0 h-[6px] w-full bg-primary/30 blur-md" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#7c7f87] text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`flex justify-center ${isArabic ? 'md:justify-end' : 'md:justify-start'}`}
          >
            <div className="group relative">
              {/* glow behind button */}
              <div className="absolute -inset-1 bg-[linear-gradient(90deg,var(--color-primary)_0%,var(--color-primary-dark)_65%,#111111_100%)] blur-lg opacity-30 group-hover:opacity-60 transition duration-300 rounded-full"></div>

              <GradientAnimatedButton
                onClick={() =>
                  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {t.hero.primaryCta}
                <ArrowRight
                  className={`h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 ${isArabic ? 'rotate-180' : ''}`}
                />
              </GradientAnimatedButton>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
