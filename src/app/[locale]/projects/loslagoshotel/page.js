import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
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

export default function LosLagosHotelPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <LosLagosHotel />;
}
