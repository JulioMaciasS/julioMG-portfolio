import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import './i18n';
import './i18n/rtl.css';

// Self-hosted fonts (replaces Google Fonts CDN) to avoid sending the visitor's
// IP to Google before they consent — a known GDPR issue in the EU.
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/pt-sans/700.css';

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
