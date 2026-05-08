# Kamp Motion Studio — Website

Bilingual (ID/EN), SEO-first, static site untuk Kamp Motion Studio. Dibangun dengan Astro + Tailwind, 100% pre-rendered, dan dilengkapi structured data untuk Google + AI search engine (GPTBot, ClaudeBot, PerplexityBot, dll).

## Teknologi
- **Astro 5** (SSG, zero JS by default)
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

### Vercel
1. Push repo ke GitHub
2. `vercel.com/new` → import repo
3. Framework: Astro (auto-detected)
4. Domain: tambahkan domain final di Settings → Domains

`vercel.json` sudah berisi security headers + cache rules.

### Cloudflare Pages
1. Push repo ke GitHub
2. Cloudflare Dashboard → Pages → Connect to Git
3. Build command: `npm run build`
4. Output dir: `dist`
5. `public/_headers` sudah disediakan

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
