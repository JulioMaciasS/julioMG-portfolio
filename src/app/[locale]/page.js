import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import HeroSection from '@/components/Home/HeroSection';
import Marquee from '@/components/Home/Marquee';
import AboutMe from '@/components/Home/AboutMe';
import FeaturedProject from '@/components/Home/FeaturedProject';
import CardsSection from '@/components/Home/CardsSection';
import Testimonials from '@/components/Home/Testimonials';
import ServicesCta from '@/components/Home/ServicesCta';
import SectionDivider from '@/components/common/SectionDivider';

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

      {/* Flagship: the product I founded */}
      <FeaturedProject id="after-hero" />

      {/* Proof: latest work */}
      <CardsSection />

      {/* Social proof: what clients say */}
      <Testimonials />

      {/* Light about band */}
      <section
        className="relative overflow-hidden w-full bg-[whitesmoke] flex justify-center pt-28 pb-16 sm:pb-24"
      >
        <SectionDivider variant="curve" color="#ffffff" />
        <AboutMe />
      </section>

      {/* The ask: dark services CTA */}
      <ServicesCta />
    </>
  );
}
