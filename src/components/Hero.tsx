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
      className="bg-site-hero relative min-h-[92vh] flex items-center pt-10 lg:pt-16 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 bottom-[-2%] h-[42%] overflow-hidden lg:h-[46%]">
          <motion.div
            className="absolute bottom-[4%] left-0 flex h-full w-[200%]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <defs>
                <linearGradient id="waveBackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#b1d27f" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#9dc364" stopOpacity="0.22" />
                </linearGradient>
              </defs>
              <path
                d="M0,300 C140,240 280,350 420,300 C560,250 700,350 840,305 C980,260 1090,330 1200,290 L1200,420 L0,420 Z"
                fill="url(#waveBackGradient)"
                className="blur-[1px]"
              />
            </svg>
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <path
                d="M0,300 C140,240 280,350 420,300 C560,250 700,350 840,305 C980,260 1090,330 1200,290 L1200,420 L0,420 Z"
                fill="url(#waveBackGradient)"
                className="blur-[1px]"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-[2%] left-0 flex h-[88%] w-[200%]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 27, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <defs>
                <linearGradient id="waveMiddleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#bdd89a" stopOpacity="0.42" />
                  <stop offset="100%" stopColor="#9bc76d" stopOpacity="0.28" />
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
            className="absolute bottom-0 left-0 flex h-[78%] w-[200%]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-1/2">
              <defs>
                <linearGradient id="waveFrontGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c9ddb0" stopOpacity="0.50" />
                  <stop offset="100%" stopColor="#aad06f" stopOpacity="0.34" />
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

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#eef4e3]/20 to-[#f3f6ef]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="absolute right-[-8%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(140,198,63,0.10)_0%,rgba(140,198,63,0.04)_35%,transparent_70%)] blur-3xl lg:block" />

      <div className="section-container relative z-10">
        <div
          className={`
            max-w-[760px]
            pt-8 lg:pt-0
            ${isArabic ? 'mr-auto text-center md:text-right' : 'ml-0 text-center md:text-left'}
          `}
        >

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
            className="text-[#17181c] text-[52px] sm:text-[64px] lg:text-[84px] font-bold leading-[0.95] tracking-[-0.05em] mb-6 max-w-[820px]"
          >
            <span className="block text-text-main">
              {t.hero.titleLine1}
            </span>
            <span className="relative mt-1 block text-primary">
              {t.hero.titleLine2}
              <span className="absolute left-0 bottom-[-10px] h-[10px] w-[58%] rounded-full bg-primary/18 blur-xl" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#7c7f87] text-[17px] sm:text-[19px] leading-[1.8] max-w-[620px] mb-7"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`mt-2 flex justify-center ${isArabic ? 'md:justify-end' : 'md:justify-start'}`}
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
