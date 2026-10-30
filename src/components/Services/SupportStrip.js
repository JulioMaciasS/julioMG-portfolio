import React from 'react';
import { useTranslations } from 'next-intl';
import { LifeBuoy, CheckCircle2 } from 'lucide-react';

// Advice and maintenance apply to every service, so they get a shared strip
// instead of a page of their own.
function SupportStrip() {
  const t = useTranslations();
  return (
    <section className="services-support">
      <div className="services-support-inner">
        <div className="services-category-icon">
          <LifeBuoy size={24} strokeWidth={1.75} aria-hidden="true" />
        </div>
        <div>
          <h2>{t('services.support.title')}</h2>
          <p>{t('services.support.text')}</p>
          <ul>
            {t.raw('services.support.points').map((point) => (
              <li key={point}>
                <CheckCircle2 size={16} strokeWidth={2.25} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SupportStrip;
