import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../Seo/SeoHead';
import '../Post.css';
import ImageSlider from './ImageSlider';

function EugeniaBravo() {
  const { t } = useTranslation();

  // Define images for the slider
  const adminPanelImages = [
    {
      src: '/images/eugeniaBravoPost/AdminPanel1.png',
      alt: 'Admin Dashboard',
      caption: t('posts.eugeniaBravo.captions.adminDashboard')
    },
    {
      src: '/images/eugeniaBravoPost/AdminPanel2.png',
      alt: 'Blog Posts Management',
      caption: t('posts.eugeniaBravo.captions.blogPostsManagement')
    },
    {
      src: '/images/eugeniaBravoPost/AdminPanel3.png',
      alt: 'Edit Post Page',
      caption: t('posts.eugeniaBravo.captions.editPostPage')
    },
    {
      src: '/images/eugeniaBravoPost/AdminPanel4.png',
      alt: 'Admin Navigation Menu',
      caption: t('posts.eugeniaBravo.captions.adminNavigationMenu')
    }
  ];

  const publicPageImages = [
    {
      src: '/images/eugeniaBravoPost/Public1.png',
      alt: 'Home Page',
      caption: t('posts.eugeniaBravo.captions.homePage')
    },
    {
      src: '/images/eugeniaBravoPost/Public2.png',
      alt: 'Blog',
      caption: t('posts.eugeniaBravo.captions.blog')
    },
    {
      src: '/images/eugeniaBravoPost/Public3.png',
      alt: 'Services',
      caption: t('posts.eugeniaBravo.captions.services')
    },
    {
      src: '/images/eugeniaBravoPost/Public4.png',
      alt: 'Contact Me',
      caption: t('posts.eugeniaBravo.captions.contactMe')
    }
  ];

  // Define technology icons for consistency
  const ICONS = {
    react: '/images/logos/react.png',
    typescript: '/images/logos/typescript.png',
    aws: '/images/logos/aws.png',
    amplify: '/images/logos/amplify.png',
    brevo: '/images/logos/brevo.png'
  };

  return (
    <div>
      <SeoHead
        path="/projects/eugeniabravo"
        title={t('posts.eugeniaBravo.meta.title')}
        description={t('posts.eugeniaBravo.meta.description')}
        image="https://juliomacias.dev/images/eugeniaBravoPost/EugeniaBravoIcon.png"
        type="article"
      />
      <div className='post-container'>
        <div className='white-container'>
          <div className='contents-container max-w-4xl mx-auto'>
            {/* Header with logo */}
            <div className='flex flex-row items-center gap-2 sm:gap-3 mb-6 border-b border-gray-200 pb-4 w-full'>
              <img
                src='/images/eugeniaBravoPost/EugeniaBravoIcon.png'
                className='w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg shadow-md'
                alt='EugeniaBravo logo'
              />
              <h1 className="text-gray-800 mb-0 text-4xl md:text-5xl font-bold" id='top'>EugeniaBravo</h1>
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
              {/* Introduction Section */}
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.introHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.eugeniaBravo.intro')}
                </p>
              </section>

              {/* Technologies Section */}
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.technologiesHeading')}</h2>
                <p className="text-gray-700 mb-6">
                  {t('posts.eugeniaBravo.technologiesIntro')}
                </p>

                {/* Tech stack icons */}
                <div className='flex flex-row flex-wrap gap-6 justify-center items-center w-full text-center mb-6'>
                  {Object.entries({
                    "React": ICONS.react,
                    "TypeScript": ICONS.typescript,
                    "AWS": ICONS.aws,
                    "Amplify": ICONS.amplify,
                    "Brevo": ICONS.brevo
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

              {/* Frontend Section */}
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.frontendHeading')}</h2>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">{t('posts.eugeniaBravo.frontendSubtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.eugeniaBravo.frontendBody1')}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('posts.eugeniaBravo.frontendBody2Prefix')}
                  <a target='_blank' rel="noopener noreferrer" href='https://bolt.new' className='text-blue-500 hover:underline'>bolt.new</a>
                  {t('posts.eugeniaBravo.frontendBody2Suffix')}
                </p>
              </section>

              {/* Backend Section */}
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.backendHeading')}</h2>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">{t('posts.eugeniaBravo.backendSubtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.eugeniaBravo.backendBody')}
                </p>
              </section>

              {/* Website Structure Section */}
              <section className="p-6 rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.eugeniaBravo.structureHeading')}</h2>
                <p className="text-gray-700 mb-6">
                  {t('posts.eugeniaBravo.structureIntro')}
                </p>

                {/* Public Pages Section */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg text-gray-700 mb-2">{t('posts.eugeniaBravo.publicPagesTitle')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('posts.eugeniaBravo.publicPagesBody')}
                  </p>

                  <ImageSlider
                    images={publicPageImages}
                    containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                  />
                </div>

                {/* Admin Pages Section */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-700 mb-2">{t('posts.eugeniaBravo.adminPagesTitle')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('posts.eugeniaBravo.adminPagesBody')}
                  </p>

                  <ImageSlider
                    images={adminPanelImages}
                    containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                  />
                </div>
              </section>

              {/* Call to Action */}
              <section className="p-6 rounded-xl bg-blue-50">
                <p className="text-gray-700 leading-relaxed text-center">
                  {t('posts.eugeniaBravo.ctaPrefix')}
                  <a className='text-blue-500 hover:underline font-medium' href='https://www.eugeniabravo.com/contacto' target='_blank' rel="noopener noreferrer">{t('posts.eugeniaBravo.ctaLink')}</a>
                </p>
              </section>

              {/* Footer */}
              <div className="text-right border-t border-gray-200 pt-4 mt-8">
                <p className="text-gray-600">
                  {t('posts.common.thanks')}
                </p>
                <p className="font-semibold text-gray-800">{t('posts.common.author')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EugeniaBravo;
