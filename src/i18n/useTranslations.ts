import { useLanguage } from './useLanguage';
import { es, en } from './translations';
import type { TranslationKey } from './translations';
import type { Locale } from './config';

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { es, en };

export function useTranslations() {
  const { locale, setLanguage } = useLanguage();

  function t(key: TranslationKey): string {
    return dictionaries[locale][key] ?? key;
  }

  return { t, locale, setLanguage };
}
