import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import CookiePolicy from '@/components/Legal/CookiePolicy';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'legal' });
  return buildMetadata({
    locale,
    path: '/cookie-policy',
    title: t('cookie.meta.title'),
    description: t('cookie.meta.description'),
  });
}

export default function CookiePolicyPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <CookiePolicy />;
}
