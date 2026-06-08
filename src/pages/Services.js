import React from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/Seo/SeoHead';
import ServicesSection from '../components/Services/ServicesSection';

function Services() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead
        path="/services"
        title={t('services.meta.title')}
        description={t('services.meta.description')}
        image="https://juliomacias.dev/og-image.png"
      />
      <ServicesSection />
    </>
  );
}

export default Services;
