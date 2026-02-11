import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../shared/Card';
import { departments, categories } from '../../data/departments';
import { staggerContainer, fadeInUp } from '../../utils/constants';

export default function DepartmentGrid({ limit, showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? departments
    : departments.filter((d) => d.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {/* Filter tabs */}
      {showFilter && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold font-body transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-accent-400 text-primary-900'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="wait">
          {displayed.map((dept) => (
            <motion.div
              key={dept.id}
              variants={fadeInUp}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                variant="department"
                title={dept.degree}
                description={dept.description}
                icon={dept.icon}
                color={dept.color}
                badge={dept.shifts ? `${dept.shifts.length} Shifts` : null}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
