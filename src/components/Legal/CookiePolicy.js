import React from 'react';
import { useTranslations } from 'next-intl';
import './Legal.css';

const LAST_UPDATED = '2026-06-07';

function CookiePolicy() {
  const t = useTranslations('legal');

  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>{t('cookie.title')}</h1>
        <p className="legal-updated">{t('cookie.lastUpdated', { date: LAST_UPDATED })}</p>
        <p className="legal-notice">{t('cookie.templateNotice')}</p>
        <p className="legal-intro">{t('cookie.intro')}</p>

        <section className="legal-section">
          <h2>{t('cookie.whatTitle')}</h2>
          <p>{t('cookie.whatBody')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.typesTitle')}</h2>
          <table className="legal-table">
            <thead>
              <tr>
                <th>{t('cookie.tableTool')}</th>
                <th>{t('cookie.tablePurpose')}</th>
                <th>{t('cookie.tableCategory')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('cookie.necessaryTitle')}</td>
                <td>{t('cookie.necessaryBody')}</td>
                <td>{t('cookie.necessaryTitle')}</td>
              </tr>
              <tr>
                <td>PostHog</td>
                <td>{t('cookie.analyticsBody')}</td>
                <td>{t('cookie.analyticsTitle')}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.manageTitle')}</h2>
          <p>{t('cookie.manageBody')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('cookie.changesTitle')}</h2>
          <p>{t('cookie.changesBody')}</p>
        </section>
      </div>
    </main>
  );
}

export default CookiePolicy;
