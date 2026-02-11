export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const COLLEGE_INFO = {
  name: 'SSKV College of Arts & Science for Women',
  shortName: 'SSKV College',
  location: 'Kilambi, Kanchipuram',
  affiliation: 'University of Madras',
  phone: ['044-27277880', '044-27277900'],
  email: ['sskvcollege@yahoo.com', 'sskvcollege2007@gmail.com'],
  instagram: 'https://www.instagram.com/sskv_college/',
  youtube: 'https://www.youtube.com/@sskvcollege',
  website: 'https://www.sskvcollege.com',
};
