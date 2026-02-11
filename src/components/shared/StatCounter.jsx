import { useCountUp } from '../../hooks/useCountUp';

export default function StatCounter({ icon: Icon, endValue, suffix = '', label }) {
  const { ref, count } = useCountUp(endValue, 2000);

  return (
    <div ref={ref} className="text-center p-4 md:p-6">
      {Icon && <Icon className="text-3xl md:text-4xl text-accent-400 mx-auto mb-3" />}
      <div className="text-3xl md:text-4xl font-bold text-white font-body">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-white/70 mt-1 font-body">{label}</div>
    </div>
  );
}
