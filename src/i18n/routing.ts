// Helpers de routing bilingüe. Strings de UI viven en ./ui.ts.
import { defaultLocale, type Locale } from './ui';

/** Build a localized URL. ES lives at root, EN under /en. */
export function localizedPath(lang: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLocale ? clean : `/en${clean}`;
}
