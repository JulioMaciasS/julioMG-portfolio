import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import { caseStudyGraph, JsonLd } from '@/utils/structuredData';
import Discentik from '@/components/Posts/Discentik';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'posts.discentik.meta' });
  return buildMetadata({
    locale,
    path: '/projects/discentik',
    title: t('title'),
    description: t('description'),
    image: '/images/discentik/practice-canvas.jpg',
    type: 'article',
  });
}

export default async function DiscentikPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const data = caseStudyGraph({
    locale,
    projectId: 'discentik',
    path: '/projects/discentik',
    title: t('posts.discentik.meta.title'),
    description: t('posts.discentik.meta.description'),
    image: '/images/discentik/practice-canvas.jpg',
    projectsLabel: t('nav.projects'),
  });
  return (
    <>
      <JsonLd data={data} />
      <Discentik />
    </>
  );
}
