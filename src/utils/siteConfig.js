// Central site configuration. Keeping the base URL and language helpers here
// means the upcoming .co.uk -> .com domain move is a one-line change, and all
// canonical/hreflang URLs stay consistent.

export const SITE_URL = 'https://juliomacias.dev';

export const DEFAULT_LANG = 'en';
// Languages that live under a URL prefix (English stays at the unprefixed root).
export const PREFIXED_LANGS = ['es', 'fr', 'ar'];
export const ALL_LANGS = [DEFAULT_LANG, ...PREFIXED_LANGS];

// Normalise an i18next language (e.g. "es-ES") down to a supported code.
export function normalizeLang(lng) {
  const base = (lng || DEFAULT_LANG).split('-')[0];
  return ALL_LANGS.includes(base) ? base : DEFAULT_LANG;
}

// Build a language-aware path: en -> /path, others -> /es/path
export function localizedPath(path, lang) {
  const base = path === '/' ? '' : path;
  if (lang === DEFAULT_LANG) {
    return base || '/';
  }
  return `/${lang}${base}`;
}

// Strip a leading language prefix to get the language-agnostic ("logical") path.
export function stripLangPrefix(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (PREFIXED_LANGS.includes(segments[0])) {
    segments.shift();
  }
  return `/${segments.join('/')}`.replace(/\/$/, '') || '/';
}

export function absoluteUrl(path, lang) {
  return `${SITE_URL}${localizedPath(path, lang)}`;
}
