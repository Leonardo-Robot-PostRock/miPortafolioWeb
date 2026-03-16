import { useState, useEffect, useCallback } from 'react';
import type { Locale } from './config';
import { defaultLocale } from './config';

const LANG_KEY = 'preferred-language';
const LANG_EVENT = 'language-change';

export function getLanguage(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  return (localStorage.getItem(LANG_KEY) as Locale) || defaultLocale;
}

export function setLanguage(locale: Locale) {
  localStorage.setItem(LANG_KEY, locale);
  document.documentElement.setAttribute('lang', locale);
  updateMetaTagsForLocale(locale);
  window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: locale }));
}

function updateMetaTagsForLocale(locale: Locale) {
  const i18nMeta = document.querySelector('meta[data-i18n-title-en]');
  if (!i18nMeta) return;

  const enTitle = i18nMeta.getAttribute('data-i18n-title-en') || '';
  const enDesc = i18nMeta.getAttribute('data-i18n-desc-en') || '';
  const esTitle = document.querySelector('meta[data-i18n-title-es]')?.getAttribute('data-i18n-title-es') || document.title;
  const esDesc = document.querySelector('meta[name="description"]')?.getAttribute('data-original-desc') || 
    document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

  // Store originals on first run
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && !descMeta.getAttribute('data-original-desc')) {
    descMeta.setAttribute('data-original-desc', descMeta.getAttribute('content') || '');
  }
  if (!document.documentElement.getAttribute('data-original-title')) {
    document.documentElement.setAttribute('data-original-title', document.title);
  }

  const title = locale === 'en' ? enTitle : (document.documentElement.getAttribute('data-original-title') || esTitle);
  const desc = locale === 'en' ? enDesc : (descMeta?.getAttribute('data-original-desc') || esDesc);

  if (title) {
    document.title = title;
    document.querySelectorAll('meta[property="og:title"], meta[property="twitter:title"], meta[name="title"]')
      .forEach(el => el.setAttribute('content', title));
  }
  if (desc) {
    document.querySelectorAll('meta[property="og:description"], meta[property="twitter:description"], meta[name="description"]')
      .forEach(el => el.setAttribute('content', desc));
  }
}

export function useLanguage() {
  const [locale, setLocale] = useState<Locale>(getLanguage);

  useEffect(() => {
    const handler = (e: Event) => {
      setLocale((e as CustomEvent<Locale>).detail);
    };
    window.addEventListener(LANG_EVENT, handler);
    return () => window.removeEventListener(LANG_EVENT, handler);
  }, []);

  const changeLanguage = useCallback((newLocale: Locale) => {
    setLanguage(newLocale);
  }, []);

  return { locale, setLanguage: changeLanguage };
}
