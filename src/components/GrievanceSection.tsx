'use client';

import Link from 'next/link';
import { useReveal } from '@/lib/hooks';

export default function GrievanceSection() {
  const headingRef = useReveal();

  return (
    <section id="grievance-cta" className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="grievance-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} aria-hidden="true" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-saffron-500/10 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-military-500/10 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={headingRef} className="reveal">
          <span className="text-5xl mb-6 block" aria-hidden="true">🆘</span>
          <h2 id="grievance-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Assistance? We&apos;re Here to Help.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Submit your welfare-related concern or request and the association team will review it.
            Track your grievance with a unique reference number and get timely updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/grievance"
              className="px-8 py-4 rounded-2xl font-semibold text-lg bg-saffron-500 text-white hover:bg-saffron-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Submit a Grievance
            </Link>
            <Link
              href="/grievance#track"
              className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-sm"
            >
              Track Your Grievance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
