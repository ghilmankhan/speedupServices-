import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { about } from './sections/about';
import { compliance } from './sections/compliance';
import { footer } from './sections/footer';
import { hero } from './sections/hero';
import { industries } from './sections/industries';
import { navbar } from './sections/navbar';
import { quoteForm } from './sections/quoteForm';
import { services } from './sections/services';
import { testimonials } from './sections/testimonials';
import { trustedPartners } from './sections/trustedPartners';
import { whyChooseUs } from './sections/whyChooseUs';
import { detectDefaultLanguage, LANGUAGE_STORAGE_KEY } from './detect';
import { Language } from './types';

const translationSections = [
  navbar,
  hero,
  about,
  trustedPartners,
  testimonials,
  services,
  industries,
  whyChooseUs,
  compliance,
  quoteForm,
  footer,
] as const;

const mergeTranslations = (language: Language) =>
  Object.assign({}, ...translationSections.map(section => section[language]));

export const translations = {
  en: mergeTranslations('en'),
  ar: mergeTranslations('ar'),
} as const;

export type TranslationSchema = typeof translations.en;

interface LanguageContextValue {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => detectDefaultLanguage());

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isArabic: language === 'ar',
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.');
  }

  return context;
}

