import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImage, FaCamera, FaUserGraduate, FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import VideoEmbed from '../components/sections/VideoEmbed';
import { galleryImages } from '../data/gallery';
import { videos, images } from '../data/media';

const galleryCategories = [
  { id: 'all', label: 'All', icon: FaImage },
  { id: 'campus', label: 'Campus', icon: FaCamera },
  { id: 'events', label: 'Events', icon: FaCalendarAlt },
  { id: 'students', label: 'Students', icon: FaUserGraduate },
  { id: 'achievements', label: 'Achievements', icon: FaTrophy },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((item) => item.category === activeCategory);

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
        bannerImage={images.gallery.events[0]}
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
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300 flex items-end">
                    <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-semibold">{item.alt}</p>
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
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900">
                <img
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white text-lg font-semibold">{filtered[lightboxIndex].alt}</p>
                <p className="text-white/60 text-sm mt-2">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
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
          <VideoEmbed
            videoId={videos.campusTour.id}
            title={videos.campusTour.title}
          />
        </div>
      </section>
    </>
  );
}
