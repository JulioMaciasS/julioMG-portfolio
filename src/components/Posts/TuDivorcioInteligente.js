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
const IMG = '/images/tuDivorcioInteligente/';

function TuDivorcioInteligente() {
  const t = useTranslations();
  const c = (key) => t(`posts.tuDivorcioInteligente.${key}`);

  const images = [
    { src: `${IMG}hero.jpg`, alt: 'Tu Divorcio Inteligente landing page hero', caption: c('captions.hero') },
    { src: `${IMG}benefits.jpg`, alt: 'What the free guide offers', caption: c('captions.benefits') },
    { src: `${IMG}guide-form.jpg`, alt: 'Brevo signup form for the free guide', caption: c('captions.guideForm') },
    { src: `${IMG}contact.jpg`, alt: 'Contact details and consultation form', caption: c('captions.contact') }
  ];

  return (
    <div>
      <div className='post-container'>
        <div className='white-container'>
          <div className='contents-container max-w-4xl mx-auto'>
            <PostBreadcrumb current="Tu Divorcio Inteligente" />
            <div className='flex flex-row flex-wrap items-center gap-2 sm:gap-3 mb-6 border-b border-gray-200 pb-4 w-full'>
              <h1 className="text-gray-800 mb-0 text-4xl md:text-5xl font-bold" id='top'>Tu Divorcio Inteligente</h1>
              <a
                href="https://www.tudivorciointeligente.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
                aria-label="Visit tudivorciointeligente.com"
              >
                <i className="bi bi-arrow-up-right-square text-2xl"></i>
              </a>
            </div>
            <PostUpdated date={postUpdatedDate('tu-divorcio-inteligente')} />
            <PostSummary namespace="tuDivorcioInteligente" />

            <img
              src={`${IMG}hero.jpg`}
              alt="Tu Divorcio Inteligente landing page"
              className="w-full rounded-xl shadow-md mb-8"
            />

            <div className='text-left space-y-5'>
              <section className="py-2">
                <h2 className={H2}>{t('posts.common.introHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{c('intro')}</p>
              </section>

              <section className="py-2">
                <h2 className={H2}>{c('flowHeading')}</h2>
                <ol className="space-y-3">
                  {t.raw('posts.tuDivorcioInteligente.steps').map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-semibold text-sm flex items-center justify-center">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="py-2">
                <h2 className={H2}>{c('pageHeading')}</h2>
                <p className="text-gray-700 leading-relaxed !mb-2">{c('pageBody')}</p>
                <ImageSlider images={images} containerClassName="max-w-4xl mx-auto p-4 rounded-xl" />
              </section>

              <section className="py-2">
                <h2 className={H2}>{t('posts.common.technologiesHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{c('technologiesIntro')}</p>
                <TechTiles techs={[['Next.js', 'nextjs.svg'], ['React', 'react.png'], ['Brevo', 'brevo.png']]} />
              </section>

              <section className="p-6 rounded-xl bg-blue-50">
                <p className="text-gray-700 leading-relaxed text-center">
                  {c('relatedPrefix')}
                  <Link to="/projects/eugeniabravo" className='text-blue-500 hover:underline font-medium'>{c('relatedLink')}</Link>.
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

export default TuDivorcioInteligente;
