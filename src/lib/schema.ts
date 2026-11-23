import { SITE } from '../config/site';
import type { Locale } from '../config/site';
import { services } from '../data/services';
import { team } from '../data/team';
import { regions } from '../data/regions';

export function organizationSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE.url}#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/icon.png`,
    image: `${SITE.url}${SITE.ogImage}`,
    description: SITE.description[locale],
    foundingDate: SITE.founded,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: [{ '@type': 'Country', name: 'Indonesia' }, ...regions.map((r) => r.area)],
    sameAs: Object.values(SITE.social),
    knowsAbout: [
      '2D Animation',
      'Motion Graphics',
      'Video Production',
      'Visual Effects',
      'AI Video',
      'Logo Animation',
      'Company Profile Video',
    ],
    employee: team.map((m) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role[locale],
    })),
  };
}

export function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description[locale],
    inLanguage: locale === 'id' ? 'id-ID' : 'en-US',
    publisher: { '@id': `${SITE.url}#organization` },
  };
}

export function serviceSchema(locale: Locale) {
  return services.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: s.title[locale],
    name: s.title[locale],
    description: s.short[locale],
    provider: { '@id': `${SITE.url}#organization` },
    areaServed: ['Indonesia', 'Worldwide'],
    url: `${SITE.url}${locale === 'id' ? '/layanan/' + s.slug : '/en/services/' + s.slugEn}`,
  }));
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };
}
