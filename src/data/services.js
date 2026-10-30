/**
 * Service pages, in display order. Copy lives under services.categories in
 * the locale files (matched by key); slugs stay in English in every locale.
 * `projects` are the case studies shown as proof on each page.
 */
export const SERVICES = [
  { key: 'websites', slug: 'websites', projects: ['los-lagos-hotel', 'eugenia-bravo'] },
  { key: 'hotels', slug: 'cloudbeds-hotels', projects: ['los-lagos-hotel'] },
  { key: 'visibility', slug: 'seo-ai-visibility', projects: ['eugenia-bravo'] },
  { key: 'automation', slug: 'ai-automation', projects: ['tu-divorcio-inteligente'] },
  { key: 'software', slug: 'custom-software', projects: ['los-lagos-hotel', 'discentik'] },
];

export const servicePath = (service) => `/services/${service.slug}`;

export const findService = (slug) => SERVICES.find((service) => service.slug === slug);
