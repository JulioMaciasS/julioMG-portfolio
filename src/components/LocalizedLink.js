import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizedPath, normalizeLang } from '../utils/siteConfig';

/**
 * Drop-in replacement for react-router's <Link> that prefixes the target path
 * with the active language (e.g. "/projects" -> "/es/projects") so navigation
 * keeps the language in the URL. English stays unprefixed.
 */
function LocalizedLink({ to, children, ...rest }) {
  const { i18n } = useTranslation();
  const lang = normalizeLang(i18n.language);
  const target = typeof to === 'string' ? localizedPath(to, lang) : to;

  return (
    <Link to={target} {...rest}>
      {children}
    </Link>
  );
}

export default LocalizedLink;
