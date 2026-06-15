import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import ProjectsSection from '@/components/Projects/ProjectsSection';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'projects.meta' });
  return buildMetadata({
    locale,
    path: '/projects',
    title: t('title'),
    description: t('description'),
    image: '/og-image.png',
  });
}

export default function ProjectsPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <ProjectsSection />;
}
