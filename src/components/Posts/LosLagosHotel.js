import React from 'react';
import { useTranslations } from 'next-intl';
import '../Post.css';
import ImageSlider from './ImageSlider';
import PostBreadcrumb from './PostBreadcrumb';

function LosLagosHotel() {
  const t = useTranslations();

  const guestSiteImages = [
    {
      src: '/images/losLagosHotel/web-home-en.jpg',
      alt: 'Los Lagos Hotel homepage hero with the availability search',
      caption: t('posts.losLagosHotel.captions.home')
    },
    {
      src: '/images/losLagosHotel/web-language.jpg',
      alt: 'Los Lagos Hotel homepage with the language picker open on Spanish and English',
      caption: t('posts.losLagosHotel.captions.language')
    },
    {
      src: '/images/losLagosHotel/web-reviews.jpg',
      alt: 'Verified guest reviews section with TripAdvisor, Google and Booking scores',
      caption: t('posts.losLagosHotel.captions.reviews')
    },
    {
      src: '/images/losLagosHotel/web-location.jpg',
      alt: 'Location page with an interactive map of El Calafate and distances',
      caption: t('posts.losLagosHotel.captions.location')
    },
    {
      src: '/images/losLagosHotel/web-contact.jpg',
      alt: 'Contact page with hotel details and enquiry form',
      caption: t('posts.losLagosHotel.captions.contact')
    }
  ];

  const bookingImages = [
    {
      src: '/images/losLagosHotel/booking-rooms.jpg',
      alt: 'Cloudbeds booking engine with the residency toggle and bed-type selector',
      caption: t('posts.losLagosHotel.captions.rooms')
    },
    {
      src: '/images/losLagosHotel/web-datepicker.jpg',
      alt: 'Homepage date picker showing nightly prices',
      caption: t('posts.losLagosHotel.captions.datePicker')
    }
  ];

  const opsImages = [
    {
      src: '/images/losLagosHotel/ops-dashboard.jpg',
      alt: 'Rate Ops dashboard with the latest USD/ARS rate and pending tasks',
      caption: t('posts.losLagosHotel.captions.opsDashboard')
    },
    {
      src: '/images/losLagosHotel/ops-calendar.jpg',
      alt: 'Rate Ops price calendar with USD and ARS prices per day',
      caption: t('posts.losLagosHotel.captions.opsCalendar')
    },
    {
      src: '/images/losLagosHotel/ops-fx.jpg',
      alt: 'Rate Ops exchange-rate update history',
      caption: t('posts.losLagosHotel.captions.opsFx')
    },
    {
      src: '/images/losLagosHotel/ops-help.jpg',
      alt: 'In-app help and documentation for hotel staff',
      caption: t('posts.losLagosHotel.captions.opsHelp')
    },
    {
      src: '/images/losLagosHotel/ops-security.jpg',
      alt: 'Account security page with two-factor authentication and passkeys',
      caption: t('posts.losLagosHotel.captions.opsSecurity')
    },
    {
      src: '/images/losLagosHotel/ops-telegram.jpg',
      alt: 'Telegram group receiving exchange-rate alerts from the ops tool',
      caption: t('posts.losLagosHotel.captions.opsTelegram')
    }
  ];

  const ICONS = {
    'Next.js': '/images/logos/nextjs.svg',
    React: '/images/logos/react.png',
    TypeScript: '/images/logos/typescript.png',
    Supabase: '/images/logos/supabase.svg'
  };

  const bookingFeatures = [
    t('posts.losLagosHotel.bookingFeature1'),
    t('posts.losLagosHotel.bookingFeature2'),
    t('posts.losLagosHotel.bookingFeature3'),
    t('posts.losLagosHotel.bookingFeature4'),
    t('posts.losLagosHotel.bookingFeature5')
  ];

  const opsFeatures = [
    t('posts.losLagosHotel.opsFeature1'),
    t('posts.losLagosHotel.opsFeature2'),
    t('posts.losLagosHotel.opsFeature3'),
    t('posts.losLagosHotel.opsFeature4')
  ];

  return (
    <div>
      <div className='post-container'>
        <div className='white-container'>
          <div className='contents-container max-w-4xl mx-auto'>
            <PostBreadcrumb current="Los Lagos Hotel" />
            <div className='flex flex-row items-center gap-2 sm:gap-3 mb-6 border-b border-gray-200 pb-4 w-full'>
              <img
                src='/images/losLagosHotel/logo.png'
                className='w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg shadow-md bg-white'
                alt='Los Lagos Hotel logo'
              />
              <h1 className="text-gray-800 mb-0 text-4xl md:text-5xl font-bold" id='top'>Los Lagos Hotel</h1>
            </div>

            <div className='text-left space-y-5'>
              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.introHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.losLagosHotel.intro1')}
                </p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {t('posts.losLagosHotel.intro2')}
                </p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.losLagosHotel.briefHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.losLagosHotel.briefBody1')}
                </p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {t('posts.losLagosHotel.briefBody2')}
                </p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.common.technologiesHeading')}</h2>
                <p className="text-gray-700 !mb-6">
                  {t('posts.losLagosHotel.technologiesIntro')}
                </p>
                <div className='flex flex-row flex-wrap gap-6 justify-center items-center w-full text-center mb-6'>
                  {Object.entries(ICONS).map(([name, icon]) => (
                    <div key={name} className='flex flex-col items-center'>
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
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.losLagosHotel.guestSiteHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.losLagosHotel.guestSiteBody1')}
                </p>
                <p className="text-gray-700 leading-relaxed !mt-4 !mb-6">
                  {t('posts.losLagosHotel.guestSiteBody2')}
                </p>
                <ImageSlider
                  images={guestSiteImages}
                  containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                />
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.losLagosHotel.bookingHeading')}</h2>
                <p className="text-gray-700 leading-relaxed !mb-4">
                  {t('posts.losLagosHotel.bookingBody1')}
                </p>
                <ul className="space-y-3 mb-4">
                  {bookingFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <span className="mt-1 text-emerald-500 font-bold">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed !mb-6">
                  {t('posts.losLagosHotel.bookingBody2')}
                </p>
                <ImageSlider
                  images={bookingImages}
                  containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                />
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.losLagosHotel.opsHeading')}</h2>
                <p className="text-gray-700 leading-relaxed !mb-4">
                  {t('posts.losLagosHotel.opsBody1')}
                </p>
                <ul className="space-y-3 mb-4">
                  {opsFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <span className="mt-1 text-emerald-500 font-bold">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.losLagosHotel.opsBody2')}
                </p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {t('posts.losLagosHotel.opsBody3')}
                </p>
                <p className="text-gray-700 leading-relaxed !mt-4 !mb-6">
                  {t('posts.losLagosHotel.opsBody4')}
                </p>
                <ImageSlider
                  images={opsImages}
                  containerClassName="max-w-4xl mx-auto p-4 rounded-xl"
                />
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.losLagosHotel.complianceHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.losLagosHotel.complianceBody1')}
                </p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {t('posts.losLagosHotel.complianceBody2')}
                </p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {t('posts.losLagosHotel.complianceBody3')}
                </p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.losLagosHotel.architectureHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.losLagosHotel.architectureBody1')}
                </p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {t('posts.losLagosHotel.architectureBody2')}
                </p>
              </section>

              <section className="py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">{t('posts.losLagosHotel.outcomeHeading')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('posts.losLagosHotel.outcomeBody1')}
                </p>
                <p className="text-gray-700 leading-relaxed !mt-4">
                  {t('posts.losLagosHotel.outcomeBody2')}
                </p>
              </section>

              <section className="p-6 rounded-xl bg-emerald-50">
                <p className="text-gray-700 leading-relaxed text-center">
                  {t('posts.losLagosHotel.cta')}
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

export default LosLagosHotel;
