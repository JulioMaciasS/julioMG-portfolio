import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  ALL_LANGS,
  DEFAULT_LANG,
  absoluteUrl,
  normalizeLang
} from '../../utils/siteConfig';

/**
 * Centralised SEO head for every page. Emits a per-language canonical URL,
 * hreflang alternates for all supported languages (plus x-default), and the
 * Open Graph / Twitter tags.
 *
 * @param {string} path  Language-agnostic logical path, e.g. "/services".
 * @param {string} title Page title (already translated).
 * @param {string} description Meta description (already translated).
 * @param {string} [image] Absolute OG image URL.
 * @param {string} [type] OG type, defaults to "website".
 */
function SeoHead({ path, title, description, image, type = 'website' }) {
  const { i18n } = useTranslation();
  const lang = normalizeLang(i18n.language);
  const canonical = absoluteUrl(path, lang);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {ALL_LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={absoluteUrl(path, l)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl(path, DEFAULT_LANG)} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default SeoHead;
