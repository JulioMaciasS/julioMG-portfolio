import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import ChatGPTLearn from '@/components/Posts/ChatGPTLearn';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'posts.chatgptlearn.meta' });
  return buildMetadata({
    locale,
    path: '/projects/chatgptlearn',
    title: t('title'),
    description: t('description'),
    image: '/images/chatgptlearn/cover.png',
    type: 'article',
  });
}

export default function ChatGPTLearnPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <ChatGPTLearn />;
}
