export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  source: 'Fastwork' | 'Sribu';
};

export const testimonials: Testimonial[] = [
  { quote: 'Memuaskan, engga bertele-tele, sesuai yang diharapkan.', author: 'Randang', role: 'Sales Director', source: 'Fastwork' },
  { quote: 'Recommended, bakal order terus disini.', author: 'zatteyuy', role: 'Creative Director', source: 'Fastwork' },
  { quote: 'The best pokoknya, recommended freelancer!', author: 'Client', role: 'Marketing Lead', source: 'Sribu' },
  { quote: 'Tepat waktu, hasil kerjaannya keren bangeett, puas pokoknyaa.', author: 'nmnoyses', role: 'Director', source: 'Fastwork' },
  { quote: 'Professional, dapat menyelesaikan pekerjaan tepat waktu dan sesuai arahan, kreatifitas yang bagus.', author: 'Client', role: 'Brand Manager', source: 'Sribu' },
  { quote: 'Ramah dan berkualitas. Bakal reorder lagi.', author: 'rharsana', role: 'Sales Director', source: 'Fastwork' },
  { quote: 'Respon cepat, dapat mengikuti dan menginterpretasikan sesuai yang kami harapkan.', author: 'Client', role: 'Producer', source: 'Sribu' },
  { quote: 'Selalu terbaik buat Kamp Motion.', author: 'Repeat Client', role: 'Client', source: 'Fastwork' },
];
