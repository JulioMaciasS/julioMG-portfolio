import { ALL_LANGS, DEFAULT_LANG, absoluteUrl } from '@/utils/siteConfig';

const LASTMOD = '2026-06-15';

// Logical paths with their relative crawl priority (mirrors the old static
// sitemap.xml, now generated so it stays in sync with the routes).
const PATHS = [
  { path: '/', priority: 1.0 },
  { path: '/services', priority: 0.9 },
  { path: '/contact-me', priority: 0.9 },
  { path: '/projects', priority: 0.8 },
  { path: '/projects/loslagoshotel', priority: 0.8 },
  { path: '/projects/chatgptlearn', priority: 0.8 },
  { path: '/projects/cineshare', priority: 0.7 },
  { path: '/projects/eugeniabravo', priority: 0.7 },
  { path: '/projects/eugeniabravo-rebuild', priority: 0.7 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/cookie-policy', priority: 0.3 },
];

export default function sitemap() {
  const entries = [];

  for (const { path, priority } of PATHS) {
    const languages = {};
    ALL_LANGS.forEach((l) => {
      languages[l] = absoluteUrl(path, l);
    });
    languages['x-default'] = absoluteUrl(path, DEFAULT_LANG);

    for (const locale of ALL_LANGS) {
      entries.push({
        url: absoluteUrl(path, locale),
        lastModified: LASTMOD,
        changeFrequency: 'monthly',
        priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
