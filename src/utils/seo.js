import { SITE_URL, ALL_LANGS, DEFAULT_LANG, absoluteUrl } from './siteConfig';

const toAbsolute = (image) =>
  image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : undefined;

/**
 * Builds a Next.js Metadata object for a page: localized canonical URL,
 * hreflang alternates for every supported language (+ x-default), and the Open
 * Graph / Twitter tags. Replaces the old react-helmet-async <SeoHead>.
 *
 * @param {string} locale      Active locale (e.g. "es").
 * @param {string} path        Language-agnostic logical path (e.g. "/services").
 * @param {string} title       Page title (already translated).
 * @param {string} description Meta description (already translated).
 * @param {string} [image]     OG image (absolute, or root-relative to SITE_URL).
 * @param {string} [type]      OG type, defaults to "website".
 */
export function buildMetadata({ locale, path, title, description, image, type = 'website' }) {
  const canonical = absoluteUrl(path, locale);

  const languages = {};
  ALL_LANGS.forEach((l) => {
    languages[l] = absoluteUrl(path, l);
  });
  languages['x-default'] = absoluteUrl(path, DEFAULT_LANG);

  const ogImage = toAbsolute(image);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: 'Julio Macias',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
