import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import EugeniaBravoRebuild from '@/components/Posts/EugeniaBravoRebuild';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'posts.eugeniaBravoRebuild.meta' });
  return buildMetadata({
    locale,
    path: '/projects/eugeniabravo-rebuild',
    title: t('title'),
    description: t('description'),
    image: '/images/eugeniaBravoPost/EugeniaBravoIcon.png',
    type: 'article',
  });
}

export default function EugeniaBravoRebuildPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <EugeniaBravoRebuild />;
}
