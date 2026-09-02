import { permanentRedirect } from 'next/navigation';

export default function LegacyChatGPTLearnPage({ params: { locale } }) {
  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  permanentRedirect(`${localePrefix}/projects/discentik`);
}
