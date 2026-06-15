import React from 'react';
import { useTranslations } from 'next-intl';
import './Legal.css';

const LAST_UPDATED = '2026-06-07';

const CONTROLLER = {
  controllerName: 'Julio Macias Gonzalez',
  contactEmail: 'julio@juliomacias.dev',
};

const SECTIONS = [
  ['whoTitle', 'whoBody'],
  ['dataTitle', 'dataBody'],
  ['useTitle', 'useBody'],
  ['legalBasisTitle', 'legalBasisBody'],
  ['cookiesTitle', 'cookiesBody'],
  ['thirdPartiesTitle', 'thirdPartiesBody'],
  ['rightsTitle', 'rightsBody'],
  ['retentionTitle', 'retentionBody'],
  ['transfersTitle', 'transfersBody'],
  ['changesTitle', 'changesBody'],
  ['contactTitle', 'contactBody'],
];

function PrivacyPolicy() {
  const t = useTranslations('legal');

  // Jurisdiction is a translated term so it reads naturally in every language.
  const vars = { ...CONTROLLER, jurisdiction: t('privacy.jurisdiction') };

  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>{t('privacy.title')}</h1>
        <p className="legal-updated">{t('privacy.lastUpdated', { date: LAST_UPDATED })}</p>
        <p className="legal-notice">{t('privacy.templateNotice')}</p>
        <p className="legal-intro">{t('privacy.intro', vars)}</p>

        {SECTIONS.map(([titleKey, bodyKey]) => (
          <section className="legal-section" key={titleKey}>
            <h2>{t(`privacy.${titleKey}`)}</h2>
            <p>{t(`privacy.${bodyKey}`, vars)}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

export default PrivacyPolicy;
