export type Locale = 'es' | 'en';
export type Translatable = Record<Locale, string>;

export const defaultLocale: Locale = 'es';
export const locales: Locale[] = ['es', 'en'];

export function tr(value: Translatable, locale: Locale): string {
  return value[locale];
}
