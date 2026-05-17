export const SITE = {
  // Live deployment URL. Update to final custom domain when ready;
  // og:image, canonical, hreflang, sitemap, JSON-LD all derive from this.
  url: 'https://kampmontion.account-021.workers.dev',
  name: 'Kamp Motion Studio',
  shortName: 'Kamp Motion',
  tagline: {
    id: 'Studio Kreatif Animasi 2D, Motion Graphic & Video AI',
    en: 'Creative Studio for 2D Animation, Motion Graphics & AI Video',
  },
  description: {
    id: 'Kamp Motion Studio — studio kreatif animasi 2D, motion graphic, dan video produksi yang menggabungkan kreativitas manusia dengan AI. 7+ tahun pengalaman, 50+ klien lokal & internasional.',
    en: 'Kamp Motion Studio — creative studio for 2D animation, motion graphics, and video production combining human creativity with AI. 7+ years experience, 50+ clients worldwide.',
  },
  email: 'umarakbar35@gmail.com',
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
export const DEFAULT_LOCALE: Locale = 'id';
