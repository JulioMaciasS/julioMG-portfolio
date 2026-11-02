import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import Reveal from '../common/Reveal';

// Intl options per unit, so numbers, percentages and currency read naturally
// in every locale (Arabic digits, % and $ placement, "h" abbreviations).
const FORMATS = {
  percent: { style: 'unit', unit: 'percent', maximumFractionDigits: 2 },
  increase: { style: 'unit', unit: 'percent', maximumFractionDigits: 1, signDisplay: 'always' },
  times: {},
  hour: { style: 'unit', unit: 'hour', unitDisplay: 'short' },
  usd: { style: 'currency', currency: 'USD', maximumFractionDigits: 0 },
};

/**
 * Figures from published studies on what this kind of work changes, each
 * with a link to its source. `labels` holds the sentence for each figure and,
 * for figures with a comparison, `<key>Before` / `<key>After` bar labels.
 */
function ServiceResults({ results, labels }) {
  const t = useTranslations('services.detail.results');
  const locale = useLocale();
  const format = (value, unit) => {
    const text = new Intl.NumberFormat(locale, FORMATS[unit]).format(value);
    return unit === 'times' ? `${text}×` : text;
  };

  return (
    <section className="service-results">
      <div className="services-section-head">
        <h2>{t('heading')}</h2>
        <p>{t('subtitle')}</p>
      </div>
      <div className="service-results-grid">
        {results.map(({ key, value, unit, source, compare }, index) => {
          const max = compare && Math.max(...compare.values);
          return (
            <Reveal key={key} delay={index * 70} className="service-result">
              <div className="service-result-change">
                {unit === 'increase' && <TrendingUp size={20} aria-hidden="true" />}
                {format(value, unit)}
              </div>
              <p className="service-result-label">{labels[key]}</p>
              {compare && (
                <dl className="service-result-bars">
                  {['Before', 'After'].map((which, i) => (
                    <div key={which} className={`service-result-row is-${which.toLowerCase()}`}>
                      <dt>{labels[`${key}${which}`]}</dt>
                      <dd>
                        <span className="service-result-bar">
                          <span style={{ width: `${Math.max(4, (compare.values[i] / max) * 100)}%` }} />
                        </span>
                        <span className="service-result-value">{format(compare.values[i], compare.unit)}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              <a className="service-result-source" href={source.url} target="_blank" rel="noopener noreferrer">
                {t('source', { name: source.name, year: String(source.year) })}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </Reveal>
          );
        })}
      </div>
      <p className="service-results-note">{t('note')}</p>
    </section>
  );
}

export default ServiceResults;
