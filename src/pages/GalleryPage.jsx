import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImage, FaCamera, FaUserGraduate, FaRunning, FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import VideoEmbed from '../components/sections/VideoEmbed';

const galleryCategories = [
  { id: 'all', label: 'All', icon: FaImage },
  { id: 'campus', label: 'Campus', icon: FaCamera },
  { id: 'events', label: 'Events', icon: FaCalendarAlt },
  { id: 'students', label: 'Students', icon: FaUserGraduate },
  { id: 'sports', label: 'Sports', icon: FaRunning },
  { id: 'achievements', label: 'Achievements', icon: FaTrophy },
];

// Generate placeholder gallery items with varied colors
const galleryItems = [
  { id: 1, title: 'College Main Building', category: 'campus', color: '#1e3a5f' },
  { id: 2, title: 'Annual Day Celebration', category: 'events', color: '#c0392b' },
  { id: 3, title: 'Sports Day - Athletic Meet', category: 'sports', color: '#27ae60' },
  { id: 4, title: 'NSS Camp Activities', category: 'students', color: '#2980b9' },
  { id: 5, title: 'College Library', category: 'campus', color: '#8e44ad' },
  { id: 6, title: 'Cultural Program', category: 'events', color: '#d35400' },
  { id: 7, title: 'Student Achievements', category: 'achievements', color: '#d4a843' },
  { id: 8, title: 'Computer Lab', category: 'campus', color: '#16a085' },
  { id: 9, title: 'Republic Day Celebration', category: 'events', color: '#e74c3c' },
  { id: 10, title: 'Sports Champions', category: 'sports', color: '#2ecc71' },
  { id: 11, title: 'Classroom Session', category: 'students', color: '#3498db' },
  { id: 12, title: 'College Entrance', category: 'campus', color: '#1e3a5f' },
  { id: 13, title: 'Seminar Hall', category: 'events', color: '#9b59b6' },
  { id: 14, title: 'Award Ceremony', category: 'achievements', color: '#f39c12' },
  { id: 15, title: 'NCC Parade', category: 'students', color: '#34495e' },
  { id: 16, title: 'College Garden', category: 'campus', color: '#27ae60' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  function openLightbox(index) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevImage() {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
  }

  function nextImage() {
    setLightboxIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
  }

  return (
    <>
      <Hero
        title="Photo Gallery"
        subtitle="Capturing moments of learning, growth, and celebration"
        height="medium"
        breadcrumb="Gallery"
      />

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold font-body transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-accent-400 text-primary-900'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                <cat.icon className="text-xs" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openLightbox(index)}
                  className="cursor-pointer group relative overflow-hidden rounded-xl shadow-md"
                >
                  <div
                    className="aspect-[4/3] flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)` }}
                  >
                    <FaCamera className="text-4xl text-white/30 group-hover:text-white/50 transition-all" />
                  </div>
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300 flex items-end">
                    <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-semibold">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-primary-900/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-3 z-10"
              aria-label="Close"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white/70 hover:text-white p-3 z-10"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl w-full mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="aspect-[16/10] rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${filtered[lightboxIndex].color}, ${filtered[lightboxIndex].color}bb)`,
                }}
              >
                <div className="text-center text-white">
                  <FaCamera className="text-6xl mx-auto mb-4 opacity-40" />
                  <p className="text-xl font-heading font-bold">{filtered[lightboxIndex].title}</p>
                  <p className="text-white/50 text-sm mt-1">Image placeholder — actual photo will appear here</p>
                </div>
              </div>
              <p className="text-white/60 text-center text-sm mt-4">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white/70 hover:text-white p-3 z-10"
              aria-label="Next"
            >
              <FaChevronRight className="text-2xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Campus Video Tour */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Campus Video Tour"
            subtitle="Take a virtual tour of our beautiful campus"
          />
          <VideoEmbed title="SSKV College Campus Tour" />
        </div>
      </section>
    </>
  );
}
