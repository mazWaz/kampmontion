import { services } from '../data/services';
import type { Locale } from '../config/site';

const SERVICE_ID_TO_EN = new Map(services.map((s) => [s.slug, s.slugEn]));
const SERVICE_EN_TO_ID = new Map(services.map((s) => [s.slugEn, s.slug]));

const STATIC_ID_TO_EN: Array<[RegExp, string]> = [
  [/^\/$/,             '/en'],
  [/^\/layanan\/?$/,   '/en/services'],
  [/^\/portfolio\/?$/, '/en/portfolio'],
  [/^\/tentang\/?$/,   '/en/about'],
  [/^\/kontak\/?$/,    '/en/contact'],
  [/^\/blog\/?$/,      '/en/blog'],
];

const STATIC_EN_TO_ID: Array<[RegExp, string]> = [
  [/^\/en\/?$/,             '/'],
  [/^\/en\/services\/?$/,   '/layanan'],
  [/^\/en\/portfolio\/?$/,  '/portfolio'],
  [/^\/en\/about\/?$/,      '/tentang'],
  [/^\/en\/contact\/?$/,    '/kontak'],
  [/^\/en\/blog\/?$/,       '/en/blog'.replace('/en', '') /* = /blog */],
];

/** Translate the current path to the alternate locale's equivalent path. */
export function altLocalePath(currentPath: string, currentLocale: Locale): string {
  // Normalize: strip trailing slash except root
  const path = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;

  if (currentLocale === 'id') {
    // ID → EN
    // 1) static map
    for (const [re, target] of STATIC_ID_TO_EN) {
      if (re.test(path)) return target;
    }
    // 2) service detail /layanan/{slug} → /en/services/{slugEn}
    const svc = path.match(/^\/layanan\/([^/]+)$/);
    if (svc) {
      const slugEn = SERVICE_ID_TO_EN.get(svc[1]);
      return slugEn ? `/en/services/${slugEn}` : '/en/services';
    }
    // 3) portfolio detail (same slug both locales)
    const pf = path.match(/^\/portfolio\/([^/]+)$/);
    if (pf) return `/en/portfolio/${pf[1]}`;
    // 4) blog post (assume same slug)
    const blog = path.match(/^\/blog\/([^/]+)$/);
    if (blog) return `/en/blog/${blog[1]}`;
    // 5) fallback: add /en prefix
    return `/en${path}`;
  } else {
    // EN → ID
    for (const [re, target] of STATIC_EN_TO_ID) {
      if (re.test(path)) return target;
    }
    const svc = path.match(/^\/en\/services\/([^/]+)$/);
    if (svc) {
      const slug = SERVICE_EN_TO_ID.get(svc[1]);
      return slug ? `/layanan/${slug}` : '/layanan';
    }
    const pf = path.match(/^\/en\/portfolio\/([^/]+)$/);
    if (pf) return `/portfolio/${pf[1]}`;
    const blog = path.match(/^\/en\/blog\/([^/]+)$/);
    if (blog) return `/blog/${blog[1]}`;
    // fallback: strip /en
    return path.replace(/^\/en/, '') || '/';
  }
}
