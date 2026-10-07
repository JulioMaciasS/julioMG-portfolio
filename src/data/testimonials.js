/**
 * Client testimonials. Add only real, approved quotes, in the client's own
 * words and original language (quotes are not translated). Shown on /services
 * and on the matching case study; the services section stays hidden while empty.
 *
 * Shape: { quote, name, role: { en, es, fr, ar }, date: 'YYYY-MM', project: '<project id>' }
 */
export const TESTIMONIALS = [
  {
    quote:
      'Julio has worked with us on two key projects for Los Lagos Hotel: our new public website and an internal operations platform integrated with Cloudbeds. Both were built using AWS Amplify and Supabase. He has been very good at understanding our real operational needs and turning them into practical, well-designed solutions. Communication has been easy, he works autonomously, and he responds quickly to feedback and changes. We are very happy with the result and with the way he has handled both projects, and I would gladly recommend him for web development and integration work.',
    name: 'Santiago G.',
    role: {
      en: 'Business Analyst, Los Lagos Hotel',
      es: 'Analista de negocio, Los Lagos Hotel',
      fr: 'Analyste métier, Los Lagos Hotel',
      ar: 'محلل أعمال، Los Lagos Hotel',
    },
    date: '2026-08',
    project: 'los-lagos-hotel',
  },
];
