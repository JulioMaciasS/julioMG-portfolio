import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import { caseStudyGraph, JsonLd } from '@/utils/structuredData';
import TuDivorcioInteligente from '@/components/Posts/TuDivorcioInteligente';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'posts.tuDivorcioInteligente.meta' });
  return buildMetadata({
    locale,
    path: '/projects/tudivorciointeligente',
    title: t('title'),
    description: t('description'),
    image: '/images/tuDivorcioInteligente/hero.jpg',
    type: 'article',
  });
}

export default async function TuDivorcioInteligentePage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const data = caseStudyGraph({
    locale,
    projectId: 'tu-divorcio-inteligente',
    path: '/projects/tudivorciointeligente',
    title: t('posts.tuDivorcioInteligente.meta.title'),
    description: t('posts.tuDivorcioInteligente.meta.description'),
    image: '/images/tuDivorcioInteligente/hero.jpg',
    projectsLabel: t('nav.projects'),
  });
  return (
    <>
      <JsonLd data={data} />
      <TuDivorcioInteligente />
    </>
  );
}
