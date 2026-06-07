import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import './i18n';
import './i18n/rtl.css';

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
