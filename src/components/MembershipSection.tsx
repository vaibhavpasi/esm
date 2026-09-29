'use client';

import Link from 'next/link';
import { useReveal } from '@/lib/hooks';

export default function MembershipSection() {
  const headingRef = useReveal();

  return (
    <section id="membership" className="py-20 sm:py-28 bg-gradient-to-b from-white to-saffron-50/30" aria-labelledby="membership-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal">
          <div className="max-w-5xl mx-auto premium-card p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-saffron-100 to-transparent rounded-bl-[80px] pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-navy-50 to-transparent rounded-tr-[60px] pointer-events-none" aria-hidden="true" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <div className="section-divider mb-6 !mx-0" />
                <h2 id="membership-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
                  Become a Member of ESM Welfare Association of Nashik
                </h2>
                <p className="text-navy-600 text-lg mb-8 leading-relaxed">
                  Join the veteran community and access welfare information, assistance, and support. 
                  Membership is open to all ex-servicemen, veterans, and their families residing in Nashik district.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/membership#apply"
                    className="px-6 py-3 rounded-xl font-semibold bg-saffron-500 text-white hover:bg-saffron-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
                  >
                    Apply for Membership
                  </Link>
                  <Link
                    href="/downloads"
                    className="px-6 py-3 rounded-xl font-semibold border-2 border-navy-200 text-navy-700 hover:bg-navy-50 transition-all hover:-translate-y-0.5 text-center"
                  >
                    Download Membership Form
                  </Link>
                </div>
              </div>

              {/* Right - Benefits List */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-navy-700 text-lg mb-4">Membership Benefits</h3>
                {[
                  'Access to welfare assistance and guidance',
                  'Regular updates on pension, OROP, and government schemes',
                  'Invitation to association meetings and events',
                  'Access to grievance support and tracking',
                  'Community networking with fellow veterans',
                  'Priority support for documentation and applications',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-military-100 flex items-center justify-center text-military-600 text-sm shrink-0 mt-0.5" aria-hidden="true">✓</span>
                    <p className="text-navy-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
