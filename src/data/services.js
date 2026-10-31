/**
 * Service pages, in display order. Copy lives under services.categories in
 * the locale files (matched by key); slugs stay in English in every locale.
 * `illustration` is the drawn picture of the service used on its card and
 * page hero (see ServiceIllustration). `screenshots` are real ones from the
 * case studies, shown on the service page as examples; their captions reuse
 * the case studies' translated captions.
 */
const LL = '/images/losLagosHotel/';
const shot = (project, src, caption) => ({ project, src, caption });

export const SERVICES = [
  {
    key: 'websites',
    slug: 'websites',
    illustration: 'websites',
    screenshots: [
      shot('los-lagos-hotel', `${LL}web-home-en.jpg`, 'posts.losLagosHotel.captions.home'),
      shot('tu-divorcio-inteligente', '/images/tuDivorcioInteligente/hero.jpg', 'posts.tuDivorcioInteligente.captions.hero'),
      shot('los-lagos-hotel', `${LL}web-contact.jpg`, 'posts.losLagosHotel.captions.contact'),
    ],
  },
  {
    key: 'hotels',
    slug: 'cloudbeds-hotels',
    illustration: 'hotels',
    screenshots: [
      shot('los-lagos-hotel', `${LL}booking-rooms.jpg`, 'posts.losLagosHotel.captions.rooms'),
      shot('los-lagos-hotel', `${LL}web-datepicker.jpg`, 'posts.losLagosHotel.captions.datePicker'),
      shot('los-lagos-hotel', `${LL}ops-fx.jpg`, 'posts.losLagosHotel.captions.opsFx'),
    ],
  },
  {
    key: 'visibility',
    slug: 'seo-ai-visibility',
    illustration: 'search',
    screenshots: [
      shot('los-lagos-hotel', `${LL}web-language.jpg`, 'posts.losLagosHotel.captions.language'),
      shot('los-lagos-hotel', `${LL}web-location.jpg`, 'posts.losLagosHotel.captions.location'),
    ],
  },
  {
    key: 'automation',
    slug: 'ai-automation',
    illustration: 'automation',
    screenshots: [
      shot('discentik', '/images/discentik/ai-feedback.jpg', 'posts.discentik.captions.feedback'),
      shot('tu-divorcio-inteligente', '/images/tuDivorcioInteligente/guide-form.jpg', 'posts.tuDivorcioInteligente.captions.guideForm'),
      shot('los-lagos-hotel', `${LL}ops-telegram.jpg`, 'posts.losLagosHotel.captions.opsTelegram'),
    ],
  },
  {
    key: 'software',
    slug: 'custom-software',
    illustration: 'software',
    screenshots: [
      shot('los-lagos-hotel', `${LL}ops-calendar.jpg`, 'posts.losLagosHotel.captions.opsCalendar'),
      shot('discentik', '/images/discentik/instructor-builder.jpg', 'posts.discentik.captions.builder'),
      shot('los-lagos-hotel', `${LL}ops-security.jpg`, 'posts.losLagosHotel.captions.opsSecurity'),
    ],
  },
];

export const servicePath = (service) => `/services/${service.slug}`;

export const findService = (slug) => SERVICES.find((service) => service.slug === slug);
