import { motion } from 'framer-motion';
import Card from '../shared/Card';
import { events } from '../../data/events';

export default function EventsTimeline({ limit = 6 }) {
  const displayed = events.slice(0, limit);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-200 hidden md:block" />

      <div className="space-y-4">
        {displayed.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="md:pl-20 relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-accent-400 border-4 border-accent-100 hidden md:block" />

            <Card
              variant="event"
              title={event.title}
              description={event.description}
              badge={event.date}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
