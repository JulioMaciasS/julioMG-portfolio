import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getDirection } from '@/i18n/config';

// Self-hosted fonts (no third-party requests before consent — the GDPR reason
// they were self-hosted on the CRA site too).
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../globals.css';
import '../../App.css';
import '../../i18n/rtl.css';

import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import FloatingContact from '@/components/Layout/FloatingContact';
import CookieConsent from '@/components/Consent/CookieConsent';
import EasterEgg from '@/components/common/EasterEgg';
import PageviewTracker from '@/components/Analytics/PageviewTracker';

// Person structured data — consolidates the two name forms for Google.
const PERSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Julio Macias Gonzalez',
  alternateName: 'Julio Macias',
  url: 'https://juliomacias.dev',
  sameAs: [
    'https://www.linkedin.com/in/julio-macias-gonzalez-199266282/',
    'https://github.com/JulioMaciasS',
  ],
  jobTitle: 'Software Engineer',
  knowsAbout: ['Web Development', 'React', 'Next.js', 'TypeScript', 'AWS', 'Cloud Architecture'],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  metadataBase: new URL('https://juliomacias.dev'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  themeColor: '#1a1717',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default async function LocaleLayout({ children, params: { locale } }) {
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <FloatingContact />
          <CookieConsent />
          <EasterEgg />
          <PageviewTracker />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_LD) }}
        />
      </body>
    </html>
  );
}
