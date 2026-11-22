import type { Locale } from '../config/site';

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  client: string;
  category: Record<Locale, string>;
  year?: string; // omit when the production year is not confirmed
  cover: string;
  youtubeId: string;
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
};

// Old placeholder slugs redirect to these via `redirects` in astro.config.mjs.
export const projects: Project[] = [
  {
    slug: 'upps-me-explainer',
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
      id: 'Karakter animasi 2D mengajak calon pebisnis impor mengenal Upps.me: dari kekhawatiran soal modal dan kendala bahasa, jutaan katalog produk impor untuk dijual kembali di Indonesia, edukasi pemasaran digital, program pinjaman dana yang menanggung hingga 70% biaya order impor, sampai pengiriman langsung ke alamat konsumen atau ke gudang — ditutup dengan ajakan bergabung di www.upps.me.',
      en: 'A 2D character walks aspiring importers through Upps.me: from worries about capital and language barriers to millions of imported products to resell in Indonesia, digital marketing education, a financing program covering up to 70% of import order costs, and delivery straight to customers or to a warehouse — closing with an invitation to join at www.upps.me.',
    },
    tags: ['Animasi 2D', 'Explainer', 'Startup', 'Impor'],
  },
  {
    slug: 'bri-danareksa-sekuritas-opening',
    title: {
      id: 'Video Opening BRI Danareksa Sekuritas',
      en: 'BRI Danareksa Sekuritas Opening Video',
    },
    client: 'BRI Danareksa Sekuritas',
    category: { id: 'Motion Graphic', en: 'Motion Graphics' },
    cover: '/assets/video/bXW_YxaoaB4.jpg',
    youtubeId: 'bXW_YxaoaB4',
    summary: {
      id: 'Video opening 20 detik untuk BRI Danareksa Sekuritas dengan visual 3D bernuansa pasar modal.',
      en: 'A 20-second opening video for BRI Danareksa Sekuritas with capital-market-themed 3D visuals.',
    },
    description: {
      id: 'Panel-panel kubus 3D menampilkan empat lini layanan perusahaan — Online Trading, Sharia Investment, Equity and Bond Brokerage, serta Equity and Bond Underwriting — lalu ditutup dengan logo reveal di atas peta digital Indonesia.',
      en: 'Rotating 3D cube panels showcase four of the firm’s service lines — Online Trading, Sharia Investment, Equity and Bond Brokerage, and Equity and Bond Underwriting — before closing on a logo reveal over a digital map of Indonesia.',
    },
    tags: ['Motion Graphic', 'Logo Reveal', 'Pasar Modal', 'Korporat'],
  },
  {
    slug: 'kadin-for-naker-explainer',
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
      id: 'Explainer motion graphic 3D berdurasi 3 menit untuk Kadin for Naker, program pengembangan kapasitas tenaga kerja dari KADIN Indonesia.',
      en: 'A 3-minute 3D motion graphic explainer for Kadin for Naker, KADIN Indonesia’s workforce capacity-building program.',
    },
    description: {
      id: 'Avatar 3D memperkenalkan Kadin for Naker — program yang diinisiasi KADIN Indonesia bersama serikat buruh dan didukung Pijar Foundation untuk memperkuat link and match antara tenaga kerja dan dunia industri. Video menjelaskan pentingnya tenaga kerja terampil di sektor manufaktur, pertanian, perdagangan, dan jasa, dua fitur utama platform (tes minat dan materi pembelajaran), serta cara bergabung dalam dua langkah: daftar, lalu ikuti pelatihan.',
      en: 'A 3D avatar introduces Kadin for Naker — a program initiated by KADIN Indonesia with Indonesian labor unions and supported by Pijar Foundation to strengthen the link and match between workers and industry. The video covers why skilled workers matter across manufacturing, agriculture, trade, and services, the platform’s two core features (an interest assessment and learning materials), and how to join in two steps: sign up, then take the training.',
    },
    tags: ['Motion Graphic', '3D', 'Explainer', 'Ketenagakerjaan'],
  },
  {
    slug: 'tiktok-komdigi-event-bumper',
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
    slug: 'united-tractors-teamworking',
    title: {
      id: 'Animasi E-Learning “The Power of Teamworking”',
      en: '“The Power of Teamworking” E-Learning Animation',
    },
    client: 'United Tractors Corporate University',
    category: { id: 'Animasi 2D', en: '2D Animation' },
    year: '2024',
    cover: '/assets/video/0dQiPQM-Ob8.jpg',
    youtubeId: '0dQiPQM-Ob8',
    summary: {
      id: 'Animasi 2D berdurasi 4 menit untuk materi pelatihan kerja tim di United Tractors Corporate University.',
      en: 'A 4-minute 2D animation for teamwork training at United Tractors Corporate University.',
    },
    description: {
      id: 'Dewa-dewi Yunani bergaya chibi yang bersatu menghadapi Kronos menjadi alur cerita materi kerja tim: manfaat kerja sama, tiga penghalangnya (komunikasi, kepemimpinan, dan perencanaan tujuan yang buruk), serta lima kemampuan yang dibutuhkan — komunikasi, perencanaan, pemecahan masalah, mengatasi konflik, dan adaptabilitas.',
      en: 'Chibi-style Greek gods uniting against Kronos carry a lesson on teamwork: the benefits of collaboration, three common blockers (poor communication, poor leadership, and poor goal planning), and five skills every team needs — communication, planning, problem solving, conflict resolution, and adaptability.',
    },
    tags: ['Animasi 2D', 'E-Learning', 'Corporate Training'],
  },
  {
    slug: 'logo-animation-reel',
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
      id: 'Kompilasi 33 detik animasi logo untuk lebih dari 10 brand korporat, startup, event, dan institusi.',
      en: 'A 33-second reel of logo animations for more than 10 corporate, startup, event, and institutional brands.',
    },
    description: {
      id: 'Setiap logo dianimasikan sesuai karakter brand-nya — neon glow untuk WIKA Gedung, emblem emas untuk Mangkunegaran, tipografi 3D untuk Social Impact.ID, reveal di tengah hutan untuk BRI, hingga nuansa futuristik untuk CEO Talks WEGE. Brand lain dalam kompilasi: BRI Danareksa Sekuritas, Kadin for Naker, Satu Abad NU, LandX, Campuspreneur, BXB, gruu, dan +62 Creative.',
      en: 'Each logo is animated to match its brand — a neon glow for WIKA Gedung, a gold emblem for Mangkunegaran, 3D typography for Social Impact.ID, a jungle reveal for BRI, and a futuristic look for CEO Talks WEGE. Also featured: BRI Danareksa Sekuritas, Kadin for Naker, Satu Abad NU, LandX, Campuspreneur, BXB, gruu, and +62 Creative.',
    },
    tags: ['Logo Animation', 'Logo Reveal', 'Brand'],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
