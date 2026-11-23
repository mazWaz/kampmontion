export const SITE = {
  // Production domain (Cloudflare Workers custom domain).
  // og:image, canonical, hreflang, sitemap, JSON-LD all derive from this.
  url: 'https://kampmotion.com',
  name: 'Kamp Motion Studio',
  shortName: 'Kamp Motion',
  tagline: {
    id: 'Studio Kreatif Animasi 2D, Motion Graphic & Video AI',
    en: 'Creative Studio for 2D Animation, Motion Graphics & AI Video',
  },
  description: {
    id: 'Kamp Motion Studio — studio animasi 2D, motion graphic, dan video produksi di Jogja, melayani seluruh Indonesia dan luar negeri. 7+ tahun, 50+ klien.',
    en: 'Kamp Motion Studio — creative studio for 2D animation, motion graphics, and video production combining human creativity with AI. 7+ years experience, 50+ clients worldwide.',
  },
  email: 'kampmotion@gmail.com',
  phone: '+6285693832031',
  phoneDisplay: '+62 856-9383-2031',
  whatsapp: 'https://wa.me/6285693832031',
  address: {
    locality: 'Yogyakarta',
    region: 'DI Yogyakarta',
    country: 'ID',
    countryName: 'Indonesia',
  },
  social: {
    instagram: 'https://instagram.com/kamp_motion',
    behance: 'https://www.behance.net/umarakbar3b98e',
    fastwork: 'https://fastwork.id/user/umarakbar',
    sribu: 'https://www.sribu.com/id/users/umarakbar',
  },
  founded: '2018',
  ogImage: '/og/default.png',
} as const;

export const LOCALES = ['id', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
