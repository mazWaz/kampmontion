import type { Locale } from '../config/site';

export type Service = {
  slug: string;
  slugEn: string;
  icon: string;
  title: Record<Locale, string>;
  short: Record<Locale, string>;
  long: Record<Locale, string>;
  keywords: string[];
  deliverables: Record<Locale, string[]>;
};

export const services: Service[] = [
  {
    slug: 'video-company-profile',
    slugEn: 'company-profile-video',
    icon: '🎬',
    title: { id: 'Video Company Profile', en: 'Company Profile Video' },
    short: {
      id: 'Video profil perusahaan sinematik yang menjual visi, value, dan kredibilitas brand.',
      en: 'Cinematic corporate profile videos that sell vision, value, and brand credibility.',
    },
    long: {
      id: 'Kami memproduksi video company profile yang bukan sekadar dokumenter — tapi narasi sinematik yang menceritakan misi, budaya, dan keunggulan perusahaan Anda. Cocok untuk presentasi B2B, investor pitch, halaman About, dan kampanye employer branding. Setiap proyek dimulai dari riset, storyboarding, hingga produksi dengan dukungan AI untuk efisiensi tanpa mengorbankan estetika.',
      en: 'We craft company profile videos that go beyond documentary — cinematic narratives that communicate your mission, culture, and competitive edge. Ideal for B2B presentations, investor pitches, About pages, and employer branding campaigns. Every project starts with research, storyboarding, and AI-assisted production to deliver efficiency without compromising aesthetics.',
    },
    keywords: ['jasa video company profile', 'video profil perusahaan', 'corporate video Indonesia', 'company profile video Jakarta'],
    deliverables: {
      id: ['Video utama 2–5 menit (4K)', 'Versi pendek 30–60 detik untuk sosmed', 'Subtitle ID/EN', 'Master file & raw footage'],
      en: ['Master video 2–5 minutes (4K)', 'Short cut 30–60s for social media', 'ID/EN subtitles', 'Master file & raw footage'],
    },
  },
  {
    slug: 'animasi-2d',
    slugEn: '2d-animation',
    icon: '✏️',
    title: { id: 'Animasi 2D', en: '2D Animation' },
    short: {
      id: 'Animasi 2D karakter dan ilustrasi yang storytelling-driven untuk edukasi, iklan, dan eksplainer.',
      en: 'Story-driven 2D character & illustration animation for education, ads, and explainers.',
    },
    long: {
      id: 'Animasi 2D kami mengubah konsep abstrak menjadi cerita visual yang mudah dicerna. Mulai dari karakter, ilustrasi vektor, hingga frame-by-frame animation. Cocok untuk edukasi, kampanye sosial, video iklan, dan konten YouTube. Workflow AI-assisted memungkinkan iterasi storyboard yang lebih cepat tanpa mengurangi karakteristik tangan kreator.',
      en: 'Our 2D animation transforms abstract concepts into digestible visual stories — from characters and vector illustrations to frame-by-frame animation. Perfect for education, social campaigns, ad videos, and YouTube content. Our AI-assisted workflow accelerates storyboard iteration while preserving the creator’s signature touch.',
    },
    keywords: ['jasa animasi 2D', 'studio animasi 2D Indonesia', '2D animation service', 'animasi karakter', 'explainer video'],
    deliverables: {
      id: ['Storyboard & style frames', 'Animasi final (HD/4K)', 'Voice-over (manual atau AI)', 'Sound design & mixing'],
      en: ['Storyboard & style frames', 'Final animation (HD/4K)', 'Voice-over (manual or AI)', 'Sound design & mixing'],
    },
  },
  {
    slug: 'motion-graphic',
    slugEn: 'motion-graphic',
    icon: '⚡',
    title: { id: 'Motion Graphic', en: 'Motion Graphics' },
    short: {
      id: 'Motion graphic dinamis untuk eksplainer, sosial media, dan kampanye marketing.',
      en: 'Dynamic motion graphics for explainers, social media, and marketing campaigns.',
    },
    long: {
      id: 'Motion graphic kami menggabungkan typography kinetic, ikon, data visualization, dan transisi cinematic untuk menyampaikan pesan dengan cepat dan berkesan. Ideal untuk explainer produk, infografis bergerak, opening video, dan iklan digital. Output dioptimasi untuk berbagai platform: YouTube, Instagram, TikTok, LinkedIn.',
      en: 'Our motion graphics combine kinetic typography, icons, data visualization, and cinematic transitions to deliver impactful, fast-paced messaging. Ideal for product explainers, animated infographics, openers, and digital ads. Output is optimized for YouTube, Instagram, TikTok, and LinkedIn.',
    },
    keywords: ['jasa motion graphic', 'motion graphic Indonesia', 'kinetic typography', 'animated infographic', 'explainer video'],
    deliverables: {
      id: ['Motion graphic 30–120 detik', 'Versi vertikal (9:16) & square', 'Source project (After Effects)', 'Audio mixing'],
      en: ['Motion graphic 30–120 seconds', 'Vertical (9:16) & square versions', 'Source project (After Effects)', 'Audio mixing'],
    },
  },
  {
    slug: 'editing-video',
    slugEn: 'video-editing',
    icon: '🎞️',
    title: { id: 'Editing Video', en: 'Video Editing' },
    short: {
      id: 'Post-production profesional: color grading, sound design, dan editing dipercepat dengan AI.',
      en: 'Professional post-production: color grading, sound design, and AI-accelerated editing.',
    },
    long: {
      id: 'Layanan editing video profesional untuk kebutuhan korporat, vlog, podcast, hingga campaign sosial media. Kami melakukan color grading, sound design, motion title, dan multi-cam editing dengan workflow AI untuk auto-cut dan transcript yang mempercepat turnaround tanpa kompromi kualitas.',
      en: 'Professional video editing for corporate, vlog, podcast, and social media campaigns. We deliver color grading, sound design, motion titles, and multi-cam editing — accelerated with AI auto-cut and transcript workflows for faster turnaround without quality compromise.',
    },
    keywords: ['jasa editing video', 'video editing service', 'jasa edit video murah', 'post production Indonesia'],
    deliverables: {
      id: ['Edit final dengan color & audio mixing', 'Subtitle otomatis (AI) ID/EN', 'Versi multi-platform', 'Revisi sesuai paket'],
      en: ['Final cut with color & audio mixing', 'AI auto-subtitles ID/EN', 'Multi-platform versions', 'Revisions per package'],
    },
  },
  {
    slug: 'video-bumper-event',
    slugEn: 'event-bumper-video',
    icon: '🎉',
    title: { id: 'Video Bumper Event', en: 'Event Bumper Video' },
    short: {
      id: 'Bumper opening, transisi, dan video countdown event yang spektakuler.',
      en: 'Spectacular event opening bumpers, transitions, and countdown videos.',
    },
    long: {
      id: 'Bumper event yang memorable adalah pembeda antara acara biasa dan acara berkesan. Kami memproduksi opening sequence, transition video, lower-third, dan countdown timer yang sinematik untuk konferensi, gala, peluncuran produk, dan event korporat.',
      en: 'A memorable event bumper sets the tone between forgettable and unforgettable. We produce opening sequences, transition videos, lower-thirds, and countdown timers for conferences, galas, product launches, and corporate events.',
    },
    keywords: ['jasa video bumper event', 'opening bumper video', 'event opening video', 'countdown video event'],
    deliverables: {
      id: ['Bumper opening 15–30 detik', 'Logo reveal cinematic', 'Transition pack', 'Countdown video'],
      en: ['Opening bumper 15–30s', 'Cinematic logo reveal', 'Transition pack', 'Countdown video'],
    },
  },
  {
    slug: 'production-house',
    slugEn: 'production-house',
    icon: '📽️',
    title: { id: 'Production House', en: 'Production House' },
    short: {
      id: 'Layanan produksi end-to-end: konsep, syuting, hingga delivery untuk iklan, film pendek, dan brand video.',
      en: 'End-to-end production: concept, shooting, and delivery for ads, short films, and brand videos.',
    },
    long: {
      id: 'Sebagai production house, kami menangani end-to-end: development konsep, scriptwriting, casting, syuting (single/multi-cam), hingga post-production. Tim kami berpengalaman dalam iklan komersial, brand film, music video, dan dokumenter perusahaan.',
      en: 'As a production house, we handle the entire pipeline: concept development, scriptwriting, casting, single/multi-camera shooting, and post-production. Our team specializes in commercials, brand films, music videos, and corporate documentaries.',
    },
    keywords: ['production house Jogja', 'production house Indonesia', 'jasa syuting iklan', 'rumah produksi video'],
    deliverables: {
      id: ['Pre-production (script, storyboard)', 'Shooting day(s)', 'Post-production lengkap', 'Master + cutdown'],
      en: ['Pre-production (script, storyboard)', 'Shooting day(s)', 'Full post-production', 'Master + cutdown'],
    },
  },
  {
    slug: 'logo-animation',
    slugEn: 'logo-animation',
    icon: '✨',
    title: { id: 'Logo Animation', en: 'Logo Animation' },
    short: {
      id: 'Animasi logo (logo sting) yang membuat brand Anda hidup dalam 3–8 detik.',
      en: 'Logo stings that bring your brand to life in 3–8 seconds.',
    },
    long: {
      id: 'Logo animation atau logo sting adalah aset wajib brand modern: dipakai untuk intro YouTube, opening video, presentasi, dan website. Kami merancang animasi logo yang merefleksikan kepribadian brand Anda — minimalis, energik, atau cinematic — lengkap dengan sound design original.',
      en: 'A logo sting is a must-have for modern brands: used for YouTube intros, video openers, presentations, and websites. We design logo animations that reflect your brand personality — minimal, energetic, or cinematic — complete with original sound design.',
    },
    keywords: ['jasa animasi logo', 'logo animation service', 'logo sting', 'logo reveal animation'],
    deliverables: {
      id: ['Animasi logo 3–8 detik', 'Versi gelap & terang', 'Sound design SFX', 'File MP4 + transparan (MOV alpha)'],
      en: ['Logo animation 3–8s', 'Light & dark versions', 'SFX sound design', 'MP4 + transparent (MOV alpha)'],
    },
  },
  {
    slug: 'visual-effect',
    slugEn: 'visual-effects',
    icon: '🌀',
    title: { id: 'Visual Effect (VFX)', en: 'Visual Effects (VFX)' },
    short: {
      id: 'VFX compositing, green screen, dan AI-generated effects untuk video komersial dan kreatif.',
      en: 'VFX compositing, green screen, and AI-generated effects for commercial and creative videos.',
    },
    long: {
      id: 'Visual effects kami mencakup compositing, rotoscoping, green screen keying, simulasi partikel, dan integrasi elemen AI-generated. Cocok untuk iklan, music video, content kreator, dan film pendek yang membutuhkan elemen mustahil dishooting secara langsung.',
      en: 'Our VFX services include compositing, rotoscoping, green screen keying, particle simulation, and AI-generated element integration. Ideal for ads, music videos, content creators, and short films requiring elements impossible to capture in-camera.',
    },
    keywords: ['jasa VFX Indonesia', 'visual effect service', 'green screen editing', 'compositing video'],
    deliverables: {
      id: ['Final composite shots', 'AI-generated assets (jika diperlukan)', 'Color grading terintegrasi', 'Source project'],
      en: ['Final composite shots', 'AI-generated assets (if needed)', 'Integrated color grading', 'Source project'],
    },
  },
];

export const getService = (slug: string, locale: Locale): Service | undefined =>
  services.find((s) => (locale === 'en' ? s.slugEn : s.slug) === slug);
