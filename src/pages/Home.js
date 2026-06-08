import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/Seo/SeoHead';
import HeroSection from '../components/Home/HeroSection';
import CardsSection from '../components/Home/CardsSection';
import AboutMe from '../components/Home/AboutMe';
import ServicesCta from '../components/Home/ServicesCta';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead
        path="/"
        title={t('home.meta.title')}
        description={t('home.meta.description')}
        image="https://juliomacias.dev/og-image.png"
      />
      <HeroSection />

      {/* Stacked, softly-overlapping panels for smooth section transitions. */}
      <div id="after-hero" className="relative z-10 -mt-8 w-full bg-[whitesmoke] rounded-t-[44px] flex justify-center py-16 sm:py-24">
        <AboutMe />
      </div>

      <div className="relative z-20 -mt-8">
        <ServicesCta />
      </div>

      <div className="relative z-30 -mt-8">
        <CardsSection />
      </div>
    </>
  );
}

export default Home;
