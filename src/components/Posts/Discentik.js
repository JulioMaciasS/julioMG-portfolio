import React from 'react';
import { useTranslations } from 'next-intl';
import Link from '../LocalizedLink';
import PostBreadcrumb from './PostBreadcrumb';
import PostUpdated from './PostUpdated';
import ImageSlider from './ImageSlider';
import { postUpdatedDate } from '../../data/projects';
import '../Post.css';

function Discentik() {
  const t = useTranslations();

  const ICONS = {
    'Next.js': '/images/logos/nextjs.svg',
    React: '/images/logos/react.png',
    Supabase: '/images/logos/supabase.svg',
    OpenAI: '/images/logos/openai.png',
    Cloudflare: '/images/logos/cloudflare.svg'
  };

  const screenshots = [
    { src: '/images/discentik/quiz.jpg', alt: 'Discentik quiz checking the learner understands the task', caption: t('posts.discentik.captions.quiz') },
    { src: '/images/discentik/ai-feedback.jpg', alt: 'Discentik AI feedback listing requirements met and not met', caption: t('posts.discentik.captions.feedback') },
    { src: '/images/discentik/instructor-builder.jpg', alt: 'Discentik instructor course workspace with modules and stages', caption: t('posts.discentik.captions.builder') },
    { src: '/images/discentik/organisation-progress.jpg', alt: 'Discentik organisation group with a course assignment and member progress', caption: t('posts.discentik.captions.progress') }
  ];

  const featureGroups = t.raw('posts.discentik.featureGroups');

  return (
    <div>
      <div className="post-container">
        <div className="white-container">
          <div className="contents-container max-w-4xl mx-auto">
            <PostBreadcrumb current="Discentik" />
            {/* Header */}
            <div className="mb-6 border-b border-gray-200 pb-4 w-full">
              <div className="flex flex-row items-center gap-3 mb-2">
                <img
                  src="/images/discentik/logo.png"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg shadow-md bg-white"
                  alt="Discentik logo"
                />
                <h1 className="text-gray-800 mb-0 text-4xl md:text-5xl font-bold" id="top">Discentik</h1>
                <a
                  href="https://discentik.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                  aria-label="Visit discentik.com"
                >
                  <i className="bi bi-arrow-up-right-square text-2xl"></i>
                </a>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide bg-green-50 text-green-800 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                  {t('projects.live')}
                </span>
              </div>
              <p className="text-sm text-gray-500">{t('posts.discentik.date')}</p>
            </div>
            <PostUpdated date={postUpdatedDate('discentik')} />

            {/* Cover */}
            <img
              src="/images/discentik/practice-canvas.jpg"
              alt="Discentik course player: a chat panel beside a document canvas"
              className="w-full rounded-xl shadow-md mb-8"
            />

            <div className="text-left space-y-5">
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.introHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('posts.discentik.intro')}</p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.discentik.goalsHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('posts.discentik.goalsBody')}</p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.technologiesHeading')}</h2>
                <p className="text-gray-700 mb-6">{t('posts.discentik.technologiesIntro')}</p>
                <div className="flex flex-row flex-wrap gap-5 justify-center items-start w-full text-center mt-8 mb-4">
                  {Object.entries(ICONS).map(([name, icon]) => (
                    <div key={name} className="flex flex-col items-center">
                      <div className="bg-white p-2.5 rounded-xl shadow-md mb-2 w-16 h-16 flex items-center justify-center">
                        <img src={icon} className="object-contain max-h-full max-w-full rounded-lg" alt={`${name} icon`} />
                      </div>
                      <label className="text-sm text-gray-700 font-medium">{name}</label>
                    </div>
                  ))}
                </div>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.discentik.featuresHeading')}</h2>
                <div className="space-y-6">
                  {featureGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">{group.title}</h3>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                            <span className="mt-1 text-amber-500 font-bold">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="!text-sm !text-gray-500 !mt-5">{t('posts.discentik.paymentsNote')}</p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.discentik.screenshotsHeading')}</h2>
                <ImageSlider images={screenshots} containerClassName="max-w-4xl mx-auto p-4 rounded-xl" />
                <p className="text-sm text-gray-500 text-center">{t('posts.discentik.screenshotsNote')}</p>
              </section>

              <section className="p-6 rounded-xl bg-amber-50">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('posts.discentik.aiHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('posts.discentik.aiBody')}</p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.discentik.outcomeHeading')}</h2>
                <p className="text-gray-700 leading-relaxed !mb-4">{t('posts.discentik.outcomeBody')}</p>
                <Link to="/services" className="text-blue-500 hover:underline font-medium">
                  {t('home.servicesCta.button')} →
                </Link>
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

export default Discentik;
