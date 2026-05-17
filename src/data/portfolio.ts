import type { Locale } from '../config/site';

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  client: string;
  category: Record<Locale, string>;
  year: string;
  cover: string; // path to image (mock)
  videoUrl?: string;
  thumbnailUrl?: string;
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: 'fintech-onboarding-explainer',
    title: {
      id: 'Explainer Onboarding Fintech',
      en: 'Fintech Onboarding Explainer',
    },
    client: 'Confidential Fintech (NDA)',
    category: { id: 'Animasi 2D', en: '2D Animation' },
    year: '2025',
    cover: '/assets/portfolio/fintech-onboarding-explainer.jpg',
    summary: {
      id: 'Eksplainer 90 detik untuk onboarding pengguna baru aplikasi fintech.',
      en: '90-second explainer for new-user onboarding of a fintech app.',
    },
    description: {
      id: 'Animasi 2D karakter dengan voice-over AI ID/EN, dirancang untuk meningkatkan completion rate onboarding sebesar 40%.',
      en: '2D character animation with bilingual AI voice-over, designed to lift onboarding completion rate by 40%.',
    },
    tags: ['Animasi 2D', 'Explainer', 'Fintech'],
  },
  {
    slug: 'corporate-profile-banking',
    title: {
      id: 'Company Profile Bank Nasional',
      en: 'National Bank Corporate Profile',
    },
    client: 'Banking Sector Client',
    category: { id: 'Video Company Profile', en: 'Company Profile Video' },
    year: '2024',
    cover: '/assets/portfolio/corporate-profile-banking.jpg',
    summary: {
      id: 'Video company profile sinematik 4 menit untuk peluncuran produk baru.',
      en: 'Cinematic 4-minute corporate profile video for a new product launch.',
    },
    description: {
      id: 'Produksi end-to-end: scripting, syuting multi-cam, motion graphic data, hingga delivery dalam 4 versi (full, 60s, 30s, 15s).',
      en: 'End-to-end production: scripting, multi-cam shooting, data motion graphics, delivered in 4 versions (full, 60s, 30s, 15s).',
    },
    tags: ['Company Profile', 'Banking', 'Cinematic'],
  },
  {
    slug: 'ngo-campaign-motion',
    title: {
      id: 'Kampanye Sosial NGO',
      en: 'NGO Social Campaign',
    },
    client: 'International NGO',
    category: { id: 'Motion Graphic', en: 'Motion Graphics' },
    year: '2024',
    cover: '/assets/portfolio/ngo-campaign-motion.jpg',
    summary: {
      id: 'Seri 6 video motion graphic untuk kampanye kesehatan global.',
      en: 'Series of 6 motion graphic videos for a global health campaign.',
    },
    description: {
      id: 'Visualisasi data dan storytelling kinetic typography dalam dua bahasa, dipublikasi di YouTube, Instagram, dan LinkedIn.',
      en: 'Data visualization and kinetic typography storytelling in two languages, published across YouTube, Instagram, and LinkedIn.',
    },
    tags: ['Motion Graphic', 'NGO', 'Kampanye Sosial'],
  },
  {
    slug: 'product-launch-bumper',
    title: {
      id: 'Bumper Launching Produk Tech',
      en: 'Tech Product Launch Bumper',
    },
    client: 'Tech Startup',
    category: { id: 'Video Bumper Event', en: 'Event Bumper Video' },
    year: '2025',
    cover: '/assets/portfolio/product-launch-bumper.jpg',
    summary: {
      id: 'Bumper opening 20 detik untuk acara peluncuran produk SaaS.',
      en: '20-second opening bumper for a SaaS product launch event.',
    },
    description: {
      id: 'Logo reveal sinematik dengan partikel AI-generated dan sound design original.',
      en: 'Cinematic logo reveal with AI-generated particles and original sound design.',
    },
    tags: ['Bumper', 'Logo Reveal', 'Event'],
  },
  {
    slug: 'edu-platform-2d-series',
    title: {
      id: 'Seri Animasi Platform Edukasi',
      en: 'Edu Platform Animated Series',
    },
    client: 'EdTech Indonesia',
    category: { id: 'Animasi 2D', en: '2D Animation' },
    year: '2023',
    cover: '/assets/portfolio/edu-platform-2d-series.png',
    summary: {
      id: '12 video animasi 2D untuk kurikulum SMP daring.',
      en: '12 animated 2D videos for an online junior-high curriculum.',
    },
    description: {
      id: 'Karakter konsisten lintas episode, narasi storytelling, AI assist untuk asset generation.',
      en: 'Consistent characters across episodes, narrative storytelling, AI-assisted asset generation.',
    },
    tags: ['Animasi 2D', 'EdTech', 'Series'],
  },
  {
    slug: 'logo-sting-pack',
    title: {
      id: 'Logo Sting Pack — 5 Brand',
      en: 'Logo Sting Pack — 5 Brands',
    },
    client: 'Multiple Clients',
    category: { id: 'Logo Animation', en: 'Logo Animation' },
    year: '2024',
    cover: '/assets/portfolio/logo-sting-pack.webp',
    summary: {
      id: 'Lima animasi logo untuk brand startup, NGO, dan korporat.',
      en: 'Five logo animations for startup, NGO, and corporate brands.',
    },
    description: {
      id: 'Setiap logo sting di-custom sesuai DNA brand: minimalis, energik, atau cinematic, dengan SFX original.',
      en: 'Each sting customized to brand DNA: minimal, energetic, or cinematic, with original SFX.',
    },
    tags: ['Logo Animation', 'Brand'],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
