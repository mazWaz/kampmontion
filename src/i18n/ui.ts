import type { Locale } from '../config/site';

export const ui = {
  id: {
    'nav.services': 'Layanan',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Tentang',
    'nav.contact': 'Kontak',
    'cta.start': 'Mulai proyek',
    'cta.viewWork': 'Lihat portfolio',
    'cta.discuss': 'Diskusi via WhatsApp',
    'home.heroLead': 'Kamp Motion Studio menggabungkan kreativitas manusia dengan AI untuk menghasilkan animasi 2D, motion graphic, dan video produksi berkualitas tinggi.',
    'home.ctaLead': 'Konsultasikan kebutuhan motion graphic, animasi, atau video Anda hari ini.',
    'process.research': 'Riset & ide',
    'process.researchDesc': 'Riset audiens & tren didukung AI insight.',
    'process.storyboard': 'Storyboard',
    'process.storyboardDesc': 'Gabungan AI tools dan sentuhan kreatif manual.',
    'process.production': 'Produksi',
    'process.productionDesc': 'After Effects, animasi berbantuan AI, dan sound design.',
    'process.delivery': 'Serah terima',
    'process.deliveryDesc': 'Visual optimal & siap distribusi global.',
    'footer.rights': 'Hak cipta dilindungi.',
  },
  en: {
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'cta.start': 'Start a project',
    'cta.viewWork': 'View portfolio',
    'cta.discuss': 'Chat on WhatsApp',
    'home.heroLead': 'Kamp Motion Studio blends human creativity with AI to deliver high-end 2D animation, motion graphics, and video production.',
    'home.ctaLead': 'Let’s discuss your motion graphic, animation, or video needs today.',
    'process.research': 'Research & ideation',
    'process.researchDesc': 'Audience & trend research powered by AI insight.',
    'process.storyboard': 'Storyboarding',
    'process.storyboardDesc': 'AI tools combined with manual creative direction.',
    'process.production': 'Production',
    'process.productionDesc': 'After Effects, AI-assisted animation, sound design.',
    'process.delivery': 'Delivery',
    'process.deliveryDesc': 'Optimized visuals ready for global distribution.',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UiKey = keyof typeof ui.id;

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key] ?? ui.id[key];
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'id') return clean;
  return clean === '/' ? '/en' : `/en${clean}`;
}
