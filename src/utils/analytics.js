// Analytics loaders. Nothing here runs until the visitor grants consent, and
// nothing loads unless the corresponding env var is configured. This means the
// site is safe to deploy without IDs — analytics simply stay off until you add:
//   REACT_APP_GA4_ID=G-XXXXXXXXXX
//   REACT_APP_CLARITY_ID=xxxxxxxxxx

const GA_ID = process.env.REACT_APP_GA4_ID;
const CLARITY_ID = process.env.REACT_APP_CLARITY_ID;

let loaded = false;

export function hasAnalyticsConfigured() {
  return Boolean(GA_ID || CLARITY_ID);
}

export function loadAnalytics() {
  if (loaded || typeof document === 'undefined') {
    return;
  }
  loaded = true;

  if (GA_ID) {
    loadGoogleAnalytics();
  }
  if (CLARITY_ID) {
    loadClarity();
  }
}

// Best-effort opt-out when consent is withdrawn. Google Analytics respects the
// `ga-disable-<ID>` global; Microsoft Clarity fully stops on the next page load.
export function disableAnalytics() {
  if (typeof window === 'undefined') {
    return;
  }
  if (GA_ID) {
    window[`ga-disable-${GA_ID}`] = true;
  }
}

function loadGoogleAnalytics() {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
}

function loadClarity() {
  /* eslint-disable */
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);
  /* eslint-enable */
}
