import React, { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PREFIXED_LANGS } from '../../utils/siteConfig';
import NotFound from '../../pages/NotFound';

/**
 * Layout for language-prefixed routes (/es, /fr, /ar). It validates the URL
 * language segment and keeps i18next in sync with the URL, so the address bar
 * is the source of truth for the active language.
 */
function LangLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const supported = PREFIXED_LANGS.includes(lang);

  useEffect(() => {
    if (supported && i18n.language.split('-')[0] !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, supported, i18n]);

  if (!supported) {
    return <NotFound />;
  }

  return <Outlet />;
}

export default LangLayout;
