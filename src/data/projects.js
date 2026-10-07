const BASE_URL = '/images/logos/';

export const PROJECTS = [
  {
    id: 'discentik',
    title: 'Discentik',
    description: 'Final year project. A full-stack AI learning and assessment platform with guided courses, secure AI workflows and automated evaluation.',
    imageSrc: '/images/discentik/practice-canvas.jpg',
    date: '2026-04-15',
    // Still in active development: cards show "Ongoing" and it stays first.
    ongoing: true,
    updated: '2026-10-07',
    link: '/projects/discentik',
    liveUrl: 'https://discentik.com/',
    isExternal: false,
    padding: false,
    technologies: [
      { name: 'Next.js', icon: `${BASE_URL}nextjs.svg` },
      { name: 'React', icon: `${BASE_URL}react.png` },
      { name: 'Supabase', icon: `${BASE_URL}supabase.svg` },
      { name: 'OpenAI', icon: `${BASE_URL}openai.png` },
      { name: 'Cloudflare', icon: `${BASE_URL}cloudflare.svg` }
    ]
  },
  {
    id: 'los-lagos-hotel',
    title: 'Los Lagos Hotel',
    description: 'Two sites for a Patagonian hotel: a bilingual direct-booking website and an internal rate operations tool.',
    imageSrc: '/images/losLagosHotel/cover.jpg',
    date: '2026-07-04',
    updated: '2026-10-07',
    link: '/projects/loslagoshotel',
    liveUrl: 'https://loslagoshotel.com.ar/',
    isExternal: false,
    padding: false,
    isNew: true,
    technologies: [
      { name: 'Next.js', icon: `${BASE_URL}nextjs.svg` },
      { name: 'React', icon: `${BASE_URL}react.png` },
      { name: 'TypeScript', icon: `${BASE_URL}typescript.png` },
      { name: 'Supabase', icon: `${BASE_URL}supabase.svg` },
      { name: 'Cloudflare', icon: `${BASE_URL}cloudflare.svg` }
    ]
  },
  {
    id: 'eugenia-bravo',
    title: 'Eugenia Bravo',
    description: 'Website and legal blog for a family lawyer, built in 2024 and rebuilt in 2025 so her articles are found on Google.',
    imageSrc: '/images/eugeniaBravoPost/EugeniaBravoIcon.png',
    date: '2024-03-01',
    updated: '2026-10-07',
    link: '/projects/eugeniabravo',
    liveUrl: 'https://www.eugeniabravo.com/',
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
    id: 'tu-divorcio-inteligente',
    title: 'Tu Divorcio Inteligente',
    description: 'A landing page for a family lawyer that automatically emails her free divorce guide to every new subscriber.',
    imageSrc: '/images/tuDivorcioInteligente/hero.jpg',
    date: '2024-03-01',
    updated: '2026-10-07',
    link: '/projects/tudivorciointeligente',
    liveUrl: 'https://www.tudivorciointeligente.com/',
    isExternal: false,
    padding: false,
    technologies: [
      { name: 'Next.js', icon: `${BASE_URL}nextjs.svg` },
      { name: 'React', icon: `${BASE_URL}react.png` },
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
