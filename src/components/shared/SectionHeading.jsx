import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/constants';

export default function SectionHeading({ title, subtitle, align = 'center', light = false }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${light ? 'text-white' : 'text-primary-800'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-accent-400 ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
