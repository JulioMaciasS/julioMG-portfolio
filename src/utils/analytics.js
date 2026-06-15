// Analytics via PostHog (product analytics + heatmaps + session replay in one).
// Nothing here runs until the visitor grants consent, and nothing loads unless
// PostHog is configured. The site is safe to deploy without it — analytics stay
// off until you add:
//   NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//   NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com   (optional, EU is default)

import posthog from 'posthog-js';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com';

let loaded = false;

export function hasAnalyticsConfigured() {
  return Boolean(POSTHOG_KEY);
}

export function loadAnalytics() {
  if (loaded || typeof window === 'undefined' || !POSTHOG_KEY) {
    return;
  }
  loaded = true;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    autocapture: true,
    enable_heatmaps: true,
    // GDPR-friendly defaults: don't build person profiles for anonymous
    // visitors, honour Do Not Track, and mask all inputs in session replays.
    person_profiles: 'identified_only',
    respect_dnt: true,
    persistence: 'localStorage+cookie',
    session_recording: {
      maskAllInputs: true
    }
  });
}

// Stop tracking when consent is withdrawn.
export function disableAnalytics() {
  if (!loaded) {
    return;
  }
  try {
    posthog.opt_out_capturing();
    posthog.reset();
  } catch (e) {
    /* ignore */
  }
}

// Capture SPA navigations (the initial pageview is handled by init).
export function capturePageview() {
  if (!loaded) {
    return;
  }
  try {
    posthog.capture('$pageview');
  } catch (e) {
    /* ignore */
  }
}
