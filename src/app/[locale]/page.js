import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import HeroSection from '@/components/Home/HeroSection';
import Marquee from '@/components/Home/Marquee';
import AboutMe from '@/components/Home/AboutMe';
import CardsSection from '@/components/Home/CardsSection';
import ServicesCta from '@/components/Home/ServicesCta';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'home.meta' });
  return buildMetadata({
    locale,
    path: '/',
    title: t('title'),
    description: t('description'),
    image: '/og-image.png',
  });
}

export default function HomePage({ params: { locale } }) {
  setRequestLocale(locale);
  return (
    <>
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

      {/* Proof: latest work */}
      <CardsSection />

      {/* The ask: dark services CTA */}
      <ServicesCta />
    </>
  );
}
