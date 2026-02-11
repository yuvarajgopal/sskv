import StatCounter from '../shared/StatCounter';
import { stats } from '../../data/stats';

export default function StatsBar() {
  return (
    <section className="bg-primary-800 py-12 md:py-16">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              icon={stat.icon}
              endValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
