import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Linkedin, Menu, X, Phone, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../i18n';
import { useRegionDetection } from '../hooks/useRegionDetection';

interface SocialLinksProps {
  facebookLabel: string;
  linkedinLabel: string;
  iconSize?: number;
}

function SocialLinks({
  facebookLabel,
  linkedinLabel,
  iconSize = 17,
}: SocialLinksProps) {
  return (
    <div className="flex items-center gap-3">
      <motion.a
        href="https://www.facebook.com/profile.php?id=61570820061306"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.06 }}
        className="text-text-muted/80 transition-colors duration-300 hover:text-primary"
        aria-label={facebookLabel}
      >
        <Facebook size={iconSize} />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/speedup-servicesofficial-624326402"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.06 }}
        className="text-text-muted/80 transition-colors duration-300 hover:text-primary"
        aria-label={linkedinLabel}
      >
        <Linkedin size={iconSize} />
      </motion.a>
    </div>
  );
}

interface LanguageSwitchProps {
  language: 'en' | 'ar';
  isArabic: boolean;
  onToggle: () => void;
  ariaLabel: string;
}

function LanguageSwitch({
  language,
  isArabic,
  onToggle,
  ariaLabel,
}: LanguageSwitchProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={isArabic}
      className="relative h-[56px] w-[116px] shrink-0 overflow-hidden rounded-full border border-[#e6e6e1] bg-[#f3f3f1] p-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
      aria-label={ariaLabel}
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
        className="absolute left-[4px] top-[4px] z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.10)]"
        animate={{ x: language === 'ar' ? 60 : 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      >
        <span className="text-[18px] font-semibold text-primary">
          {language.toUpperCase()}
        </span>
      </motion.div>
    </button>
  );
}

interface ContactCTAProps {
  phoneHref: string;
  phoneDisplay: string;
  ariaLabel: string;
  label: string;
  compact?: boolean;
}

function ContactCTA({
  phoneHref,
  phoneDisplay,
  ariaLabel,
  label,
  compact = false,
}: ContactCTAProps) {
  if (compact) {
    return (
      <motion.a
        href={phoneHref}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25 }}
        className="group flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white brand-shadow hover:shadow-[0_10px_28px_rgba(140,198,63,0.3)]"
        aria-label={ariaLabel}
      >
        <Phone size={16} className="transition-transform duration-250 group-hover:translate-x-1" />
        <span>{label}</span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={phoneHref}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="
        group relative overflow-hidden
        flex flex-col items-center gap-1
        rounded-full bg-primary px-6 py-4
        text-base font-semibold text-white
        brand-shadow
        hover:shadow-[0_12px_35px_rgba(140,198,63,0.35)]
      "
      aria-label={ariaLabel}
    >
      <span className="relative z-10 flex items-center gap-2">
        <Phone size={18} className="transition-transform duration-250 group-hover:translate-x-1" />
        <span className="text-sm">{label}</span>
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
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, isArabic, setLanguage, t } = useLanguage();
  const { phoneDisplay, phoneHref } = useRegionDetection();
  const accessibilityText = t.navbar.accessibility;
  const languageSwitchLabel =
    language === 'ar'
      ? accessibilityText.switchToEnglish
      : accessibilityText.switchToArabic;
  const contactAriaLabel = `${t.common.call} ${phoneDisplay}`;

  const logoGroup = (
    <div dir="ltr" className="flex-shrink-0">
      <Logo />
    </div>
  );

  const navGroup = (
    <div className="flex items-center gap-6">
      {t.navbar.links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
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

  return (
    <nav dir={isArabic ? 'rtl' : 'ltr'} className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 md:px-8">
          <div className="hidden w-full items-center justify-between md:flex">
            {!isArabic ? (
              <>
                <div className="flex items-center gap-3 lg:gap-5">
                  {logoGroup}
                  {navGroup}
                </div>
                <div className="flex items-center gap-4 lg:gap-5">
                  <SocialLinks
                    facebookLabel={accessibilityText.facebook}
                    linkedinLabel={accessibilityText.linkedin}
                  />
                  <LanguageSwitch
                    language={language}
                    isArabic={isArabic}
                    onToggle={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                    ariaLabel={languageSwitchLabel}
                  />
                  <ContactCTA
                    phoneHref={phoneHref}
                    phoneDisplay={phoneDisplay}
                    ariaLabel={contactAriaLabel}
                    label={t.common.contactUs}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-4 lg:gap-5">
                  <ContactCTA
                    phoneHref={phoneHref}
                    phoneDisplay={phoneDisplay}
                    ariaLabel={contactAriaLabel}
                    label={t.common.contactUs}
                  />
                  <LanguageSwitch
                    language={language}
                    isArabic={isArabic}
                    onToggle={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                    ariaLabel={languageSwitchLabel}
                  />
                  <SocialLinks
                    facebookLabel={accessibilityText.facebook}
                    linkedinLabel={accessibilityText.linkedin}
                  />
                </div>
                <div className="flex items-center gap-3 lg:gap-5">
                  {navGroup}
                  {logoGroup}
                </div>
              </>
            )}
          </div>

          <div className="flex w-full items-center justify-between md:hidden">
            {logoGroup}

            <div className="flex items-center gap-3">
              <ContactCTA
                compact
                phoneHref={phoneHref}
                phoneDisplay={phoneDisplay}
                ariaLabel={contactAriaLabel}
                label={t.common.callNow}
              />

              <button
                type="button"
                className="p-2 text-text-main"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={accessibilityText.toggleMenu}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation-panel"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
            >
              <div className="px-8 py-6 space-y-6">
                <div className="flex items-center justify-between">
                  <LanguageSwitch
                    language={language}
                    isArabic={isArabic}
                    onToggle={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                    ariaLabel={languageSwitchLabel}
                  />

                  <ContactCTA
                    phoneHref={phoneHref}
                    phoneDisplay={phoneDisplay}
                    ariaLabel={contactAriaLabel}
                    label={t.common.contactUs}
                  />
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
                  <SocialLinks
                    facebookLabel={accessibilityText.facebook}
                    linkedinLabel={accessibilityText.linkedin}
                    iconSize={18}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
