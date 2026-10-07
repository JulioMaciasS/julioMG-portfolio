import { SITE_URL, ALL_LANGS, absoluteUrl } from './siteConfig';
import { PROJECTS } from '../data/projects';

// Schema.org structured data (JSON-LD). Search engines and AI assistants read it
// to understand who Julio is, what he offers and what each case study covers.
// Entities share stable @ids so every page links into one graph.

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DISCENTIK_ID = 'https://discentik.com/#organization';

const toAbsolute = (path) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

/** Person, Discentik and WebSite, rendered on every page from the root layout. */
export function siteGraph(locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Julio Macias Gonzalez',
        alternateName: 'Julio Macias',
        url: SITE_URL,
        image: toAbsolute('/images/hero/profile-pic.jpg'),
        email: 'mailto:julio@juliomacias.dev',
        jobTitle: 'Freelance web developer and founder of Discentik',
        description:
          'Freelance web developer and founder of Discentik. Builds websites, online booking, AI automation and web apps for businesses, with industry experience at Citi.',
        address: { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: "Queen's University Belfast" },
        founder: { '@id': DISCENTIK_ID },
        knowsLanguage: ['en', 'es'],
        knowsAbout: [
          'Web development', 'Search engine optimisation (SEO)', 'Generative engine optimisation (GEO)',
          'AI automation', 'Online booking systems', 'Stripe payments', 'Next.js', 'React', 'TypeScript',
          'Supabase', 'PostgreSQL', 'Cloudflare', 'Java', 'Spring Boot',
        ],
        sameAs: ['https://www.linkedin.com/in/julio-macias-gonzalez', 'https://github.com/JulioMaciasS'],
      },
      {
        '@type': 'Organization',
        '@id': DISCENTIK_ID,
        name: 'Discentik',
        url: 'https://discentik.com/',
        logo: toAbsolute('/images/discentik/logo.png'),
        description: 'An AI learning and assessment platform where people learn practical AI skills through guided courses.',
        founder: { '@id': PERSON_ID },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: 'Julio Macias',
        inLanguage: locale,
        availableLanguage: ALL_LANGS,
        publisher: { '@id': PERSON_ID },
      },
    ],
  };
}

/** ProfessionalService with an offer catalogue, plus FAQPage, for /services. */
export function servicesGraph({ locale, title, description, categories, faq }) {
  const url = absoluteUrl('/services', locale);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${url}#service`,
        name: title,
        description,
        url,
        image: toAbsolute('/og-image.png'),
        email: 'julio@juliomacias.dev',
        founder: { '@id': PERSON_ID },
        provider: { '@id': PERSON_ID },
        areaServed: [
          { '@type': 'Country', name: 'Ireland' },
          { '@type': 'Country', name: 'Spain' },
          { '@type': 'Place', name: 'Worldwide (remote)' },
        ],
        availableLanguage: ['English', 'Spanish'],
        inLanguage: locale,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: title,
          itemListElement: categories.map((category) => ({
            '@type': 'OfferCatalog',
            name: category.title,
            description: category.pitch,
            itemListElement: category.offers.map((offer) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: offer.title,
                description: `${offer.description} ${offer.points.join('. ')}.`,
                provider: { '@id': PERSON_ID },
              },
            })),
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        url,
        inLanguage: locale,
        mainEntity: faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}

/** Article + BreadcrumbList for a case study under /projects. */
export function caseStudyGraph({ locale, projectId, path, title, description, image, projectsLabel }) {
  const project = PROJECTS.find((p) => p.id === projectId) || {};
  const url = absoluteUrl(path, locale);
  const article = {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: locale,
    image: image ? toAbsolute(image) : undefined,
    datePublished: project.date,
    dateModified: project.updated || project.date,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    keywords: (project.technologies || []).map((tech) => tech.name).join(', ') || undefined,
  };
  if (project.liveUrl) {
    article.about = { '@type': 'WebSite', url: project.liveUrl, name: project.title };
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      article,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Julio Macias', item: absoluteUrl('/', locale) },
          { '@type': 'ListItem', position: 2, name: projectsLabel, item: absoluteUrl('/projects', locale) },
          { '@type': 'ListItem', position: 3, name: project.title || title, item: url },
        ],
      },
    ],
  };
}

/** Renders a JSON-LD script tag (server component friendly). */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script element early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
