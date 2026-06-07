import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LocalizedLink from '../LocalizedLink';
import { loadAnalytics, disableAnalytics } from '../../utils/analytics';
import {
  getConsent,
  setConsent,
  shouldShowConsentUI,
  OPEN_CONSENT_EVENT
} from '../../utils/consent';
import './CookieConsent.css';

function CookieConsent() {
  const { t } = useTranslation('legal');
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = getConsent();
    if (stored && stored.analytics) {
      loadAnalytics();
    }

    if (shouldShowConsentUI() && !stored) {
      setVisible(true);
    }

    const reopen = () => {
      const current = getConsent();
      setAnalytics(Boolean(current && current.analytics));
      setShowPrefs(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const persist = (analyticsAllowed) => {
    setConsent({ analytics: analyticsAllowed });
    if (analyticsAllowed) {
      loadAnalytics();
    } else {
      disableAnalytics();
    }
    setVisible(false);
    setShowPrefs(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="cc-overlay" role="dialog" aria-modal="true" aria-label={t('consent.title')}>
      <div className="cc-banner">
        {!showPrefs ? (
          <>
            <div className="cc-text">
              <h2>{t('consent.title')}</h2>
              <p>
                {t('consent.description')}{' '}
                <LocalizedLink to="/cookie-policy" className="cc-link">
                  {t('consent.learnMore')}
                </LocalizedLink>
              </p>
            </div>
            <div className="cc-actions">
              <button className="cc-btn cc-btn-ghost" onClick={() => setShowPrefs(true)}>
                {t('consent.managePreferences')}
              </button>
              <button className="cc-btn cc-btn-ghost" onClick={() => persist(false)}>
                {t('consent.rejectAll')}
              </button>
              <button className="cc-btn cc-btn-primary" onClick={() => persist(true)}>
                {t('consent.acceptAll')}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cc-text">
              <h2>{t('consent.preferencesTitle')}</h2>
              <p>{t('consent.preferencesIntro')}</p>

              <div className="cc-category">
                <div className="cc-category-head">
                  <span className="cc-category-title">{t('consent.necessaryTitle')}</span>
                  <span className="cc-always-on">{t('consent.alwaysOn')}</span>
                </div>
                <p className="cc-category-desc">{t('consent.necessaryDescription')}</p>
              </div>

              <div className="cc-category">
                <div className="cc-category-head">
                  <label className="cc-toggle">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                    />
                    <span className="cc-category-title">{t('consent.analyticsTitle')}</span>
                  </label>
                </div>
                <p className="cc-category-desc">{t('consent.analyticsDescription')}</p>
              </div>
            </div>
            <div className="cc-actions">
              <button className="cc-btn cc-btn-ghost" onClick={() => persist(false)}>
                {t('consent.rejectAll')}
              </button>
              <button className="cc-btn cc-btn-primary" onClick={() => persist(analytics)}>
                {t('consent.savePreferences')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CookieConsent;
