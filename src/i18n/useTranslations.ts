import { useState, useEffect } from 'react';
import { useLanguage } from './useLanguage';
import { es } from './translations/es';
import type { TranslationKey } from './translations';
import type { Locale } from './config';

type Dictionary = Record<TranslationKey, string>;

// Cache so the EN bundle is only fetched once
const dictCache: Partial<Record<Locale, Dictionary>> = { es };

export function useTranslations() {
  const { locale, setLanguage } = useLanguage();
  const [dict, setDict] = useState<Dictionary>(dictCache[locale] ?? es);

  useEffect(() => {
    if (dictCache[locale]) {
      setDict(dictCache[locale]!);
      return;
    }
    // Lazy-load non-default locale to reduce initial JS bundle
    import('./translations/en').then((mod) => {
      dictCache['en'] = mod.en as Dictionary;
      setDict(dictCache['en']!);
    });
  }, [locale]);

  function t(key: TranslationKey): string {
    return dict[key] ?? key;
  }

  return { t, locale, setLanguage };
}
