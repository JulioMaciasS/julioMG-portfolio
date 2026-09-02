const BASE_URL = '/images/logos/';

export const PROJECTS = [
  {
    id: 'los-lagos-hotel',
    title: 'Los Lagos Hotel',
    description: 'Two sites for a Patagonian hotel: a bilingual direct-booking website and an internal rate operations tool.',
    imageSrc: '/images/losLagosHotel/cover.jpg',
    date: '2026-07-04',
    updated: '2026-08-18',
    link: '/projects/loslagoshotel',
    isExternal: false,
    padding: false,
    isNew: true,
    technologies: [
      { name: 'Next.js', icon: `${BASE_URL}nextjs.svg` },
      { name: 'React', icon: `${BASE_URL}react.png` },
      { name: 'TypeScript', icon: `${BASE_URL}typescript.png` },
      { name: 'Supabase', icon: `${BASE_URL}supabase.svg` }
    ]
  },
  {
    id: 'discentik',
    title: 'Discentik',
    description: 'Final year project. A full-stack AI learning and assessment platform with guided courses, secure AI workflows and automated evaluation.',
    imageSrc: '/images/discentik/cover.png',
    date: '2026-04-15',
    updated: '2026-09-02',
    link: '/projects/discentik',
    isExternal: false,
    padding: false,
    technologies: [
      { name: 'Next.js', icon: `${BASE_URL}nextjs.svg` },
      { name: 'React', icon: `${BASE_URL}react.png` },
      { name: 'Supabase', icon: `${BASE_URL}supabase.svg` },
      { name: 'OpenAI', icon: `${BASE_URL}openai.png` }
    ]
  },
  {
    id: 'eugenia-bravo-rebuild',
    title: 'EugeniaBravo Rebuild',
    description: 'Migration to Next.js + Supabase for better SEO and easier ops.',
    imageSrc: '/images/eugeniaBravoPost/EugeniaBravoIcon.png',
    date: '2025-11-01',
    link: '/projects/eugeniabravo-rebuild',
    isExternal: false,
    padding: true,
    technologies: [
      { name: 'Next.js', icon: `${BASE_URL}nextjs.svg` },
      { name: 'React', icon: `${BASE_URL}react.png` },
      { name: 'TypeScript', icon: `${BASE_URL}typescript.png` },
      { name: 'Supabase', icon: `${BASE_URL}supabase.svg` }
    ]
  },
  {
    id: 'eugenia-bravo',
    title: 'Eugenia Bravo',
    description: 'Real world project. Blog Website and Landing Page for a lawyer.',
    imageSrc: '/images/eugeniaBravoPost/EugeniaBravoIcon.png',
    date: '2024-03-01',
    link: '/projects/eugeniabravo',
    isExternal: false,
    padding: true,
    technologies: [
      { name: 'React', icon: `${BASE_URL}react.png` },
      { name: 'TypeScript', icon: `${BASE_URL}typescript.png` },
      { name: 'AWS', icon: `${BASE_URL}aws.png` },
      { name: 'Amplify', icon: `${BASE_URL}amplify.png` },
      { name: 'Brevo', icon: `${BASE_URL}brevo.png` }
    ]
  },
  {
    id: 'cineshare',
    title: 'CineShare',
    description: 'Learn more about CineShare\'s development. A social media to discover Amazing Movies and TV Shows!',
    imageSrc: '/images/CineShare.png',
    date: '2023-08-01',
    link: '/projects/cineshare',
    isExternal: false,
    padding: false,
    technologies: [
      { name: 'Angular', icon: `${BASE_URL}angular-v18.png` },
      { name: 'Spring', icon: `${BASE_URL}spring-boot.png` },
      { name: 'MySQL', icon: `${BASE_URL}mysql.jpg` },
      { name: 'AWS', icon: `${BASE_URL}aws.png` }
    ]
  }
];

/** Localised "Mon YYYY" label for a project's ISO date. */
export function formatProjectDate(iso, lang = 'en') {
  if (!iso) return '';
  try {
    return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' }).format(new Date(iso));
  } catch (_) {
    return '';
  }
}

/**
 * Day-precision date for the "last updated" line on a post. Falls back to the
 * published date when a project has never been revised.
 */
export function formatPostDate(iso, lang = 'en') {
  if (!iso) return '';
  try {
    return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
  } catch (_) {
    return '';
  }
}

/** The date a post should advertise: its last revision, else its publication. */
export function postUpdatedDate(id) {
  const project = PROJECTS.find((p) => p.id === id);
  return project ? project.updated || project.date : '';
}
