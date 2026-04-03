import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Linkedin, Menu, X, Phone, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../i18n';
import { useRegionDetection } from '../hooks/useRegionDetection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, isArabic, setLanguage, t } = useLanguage();
  const { phoneDisplay, phoneHref } = useRegionDetection();

  const logoGroup = (
    <div dir="ltr" className="flex-shrink-0 w-[180px] md:w-[210px]">
      <Logo />
    </div>
  );

  const navGroup = (
    <div className="hidden md:flex items-center gap-8">
      {t.navbar.links.map((link) => (
        <a 
          key={link.name} 
          href={link.href} 
          className={`group inline-flex items-center gap-1 text-sm transition-colors ${
            link.href === '#quote'
              ? 'font-semibold text-text-main'
              : 'font-medium text-text-muted hover:text-primary'
          } ${isArabic ? 'text-right' : 'text-left'}`}
        >
          <span className="relative">
            {link.name}
            {link.href === '#quote' && (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            )}
          </span>
          {link.href === '#quote' && (
            <ArrowRight className={`h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1 ${isArabic ? 'rotate-180' : ''}`} />
          )}
        </a>
      ))}
    </div>
  );

  const socialGroup = (
    <div className="flex items-center gap-3">
      <motion.a href="https://www.facebook.com/speedupservices" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.06 }} className="text-text-muted/80 hover:text-primary transition-colors duration-300" aria-label="Visit our Facebook page">
        <Facebook size={17} />
      </motion.a>
      <motion.a href="https://www.linkedin.com/company/speedupservices" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.06 }} className="text-text-muted/80 hover:text-primary transition-colors duration-300" aria-label="Visit our LinkedIn page">
        <Linkedin size={17} />
      </motion.a>
    </div>
  );

  const languageGroup = (
    <button
      type="button"
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      role="switch"
      aria-checked={isArabic}
      className="relative shrink-0 w-[116px] h-[56px] rounded-full bg-[#f3f3f1] border border-[#e6e6e1] shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-[4px] overflow-hidden"
      aria-label={language === 'ar' ? 'Switch language to English' : 'التبديل إلى العربية'}
    >
      <div dir="ltr" className="absolute inset-0 flex items-center justify-between px-[18px]">
        <span
          className={`text-[18px] font-semibold transition-colors duration-300 ${
            language === 'en' ? 'text-transparent' : 'text-[#a3a8b3]'
          }`}
        >
          EN
        </span>
        <span
          className={`text-[18px] font-semibold transition-colors duration-300 ${
            language === 'ar' ? 'text-transparent' : 'text-[#a3a8b3]'
          }`}
        >
          AR
        </span>
      </div>

      <motion.div
        className="absolute top-[4px] left-[4px] w-[48px] h-[48px] rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.10)] flex items-center justify-center z-10"
        animate={{ x: language === 'ar' ? 60 : 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      >
        <span className="text-[18px] font-semibold text-primary">
          {language.toUpperCase()}
        </span>
      </motion.div>
    </button>
  );

  const contactGroup = (
    <motion.a
      href={phoneHref}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="
        relative overflow-hidden
        flex flex-col items-center gap-1
        px-6 py-4
        rounded-full
        bg-primary
        text-white
        font-semibold
        text-base
        brand-shadow
        hover:shadow-[0_12px_35px_rgba(140,198,63,0.35)]
      "
      aria-label={`${t.common.call} ${phoneDisplay}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        <Phone size={18} className="transition-transform duration-250 group-hover:translate-x-1" />
        <span className="text-sm">{t.common.contactUs}</span>
      </span>
      <span className="relative z-10 text-xs font-medium opacity-95">
        {phoneDisplay}
      </span>

      <motion.div
        className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ['0%', '250%'] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.a>
  );

  return (
    <nav dir={isArabic ? 'rtl' : 'ltr'} className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="flex items-center justify-center py-3 px-8">
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            {!isArabic ? (
              <>
                {logoGroup}
                {navGroup}
                {socialGroup}
                {languageGroup}
                {contactGroup}
              </>
            ) : (
              <>
                {contactGroup}
                {languageGroup}
                {socialGroup}
                {navGroup}
                {logoGroup}
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <motion.a
              href={phoneHref}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white brand-shadow hover:shadow-[0_10px_28px_rgba(140,198,63,0.3)]"
              aria-label={`${t.common.call} ${phoneDisplay}`}
            >
              <Phone size={16} />
              <span>{t.common.callNow}</span>
            </motion.a>

            <button
              className="p-2 text-text-main"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
            >
              <div className="px-8 py-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                      role="switch"
                      aria-checked={isArabic}
                      className="relative shrink-0 w-[116px] h-[56px] rounded-full bg-[#f3f3f1] border border-[#e6e6e1] shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-[4px] overflow-hidden"
                      aria-label={language === 'ar' ? 'Switch language to English' : 'التبديل إلى العربية'}
                    >
                      <div dir="ltr" className="absolute inset-0 flex items-center justify-between px-[18px]">
                        <span
                          className={`text-[18px] font-semibold transition-colors duration-300 ${
                            language === 'en' ? 'text-transparent' : 'text-[#a3a8b3]'
                          }`}
                        >
                          EN
                        </span>
                        <span
                          className={`text-[18px] font-semibold transition-colors duration-300 ${
                            language === 'ar' ? 'text-transparent' : 'text-[#a3a8b3]'
                          }`}
                        >
                          AR
                        </span>
                      </div>

                      <motion.div
                        className="absolute top-[4px] left-[4px] w-[48px] h-[48px] rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.10)] flex items-center justify-center z-10"
                        animate={{ x: language === 'ar' ? 60 : 0 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                      >
                        <span className="text-[18px] font-semibold text-primary">
                          {language.toUpperCase()}
                        </span>
                      </motion.div>
                    </button>
                  </div>

                  <motion.a
                    href={phoneHref}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="
                      relative overflow-hidden
                      flex flex-col items-center gap-1
                      px-6 py-4
                      rounded-full
                      bg-primary
                      text-white
                      font-semibold
                      text-base
                      brand-shadow
                      hover:shadow-[0_12px_35px_rgba(140,198,63,0.35)]
                    "
                    aria-label={`${t.common.call} ${phoneDisplay}`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Phone size={18} className="transition-transform duration-250 group-hover:translate-x-1" />
                      <span className="text-sm">{t.common.contactUs}</span>
                    </span>
                    <span className="relative z-10 text-xs font-medium opacity-95">
                      {phoneDisplay}
                    </span>

                    <motion.div
                      className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['0%', '250%'] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </motion.a>
                </div>

                {t.navbar.links.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-2 text-lg transition-colors ${
                      link.href === '#quote'
                        ? 'font-semibold text-text-main'
                        : 'font-medium text-text-main hover:text-primary'
                    } ${isArabic ? 'justify-end text-right' : 'text-left'}`}
                  >
                    <span className="relative">
                      {link.name}
                      {link.href === '#quote' && (
                        <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-primary" />
                      )}
                    </span>
                    {link.href === '#quote' && (
                      <ArrowRight className={`h-4 w-4 text-primary ${isArabic ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                ))}
                <div className="flex items-center gap-5 pt-4 border-t border-gray-100">
                  <a href="https://www.facebook.com/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-muted/80 hover:text-primary transition-colors duration-300" aria-label="Visit our Facebook page">
                    <Facebook size={18} />
                  </a>
                  <a href="https://www.linkedin.com/company/speedupservices" target="_blank" rel="noopener noreferrer" className="text-text-muted/80 hover:text-primary transition-colors duration-300" aria-label="Visit our LinkedIn page">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
