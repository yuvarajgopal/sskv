// Media assets configuration for the website

// YouTube Videos - Replace these IDs with actual SSKV College videos
export const videos = {
  // Homepage - Campus Life/Overview
  campusLife: {
    id: 'RK1K2bCg4J8', // Sample: Women's college campus tour
    title: 'SSKV College Campus Life',
    description: 'Experience the vibrant campus life at SSKV College'
  },

  // Gallery Page - Campus Tour
  campusTour: {
    id: 'jNQXAC9IVRw', // Sample: College campus virtual tour
    title: 'SSKV College Campus Tour',
    description: 'Take a virtual tour of our beautiful campus facilities'
  },

  // About Page - College Overview (if needed)
  collegeOverview: {
    id: '3qHkcs3kG44', // Sample: Women's education empowerment
    title: 'About SSKV College',
    description: 'Our mission to empower women through education'
  }
};

// Actual SSKV College images from sskvcollege.com
export const images = {
  // Home Page Images
  home: {
    hero: '/images/home/hero.jpg', // College main entrance gate
    welcomeSection: '/images/home/campus.jpg', // Campus building with college bus
    campusView: '/images/home/campus.jpg', // Campus building view
    students: '/images/home/students.jpg', // Students in auditorium
  },

  // About Page Images
  about: {
    banner: '/images/about/banner.jpg', // College entrance gate
    building: '/images/about/building.jpg', // Campus building with college bus
    graduation: '/images/about/graduation.jpg', // Student receiving degree on stage
    leadership: '/images/gallery/img7.jpg', // Faculty and leadership group photo
  },

  // Academics Page Images
  academics: {
    banner: '/images/academics/banner.jpg', // Students gathering in auditorium
    library: '/images/academics/library.jpg', // Library with students studying
    computerLab: '/images/academics/computer-lab.jpg', // Computer lab with students
    classroom: '/images/academics/classroom.jpg', // Students in auditorium
    laboratory: '/images/academics/computer-lab.jpg', // Lab facility
    students: '/images/home/students.jpg', // Students in auditorium
  },

  // Admissions Page Images
  admissions: {
    banner: '/images/admissions/banner.jpg', // Student receiving degree - inspiring for admissions
  },

  // Gallery Page Images - Real SSKV College photos
  gallery: {
    campus: [
      '/images/home/hero.jpg', // College main entrance gate
      '/images/gallery/img1.jpg', // Campus building with college bus
      '/images/gallery/auditorium.jpg', // Vedanta Auditorium
      '/images/academics/library.jpg', // College library
    ],
    events: [
      '/images/gallery/img2.jpg', // Graduation day ceremony - dignitaries on stage
      '/images/gallery/img5.jpg', // Graduation day - student speaking at podium
      '/images/gallery/img6.jpg', // Graduation ceremony - shawl ceremony
      '/images/gallery/img8.jpg', // Graduation day - dignitaries at table
    ],
    students: [
      '/images/gallery/img3.jpg', // Students and faculty in auditorium
      '/images/gallery/img7.jpg', // Faculty group photo with dignitaries
      '/images/gallery/img11.jpg', // Students in computer lab
      '/images/gallery/nss-rally.jpg', // NSS unit rally with banner
    ],
    academics: [
      '/images/gallery/img11.jpg', // Computer lab
      '/images/gallery/img12.jpg', // Library
      '/images/gallery/auditorium.jpg', // Vedanta Auditorium
      '/images/gallery/img3.jpg', // Students in auditorium
    ],
    achievements: [
      '/images/gallery/img9.jpg', // Student receiving degree certificate
      '/images/gallery/img4.jpg', // Graduation ceremony close-up
      '/images/gallery/achievers.jpg', // University rank achievers poster
      '/images/gallery/img2.jpg', // Graduation day ceremony
    ],
  },

  // Contact Page Images
  contact: {
    banner: '/images/contact/banner.jpg', // College entrance gate
    office: '/images/home/campus.jpg', // Campus building
  },

  // General/Shared Images
  general: {
    placeholder: '/images/home/hero.jpg', // College entrance as default
    noImage: '/images/home/campus.jpg', // Campus building as fallback
    logo: '/images/logo/logo.jpeg', // SSKV College logo
  }
};

// Helper function to get image URL with fallback
export function getImageUrl(category, key, fallback = images.general.placeholder) {
  try {
    if (category && key && images[category] && images[category][key]) {
      return images[category][key];
    }
    return fallback;
  } catch (error) {
    return fallback;
  }
}

// Helper function to get gallery images by category
export function getGalleryImages(category = 'all') {
  if (category === 'all') {
    return Object.values(images.gallery).flat();
  }
  return images.gallery[category] || [];
}
