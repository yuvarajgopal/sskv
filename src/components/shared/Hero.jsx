import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export default function Hero({ title, subtitle, height = 'full', breadcrumb, children, overlay = true }) {
  const heightClass = height === 'full' ? 'min-h-screen' : height === 'medium' ? 'min-h-[50vh]' : 'min-h-[35vh]';

  return (
    <section className={`relative ${heightClass} flex items-center overflow-hidden`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-400/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent-400/5 blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      {overlay && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      )}

      <div className="relative z-10 w-full section-padding">
        <div className="container-custom">
          {/* Breadcrumb */}
          {breadcrumb && (
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm text-white/60 mb-6"
            >
              <Link to="/" className="hover:text-accent-400 transition-colors">Home</Link>
              <FaChevronRight className="text-xs" />
              <span className="text-accent-400">{breadcrumb}</span>
            </motion.nav>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`font-bold text-white leading-tight ${
              height === 'full'
                ? 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl'
                : 'text-3xl md:text-4xl lg:text-5xl max-w-3xl'
            }`}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`mt-4 md:mt-6 text-white/80 max-w-2xl ${
                height === 'full' ? 'text-lg md:text-xl lg:text-2xl' : 'text-lg md:text-xl'
              }`}
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTA buttons or additional content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator for full-height hero */}
      {height === 'full' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
