import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
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

export default function EugeniaBravoPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <EugeniaBravo />;
}
