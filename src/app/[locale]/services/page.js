import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import ServicesSection from '@/components/Services/ServicesSection';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'services.meta' });
  return buildMetadata({
    locale,
    path: '/services',
    title: t('title'),
    description: t('description'),
    image: '/og-image.png',
  });
}

export default function ServicesPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <ServicesSection />;
}
