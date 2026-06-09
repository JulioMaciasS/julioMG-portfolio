import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../Seo/SeoHead';
import Link from '../LocalizedLink';
import PostBreadcrumb from './PostBreadcrumb';
import '../Post.css';

function ChatGPTLearn() {
  const { t } = useTranslation();

  const ICONS = {
    'Next.js': '/images/logos/nextjs.svg',
    React: '/images/logos/react.png',
    Supabase: '/images/logos/supabase.svg',
    OpenAI: '/images/logos/openai.png'
  };

  const features = [
    t('posts.chatgptlearn.feature1'),
    t('posts.chatgptlearn.feature2'),
    t('posts.chatgptlearn.feature3'),
    t('posts.chatgptlearn.feature4')
  ];

  return (
    <div>
      <SeoHead
        path="/projects/chatgptlearn"
        title={t('posts.chatgptlearn.meta.title')}
        description={t('posts.chatgptlearn.meta.description')}
        image="https://juliomacias.dev/images/chatgptlearn/cover.png"
        type="article"
      />
      <div className="post-container">
        <div className="white-container">
          <div className="contents-container max-w-4xl mx-auto">
            <PostBreadcrumb current="ChatGPTLearn" />
            {/* Header */}
            <div className="mb-6 border-b border-gray-200 pb-4 w-full">
              <div className="flex flex-row items-center gap-3 mb-2">
                <h1 className="text-gray-800 mb-0 text-4xl md:text-5xl font-bold" id="top">ChatGPTLearn</h1>
                <span className="text-xs font-semibold uppercase tracking-wide bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                  {t('projects.new')}
                </span>
              </div>
              <p className="text-sm text-gray-500">{t('posts.chatgptlearn.date')}</p>
            </div>

            {/* Cover */}
            <img
              src="/images/chatgptlearn/cover.png"
              alt="ChatGPTLearn, AI training platform"
              className="w-full rounded-xl shadow-md mb-8"
            />

            <div className="text-left space-y-5">
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.introHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('posts.chatgptlearn.intro')}</p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.chatgptlearn.goalsHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('posts.chatgptlearn.goalsBody')}</p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.technologiesHeading')}</h2>
                <p className="text-gray-700 mb-6">{t('posts.chatgptlearn.technologiesIntro')}</p>
                <div className="flex flex-row flex-wrap gap-6 justify-center items-center w-full text-center mb-2">
                  {Object.entries(ICONS).map(([name, icon]) => (
                    <div key={name} className="flex flex-col items-center">
                      <div className="bg-white p-3 rounded-xl shadow-md mb-2 w-24 h-24 flex items-center justify-center">
                        <img src={icon} className="object-contain max-h-full max-w-full rounded-lg" alt={`${name} icon`} />
                      </div>
                      <label className="text-gray-700 font-medium">{name}</label>
                    </div>
                  ))}
                </div>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.chatgptlearn.featuresHeading')}</h2>
                <ul className="space-y-3">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <span className="mt-1 text-amber-500 font-bold">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-amber-50">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('posts.chatgptlearn.aiHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('posts.chatgptlearn.aiBody')}</p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.chatgptlearn.outcomeHeading')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t('posts.chatgptlearn.outcomeBody')}</p>
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

export default ChatGPTLearn;
