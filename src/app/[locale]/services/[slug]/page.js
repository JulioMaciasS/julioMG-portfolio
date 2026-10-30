import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/utils/seo';
import { SERVICES, findService, servicePath } from '@/data/services';
import ServiceDetail from '@/components/Services/ServiceDetail';
import { serviceGraph, JsonLd } from '@/utils/structuredData';

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SERVICES.map((service) => ({ locale, slug: service.slug }))
  );
}

async function categoryFor(locale, service) {
  const t = await getTranslations({ locale, namespace: 'services' });
  return { t, category: t.raw('categories').find((c) => c.key === service.key) };
}

export async function generateMetadata({ params: { locale, slug } }) {
  const service = findService(slug);
  if (!service) return {};
  const { category } = await categoryFor(locale, service);
  return buildMetadata({
    locale,
    path: servicePath(service),
    title: category.page.metaTitle,
    description: category.page.metaDescription,
    image: '/og-image.png',
  });
}

export default async function ServicePage({ params: { locale, slug } }) {
  const service = findService(slug);
  if (!service) notFound();
  setRequestLocale(locale);
  const { t, category } = await categoryFor(locale, service);
  const data = serviceGraph({
    locale,
    path: servicePath(service),
    category,
    servicesLabel: t('detail.breadcrumb'),
  });
  return (
    <>
      <JsonLd data={data} />
      <ServiceDetail service={service} />
    </>
  );
}
