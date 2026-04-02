/**
 * Custom hook to detect user's region and determine appropriate contact phone number
 * Priority: Browser locale → Timezone → Default (Saudi Arabia)
 */

interface RegionConfig {
  isPakistan: boolean;
  phoneDisplay: string;
  phoneHref: string;
}

export const useRegionDetection = (): RegionConfig => {
  if (typeof window === 'undefined') {
    return {
      isPakistan: false,
      phoneDisplay: '+966 582351740',
      phoneHref: 'tel:+966582351740',
    };
  }

  const isPakistanUser = detectPakistanUser();

  return {
    isPakistan: isPakistanUser,
    phoneDisplay: isPakistanUser ? '+92 300 9266635' : '+966 582351740',
    phoneHref: isPakistanUser ? 'tel:+923009266635' : 'tel:+966582351740',
  };
};

/**
 * Internal function to detect if user is in Pakistan
 * Uses priority: browser locale > timezone > default
 */
const detectPakistanUser = (): boolean => {
  // Step 1: Check browser locales (highest priority)
  const browserLocales = [
    window.navigator.language,
    ...(window.navigator.languages || []),
    Intl.DateTimeFormat().resolvedOptions().locale,
  ]
    .filter(Boolean)
    .map(locale => locale.toLowerCase());

  const hasPakistanLocale = browserLocales.some(locale => 
    locale.includes('pk') || 
    locale.includes('ur-pk') || 
    locale.includes('ur_pk') ||
    locale.startsWith('ur')
  );

  if (hasPakistanLocale) {
    return true;
  }

  // Step 2: Check timezone (fallback)
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === 'Asia/Karachi') {
      return true;
    }
  } catch {
    // Timezone detection failed, continue to default
  }

  // Step 3: Default to Saudi Arabia
  return false;
};
