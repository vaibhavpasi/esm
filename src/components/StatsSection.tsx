'use client';

import { stats } from '@/lib/data';
import { useCounter } from '@/lib/hooks';

function StatCounter({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCounter(stat.value);

  return (
    <div ref={ref} className="text-center px-4">
      <span className="text-3xl mb-3 block" aria-hidden="true">{stat.icon}</span>
      <div className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
        {count}<span className="text-saffron-400">{stat.suffix}</span>
      </div>
      <p className="text-white/70 text-sm font-medium">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden" aria-label="Association statistics">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron-500/50 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron-500/50 to-transparent" aria-hidden="true" />

      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/5 animate-float-slow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-white/5 animate-drift pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
