import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Reveal from '../common/Reveal';

// Intl options per unit, so numbers, units and currency read naturally in
// every locale (Arabic digits, "h"/"min" abbreviations, € placement).
const FORMATS = {
  count: {},
  percent: { style: 'unit', unit: 'percent' },
  second: { style: 'unit', unit: 'second', unitDisplay: 'short', maximumFractionDigits: 1 },
  minute: { style: 'unit', unit: 'minute', unitDisplay: 'short' },
  hour: { style: 'unit', unit: 'hour', unitDisplay: 'short' },
  eur: { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 },
};

// Time savings read better as a share ("−99%") than as raw minutes ("−478 min").
const RELATIVE = new Set(['second', 'minute', 'hour']);

/**
 * Example before/after figures for a service, each with a pair of bars and
 * the change. Clearly labelled as examples, not client results.
 */
function ServiceResults({ results, labels }) {
  const t = useTranslations('services.detail.results');
  const locale = useLocale();
  const format = (value, unit, options = {}) =>
    new Intl.NumberFormat(locale, { ...FORMATS[unit], ...options }).format(value);

  return (
    <section className="service-results">
      <div className="services-section-head">
        <h2>{t('heading')}</h2>
        <p>{t('subtitle')}</p>
      </div>
      <div className="service-results-grid">
        {results.map(({ key, before, after, unit }, index) => {
          const max = Math.max(before, after);
          const change = after - before;
          const Trend = change > 0 ? TrendingUp : TrendingDown;
          const shownChange = RELATIVE.has(unit)
            ? format(Math.trunc((change / before) * 100), 'percent', { signDisplay: 'exceptZero' })
            : format(change, unit, { signDisplay: 'exceptZero' });
          return (
            <Reveal key={key} delay={index * 70} className="service-result">
              <h3>{labels[key]}</h3>
              <div className="service-result-change">
                <Trend size={20} aria-hidden="true" />
                {shownChange}
              </div>
              <dl className="service-result-bars">
                {[
                  ['before', before],
                  ['after', after],
                ].map(([which, value]) => (
                  <div key={which} className={`service-result-row is-${which}`}>
                    <dt>{t(which)}</dt>
                    <dd>
                      <span className="service-result-bar">
                        <span style={{ width: `${Math.max(4, (value / max) * 100)}%` }} />
                      </span>
                      <span className="service-result-value">{format(value, unit)}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          );
        })}
      </div>
      <p className="service-results-note">{t('note')}</p>
    </section>
  );
}

export default ServiceResults;
