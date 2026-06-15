import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import CineShare from '@/components/Posts/CineShare';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'posts.cineshare.meta' });
  return buildMetadata({
    locale,
    path: '/projects/cineshare',
    title: t('title'),
    description: t('description'),
    image: '/images/CineShare.png',
    type: 'article',
  });
}

export default function CineSharePage({ params: { locale } }) {
  setRequestLocale(locale);
  return <CineShare />;
}
