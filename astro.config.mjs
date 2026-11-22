// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE as SITE_CONFIG } from './src/config/site.ts';

// Single source for the domain: canonical, robots and sitemap all agree.
const SITE = SITE_CONFIG.url;

// Portfolio slugs renamed from placeholder names to the real projects.
const MOVED_PORTFOLIO = {
  'fintech-onboarding-explainer': 'upps-me-explainer',
  'corporate-profile-banking': 'bri-danareksa-sekuritas-opening',
  'ngo-campaign-motion': 'kadin-for-naker-explainer',
  'product-launch-bumper': 'tiktok-komdigi-event-bumper',
  'edu-platform-2d-series': 'united-tractors-teamworking',
  'logo-sting-pack': 'logo-animation-reel',
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'never', // matches html_handling in wrangler.jsonc and the sitemap URLs
  build: { format: 'directory', inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
  // No adapter → built as meta-refresh HTML pages, so this works on any static host.
  redirects: Object.fromEntries(
    Object.entries(MOVED_PORTFOLIO).flatMap(([from, to]) => [
      [`/portfolio/${from}`, `/portfolio/${to}`],
      [`/en/portfolio/${from}`, `/en/portfolio/${to}`],
    ]),
  ),
  integrations: [
    sitemap({
      // Blog is hidden until it has articles.
      filter: (page) => !/\/blog\/?$/.test(page),
      i18n: {
        defaultLocale: 'id',
        locales: { id: 'id-ID', en: 'en-US' },
      },
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
