import { motion } from 'framer-motion';

export default function Hero({ title, subtitle, height = 'full', breadcrumb, bannerImage, children, overlay = true }) {
  const isInnerPage = height !== 'full' && breadcrumb;

  return (
    <>
      {/* Inner page banner */}
      {isInnerPage && (
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          {/* Background image or gradient fallback */}
          {bannerImage ? (
            <div className="absolute inset-0">
              <img
                src={bannerImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900" />
          )}

          {/* Decorative blurs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent-400/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-400/15 blur-3xl" />
          </div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-primary-900/40" />

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
          {/* Background image if provided, otherwise gradient */}
          {bannerImage ? (
            <div className="absolute inset-0">
              <img
                src={bannerImage}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-700/80" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
          )}

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
