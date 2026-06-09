import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/Seo/SeoHead';
import HeroSection from '../components/Home/HeroSection';
import CardsSection from '../components/Home/CardsSection';
import AboutMe from '../components/Home/AboutMe';
import ServicesCta from '../components/Home/ServicesCta';
import Marquee from '../components/Home/Marquee';

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

      {/* Transition 1 — moving tech ticker out of the hero */}
      <Marquee />

      {/* Clean straight transition from the dark ticker into the light about band */}
      <section
        id="after-hero"
        className="relative overflow-hidden w-full bg-[whitesmoke] flex justify-center pt-24 pb-16 sm:pb-24"
      >
        <AboutMe />
      </section>

      {/* Transition 3 — diagonal accent cut into the dark services band */}
      <ServicesCta />

      {/* Transition 4 — wide curve into the white latest-work section */}
      <CardsSection />
    </>
  );
}

export default Home;
