import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ServicesSection from '../components/Services/ServicesSection';

function Services() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('services.meta.title')}</title>
        <meta
          name="description"
          content={t('services.meta.description')}
        />
        <link rel="canonical" href="https://portfolio.juliodev.co.uk/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.juliodev.co.uk/services" />
        <meta property="og:title" content="Services | JulioDev — Web Development & Consulting" />
        <meta
          property="og:description"
          content="Freelance software engineering and consulting. Specialised in Supabase, Next.js and React, with enterprise experience in Angular, Java/Spring and CI/CD."
        />
        <meta property="og:image" content="https://portfolio.juliodev.co.uk/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ServicesSection />
    </>
  );
}

export default Services;
