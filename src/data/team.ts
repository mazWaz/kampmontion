import type { Locale } from '../config/site';

export type Member = {
  name: string;
  role: Record<Locale, string>;
  bio: Record<Locale, string>;
};

export const team: Member[] = [
  {
    name: 'Suryaningsih',
    role: { id: 'Founder', en: 'Founder' },
    bio: {
      id: 'Pendiri Kamp Motion Studio, fokus pada strategi kreatif dan kemitraan klien jangka panjang.',
      en: 'Founder of Kamp Motion Studio, focused on creative strategy and long-term client partnerships.',
    },
  },
  {
    name: 'Umar Akbar',
    role: { id: 'Creative Director', en: 'Creative Director' },
    bio: {
      id: 'Memimpin arah kreatif, storytelling, dan integrasi AI dalam workflow produksi.',
      en: 'Leads creative direction, storytelling, and AI integration in production workflows.',
    },
  },
  {
    name: 'Kharisma',
    role: { id: 'Videografer', en: 'Videographer' },
    bio: {
      id: 'Spesialis sinematografi dan produksi video on-location.',
      en: 'Specialist in cinematography and on-location video production.',
    },
  },
  {
    name: 'Syam',
    role: { id: 'Video Editor', en: 'Video Editor' },
    bio: {
      id: 'Editor video dengan keahlian color grading, sound design, dan AI-assisted editing.',
      en: 'Video editor with expertise in color grading, sound design, and AI-assisted editing.',
    },
  },
];
