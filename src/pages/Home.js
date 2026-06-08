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

      {/* Light intro band — about card */}
      <div id="after-hero" className="w-full bg-[whitesmoke] flex justify-center py-16 sm:py-24 rounded-b-[40px]">
        <AboutMe />
      </div>

      {/* Dark services CTA */}
      <ServicesCta />

      {/* Latest work / blog */}
      <CardsSection />
    </>
  );
}

export default Home;
