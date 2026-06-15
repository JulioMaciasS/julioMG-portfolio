import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import PrivacyPolicy from '@/components/Legal/PrivacyPolicy';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'legal' });
  return buildMetadata({
    locale,
    path: '/privacy-policy',
    title: t('privacy.meta.title'),
    description: t('privacy.meta.description'),
  });
}

export default function PrivacyPolicyPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <PrivacyPolicy />;
}
