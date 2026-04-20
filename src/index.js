import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

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
