import type { Locale } from '../config/site';

// Region landing pages for local SEO. Indonesian regions live at /wilayah/{slug},
// international ones at /en/areas/{slug}; neither has a translation.
// Keep every claim true: `proof` names only real clients, `projects` are portfolio slugs.

export type Region = {
  slug: string;
  locale: Locale;
  /** Standalone name (links, breadcrumb). */
  label: string;
  /** Name inside a sentence; defaults to `label` ("the United States"). */
  name?: string;
  /** schema.org place for `areaServed`. */
  area: { '@type': 'AdministrativeArea' | 'Country' | 'Place'; name: string };
  h1: string;
  /** Full <title>; contains "Kamp Motion" so SEO.astro adds no suffix. */
  title: string;
  description: string;
  lead: string;
  cities: string[];
  proof: string;
  /** `service` is the Indonesian service slug. */
  needs: { title: string; text: string; service: string }[];
  projects: string[];
  /** Region-specific answer about meetings (ID) or time zones (EN). */
  meeting: string;
  /** Overrides the "do you have an office here?" answer (the home base). */
  office?: string;
};

export const regions: Region[] = [
  {
    slug: 'yogyakarta',
    locale: 'id',
    label: 'Yogyakarta',
    name: 'Jogja',
    area: { '@type': 'AdministrativeArea', name: 'Daerah Istimewa Yogyakarta' },
    h1: 'Jasa video animasi & motion graphic di Jogja',
    title: 'Jasa Video Animasi & Motion Graphic Jogja | Kamp Motion',
    description: 'Jasa video animasi 2D, motion graphic, dan video company profile di Jogja untuk kampus, UMKM, instansi, dan brand di Sleman, Bantul, dan seluruh DIY.',
    lead: 'Video animasi, motion graphic, dan video company profile untuk kampus, UMKM, instansi, dan brand di Jogja. Tim kami berbasis di Yogyakarta, jadi brief bisa dibahas langsung.',
    cities: ['Kota Yogyakarta', 'Sleman', 'Bantul', 'Kulon Progo', 'Gunungkidul'],
    proof: 'Klien kami di Jogja antara lain UGM, Pusaka Jawa UGM, dan UNU Jogja.',
    needs: [
      { title: 'Video profil kampus', text: 'Profil kampus dan sekolah untuk penerimaan mahasiswa baru, akreditasi, dan kerja sama.', service: 'video-company-profile' },
      { title: 'Materi pembelajaran', text: 'Animasi 2D untuk kuliah daring, pelatihan, dan materi sosialisasi yang mudah diikuti.', service: 'animasi-2d' },
      { title: 'Promosi UMKM dan wisata', text: 'Motion graphic pendek untuk produk lokal, kafe, dan tempat wisata di marketplace dan media sosial.', service: 'motion-graphic' },
    ],
    projects: ['united-tractors-teamworking', 'upps-me-explainer', 'logo-animation-reel'],
    meeting: 'Bisa. Tim kami berbasis di Yogyakarta, jadi meeting tatap muka atau syuting di Jogja mudah diatur. Sampaikan jadwal dan lokasinya saat konsultasi.',
    office: 'Tim Kamp Motion berbasis di Yogyakarta, jadi klien di Jogja bisa bertemu langsung. Klien di luar kota kami layani jarak jauh lewat WhatsApp atau video call.',
  },
  {
    slug: 'jakarta',
    locale: 'id',
    label: 'Jakarta',
    area: { '@type': 'AdministrativeArea', name: 'DKI Jakarta' },
    h1: 'Jasa video animasi & motion graphic di Jakarta',
    title: 'Jasa Video Animasi & Motion Graphic Jakarta | Kamp Motion',
    description: 'Jasa video animasi 2D, motion graphic, bumper acara, dan video company profile untuk kementerian, BUMN, korporat, dan startup di Jakarta.',
    lead: 'Video animasi, motion graphic, dan bumper acara untuk kementerian, BUMN, korporat, dan startup di Jakarta. Brief lewat WhatsApp atau video call, hasil dikirim online.',
    cities: ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara', 'Tangerang', 'Tangerang Selatan'],
    proof: 'Klien kami di Jakarta antara lain Bappenas, Komdigi, KADIN DKI Jakarta, KORMI DKI Jakarta, Bank Mandiri, dan TikTok Indonesia.',
    needs: [
      { title: 'Opening dan bumper acara', text: 'Konferensi, peluncuran produk, dan acara pemerintah butuh video pembuka yang siap tayang di layar LED panggung.', service: 'video-bumper-event' },
      { title: 'Explainer program dan kebijakan', text: 'Program kementerian dan lembaga dijelaskan lewat motion graphic yang mudah dipahami publik.', service: 'motion-graphic' },
      { title: 'Profil perusahaan', text: 'Video company profile untuk investor, tender, rekrutmen, dan presentasi ke mitra.', service: 'video-company-profile' },
    ],
    projects: ['tiktok-komdigi-event-bumper', 'kadin-for-naker-explainer', 'bri-danareksa-sekuritas-opening'],
    meeting: 'Sebagian besar klien Jakarta kami layani jarak jauh tanpa kendala. Kalau perlu meeting atau syuting di lokasi, sampaikan jadwal dan tempatnya saat konsultasi, lalu kami cek kemungkinan dan biayanya.',
  },
  {
    slug: 'jawa-barat',
    locale: 'id',
    label: 'Jawa Barat',
    area: { '@type': 'AdministrativeArea', name: 'Jawa Barat' },
    h1: 'Jasa video animasi & motion graphic di Jawa Barat',
    title: 'Jasa Video Animasi Bandung & Jawa Barat | Kamp Motion',
    description: 'Jasa video animasi 2D, motion graphic, dan video profil untuk perusahaan, kampus, dan startup di Bandung, Bekasi, Bogor, Depok, dan seluruh Jawa Barat.',
    lead: 'Video animasi dan motion graphic untuk perusahaan, kampus, dan startup di Bandung, Bekasi, Bogor, Depok, hingga Cirebon. Semua tahap bisa dikerjakan jarak jauh.',
    cities: ['Bandung', 'Bekasi', 'Bogor', 'Depok', 'Karawang', 'Cimahi', 'Cirebon', 'Sukabumi', 'Tasikmalaya'],
    proof: 'Telkom Indonesia, yang berkantor pusat di Bandung, termasuk klien kami.',
    needs: [
      { title: 'Video pelatihan untuk pabrik', text: 'Kawasan industri Bekasi dan Karawang butuh materi training yang sama untuk banyak shift. Animasi 2D membuat prosedur mudah diikuti.', service: 'animasi-2d' },
      { title: 'Explainer produk teknologi', text: 'Startup dan perusahaan teknologi di Bandung menjelaskan produknya dalam satu sampai dua menit lewat motion graphic.', service: 'motion-graphic' },
      { title: 'Video profil kampus', text: 'Profil kampus dan sekolah untuk penerimaan mahasiswa baru, akreditasi, dan media sosial.', service: 'video-company-profile' },
    ],
    projects: ['united-tractors-teamworking', 'upps-me-explainer', 'kadin-for-naker-explainer'],
    meeting: 'Proyek dari Jawa Barat kami kerjakan jarak jauh: brief lewat video call, review lewat tautan. Kalau perlu syuting di lokasi, sampaikan saat konsultasi agar kami cek jadwal dan biayanya.',
  },
  {
    slug: 'jawa-tengah',
    locale: 'id',
    label: 'Jawa Tengah',
    area: { '@type': 'AdministrativeArea', name: 'Jawa Tengah' },
    h1: 'Jasa video animasi & motion graphic di Jawa Tengah',
    title: 'Jasa Video Animasi Semarang & Jawa Tengah | Kamp Motion',
    description: 'Jasa video animasi 2D, motion graphic, dan video profil untuk UMKM, kampus, dan instansi di Semarang, Solo, dan seluruh Jawa Tengah. Studio di Yogyakarta.',
    lead: 'Video animasi, motion graphic, dan video profil untuk UMKM, kampus, dan instansi di Semarang, Solo, dan kota lain di Jawa Tengah. Studio kami di Yogyakarta, bertetangga langsung dengan Jawa Tengah.',
    cities: ['Semarang', 'Surakarta (Solo)', 'Magelang', 'Klaten', 'Salatiga', 'Purwokerto', 'Pekalongan', 'Kudus', 'Jepara', 'Tegal'],
    proof: 'Dari Yogyakarta, kami sudah bekerja dengan UGM, Pusaka Jawa UGM, dan UNU Jogja.',
    needs: [
      { title: 'Promosi produk UMKM', text: 'Batik, mebel, dan produk olahan dikenalkan lewat motion graphic pendek untuk marketplace dan media sosial.', service: 'motion-graphic' },
      { title: 'Video profil kampus dan sekolah', text: 'Profil institusi untuk penerimaan mahasiswa baru, akreditasi, dan kerja sama.', service: 'video-company-profile' },
      { title: 'Animasi sosialisasi', text: 'Instansi daerah menyampaikan program dan aturan baru lewat animasi 2D yang mudah dipahami warga.', service: 'animasi-2d' },
    ],
    projects: ['upps-me-explainer', 'united-tractors-teamworking', 'logo-animation-reel'],
    meeting: 'Studio kami di Yogyakarta, jadi pertemuan langsung dengan klien di Solo, Klaten, Magelang, dan sekitarnya lebih mudah diatur. Sampaikan jadwalnya saat konsultasi.',
  },
  {
    slug: 'jawa-timur',
    locale: 'id',
    label: 'Jawa Timur',
    area: { '@type': 'AdministrativeArea', name: 'Jawa Timur' },
    h1: 'Jasa video animasi & motion graphic di Jawa Timur',
    title: 'Jasa Video Animasi Surabaya & Jawa Timur | Kamp Motion',
    description: 'Jasa video animasi 2D, motion graphic, video company profile, dan bumper acara untuk kampus, industri, dan organisasi di Surabaya, Malang, dan seluruh Jawa Timur.',
    lead: 'Video animasi, motion graphic, dan video company profile untuk kampus, industri, dan organisasi di Surabaya, Malang, Sidoarjo, dan kota lain di Jawa Timur.',
    cities: ['Surabaya', 'Malang', 'Sidoarjo', 'Gresik', 'Kediri', 'Jember', 'Mojokerto', 'Pasuruan', 'Madiun', 'Banyuwangi'],
    proof: 'Kami membuat video company profile untuk Universitas Nahdlatul Ulama Surabaya (UNUSA).',
    needs: [
      { title: 'Video profil kampus dan pesantren', text: 'Profil institusi untuk penerimaan mahasiswa dan santri baru, akreditasi, dan kerja sama.', service: 'video-company-profile' },
      { title: 'Video pelatihan untuk industri', text: 'Pabrik di Gresik, Sidoarjo, dan Pasuruan memakai animasi 2D untuk materi K3 dan prosedur kerja.', service: 'animasi-2d' },
      { title: 'Bumper acara dan wisuda', text: 'Video pembuka untuk wisuda, seminar, dan acara organisasi, siap tayang di layar panggung.', service: 'video-bumper-event' },
    ],
    projects: ['united-tractors-teamworking', 'kadin-for-naker-explainer', 'tiktok-komdigi-event-bumper'],
    meeting: 'Proyek dari Jawa Timur kami kerjakan jarak jauh: brief lewat video call, review lewat tautan. Kalau perlu syuting di lokasi, sampaikan saat konsultasi agar kami cek jadwal dan biayanya.',
  },
  {
    slug: 'bali',
    locale: 'id',
    label: 'Bali',
    area: { '@type': 'AdministrativeArea', name: 'Bali' },
    h1: 'Jasa video animasi & motion graphic di Bali',
    title: 'Jasa Video Animasi & Motion Graphic Bali | Kamp Motion',
    description: 'Jasa motion graphic, editing video promosi, dan bumper acara untuk hotel, resort, villa, dan penyelenggara event di Denpasar, Badung, Gianyar, dan seluruh Bali.',
    lead: 'Video promosi, motion graphic, dan bumper acara untuk hotel, resort, villa, dan penyelenggara event di seluruh Bali. Naskah dan narasi bisa dalam bahasa Indonesia atau Inggris.',
    cities: ['Denpasar', 'Badung', 'Nusa Dua', 'Canggu', 'Ubud', 'Tabanan', 'Singaraja', 'Karangasem', 'Klungkung'],
    proof: 'HLF MSP dan Indonesia-Africa Forum 2024 yang digelar di Nusa Dua termasuk klien kami.',
    needs: [
      { title: 'Video promosi hotel dan villa', text: 'Footage kamar, fasilitas, dan suasana diolah menjadi video promosi untuk OTA, situs, dan media sosial.', service: 'editing-video' },
      { title: 'Opening konferensi dan MICE', text: 'Video pembuka untuk konferensi internasional, gala dinner, dan acara korporat di layar LED panggung.', service: 'video-bumper-event' },
      { title: 'Logo animation untuk brand', text: 'Logo bergerak untuk restoran, beach club, dan brand lokal, dipakai di intro video dan media sosial.', service: 'logo-animation' },
    ],
    projects: ['tiktok-komdigi-event-bumper', 'logo-animation-reel', 'bri-danareksa-sekuritas-opening'],
    meeting: 'Klien di Bali kami layani jarak jauh: brief lewat video call, review lewat tautan, file final dikirim online. Kalau perlu syuting di lokasi, sampaikan saat konsultasi agar kami cek jadwal dan biayanya.',
  },  {
    slug: 'united-states',
    locale: 'en',
    label: 'United States',
    name: 'the United States',
    area: { '@type': 'Country', name: 'United States' },
    h1: 'Animation and motion graphics for teams in the United States',
    title: '2D Animation & Motion Graphics Studio for US Companies | Kamp Motion',
    description: 'Explainer videos, 2D animation, and logo animation for US startups, SaaS companies, and agencies, produced remotely by a studio in Indonesia.',
    lead: 'Explainer videos, 2D animation, and logo animation for startups, SaaS companies, and agencies across the US. Briefs over video call, reviews through shared links, final files delivered online.',
    cities: ['New York', 'San Francisco', 'Los Angeles', 'Austin', 'Seattle', 'Chicago', 'Boston', 'Miami'],
    proof: 'Our clients include Microsoft (Berpijar program), TikTok Indonesia, and the Indonesia Pavilion at Expo 2025 Osaka.',
    needs: [
      { title: 'Product explainers', text: 'A one- to two-minute motion graphics video that shows what your software does, for landing pages, sales decks, and ads.', service: 'motion-graphic' },
      { title: 'Training and onboarding', text: '2D animated lessons that keep procedures consistent across teams and locations.', service: 'animasi-2d' },
      { title: 'Logo animation', text: 'A short animated logo for video intros, social media, and event screens.', service: 'logo-animation' },
    ],
    projects: ['upps-me-explainer', 'united-tractors-teamworking', 'logo-animation-reel'],
    meeting: 'We are 11–12 hours ahead of New York and 14–15 hours ahead of Los Angeles, depending on daylight saving. Feedback you send at the end of your day reaches us at the start of ours, so revisions move while you sleep. Calls fit your early morning or evening.',
  },
  {
    slug: 'europe',
    locale: 'en',
    label: 'Europe',
    area: { '@type': 'Place', name: 'Europe' },
    h1: 'Animation and motion graphics for teams in Europe',
    title: 'Motion Graphics & 2D Animation Studio for Europe | Kamp Motion',
    description: 'Motion graphics, event openers, and video editing for European tech companies, agencies, and conference organisers, produced remotely by a studio in Indonesia.',
    lead: 'Motion graphics, event openers, and video editing for tech companies, agencies, and conference organisers across Europe. Your morning overlaps our afternoon, so calls and reviews happen the same day.',
    cities: ['London', 'Amsterdam', 'Berlin', 'Paris', 'Dublin', 'Stockholm', 'Barcelona', 'Zurich'],
    proof: 'Our clients include Microsoft (Berpijar program), TikTok Indonesia, and United Tractors, and we produced the logo animation for the Indonesia Pavilion at Expo 2025 Osaka.',
    needs: [
      { title: 'B2B explainers', text: 'Motion graphics that turn a complex product or policy into a short video people can follow.', service: 'motion-graphic' },
      { title: 'Conference openers', text: 'Opening sequences and bumpers sized for LED stage screens at conferences and product launches.', service: 'video-bumper-event' },
      { title: 'Editing for content teams', text: 'Cutting, colour, sound, and captions for footage your team already has.', service: 'editing-video' },
    ],
    projects: ['kadin-for-naker-explainer', 'tiktok-komdigi-event-bumper', 'upps-me-explainer'],
    meeting: 'We are 5–7 hours ahead of most of Europe, depending on country and daylight saving. Our afternoon overlaps your morning, which is when we schedule calls and live reviews.',
  },
  {
    slug: 'middle-east',
    locale: 'en',
    label: 'Middle East',
    name: 'the Middle East',
    area: { '@type': 'Place', name: 'Middle East' },
    h1: 'Animation and motion graphics for teams in the Middle East',
    title: 'Motion Graphics & Animation Studio for the Middle East | Kamp Motion',
    description: 'Company profile videos, event openers, and motion graphics for institutions, government programmes, and companies in the UAE, Saudi Arabia, Qatar, and the wider Gulf.',
    lead: 'Company profile videos, event openers, and motion graphics for institutions, government programmes, and companies in the UAE, Saudi Arabia, Qatar, and the wider Gulf.',
    cities: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Jeddah', 'Doha', 'Muscat', 'Manama', 'Kuwait City'],
    proof: 'We produced a company profile video for the Mohamed bin Zayed College for Future Studies in the UAE, and motion graphics for the Indonesia–MENA Expert Exchange.',
    needs: [
      { title: 'Institutional profile videos', text: 'Company and institution profiles for partners, delegations, and official events.', service: 'video-company-profile' },
      { title: 'Openers for forums and expos', text: 'Opening sequences and bumpers sized for LED stage screens at forums, expos, and launches.', service: 'video-bumper-event' },
      { title: 'Programme explainers', text: 'Motion graphics that explain an initiative, its goals, and how to take part.', service: 'motion-graphic' },
    ],
    projects: ['tiktok-komdigi-event-bumper', 'kadin-for-naker-explainer', 'bri-danareksa-sekuritas-opening'],
    meeting: 'We are 3–4 hours ahead of the Gulf, so most of your working day overlaps ours. Calls and reviews happen in your morning and early afternoon.',
  },
];

export const regionPath = (r: Region) => (r.locale === 'id' ? `/wilayah/${r.slug}` : `/en/areas/${r.slug}`);
export const regionsFor = (locale: Locale) => regions.filter((r) => r.locale === locale);
