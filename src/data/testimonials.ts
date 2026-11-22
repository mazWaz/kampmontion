export type Testimonial = {
  quote: string;
  author?: string; // omit when the reviewer is anonymous on the marketplace
  role: string;
  source: 'Fastwork' | 'Sribu';
};

export const testimonials: Testimonial[] = [
  { quote: 'Memuaskan, engga bertele-tele, sesuai yang diharapkan.', author: 'Randang', role: 'Sales Director', source: 'Fastwork' },
  { quote: 'Recommended, bakal order terus disini.', author: 'zatteyuy', role: 'Creative Director', source: 'Fastwork' },
  { quote: 'The best pokoknya, recommended freelancer!', role: 'Marketing Lead', source: 'Sribu' },
  { quote: 'Tepat waktu, hasil kerjaannya keren bangeett, puas pokoknyaa.', author: 'nmnoyses', role: 'Director', source: 'Fastwork' },
  { quote: 'Professional, dapat menyelesaikan pekerjaan tepat waktu dan sesuai arahan, kreatifitas yang bagus.', role: 'Brand Manager', source: 'Sribu' },
  { quote: 'Ramah dan berkualitas. Bakal reorder lagi.', author: 'rharsana', role: 'Sales Director', source: 'Fastwork' },
  { quote: 'Respon cepat, dapat mengikuti dan menginterpretasikan sesuai yang kami harapkan.', role: 'Producer', source: 'Sribu' },
  { quote: 'Selalu terbaik buat Kamp Motion.', role: 'Repeat client', source: 'Fastwork' },
];
