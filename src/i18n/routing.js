import { defineRouting } from 'next-intl/routing';

// English lives at the unprefixed root; es/fr/ar are URL-prefixed. This
// `as-needed` strategy reproduces the exact URL scheme the site already has
// indexed, so no live URLs change in the CRA -> Next.js migration.
export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // URLs are the single source of truth for the active language. Disabling
  // automatic detection means "/" always serves English and never redirects a
  // crawler (or visitor) based on cookie/Accept-Language — predictable for SEO.
  // The language switcher still changes locale via explicit navigation.
  localeDetection: false,
});
