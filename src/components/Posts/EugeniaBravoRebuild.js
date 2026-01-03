import React from 'react';
import '../Post.css';
import ImageSlider from './ImageSlider';

function EugeniaBravoRebuild() {
  const publicPageImages = [
    {
      src: '/images/eugeniaBravoRebuild/Public 1.png',
      alt: 'EugeniaBravo homepage hero section',
      caption: 'Home Page'
    },
    {
      src: '/images/eugeniaBravoRebuild/Public 2.png',
      alt: 'EugeniaBravo blog listing',
      caption: 'Blog'
    },
    {
      src: '/images/eugeniaBravoRebuild/Public 3.png',
      alt: 'EugeniaBravo services overview',
      caption: 'Services'
    },
    {
      src: '/images/eugeniaBravoRebuild/Public 4.png',
      alt: 'EugeniaBravo contact page',
      caption: 'Contact'
    },
    {
      src: '/images/eugeniaBravoRebuild/Public 5.png',
      alt: 'EugeniaBravo site footer',
      caption: 'Footer'
    }
  ];

  const adminPanelImages = [
    {
      src: '/images/eugeniaBravoRebuild/Admin 1.png',
      alt: 'EugeniaBravo admin dashboard',
      caption: 'Admin Dashboard'
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 2.png',
      alt: 'EugeniaBravo admin post management',
      caption: 'Blog Post Management'
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 3.png',
      alt: 'EugeniaBravo admin categories management',
      caption: 'Categories Management'
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 4.png',
      alt: 'EugeniaBravo admin authors management',
      caption: 'Authors Management'
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 5.png',
      alt: 'EugeniaBravo admin security settings',
      caption: 'Security settings'
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 6.png',
      alt: 'EugeniaBravo admin add new post',
      caption: 'Add new post'
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 7.png',
      alt: 'EugeniaBravo admin edit post',
      caption: 'Edit Post'
    }
  ];

  const ICONS = {
    nextjs: '/images/logos/nextjs.svg',
    react: '/images/logos/react.png',
    typescript: '/images/logos/typescript.png',
    supabase: '/images/logos/supabase.svg'
  };

  return (
    <div>
      <div className='post-container'>
        <div className='white-container'>
          <div className='contents-container max-w-4xl mx-auto'>
            <div className='flex flex-row items-center gap-2 sm:gap-3 mb-6 border-b border-gray-200 pb-4 w-full'>
              <img
                src='/images/eugeniaBravoPost/EugeniaBravoIcon.png'
                className='w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg shadow-md'
                alt='EugeniaBravo logo'
              />
              <h1 className="text-gray-800 mb-0 text-4xl md:text-5xl font-bold" id='top'>EugeniaBravo Rebuild</h1>
              <a
                href="https://eugeniabravo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <i className="bi bi-arrow-up-right-square text-2xl"></i>
              </a>
            </div>

            <div className='text-left space-y-8'>
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  EugeniaBravo evolved from a plain React single page app into a Next.js build to improve SEO, discoverability, and editorial workflows for a content-driven site.
                  The migration also replaced AWS Amplify with Supabase, which is a better fit for smaller projects that still need auth, storage, and a relational database.
                </p>
              </section>

              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Migration Goals</h2>
                <p className="text-gray-700 leading-relaxed">
                  The main goals were to get blog content indexed reliably, improve page performance, and simplify backend operations so the project could stay lean without
                  giving up features like admin tooling, media uploads, and rich content editing.
                </p>
              </section>

              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Technologies</h2>
                <p className="text-gray-700 mb-6">
                  The rebuild centers around Next.js with TypeScript on the frontend and Supabase for the backend and storage.
                </p>
                <div className='flex flex-row flex-wrap gap-6 justify-center items-center w-full text-center mb-6'>
                  {Object.entries({
                    "Next.js": ICONS.nextjs,
                    "React": ICONS.react,
                    "TypeScript": ICONS.typescript,
                    "Supabase": ICONS.supabase
                  }).map(([name, icon]) => (
                    <div key={name} className='flex flex-col items-center transition-transform hover:scale-110'>
                      <div className="bg-white p-3 rounded-xl shadow-md mb-2 w-24 h-24 flex items-center justify-center">
                        <img
                          src={icon}
                          className='object-contain max-h-full max-w-full rounded-lg'
                          alt={`${name} icon`}
                        />
                      </div>
                      <label className='text-gray-700 font-medium'>{name}</label>
                    </div>
                  ))}
                </div>
              </section>

              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Frontend and SEO</h2>
                <p className="text-gray-700 leading-relaxed">
                  Next.js enables server rendering and static generation for the blog, which means crawlers receive full HTML instead of a mostly empty shell.
                  This is a big improvement over plain React for dynamic indexation, because each post can ship complete metadata, canonical tags, and rich previews
                  the moment it is requested.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The build includes sitemaps, robots rules, and per-page metadata so new articles become discoverable quickly.
                  It also improves routing, image optimization, and overall load performance for the public site.
                </p>
              </section>

              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Backend with Supabase</h2>
                <p className="text-gray-700 leading-relaxed">
                  Supabase replaced Amplify to keep the stack lighter and more approachable for a smaller team.
                  With Postgres, built-in auth, and storage in one place, it is easier to maintain than a larger AWS configuration while still providing a robust
                  foundation for the admin dashboard and media workflows.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Auth now supports MFA, posts and categories live in relational tables, and images are stored in Supabase Storage with sensible fallbacks.
                </p>
              </section>

              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Content Workflow</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Editors manage posts, categories, and authors from the admin dashboard, with TinyMCE for rich content editing and preview flows before publishing.
                  The blog uses SEO friendly slugs, related posts, and recommended cards to keep readers engaged.
                </p>
                <ImageSlider
                  images={adminPanelImages}
                  containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                />
              </section>

              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Public Experience</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The public site combines a marketing funnel with a blog that is easy to browse and fast to load.
                  Services, testimonials, FAQ, and contact pages are all built with the same SEO friendly foundation.
                </p>
                <ImageSlider
                  images={publicPageImages}
                  containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                />
              </section>

              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Demo Build Safeguards</h2>
                <p className="text-gray-700 leading-relaxed">
                  The demo branch ships without secrets, runs on in-memory fixtures, and disables writes so reviewers can explore the UI safely.
                  Analytics and cookie tooling are gated behind environment flags to keep the demo isolated from production.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The public demo is available with admin pages enabled at{' '}
                  <a
                    className='text-blue-500 hover:underline font-medium'
                    href='https://eugeniabravo-public.vercel.app/'
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    eugeniabravo-public.vercel.app
                  </a>.
                </p>
              </section>

              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Previous Build</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you want a full breakdown of the original React and Amplify stack, you can read the earlier post{' '}
                  <a className='text-blue-500 hover:underline font-medium' href='/projects/eugeniabravo'>here</a>.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-blue-50">
                <p className="text-gray-700 leading-relaxed text-center">
                  Visit the live site at{' '}
                  <a className='text-blue-500 hover:underline font-medium' href='https://eugeniabravo.com' target='_blank' rel="noopener noreferrer">eugeniabravo.com</a>, explore the demo at{' '}
                  <a className='text-blue-500 hover:underline font-medium' href='https://eugeniabravo-public.vercel.app/' target='_blank' rel="noopener noreferrer">eugeniabravo-public.vercel.app</a>, or browse the repo on{' '}
                  <a className='text-blue-500 hover:underline font-medium' href='https://github.com/JulioMaciasS/eugeniabravo-public' target='_blank' rel="noopener noreferrer">GitHub</a>.
                </p>
              </section>

              <div className="text-right border-t border-gray-200 pt-4 mt-8">
                <p className="text-gray-600">
                  Thank you for reading,
                </p>
                <p className="font-semibold text-gray-800">Julio Macias Gonzalez</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EugeniaBravoRebuild;
