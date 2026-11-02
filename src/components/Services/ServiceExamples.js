import React from 'react';
import { useTranslations } from 'next-intl';
import { EXAMPLE_ICONS } from './serviceIcons';
import Reveal from '../common/Reveal';

/**
 * Everyday tasks a service can take over, each shown as how it works today
 * and how it works afterwards. Rendered only for categories whose copy has
 * page.examples; `afterLabel` there overrides the default "Automated".
 */
function ServiceExamples({ serviceKey, examples }) {
  const t = useTranslations('services.detail.examples');
  const icons = EXAMPLE_ICONS[serviceKey] || [];

  return (
    <section className="service-examples">
      <div className="services-section-head">
        <h2>{examples.heading}</h2>
        <p>{examples.subtitle}</p>
      </div>
      <div className="service-examples-grid">
        {examples.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <Reveal as="article" key={item.title} delay={(index % 3) * 60} className="service-example">
              <div className="service-example-head">
                {Icon && (
                  <span className="service-example-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                )}
                <h3>{item.title}</h3>
              </div>
              <dl>
                <div className="service-example-row is-today">
                  <dt>{t('today')}</dt>
                  <dd>{item.today}</dd>
                </div>
                <div className="service-example-row is-automated">
                  <dt>{examples.afterLabel || t('automated')}</dt>
                  <dd>{item.automated}</dd>
                </div>
              </dl>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceExamples;
