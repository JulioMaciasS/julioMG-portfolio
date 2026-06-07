import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

import legalEn from './locales/legal/en.json';
import legalEs from './locales/legal/es.json';
import legalFr from './locales/legal/fr.json';
import legalAr from './locales/legal/ar.json';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' }
];

export const RTL_LANGUAGES = SUPPORTED_LANGUAGES.filter((l) => l.dir === 'rtl').map(
  (l) => l.code
);

export const getDirection = (lng) =>
  RTL_LANGUAGES.includes((lng || '').split('-')[0]) ? 'rtl' : 'ltr';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en, legal: legalEn },
      es: { translation: es, legal: legalEs },
      fr: { translation: fr, legal: legalFr },
      ar: { translation: ar, legal: legalAr }
    },
    ns: ['translation', 'legal'],
    defaultNS: 'translation',
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    }
  });

// Keep the <html> lang/dir attributes in sync with the active language.
const applyDir = (lng) => {
  const dir = getDirection(lng);
  document.documentElement.setAttribute('lang', (lng || 'en').split('-')[0]);
  document.documentElement.setAttribute('dir', dir);
};

applyDir(i18n.language);
i18n.on('languageChanged', applyDir);

export default i18n;
