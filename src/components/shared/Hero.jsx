import { motion } from 'framer-motion';
import { FaPlay, FaImage } from 'react-icons/fa';

export default function Hero({ title, subtitle, height = 'full', breadcrumb, bannerType = 'image', children, overlay = true }) {
  const isInnerPage = height !== 'full' && breadcrumb;

  return (
    <>
      {/* Inner page banner image/video placeholder */}
      {isInnerPage && (
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          {/* Placeholder background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900" />

          {/* Simulated image pattern */}
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          {/* Decorative blurs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent-400/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-400/15 blur-3xl" />
          </div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-primary-900/40" />

          {/* Banner placeholder icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {bannerType === 'video' ? (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 group">
                  <FaPlay className="text-2xl md:text-3xl text-white/70 group-hover:text-accent-400 transition-colors ml-1" />
                </div>
                <span className="text-white/30 text-xs mt-3 tracking-widest uppercase">Watch Video</span>
              </div>
            ) : (
              <div className="flex flex-col items-center opacity-20">
                <FaImage className="text-6xl md:text-8xl text-white" />
                <span className="text-white text-xs mt-3 tracking-widest uppercase">Banner Image</span>
              </div>
            )}
          </motion.div>

          {/* Content overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent pt-20 pb-8 md:pb-12">
            <div className="section-padding !py-0">
              <div className="container-custom">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl"
                >
                  {title}
                </motion.h1>

                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-3 md:mt-4 text-lg md:text-xl text-white/80 max-w-2xl"
                  >
                    {subtitle}
                  </motion.p>
                )}

                {children && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-6 flex flex-wrap gap-4"
                  >
                    {children}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full-height hero (homepage) */}
      {!isInnerPage && (
        <section className={`relative ${height === 'full' ? 'min-h-screen' : height === 'medium' ? 'min-h-[50vh]' : 'min-h-[35vh]'} flex items-center overflow-hidden`}>
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
      )}
    </>
  );
}
