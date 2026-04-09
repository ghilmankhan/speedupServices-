import { Language } from './types';

export const LANGUAGE_STORAGE_KEY = 'language';

const MIDDLE_EAST_REGIONS = ['sa', 'ae', 'qa', 'kw', 'bh', 'om', 'jo', 'eg', 'iq', 'lb', 'ps', 'sy', 'ye'];

export const detectDefaultLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage === 'en' || savedLanguage === 'ar') {
    return savedLanguage;
  }

  const browserLocales = [
    window.navigator.language,
    ...(window.navigator.languages || []),
    Intl.DateTimeFormat().resolvedOptions().locale,
  ]
    .filter(Boolean)
    .map(locale => locale.toLowerCase());

  const hasArabicPreference = browserLocales.some(locale => locale.startsWith('ar'));
  const hasMiddleEastRegion = browserLocales.some(locale =>
    MIDDLE_EAST_REGIONS.some(region => locale.includes(`-${region}`) || locale.includes(`_${region}`)),
  );

  return hasArabicPreference || hasMiddleEastRegion ? 'ar' : 'en';
};

