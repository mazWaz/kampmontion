import type { Locale } from '../config/site';

export const ui = {
  id: {
    'nav.home': 'Beranda',
    'nav.services': 'Layanan',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Tentang',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontak',
    'cta.start': 'Mulai Proyek',
    'cta.viewWork': 'Lihat Portfolio',
    'cta.discuss': 'Diskusi via WhatsApp',
    'home.heroEyebrow': 'Studio Kreatif × AI',
    'home.heroTitle': 'Visualisasi Ide. Lebih Cepat. Lebih Hidup.',
    'home.heroLead': 'Kamp Motion Studio menggabungkan kreativitas manusia dengan AI untuk menghasilkan animasi 2D, motion graphic, dan video produksi berkualitas tinggi.',
    'home.statsYears': 'Tahun pengalaman',
    'home.statsClients': 'Klien dipercaya',
    'home.statsServices': 'Layanan kreatif',
    'home.servicesTitle': 'Layanan Kami',
    'home.servicesLead': 'Solusi visual lengkap untuk brand modern.',
    'home.processTitle': 'Cara Kami Bekerja',
    'home.clientsTitle': 'Klien Kami',
    'home.testimonialsTitle': 'Apa Kata Mereka',
    'home.ctaTitle': 'Siap mengangkat brand Anda secara visual?',
    'home.ctaLead': 'Konsultasikan kebutuhan motion graphic, animasi, atau video Anda hari ini.',
    'process.research': 'Research & Ideation',
    'process.researchDesc': 'Riset audiens & tren didukung AI insight.',
    'process.storyboard': 'Storyboarding',
    'process.storyboardDesc': 'Gabungan AI tools dan sentuhan kreatif manual.',
    'process.production': 'Production',
    'process.productionDesc': 'After Effects, AI-assisted animation, sound design.',
    'process.delivery': 'Delivery',
    'process.deliveryDesc': 'Visual optimal & siap distribusi global.',
    'footer.rights': 'Hak Cipta Dilindungi.',
    'lang.switch': 'English',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'cta.start': 'Start a Project',
    'cta.viewWork': 'View Portfolio',
    'cta.discuss': 'Chat on WhatsApp',
    'home.heroEyebrow': 'Creative Studio × AI',
    'home.heroTitle': 'Bring Ideas to Life. Faster. Sharper.',
    'home.heroLead': 'Kamp Motion Studio blends human creativity with AI to deliver high-end 2D animation, motion graphics, and video production.',
    'home.statsYears': 'Years of experience',
    'home.statsClients': 'Trusted clients',
    'home.statsServices': 'Creative services',
    'home.servicesTitle': 'Our Services',
    'home.servicesLead': 'Complete visual solutions for modern brands.',
    'home.processTitle': 'How We Work',
    'home.clientsTitle': 'Our Clients',
    'home.testimonialsTitle': 'What They Say',
    'home.ctaTitle': 'Ready to elevate your brand visually?',
    'home.ctaLead': 'Let’s discuss your motion graphic, animation, or video needs today.',
    'process.research': 'Research & Ideation',
    'process.researchDesc': 'Audience & trend research powered by AI insight.',
    'process.storyboard': 'Storyboarding',
    'process.storyboardDesc': 'AI tools combined with manual creative direction.',
    'process.production': 'Production',
    'process.productionDesc': 'After Effects, AI-assisted animation, sound design.',
    'process.delivery': 'Delivery',
    'process.deliveryDesc': 'Optimized visuals ready for global distribution.',
    'footer.rights': 'All rights reserved.',
    'lang.switch': 'Bahasa Indonesia',
  },
} as const;

export type UiKey = keyof typeof ui.id;

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key] ?? ui.id[key];
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'id' ? clean : `/en${clean}`;
}
