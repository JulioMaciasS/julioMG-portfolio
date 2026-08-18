import React from 'react';
import { useTranslations } from 'next-intl';
import '../Post.css';
import ImageSlider from './ImageSlider';
import PostBreadcrumb from './PostBreadcrumb';
import PostUpdated from './PostUpdated';
import { postUpdatedDate } from '../../data/projects';

function CineSharePost() {
  const t = useTranslations();

  // Use constants for icons with descriptive names
  const ICONS = {
    angular: '/images/logos/angular-v18.png',
    springBoot: '/images/logos/spring-boot.png',
    mysql: '/images/logos/mysql.jpg',
    aws: '/images/logos/aws.png',
    openai: '/images/logos/openai.png'
  };

  // Group images by section for better organization
  const frontendImages = [
    {
      src: '/images/cineSharePost/mainPage.png',
      alt: 'CineShare main page',
      caption: t('posts.cineshare.captions.mainPage')
    },
    {
      src: '/images/cineSharePost/mainLoggedPage.png',
      alt: 'CineShare logged-in interface',
      caption: t('posts.cineshare.captions.mainLoggedPage')
    },
    {
      src: '/images/cineSharePost/moviesRanking.png',
      alt: 'CineShare movies ranking interface',
      caption: t('posts.cineshare.captions.moviesRanking')
    }
  ];

  return (
    <div>
      <div className='post-container'>
        <div className='white-container'>
          <div className='contents-container max-w-4xl mx-auto'>
            <PostBreadcrumb current="CineShare" />
            {/* Header with logo */}
            <div className='flex flex-row items-center gap-2 sm:gap-3 mb-6 border-b border-gray-200 pb-4 w-full'>
              <img
                src='/images/CineShare.png'
                className='w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg shadow-md'
                alt='CineShare logo'
              />
              <h1 className="text-gray-800 mb-0 text-4xl md:text-5xl font-bold" id='top'>CineShare</h1>
            </div>
            <PostUpdated date={postUpdatedDate('cineshare')} />

            <div className='text-left space-y-5'>
              {/* Introduction Section */}
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.introHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.cineshare.intro1')}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('posts.cineshare.intro2')}
                </p>
              </section>

              {/* Technologies Section */}
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.technologiesHeading')}</h2>
                <p className="text-gray-700 mb-6">
                  {t('posts.cineshare.technologiesIntro')}
                </p>

                {/* Tech stack icons */}
                <div className='flex flex-row flex-wrap gap-6 justify-center items-center w-full text-center mb-6'>
                  {Object.entries({
                    "Angular": ICONS.angular,
                    "Spring Boot": ICONS.springBoot,
                    "MySQL": ICONS.mysql,
                    "AWS": ICONS.aws,
                    "OpenAI": ICONS.openai
                  }).map(([name, icon]) => (
                    <div key={name} className=' flex flex-col items-center'>
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
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.frontendHeading')}</h2>
                <div className="mb-6">
                  <h3 className="font-semibold text-lg text-gray-700 mb-2">{t('posts.cineshare.frontendSubtitle')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('posts.cineshare.frontendBody')}
                  </p>
                </div>

                {/* Frontend screenshots carousel */}
                <ImageSlider
                  images={frontendImages}
                  containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                />
              </section>

              {/* Backend Section */}
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.backendHeading')}</h2>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">{t('posts.cineshare.backendSubtitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.cineshare.backendBody')}
                </p>
              </section>

              {/* Cybersecurity Section */}
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.cineshare.securityHeading')}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('posts.cineshare.securityBody')}
                </p>

                <div className='flex justify-center'>
                  <div className='max-w-md transform transition-all duration-300 hover:scale-105'>
                    <img
                      src='/images/cineSharePost/registerPage.png'
                      className='rounded-xl shadow-lg w-full h-auto'
                      alt='Register page showing security implementation'
                    />
                    <p className='text-center mt-3 text-gray-600 italic'>{t('posts.cineshare.securityCaption')}</p>
                  </div>
                </div>
              </section>

              {/* AWS Section */}
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.cineshare.cloudHeading')}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('posts.cineshare.cloudBody')}
                </p>

                <div className='flex justify-center'>
                  <div className='max-w-md transform transition-all duration-300 hover:scale-105'>
                    <img
                      src='/images/cineSharePost/awsTechnologies.png'
                      className='rounded-xl shadow-lg w-full h-auto'
                      alt='AWS technologies diagram'
                    />
                    <p className='text-center mt-3 text-gray-600 italic'>{t('posts.cineshare.cloudCaption')}</p>
                  </div>
                </div>
              </section>

              {/* AI Tools Section */}
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.cineshare.aiHeading')}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('posts.cineshare.aiBody')}
                </p>

                <div className='flex justify-center'>
                  <div className='max-w-md'>
                    <img
                      src='/images/cineSharePost/copilotCover.png'
                      className='rounded-xl shadow-lg w-full h-auto'
                      alt='GitHub Copilot interface'
                    />
                  </div>
                </div>
              </section>

              {/* Conclusion Section */}
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.conclusionHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.cineshare.conclusion1')}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('posts.cineshare.conclusion2')}
                </p>
                <p className="italic text-gray-500 mt-6">{t('posts.cineshare.notAvailable')}</p>
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

export default CineSharePost;
