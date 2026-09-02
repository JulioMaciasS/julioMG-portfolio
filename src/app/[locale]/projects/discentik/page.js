import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
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
    image: '/images/discentik/cover.png',
    type: 'article',
  });
}

export default function DiscentikPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <Discentik />;
}
