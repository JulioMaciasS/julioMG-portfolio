import { hasAnalyticsConfigured } from './analytics';

export const CONSENT_KEY = 'cookie-consent';
export const OPEN_CONSENT_EVENT = 'open-cookie-settings';

export function getConsent() {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_KEY));
  } catch (e) {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ ...value, ts: Date.now() })
    );
  } catch (e) {
    /* ignore storage errors */
  }
}

// Re-open the preferences panel from anywhere (e.g. the footer link).
export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

// Only surface the consent UI when there is actually something to consent to
// (analytics configured), or when explicitly forced for previews/demos.
export function shouldShowConsentUI() {
  return hasAnalyticsConfigured() || process.env.REACT_APP_FORCE_CONSENT === 'true';
}
