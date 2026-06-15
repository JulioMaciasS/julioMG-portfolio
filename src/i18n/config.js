// Shared, UI-facing language metadata (labels + text direction). Kept separate
// from next-intl routing so client components can import it without pulling in
// server-only modules.
export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
];

export const RTL_LANGUAGES = SUPPORTED_LANGUAGES.filter((l) => l.dir === 'rtl').map(
  (l) => l.code
);

export const getDirection = (lng) =>
  RTL_LANGUAGES.includes((lng || '').split('-')[0]) ? 'rtl' : 'ltr';
