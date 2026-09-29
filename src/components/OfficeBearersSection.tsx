'use client';

import Image from 'next/image';
import { officeBearers } from '@/lib/data';
import { useReveal } from '@/lib/hooks';

export default function OfficeBearersSection() {
  const headingRef = useReveal();

  return (
    <section id="office-bearers" className="py-20 sm:py-28 bg-white" aria-labelledby="bearers-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <div className="section-divider mb-6" />
          <h2 id="bearers-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Office Bearers
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Meet the dedicated team leading the ESM Welfare Association of Nashik.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {officeBearers.map((bearer, i) => (
            <div key={bearer.id} className={`reveal delay-${(i % 3) + 1} premium-card p-6 text-center group`}>
              {/* Photo */}
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-3 border-navy-100 shadow-lg relative">
                <Image
                  src={bearer.photo}
                  alt={`${bearer.name} — ${bearer.position}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <h3 className="font-heading font-bold text-navy-800 text-lg">{bearer.name}</h3>
              <p className="text-saffron-600 font-semibold text-sm mb-3">{bearer.position}</p>
              <p className="text-navy-600 text-sm leading-relaxed">{bearer.profile}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
