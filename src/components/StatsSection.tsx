'use client';

import { stats } from '@/lib/data';
import { useCounter } from '@/lib/hooks';

const statCardThemes = [
  {
    bg: 'from-saffron-950/50 via-navy-950/70 to-navy-900/80',
    border: 'border-saffron-500/40 hover:border-saffron-400',
    glow: 'hover:shadow-[0_0_25px_rgba(255,103,31,0.25)]',
    numColor: 'text-white',
    suffixColor: 'text-saffron-400',
    iconBg: 'bg-saffron-500/15 border-saffron-500/30 text-saffron-300',
  },
  {
    bg: 'from-emerald-950/50 via-navy-950/70 to-navy-900/80',
    border: 'border-emerald-500/40 hover:border-emerald-400',
    glow: 'hover:shadow-[0_0_25px_rgba(18,172,60,0.25)]',
    numColor: 'text-white',
    suffixColor: 'text-tiranga-400',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
  },
  {
    bg: 'from-sky-950/50 via-navy-950/70 to-navy-900/80',
    border: 'border-iaf-500/40 hover:border-iaf-400',
    glow: 'hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]',
    numColor: 'text-white',
    suffixColor: 'text-iaf-300',
    iconBg: 'bg-iaf-500/15 border-iaf-500/30 text-iaf-300',
  },
  {
    bg: 'from-amber-950/50 via-navy-950/70 to-navy-900/80',
    border: 'border-gold-400/40 hover:border-gold-300',
    glow: 'hover:shadow-[0_0_25px_rgba(234,179,8,0.25)]',
    numColor: 'text-white',
    suffixColor: 'text-gold-400',
    iconBg: 'bg-amber-500/15 border-gold-400/30 text-gold-300',
  },
];

function StatCounter({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useCounter(stat.value);
  const theme = statCardThemes[index % statCardThemes.length];

  return (
    <div
      ref={ref}
      className={`relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br ${theme.bg} border-2 ${theme.border} ${theme.glow} backdrop-blur-md text-center transition-all duration-300 hover:-translate-y-1.5 shadow-xl`}
    >
      <div className={`w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center text-2xl border ${theme.iconBg} shadow-sm`} aria-hidden="true">
        {stat.icon}
      </div>
      <div className={`font-heading text-4xl sm:text-5xl font-extrabold ${theme.numColor} mb-2 tracking-tight`} aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
        {count}<span className={theme.suffixColor}>{stat.suffix}</span>
      </div>
      <p className="text-white/85 text-xs sm:text-sm font-semibold tracking-wide uppercase">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-navy-950" aria-label="Association statistics">
      {/* Background with subtle color tints */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      {/* Decorative Tricolor subtle lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 via-white to-tiranga-500 opacity-60" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tiranga-500 via-white to-saffron-500 opacity-60" aria-hidden="true" />

      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-saffron-500/10 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-tiranga-500/10 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
