import { motion } from 'framer-motion';
import Button from '../shared/Button';

export default function CTABanner({
  title = 'Start Your Journey Today',
  subtitle = 'Join a community of empowered women. Discover programs that shape your future.',
  primaryAction = { label: 'Apply Now', href: '/admissions' },
  secondaryAction = { label: 'Contact Us', href: '/contact' },
}) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/70 max-w-2xl mx-auto mb-8"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="gold" size="lg" href={primaryAction.href}>
            {primaryAction.label}
          </Button>
          <Button variant="outline" size="lg" href={secondaryAction.href}>
            {secondaryAction.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
