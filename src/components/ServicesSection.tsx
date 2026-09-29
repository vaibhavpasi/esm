'use client';

import Link from 'next/link';
import { services } from '@/lib/data';
import { useReveal } from '@/lib/hooks';

const serviceColors: Record<string, {
  iconBg: string;
  accentBar: string;
  tag: string;
  tagColor: string;
  btnHover: string;
}> = {
  'pension-orop': {
    iconBg: 'bg-amber-50 text-amber-600 border border-amber-200/80 shadow-amber-500/10',
    accentBar: 'from-amber-400 via-gold-500 to-amber-600',
    tag: 'SPARSH / OROP',
    tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
    btnHover: 'hover:text-amber-600',
  },
  'welfare-schemes': {
    iconBg: 'bg-orange-50 text-saffron-600 border border-orange-200/80 shadow-orange-500/10',
    accentBar: 'from-saffron-500 via-orange-500 to-amber-500',
    tag: 'Govt Schemes',
    tagColor: 'bg-orange-50 text-orange-800 border-orange-200',
    btnHover: 'hover:text-saffron-600',
  },
  'documentation': {
    iconBg: 'bg-sky-50 text-iaf-600 border border-sky-200/80 shadow-sky-500/10',
    accentBar: 'from-iaf-400 via-sky-500 to-blue-600',
    tag: 'Verification',
    tagColor: 'bg-sky-50 text-sky-800 border-sky-200',
    btnHover: 'hover:text-iaf-600',
  },
  'medical': {
    iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-emerald-500/10',
    accentBar: 'from-emerald-400 via-tiranga-500 to-teal-600',
    tag: 'ECHS & Health',
    tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    btnHover: 'hover:text-emerald-600',
  },
  'grievance': {
    iconBg: 'bg-rose-50 text-rose-600 border border-rose-200/80 shadow-rose-500/10',
    accentBar: 'from-rose-500 via-armyred-500 to-red-600',
    tag: 'Priority Desk',
    tagColor: 'bg-rose-50 text-rose-800 border-rose-200',
    btnHover: 'hover:text-rose-600',
  },
  'legal': {
    iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-200/80 shadow-indigo-500/10',
    accentBar: 'from-navy-600 via-indigo-600 to-blue-700',
    tag: 'Legal Guidance',
    tagColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    btnHover: 'hover:text-indigo-600',
  },
  'family': {
    iconBg: 'bg-pink-50 text-pink-600 border border-pink-200/80 shadow-pink-500/10',
    accentBar: 'from-pink-400 via-rose-400 to-purple-500',
    tag: 'Veer Nari & Family',
    tagColor: 'bg-pink-50 text-pink-800 border-pink-200',
    btnHover: 'hover:text-pink-600',
  },
  'community': {
    iconBg: 'bg-military-50 text-military-700 border border-military-200/80 shadow-military-500/10',
    accentBar: 'from-military-500 via-olive-600 to-emerald-700',
    tag: 'Tri-Services Meet',
    tagColor: 'bg-military-50 text-military-800 border-military-200',
    btnHover: 'hover:text-military-600',
  },
};

const defaultStyle = {
  iconBg: 'bg-navy-50 text-navy-600 border border-navy-200',
  accentBar: 'from-navy-500 to-navy-700',
  tag: 'Welfare',
  tagColor: 'bg-navy-50 text-navy-800 border-navy-200',
  btnHover: 'hover:text-saffron-600',
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const style = serviceColors[service.id] || defaultStyle;

  return (
    <div className={`reveal delay-${(index % 4) + 1} premium-card group p-6 relative overflow-hidden bg-white/95 border-2 border-navy-100/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5`}>
      {/* Top Colorful Accent Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${style.accentBar} group-hover:h-2 transition-all duration-300`} aria-hidden="true" />

      {/* Soft color glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-navy-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

      <div className="relative">
        {/* Top meta row with Icon & Category Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${style.iconBg} group-hover:scale-110 transition-transform duration-300`}>
            {service.icon}
          </div>
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${style.tagColor}`}>
            {style.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-navy-900 text-lg mb-2.5 group-hover:text-navy-950 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-navy-600 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Learn More */}
        <Link
          href={service.href}
          className={`inline-flex items-center gap-1.5 text-sm font-bold text-navy-700 ${style.btnHover} transition-colors group/link`}
          aria-label={`Learn more about ${service.title}`}
        >
          <span>Learn More</span>
          <span className="transition-transform group-hover/link:translate-x-1.5" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const headingRef = useReveal();

  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-to-b from-white to-navy-50/30" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <div className="section-divider mb-6" />
          <h2 id="services-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Welfare & Support Services
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Comprehensive assistance and guidance for ex-servicemen, veterans, and their families across multiple welfare areas.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
