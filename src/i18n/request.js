import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Loads the message catalogs for the active locale. The former i18next "legal"
// namespace is nested under a `legal` key, so components call
// useTranslations('legal') and keep their existing key paths.
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  const messages = (await import(`./locales/${locale}.json`)).default;
  const legal = (await import(`./locales/legal/${locale}.json`)).default;

  return {
    locale,
    messages: { ...messages, legal },
  };
});
