import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import './i18n';
import './i18n/rtl.css';

// Self-hosted fonts (replaces Google Fonts CDN) to avoid sending the visitor's
// IP to Google before they consent — a known GDPR issue in the EU.
// Body font.
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
// Display / heading / brand-wordmark font.
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <HelmetProvider>
      <App/>
    </HelmetProvider>,
    rootElement
  );
} else {
  ReactDOM.render(
    <HelmetProvider>
      <App/>
    </HelmetProvider>,
    rootElement
  );
}
