/**
 * Service pages, in display order. Copy lives under services.categories in
 * the locale files (matched by key); slugs stay in English in every locale.
 * `illustration` is the drawn picture of the service used on its card and
 * page hero (see ServiceIllustration). `screenshots` are real ones from the
 * case studies, shown on the service page as examples; their captions reuse
 * the case studies' translated captions. `results` are example before/after
 * figures for a typical small business (labelled as examples on the page,
 * not client results).
 */
const LL = '/images/losLagosHotel/';
const shot = (project, src, caption) => ({ project, src, caption });
const result = (key, before, after, unit) => ({ key, before, after, unit });

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
    results: [
      result('enquiries', 4, 19, 'count'),
      result('loadTime', 6.8, 1.2, 'second'),
      result('bounce', 68, 34, 'percent'),
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
    results: [
      result('directShare', 12, 38, 'percent'),
      result('commission', 2400, 900, 'eur'),
      result('rateHours', 6, 1, 'hour'),
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
    results: [
      result('searchVisitors', 100, 2550, 'count'),
      result('firstPage', 3, 85, 'count'),
      result('indexed', 12, 40, 'count'),
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
    results: [
      result('replyTime', 480, 2, 'minute'),
      result('emailHours', 10, 2, 'hour'),
      result('followUp', 40, 100, 'percent'),
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
    results: [
      result('sheetHours', 8, 1, 'hour'),
      result('errors', 15, 1, 'count'),
      result('reportTime', 240, 1, 'minute'),
    ],
  },
];

export const servicePath = (service) => `/services/${service.slug}`;

export const findService = (slug) => SERVICES.find((service) => service.slug === slug);
