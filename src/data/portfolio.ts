import type { Locale } from '../config/site';

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  client: string;
  category: Record<Locale, string>;
  year: string;
  cover: string;
  youtubeId: string;
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
};

// Slugs are kept from the original placeholder entries so already-indexed URLs keep working.
export const projects: Project[] = [
  {
    slug: 'fintech-onboarding-explainer',
    title: {
      id: 'Explainer Animasi Upps.me',
      en: 'Upps.me Animated Explainer',
    },
    client: 'Upps.me',
    category: { id: 'Animasi 2D', en: '2D Animation' },
    year: '2021',
    cover: '/assets/video/wgo5x7KFkPA.jpg',
    youtubeId: 'wgo5x7KFkPA',
    summary: {
      id: 'Video explainer animasi 2D berdurasi 72 detik yang memperkenalkan Upps.me, platform untuk memulai bisnis impor.',
      en: 'A 72-second 2D animated explainer introducing Upps.me, a platform for starting an import business.',
    },
    description: {
      id: 'Karakter animasi 2D mengajak calon pebisnis impor mengenal Upps.me: mulai dari kendala modal dan bahasa saat berbisnis lintas negara, menjual kembali produk di Indonesia dengan untung besar, bantuan hingga 70% biaya order produk impor, sampai opsi barang dikirim atau disimpan di gudang — ditutup dengan ajakan bergabung sebagai member.',
      en: 'A 2D character guides aspiring importers through Upps.me: overcoming capital and language barriers in cross-border trade, reselling products in Indonesia at a healthy margin, coverage of up to 70% of import order costs, and shipping or warehouse storage options — closing with a call to join as a member.',
    },
    tags: ['Animasi 2D', 'Explainer', 'Startup', 'Impor'],
  },
  {
    slug: 'corporate-profile-banking',
    title: {
      id: 'Video Opening BRI Danareksa Sekuritas',
      en: 'BRI Danareksa Sekuritas Opening Video',
    },
    client: 'BRI Danareksa Sekuritas',
    category: { id: 'Motion Graphic', en: 'Motion Graphics' },
    year: '2024',
    cover: '/assets/video/bXW_YxaoaB4.jpg',
    youtubeId: 'bXW_YxaoaB4',
    summary: {
      id: 'Video opening 20 detik untuk BRI Danareksa Sekuritas dengan visual 3D bernuansa pasar modal.',
      en: 'A 20-second opening video for BRI Danareksa Sekuritas with capital-market-themed 3D visuals.',
    },
    description: {
      id: 'Panel-panel kubus 3D menampilkan lini layanan perusahaan — Online Trading, Sharia Investment, hingga Equity and Bond Underwriting — lalu ditutup dengan logo reveal di atas peta digital Indonesia.',
      en: 'Rotating 3D cube panels showcase the firm’s service lines — Online Trading, Sharia Investment, and Equity and Bond Underwriting — before closing on a logo reveal over a digital map of Indonesia.',
    },
    tags: ['Motion Graphic', 'Logo Reveal', 'Pasar Modal', 'Korporat'],
  },
  {
    slug: 'ngo-campaign-motion',
    title: {
      id: 'Explainer 3D Kadin for Naker',
      en: 'Kadin for Naker 3D Explainer',
    },
    client: 'KADIN Indonesia',
    category: { id: 'Motion Graphic', en: 'Motion Graphics' },
    year: '2023',
    cover: '/assets/video/uGB0htzxUsc.jpg',
    youtubeId: 'uGB0htzxUsc',
    summary: {
      id: 'Explainer motion graphic 3D berdurasi 3 menit untuk platform ketenagakerjaan Kadin for Naker.',
      en: 'A 3-minute 3D motion graphic explainer for Kadin for Naker, a workforce platform.',
    },
    description: {
      id: 'Avatar 3D memandu penonton memahami ekosistem Kadin for Naker: digitalisasi lintas sektor (manufaktur, pertanian, perdagangan, jasa), job matching antara tenaga kerja dan industri, upskilling sesuai standar industri, hingga demo pendaftaran platform dalam dua langkah sederhana.',
      en: 'A 3D avatar walks viewers through the Kadin for Naker ecosystem: digitalization across sectors (manufacturing, agriculture, trade, services), job matching between workers and industry, upskilling to industry standards, and a two-step platform sign-up demo.',
    },
    tags: ['Motion Graphic', '3D', 'Explainer', 'Ketenagakerjaan'],
  },
  {
    slug: 'product-launch-bumper',
    title: {
      id: 'Bumper Event TikTok × Komdigi',
      en: 'TikTok × Komdigi Event Bumper',
    },
    client: 'TikTok Indonesia × Komdigi',
    category: { id: 'Video Bumper Event', en: 'Event Bumper Video' },
    year: '2025',
    cover: '/assets/video/p6eVaS9cFHU.jpg',
    youtubeId: 'p6eVaS9cFHU',
    summary: {
      id: 'Paket bumper untuk acara peluncuran Feed STEM TikTok yang didukung Komdigi, Jakarta, 5 Maret 2025.',
      en: 'Bumper package for TikTok’s STEM Feed launch event, supported by Komdigi, Jakarta, 5 March 2025.',
    },
    description: {
      id: 'Opening bumper dan transisi tiap segmen acara — keynote speech, sambutan dan presentasi, narasumber, hingga moderator — dengan identitas visual TikTok yang konsisten sepanjang acara.',
      en: 'An opening bumper plus transitions for every segment — keynote speech, welcome remarks and presentation, speakers, and moderator — carrying TikTok’s visual identity throughout the event.',
    },
    tags: ['Bumper', 'Event', 'Launching', 'TikTok'],
  },
  {
    slug: 'edu-platform-2d-series',
    title: {
      id: 'Animasi E-Learning “The Power of Teamworking”',
      en: '“The Power of Teamworking” E-Learning Animation',
    },
    client: 'United Tractors Corporate University',
    category: { id: 'Animasi 2D', en: '2D Animation' },
    year: '2025',
    cover: '/assets/video/0dQiPQM-Ob8.jpg',
    youtubeId: '0dQiPQM-Ob8',
    summary: {
      id: 'Animasi 2D berdurasi 4 menit untuk materi pelatihan kerja tim di United Tractors Corporate University.',
      en: 'A 4-minute 2D animation for teamwork training at United Tractors Corporate University.',
    },
    description: {
      id: 'Dewa-dewi Yunani bergaya chibi mengajarkan nilai kerja tim lewat cerita menghadapi serangan Kronos: kekuatan perspektif yang beragam, tugas pemimpin dan ciri pemimpin yang buruk, hingga adaptabilitas — dikemas sebagai materi e-learning korporat yang ringan dan mudah diingat.',
      en: 'Chibi-style Greek gods teach teamwork through the story of fending off Kronos: the strength of diverse perspectives, a leader’s duties and the traits of bad leadership, and adaptability — packaged as light, memorable corporate e-learning.',
    },
    tags: ['Animasi 2D', 'E-Learning', 'Corporate Training'],
  },
  {
    slug: 'logo-sting-pack',
    title: {
      id: 'Kompilasi Animasi Logo',
      en: 'Logo Animation Reel',
    },
    client: 'Multiple Clients',
    category: { id: 'Logo Animation', en: 'Logo Animation' },
    year: '2024',
    cover: '/assets/video/dNwGqPJjSjI.jpg',
    youtubeId: 'dNwGqPJjSjI',
    summary: {
      id: 'Kompilasi 33 detik animasi logo untuk brand korporat, startup, dan program kampus.',
      en: 'A 33-second reel of logo animations for corporate brands, startups, and campus programs.',
    },
    description: {
      id: 'Setiap logo dianimasikan sesuai karakter brand-nya — neon glow untuk WIKA Gedung, tipografi 3D untuk Social Impact, reveal sinematik di tengah hutan untuk BRI, hingga nuansa futuristik untuk CEO Talks WEGE. Brand lain dalam kompilasi: LandX, Campuspreneur, dan +62 Kreatif.',
      en: 'Each logo is animated to match its brand — a neon glow for WIKA Gedung, 3D typography for Social Impact, a cinematic jungle reveal for BRI, and a futuristic look for CEO Talks WEGE. Also featured: LandX, Campuspreneur, and +62 Kreatif.',
    },
    tags: ['Logo Animation', 'Logo Reveal', 'Brand'],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
