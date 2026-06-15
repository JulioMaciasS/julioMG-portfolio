import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import ContactMe from '@/components/ContactMe/ContactMe';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'contact.meta' });
  return buildMetadata({
    locale,
    path: '/contact-me',
    title: t('title'),
    description: t('description'),
    image: '/og-image.png',
  });
}

export default function ContactMePage({ params: { locale } }) {
  setRequestLocale(locale);
  return <ContactMe />;
}
