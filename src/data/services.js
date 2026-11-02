/**
 * Service pages, in display order. Copy lives under services.categories in
 * the locale files (matched by key); slugs stay in English in every locale.
 * `illustration` is the drawn picture of the service used on its card and
 * page hero (see ServiceIllustration). `screenshots` are real ones from the
 * case studies, shown on the service page as examples; their captions reuse
 * the case studies' translated captions. `results` are figures from published
 * studies, each linked to its source on the page (industry figures, not
 * client results). `compare` adds a pair of bars when the study gives both
 * sides of the comparison. `testimonials` lists the projects whose client
 * quotes (data/testimonials.js) are shown on the page. `heroShot`, when set,
 * puts a real screenshot in the page hero instead of the drawing.
 */
const LL = '/images/losLagosHotel/';
const shot = (project, src, caption) => ({ project, src, caption });
const result = (key, value, unit, source, compare) => ({ key, value, unit, source, compare });
const source = (name, year, url) => ({ name, year, url });

const DELOITTE = source('Deloitte & 55 for Google', 2020, 'https://web.dev/case-studies/milliseconds-make-millions');
const SITEMINDER = source('SiteMinder Hotel Booking Trends', 2025, 'https://www.siteminder.com/news/siteminder-hotel-booking-trends-2025/');
const REVENUEHERO = source('RevenueHero', 2024, 'https://www.revenuehero.io/resources/lead-response-times-report');
const MICROSOFT = source('Microsoft Work Trend Index', 2023, 'https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work');
const PANKO = source('Panko, University of Hawaii', 2015, 'https://arxiv.org/abs/1602.02601');

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
      result('conversion', 3, 'times', source('Portent', 2022, 'https://www.portent.com/blog/analytics/research-site-speed-hurting-everyone.htm'), { values: [1, 3], unit: 'times' }),
      result('bounce', 32, 'increase', source('Google', 2017, 'https://www.thinkwithgoogle.com/data/page-load-time-statistics/')),
      result('speed', 8.4, 'increase', DELOITTE),
    ],
  },
  {
    key: 'hotels',
    slug: 'cloudbeds-hotels',
    illustration: 'hotels',
    heroShot: shot('los-lagos-hotel', `${LL}web-home-en.jpg`, 'posts.losLagosHotel.captions.home'),
    screenshots: [
      shot('los-lagos-hotel', `${LL}booking-rooms.jpg`, 'posts.losLagosHotel.captions.rooms'),
      shot('los-lagos-hotel', `${LL}web-datepicker.jpg`, 'posts.losLagosHotel.captions.datePicker'),
      shot('los-lagos-hotel', `${LL}ops-fx.jpg`, 'posts.losLagosHotel.captions.opsFx'),
    ],
    testimonials: ['los-lagos-hotel'],
    results: [
      result('bookingValue', 35, 'increase', SITEMINDER, { values: [380, 519], unit: 'usd' }),
      result('directRevenue', 60, 'increase', SITEMINDER),
      result('travelSpeed', 10.1, 'increase', DELOITTE),
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
      result('topResult', 27.6, 'percent', source('Backlinko', 2023, 'https://backlinko.com/google-ctr-stats')),
      result('noTraffic', 96.55, 'percent', source('Ahrefs', 2023, 'https://ahrefs.com/blog/search-traffic-study/')),
      result('aiAnswers', 40, 'increase', source('Aggarwal et al., KDD', 2024, 'https://arxiv.org/abs/2311.09735')),
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
      result('neverReplied', 63.5, 'percent', REVENUEHERO),
      result('replyTime', 29, 'hour', REVENUEHERO),
      result('communication', 57, 'percent', MICROSOFT, { values: [43, 57], unit: 'percent' }),
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
      result('spreadsheets', 94, 'percent', PANKO),
      result('cellErrors', 3.9, 'percent', PANKO),
      result('searching', 62, 'percent', MICROSOFT),
    ],
  },
];

export const servicePath = (service) => `/services/${service.slug}`;

export const findService = (slug) => SERVICES.find((service) => service.slug === slug);
