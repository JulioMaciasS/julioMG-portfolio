import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../Seo/SeoHead';
import '../Post.css';
import ImageSlider from './ImageSlider';

function EugeniaBravoRebuild() {
  const { t } = useTranslation();

  const publicPageImages = [
    {
      src: '/images/eugeniaBravoRebuild/Public 1.png',
      alt: 'EugeniaBravo homepage hero section',
      caption: t('posts.eugeniaBravoRebuild.captions.homePage')
    },
    {
      src: '/images/eugeniaBravoRebuild/Public 2.png',
      alt: 'EugeniaBravo blog listing',
      caption: t('posts.eugeniaBravoRebuild.captions.blog')
    },
    {
      src: '/images/eugeniaBravoRebuild/Public 3.png',
      alt: 'EugeniaBravo services overview',
      caption: t('posts.eugeniaBravoRebuild.captions.services')
    },
    {
      src: '/images/eugeniaBravoRebuild/Public 4.png',
      alt: 'EugeniaBravo contact page',
      caption: t('posts.eugeniaBravoRebuild.captions.contact')
    },
    {
      src: '/images/eugeniaBravoRebuild/Public 5.png',
      alt: 'EugeniaBravo site footer',
      caption: t('posts.eugeniaBravoRebuild.captions.footer')
    }
  ];

  const adminPanelImages = [
    {
      src: '/images/eugeniaBravoRebuild/Admin 1.png',
      alt: 'EugeniaBravo admin dashboard',
      caption: t('posts.eugeniaBravoRebuild.captions.adminDashboard')
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 2.png',
      alt: 'EugeniaBravo admin post management',
      caption: t('posts.eugeniaBravoRebuild.captions.blogPostManagement')
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 3.png',
      alt: 'EugeniaBravo admin categories management',
      caption: t('posts.eugeniaBravoRebuild.captions.categoriesManagement')
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 4.png',
      alt: 'EugeniaBravo admin authors management',
      caption: t('posts.eugeniaBravoRebuild.captions.authorsManagement')
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 5.png',
      alt: 'EugeniaBravo admin security settings',
      caption: t('posts.eugeniaBravoRebuild.captions.securitySettings')
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 6.png',
      alt: 'EugeniaBravo admin add new post',
      caption: t('posts.eugeniaBravoRebuild.captions.addNewPost')
    },
    {
      src: '/images/eugeniaBravoRebuild/Admin 7.png',
      alt: 'EugeniaBravo admin edit post',
      caption: t('posts.eugeniaBravoRebuild.captions.editPost')
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
      <SeoHead
        path="/projects/eugeniabravo-rebuild"
        title={t('posts.eugeniaBravoRebuild.meta.title')}
        description={t('posts.eugeniaBravoRebuild.meta.description')}
        image="https://juliomacias.dev/images/eugeniaBravoPost/EugeniaBravoIcon.png"
        type="article"
      />
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

            <div className='text-left space-y-5'>
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.introHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.eugeniaBravoRebuild.intro')}
                </p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.eugeniaBravoRebuild.goalsHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.eugeniaBravoRebuild.goalsBody')}
                </p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.technologiesHeading')}</h2>
                <p className="text-gray-700 mb-6">
                  {t('posts.eugeniaBravoRebuild.technologiesIntro')}
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

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.eugeniaBravoRebuild.frontendSeoHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.eugeniaBravoRebuild.frontendSeoBody1')}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('posts.eugeniaBravoRebuild.frontendSeoBody2')}
                </p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.eugeniaBravoRebuild.backendHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.eugeniaBravoRebuild.backendBody1')}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('posts.eugeniaBravoRebuild.backendBody2')}
                </p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.eugeniaBravoRebuild.workflowHeading')}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('posts.eugeniaBravoRebuild.workflowBody')}
                </p>
                <ImageSlider
                  images={adminPanelImages}
                  containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                />
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.eugeniaBravoRebuild.publicHeading')}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('posts.eugeniaBravoRebuild.publicBody')}
                </p>
                <ImageSlider
                  images={publicPageImages}
                  containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                />
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.eugeniaBravoRebuild.safeguardsHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.eugeniaBravoRebuild.safeguardsBody1')}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('posts.eugeniaBravoRebuild.safeguardsBody2Prefix')}
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

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.eugeniaBravoRebuild.previousHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.eugeniaBravoRebuild.previousBodyPrefix')}
                  <a className='text-blue-500 hover:underline font-medium' href='/projects/eugeniabravo'>{t('posts.eugeniaBravoRebuild.previousBodyLink')}</a>
                  {t('posts.eugeniaBravoRebuild.previousBodySuffix')}
                </p>
              </section>

              <section className="p-6 rounded-xl bg-blue-50">
                <p className="text-gray-700 leading-relaxed text-center">
                  {t('posts.eugeniaBravoRebuild.ctaPrefix')}
                  <a className='text-blue-500 hover:underline font-medium' href='https://eugeniabravo.com' target='_blank' rel="noopener noreferrer">eugeniabravo.com</a>
                  {t('posts.eugeniaBravoRebuild.ctaMiddle')}
                  <a className='text-blue-500 hover:underline font-medium' href='https://eugeniabravo-public.vercel.app/' target='_blank' rel="noopener noreferrer">eugeniabravo-public.vercel.app</a>
                  {t('posts.eugeniaBravoRebuild.ctaBeforeRepo')}
                  <a className='text-blue-500 hover:underline font-medium' href='https://github.com/JulioMaciasS/eugeniabravo-public' target='_blank' rel="noopener noreferrer">GitHub</a>
                  {t('posts.eugeniaBravoRebuild.ctaSuffix')}
                </p>
              </section>

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

export default EugeniaBravoRebuild;
