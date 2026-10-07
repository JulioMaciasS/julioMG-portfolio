import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import { caseStudyGraph, JsonLd } from '@/utils/structuredData';
import EugeniaBravo from '@/components/Posts/EugeniaBravo';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'posts.eugeniaBravo.meta' });
  return buildMetadata({
    locale,
    path: '/projects/eugeniabravo',
    title: t('title'),
    description: t('description'),
    image: '/images/eugeniaBravoPost/EugeniaBravoIcon.png',
    type: 'article',
  });
}

export default async function EugeniaBravoPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const data = caseStudyGraph({
    locale,
    projectId: 'eugenia-bravo',
    path: '/projects/eugeniabravo',
    title: t('posts.eugeniaBravo.meta.title'),
    description: t('posts.eugeniaBravo.meta.description'),
    image: '/images/eugeniaBravoPost/EugeniaBravoIcon.png',
    projectsLabel: t('nav.projects'),
  });
  return (
    <>
      <JsonLd data={data} />
      <EugeniaBravo />
    </>
  );
}
