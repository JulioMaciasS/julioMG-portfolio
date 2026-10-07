import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import { caseStudyGraph, JsonLd } from '@/utils/structuredData';
import LosLagosHotel from '@/components/Posts/LosLagosHotel';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'posts.losLagosHotel.meta' });
  return buildMetadata({
    locale,
    path: '/projects/loslagoshotel',
    title: t('title'),
    description: t('description'),
    image: '/images/losLagosHotel/cover.jpg',
    type: 'article',
  });
}

export default async function LosLagosHotelPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const data = caseStudyGraph({
    locale,
    projectId: 'los-lagos-hotel',
    path: '/projects/loslagoshotel',
    title: t('posts.losLagosHotel.meta.title'),
    description: t('posts.losLagosHotel.meta.description'),
    image: '/images/losLagosHotel/cover.jpg',
    projectsLabel: t('nav.projects'),
  });
  return (
    <>
      <JsonLd data={data} />
      <LosLagosHotel />
    </>
  );
}
