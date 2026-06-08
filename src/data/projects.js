const BASE_URL = '/images/logos/';

export const PROJECTS = [
  {
    id: 'chatgptlearn',
    title: 'ChatGPTLearn',
    description: 'Final year project. A full-stack AI training platform that helps businesses learn practical ChatGPT workflows.',
    imageSrc: './images/chatgptlearn/cover.png',
    link: '/projects/chatgptlearn',
    isExternal: false,
    padding: false,
    isNew: true,
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
    imageSrc: './images/eugeniaBravoPost/EugeniaBravoIcon.png',
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
    imageSrc: './images/eugeniaBravoPost/EugeniaBravoIcon.png',
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
    imageSrc: './images/CineShare.png',
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
