import { motion } from 'framer-motion';

export default function Card({ title, description, icon: Icon, color, badge, variant = 'feature', className = '', onClick }) {
  if (variant === 'department') {
    return (
      <motion.div
        whileHover={{ y: -8 }}
        className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white ${className}`}
        onClick={onClick}
      >
        {/* Color bar top */}
        <div className="h-2" style={{ backgroundColor: color }} />

        <div className="p-6">
          {/* Icon */}
          {Icon && (
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${color}15` }}
            >
              <Icon className="text-2xl" style={{ color }} />
            </div>
          )}

          {/* Badge */}
          {badge && (
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent-50 text-accent-700 mb-3">
              {badge}
            </span>
          )}

          <h3 className="text-lg font-bold text-primary-800 font-heading mb-2">{title}</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    );
  }

  if (variant === 'event') {
    return (
      <motion.div
        whileHover={{ x: 4 }}
        className={`flex gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
      >
        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-accent-400 flex items-center justify-center">
          <span className="text-sm font-bold text-primary-900 text-center leading-tight">{badge}</span>
        </div>
        <div>
          <h3 className="text-base font-bold text-primary-800 font-heading">{title}</h3>
          <p className="text-sm text-neutral-600 mt-1">{description}</p>
        </div>
      </motion.div>
    );
  }

  if (variant === 'gallery') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${className}`}
        onClick={onClick}
      >
        <div
          className="aspect-[4/3] flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${color || '#382e27'}, ${color || '#382e27'}cc)` }}
        >
          {Icon && <Icon className="text-5xl text-white/40" />}
        </div>
        <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/50 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
            {title}
          </span>
        </div>
      </motion.div>
    );
  }

  // Default: feature variant
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`p-6 md:p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center ${className}`}
    >
      {Icon && (
        <div className="w-16 h-16 rounded-full bg-accent-400 flex items-center justify-center mx-auto mb-5">
          <Icon className="text-2xl text-primary-900" />
        </div>
      )}
      <h3 className="text-xl font-bold text-white font-heading mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </motion.div>
  );
}
