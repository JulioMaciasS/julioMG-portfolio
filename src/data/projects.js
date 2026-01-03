const BASE_URL = '/images/logos/';

export const PROJECTS = [
  {
    id: 'eugenia-bravo-rebuild',
    title: 'EugeniaBravo Rebuild',
    description: 'Migration to Next.js + Supabase for better SEO and easier ops.',
    imageSrc: './images/eugeniaBravoPost/EugeniaBravoIcon.png',
    link: '/projects/eugeniabravo-rebuild',
    isExternal: false,
    padding: true,
    isNew: true,
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
  },
  {
    id: 'universal-paperclips',
    title: 'Universal Paperclips for iOS',
    description: 'This article contains a guide explaining how I developed a reduced version of the game Universal Paperclips. Some of the key features presented in the app are Google Ads and Microtransactions.',
    imageSrc: './images/img-project.jpg',
    link: 'https://juliotabj.wixsite.com/juliotechguides/post/how-to-create-a-minimalistic-app-with-ads-and-microtransactions-in-ios',
    isExternal: true,
    padding: false,
    technologies: [
      { name: 'Xcode', icon: `${BASE_URL}Xcode.png` },
      { name: 'Swift', icon: `${BASE_URL}swift.png` },
      { name: 'SwiftUI', icon: `${BASE_URL}swiftui.png` }
    ]
  }
];
