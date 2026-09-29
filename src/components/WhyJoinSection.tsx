'use client';

import Link from 'next/link';
import { benefits } from '@/lib/data';
import { useReveal } from '@/lib/hooks';

export default function WhyJoinSection() {
  const headingRef = useReveal();

  return (
    <section id="why-join" className="py-20 sm:py-28 bg-white" aria-labelledby="why-join-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <div className="section-divider mb-6" />
          <h2 id="why-join-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Together, We Support Those Who Served
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Join a community of dedicated veterans and access the support, information, and connections you deserve.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, i) => (
            <div key={benefit.title} className={`reveal delay-${i + 1} premium-card p-6 text-center group`}>
              <span className="text-4xl mb-4 block transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                {benefit.icon}
              </span>
              <h3 className="font-heading font-bold text-navy-800 text-lg mb-3">{benefit.title}</h3>
              <p className="text-navy-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-navy-700 to-navy-800 text-white hover:from-navy-800 hover:to-navy-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
          >
            Join the Association
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
