'use client';

import Link from 'next/link';
import { services } from '@/lib/data';
import { useReveal } from '@/lib/hooks';

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <div className={`reveal delay-${(index % 4) + 1} premium-card group p-6 relative overflow-hidden`}>
      {/* Soft glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50/0 to-saffron-50/0 group-hover:from-navy-50/50 group-hover:to-saffron-50/30 transition-all duration-500 pointer-events-none" aria-hidden="true" />

      <div className="relative">
        {/* Icon */}
        <span className="text-3xl block mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" aria-hidden="true">
          {service.icon}
        </span>

        {/* Title */}
        <h3 className="font-heading font-bold text-navy-800 text-lg mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-navy-600 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Learn More */}
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-saffron-600 transition-colors group/link"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <span className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">→</span>
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
