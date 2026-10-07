import React from 'react';
import { useTranslations } from 'next-intl';
import Link from '../LocalizedLink';
import '../Post.css';
import ImageSlider from './ImageSlider';
import PostBreadcrumb from './PostBreadcrumb';
import PostUpdated from './PostUpdated';
import PostSummary from './PostSummary';
import TechTiles from './TechTiles';
import { postUpdatedDate } from '../../data/projects';

const H2 = 'text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2';
const H3 = 'font-semibold text-lg text-gray-800 mb-2';

/**
 * One case study for one client: the 2024 React/Amplify site and its 2025
 * Next.js/Supabase rebuild. Version 1 copy lives under posts.eugeniaBravo,
 * rebuild copy under posts.eugeniaBravoRebuild.
 */
function EugeniaBravo() {
  const t = useTranslations();
  const v1 = (key) => t(`posts.eugeniaBravo.${key}`);
  const rb = (key) => t(`posts.eugeniaBravoRebuild.${key}`);

  const v1PublicImages = [
    { src: '/images/eugeniaBravoPost/Public1.png', alt: 'Home Page', caption: v1('captions.homePage') },
    { src: '/images/eugeniaBravoPost/Public2.png', alt: 'Blog', caption: v1('captions.blog') },
    { src: '/images/eugeniaBravoPost/Public3.png', alt: 'Services', caption: v1('captions.services') },
    { src: '/images/eugeniaBravoPost/Public4.png', alt: 'Contact Me', caption: v1('captions.contactMe') }
  ];

  const v1AdminImages = [
    { src: '/images/eugeniaBravoPost/AdminPanel1.png', alt: 'Admin Dashboard', caption: v1('captions.adminDashboard') },
    { src: '/images/eugeniaBravoPost/AdminPanel2.png', alt: 'Blog Posts Management', caption: v1('captions.blogPostsManagement') },
    { src: '/images/eugeniaBravoPost/AdminPanel3.png', alt: 'Edit Post Page', caption: v1('captions.editPostPage') },
    { src: '/images/eugeniaBravoPost/AdminPanel4.png', alt: 'Admin Navigation Menu', caption: v1('captions.adminNavigationMenu') }
  ];

  const rebuildPublicImages = [
    { src: '/images/eugeniaBravoRebuild/Public 1.png', alt: 'EugeniaBravo homepage hero section', caption: rb('captions.homePage') },
    { src: '/images/eugeniaBravoRebuild/Public 2.png', alt: 'EugeniaBravo blog listing', caption: rb('captions.blog') },
    { src: '/images/eugeniaBravoRebuild/Public 3.png', alt: 'EugeniaBravo services overview', caption: rb('captions.services') },
    { src: '/images/eugeniaBravoRebuild/Public 4.png', alt: 'EugeniaBravo contact page', caption: rb('captions.contact') },
    { src: '/images/eugeniaBravoRebuild/Public 5.png', alt: 'EugeniaBravo site footer', caption: rb('captions.footer') }
  ];

  const rebuildAdminImages = [
    { src: '/images/eugeniaBravoRebuild/Admin 1.png', alt: 'EugeniaBravo admin dashboard', caption: rb('captions.adminDashboard') },
    { src: '/images/eugeniaBravoRebuild/Admin 2.png', alt: 'EugeniaBravo admin post management', caption: rb('captions.blogPostManagement') },
    { src: '/images/eugeniaBravoRebuild/Admin 3.png', alt: 'EugeniaBravo admin categories management', caption: rb('captions.categoriesManagement') },
    { src: '/images/eugeniaBravoRebuild/Admin 4.png', alt: 'EugeniaBravo admin authors management', caption: rb('captions.authorsManagement') },
    { src: '/images/eugeniaBravoRebuild/Admin 5.png', alt: 'EugeniaBravo admin security settings', caption: rb('captions.securitySettings') },
    { src: '/images/eugeniaBravoRebuild/Admin 6.png', alt: 'EugeniaBravo admin add new post', caption: rb('captions.addNewPost') },
    { src: '/images/eugeniaBravoRebuild/Admin 7.png', alt: 'EugeniaBravo admin edit post', caption: rb('captions.editPost') }
  ];

  const slider = (images) => (
    <ImageSlider images={images} containerClassName="max-w-4xl mx-auto p-4 rounded-xl" />
  );

  return (
    <div>
      <div className='post-container'>
        <div className='white-container'>
          <div className='contents-container max-w-4xl mx-auto'>
            <PostBreadcrumb current="Eugenia Bravo" />
            <div className='flex flex-row items-center gap-2 sm:gap-3 mb-6 border-b border-gray-200 pb-4 w-full'>
              <img
                src='/images/eugeniaBravoPost/EugeniaBravoIcon.png'
                className='w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg shadow-md'
                alt='EugeniaBravo logo'
              />
              <h1 className="text-gray-800 mb-0 text-4xl md:text-5xl font-bold" id='top'>Eugenia Bravo</h1>
              <a
                href="https://www.eugeniabravo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
                aria-label="Visit eugeniabravo.com"
              >
                <i className="bi bi-arrow-up-right-square text-2xl"></i>
              </a>
            </div>
            <PostUpdated date={postUpdatedDate('eugenia-bravo')} />
            <PostSummary namespace="eugeniaBravo" />

            <div className='text-left space-y-5'>
              <section className="py-2">
                <h2 className={H2}>{t('posts.common.introHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{v1('intro')}</p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {v1('landingPrefix')}
                  <Link to="/projects/tudivorciointeligente" className='text-blue-500 hover:underline font-medium'>{v1('landingLink')}</Link>.
                </p>
              </section>

              {/* Version 1 (2024) */}
              <section className="py-2">
                <h2 className={H2}>{v1('v1Heading')}</h2>
                <p className="text-gray-700 leading-relaxed">{v1('v1Intro')}</p>
                <p className="text-gray-700 leading-relaxed !mt-4">{v1('technologiesIntro')}</p>
                <TechTiles techs={[['React', 'react.png'], ['TypeScript', 'typescript.png'], ['AWS', 'aws.png'], ['Amplify', 'amplify.png'], ['Brevo', 'brevo.png']]} />

                <h3 className={`${H3} mt-6`}>{t('posts.common.frontendHeading')}: {v1('frontendSubtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">{v1('frontendBody1')}</p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {v1('frontendBody2Prefix')}
                  <a target='_blank' rel="noopener noreferrer" href='https://bolt.new' className='text-blue-500 hover:underline'>bolt.new</a>
                  {v1('frontendBody2Suffix')}
                </p>

                <h3 className={`${H3} mt-6`}>{t('posts.common.backendHeading')}: {v1('backendSubtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">{v1('backendBody')}</p>

                <h3 className={`${H3} mt-6`}>{v1('publicPagesTitle')}</h3>
                <p className="text-gray-700 leading-relaxed !mb-2">{v1('publicPagesBody')}</p>
                {slider(v1PublicImages)}

                <h3 className={`${H3} mt-6`}>{v1('adminPagesTitle')}</h3>
                <p className="text-gray-700 leading-relaxed !mb-2">{v1('adminPagesBody')}</p>
                {slider(v1AdminImages)}
              </section>

              {/* Rebuild (2025) */}
              <section className="py-2">
                <h2 className={H2}>{v1('rebuildHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{rb('intro')}</p>

                <h3 className={`${H3} mt-6`}>{rb('goalsHeading')}</h3>
                <p className="text-gray-700 leading-relaxed">{rb('goalsBody')}</p>
                <p className="text-gray-700 leading-relaxed !mt-4">{rb('technologiesIntro')}</p>
                <TechTiles techs={[['Next.js', 'nextjs.svg'], ['React', 'react.png'], ['TypeScript', 'typescript.png'], ['Supabase', 'supabase.svg']]} />

                <h3 className={`${H3} mt-6`}>{rb('frontendSeoHeading')}</h3>
                <p className="text-gray-700 leading-relaxed">{rb('frontendSeoBody1')}</p>
                <p className="text-gray-700 leading-relaxed !mt-4">{rb('frontendSeoBody2')}</p>

                <h3 className={`${H3} mt-6`}>{rb('backendHeading')}</h3>
                <p className="text-gray-700 leading-relaxed">{rb('backendBody1')}</p>
                <p className="text-gray-700 leading-relaxed !mt-4">{rb('backendBody2')}</p>

                <h3 className={`${H3} mt-6`}>{rb('workflowHeading')}</h3>
                <p className="text-gray-700 leading-relaxed !mb-2">{rb('workflowBody')}</p>
                {slider(rebuildAdminImages)}

                <h3 className={`${H3} mt-6`}>{rb('publicHeading')}</h3>
                <p className="text-gray-700 leading-relaxed !mb-2">{rb('publicBody')}</p>
                {slider(rebuildPublicImages)}

                <h3 className={`${H3} mt-6`}>{rb('safeguardsHeading')}</h3>
                <p className="text-gray-700 leading-relaxed">{rb('safeguardsBody1')}</p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {rb('safeguardsBody2Prefix')}
                  <a className='text-blue-500 hover:underline font-medium' href='https://eugeniabravo-public.vercel.app/' target='_blank' rel="noopener noreferrer">eugeniabravo-public.vercel.app</a>.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-blue-50">
                <p className="text-gray-700 leading-relaxed text-center">
                  {rb('ctaPrefix')}
                  <a className='text-blue-500 hover:underline font-medium' href='https://www.eugeniabravo.com/' target='_blank' rel="noopener noreferrer">eugeniabravo.com</a>
                  {rb('ctaMiddle')}
                  <a className='text-blue-500 hover:underline font-medium' href='https://eugeniabravo-public.vercel.app/' target='_blank' rel="noopener noreferrer">eugeniabravo-public.vercel.app</a>
                  {rb('ctaBeforeRepo')}
                  <a className='text-blue-500 hover:underline font-medium' href='https://github.com/JulioMaciasS/eugeniabravo-public' target='_blank' rel="noopener noreferrer">GitHub</a>
                  {rb('ctaSuffix')}
                </p>
                <p className="text-gray-700 leading-relaxed text-center !mt-3">
                  {v1('ctaPrefix')}
                  <a className='text-blue-500 hover:underline font-medium' href='https://www.eugeniabravo.com/contacto' target='_blank' rel="noopener noreferrer">{v1('ctaLink')}</a>
                </p>
              </section>

              <div className="text-right border-t border-gray-200 pt-4 mt-8">
                <p className="text-gray-600">{t('posts.common.thanks')}</p>
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
