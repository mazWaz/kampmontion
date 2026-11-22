# Kamp Motion Studio — Website

Bilingual (ID/EN), SEO-first, static site untuk Kamp Motion Studio. Dibangun dengan Astro + Tailwind, 100% pre-rendered, dan dilengkapi structured data untuk Google + AI search engine (GPTBot, ClaudeBot, PerplexityBot, dll).

## Teknologi
- **Astro 7** (SSG, zero JS by default; requires Node >= 22.23.4)
- **Tailwind CSS v4** (via Vite plugin)
- **@astrojs/sitemap** (sitemap-index.xml otomatis bilingual)
- **TypeScript strict**

## Fitur SEO
- Pre-rendered HTML semua halaman (AI crawler & search engine pasti dapat konten)
- JSON-LD: Organization + LocalBusiness + Service × 8 + Person × 4 + Review × 8 + AggregateRating + FAQPage + BreadcrumbList + CreativeWork (per portfolio)
- `hreflang` ID/EN + canonical
- `robots.txt` dengan allow eksplisit untuk GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, dll.
- `llms.txt` untuk AI search
- OG image + Twitter Card siap (mock SVG, ganti ke PNG/JPG nanti)

## Struktur Halaman
```
/                                ID home
/layanan                         ID services index
/layanan/[slug]                  8 service pages (ID)
/portfolio                       ID portfolio
/portfolio/[slug]                Project detail (ID)
/tentang                         About + team (ID)
/kontak                          Contact (ID)
/blog                            Blog skeleton (ID)

/en                              EN home
/en/services                     EN services index
/en/services/[slug]              8 service pages (EN)
/en/portfolio                    EN portfolio
/en/portfolio/[slug]             Project detail (EN)
/en/about                        About (EN)
/en/contact                      Contact (EN)
/en/blog                         Blog skeleton (EN)
```

## Commands

```bash
npm install
npm run dev      # dev server di http://localhost:4321
npm run build    # output ke ./dist
npm run preview  # preview build
```

## Deploy

### Cloudflare Workers (production)
Live at https://kampmontion.account-021.workers.dev. Workers Builds deploys every push to `main`; each GitHub commit shows the result as the "Workers Builds: kampmontion" check.

- `wrangler.jsonc` runs `npm run build` and serves `./dist` as static assets. No adapter or Worker script: the site is fully static.
- Keep `wrangler.jsonc` in the repo. Without it, Cloudflare's autoconfig runs `astro add cloudflare`, which adds an SSR adapter this static site does not need and breaks the build.
- `public/_headers` (security + cache headers) and `public/_redirects` (English paths without `/en`) are applied by Workers static assets.
- Renamed portfolio slugs redirect through `redirects` in `astro.config.mjs` (built as meta-refresh pages, so they work on any host).

```bash
npx wrangler dev      # serve the build with _headers/_redirects at http://localhost:8787
npx wrangler deploy   # manual deploy from local (run `npx wrangler login` first)
```

Custom domain: Cloudflare dashboard → Workers & Pages → kampmontion → Settings → Domains & Routes. Then update the domain in the files from item 1 of "Yang Perlu Diganti Sebelum Live" below, plus `SITE` in `astro.config.mjs` (sitemap).

### Vercel (alternative)
1. `vercel.com/new` → import the repo (Astro is auto-detected)
2. Add the domain under Settings → Domains

`vercel.json` has the same security headers and cache rules. `public/_redirects` is Cloudflare-only, so its `/services`, `/about`, `/contact` → `/en/...` fallbacks need to be added to `vercel.json` if you move hosts.

## Yang Perlu Diganti Sebelum Live

1. **Domain final** → update `SITE.url` di `src/config/site.ts` + `public/robots.txt` + `public/llms.txt`
2. **Logo asli** → ganti `public/logo.svg`
3. **OG image** → ganti `public/og/default.svg` ke PNG/JPG 1200×630
4. **Aset portfolio asli** → ganti `public/portfolio/mock-*.svg`
5. **Alamat fisik Jogja** → update `SITE.address` (saat sudah ada)
6. **Konten blog** → tambah file di `src/content/blog/` (perlu setup content collection)
7. **Google Search Console** + **Bing Webmaster Tools** — submit sitemap setelah live
8. **Google Business Profile** — daftarkan studio Yogyakarta

## SEO Checklist Pasca Launch

- [ ] Submit sitemap ke Google Search Console & Bing
- [ ] Verifikasi domain di GSC + IndexNow
- [ ] Setup Google Business Profile
- [ ] Backlink: tambah link kampmotion.com di Behance, Fastwork, Sribu, Instagram bio
- [ ] Tambah Google Analytics 4 + GTM (saat dibutuhkan)
- [ ] Lighthouse audit (target ≥95 semua kategori)
- [ ] Test Rich Results: https://search.google.com/test/rich-results
- [ ] Mulai publish 1–2 artikel blog/bulan untuk topical authority
