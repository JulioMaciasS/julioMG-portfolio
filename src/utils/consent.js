import { hasAnalyticsConfigured } from './analytics';

export const CONSENT_KEY = 'cookie-consent';
export const OPEN_CONSENT_EVENT = 'open-cookie-settings';

// Bump this when the cookie/analytics setup changes to force re-consent.
export const CONSENT_VERSION = 1;
// GDPR best practice: re-ask for consent periodically rather than forever.
const CONSENT_MAX_AGE_DAYS = 180;

export function getConsent() {
  try {
    const stored = JSON.parse(localStorage.getItem(CONSENT_KEY));
    if (!stored) {
      return null;
    }
    // Invalidate stale or outdated consent so the banner is shown again.
    if (stored.v !== CONSENT_VERSION) {
      return null;
    }
    if (stored.ts && Date.now() - stored.ts > CONSENT_MAX_AGE_DAYS * 86400000) {
      return null;
    }
    return stored;
  } catch (e) {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ ...value, v: CONSENT_VERSION, ts: Date.now() })
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
  return hasAnalyticsConfigured() || process.env.NEXT_PUBLIC_FORCE_CONSENT === 'true';
}
