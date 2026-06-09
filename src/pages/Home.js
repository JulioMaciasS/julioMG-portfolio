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

      {/* Light about band */}
      <section
        id="after-hero"
        className="relative overflow-hidden w-full bg-[whitesmoke] flex justify-center pt-24 pb-16 sm:pb-24"
      >
        <AboutMe />
      </section>

      {/* Proof: latest work (white), gentle curve out of the about band */}
      <CardsSection />

      {/* The ask: diagonal accent cut from the work grid into the dark services CTA */}
      <ServicesCta />
    </>
  );
}

export default Home;
