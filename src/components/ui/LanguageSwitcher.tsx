import { useLanguage } from '@/i18n';
import type { Locale } from '@/i18n';

export function LanguageSwitcher() {
  const { locale, setLanguage } = useLanguage();

  const nextLocale: Locale = locale === 'es' ? 'en' : 'es';
  const label = locale === 'es' ? 'EN' : 'ES';

  return (
    <button
      onClick={() => setLanguage(nextLocale)}
      className="type-caption font-semibold text-sm px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors"
      aria-label={`Switch to ${nextLocale === 'es' ? 'Spanish' : 'English'}`}
    >
      {label}
    </button>
  );
}
