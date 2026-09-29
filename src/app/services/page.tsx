'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Welfare & Support Services</h1>
            <p className="text-white/70 text-lg">Comprehensive assistance and guidance for ex-servicemen and their families.</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="premium-card p-8 scroll-mt-24">
                <div className="flex items-start gap-6">
                  <span className="text-4xl shrink-0" aria-hidden="true">{service.icon}</span>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">{service.title}</h2>
                    <p className="text-navy-600 text-lg leading-relaxed mb-4">{service.description}</p>
                    <div className="text-navy-500 text-sm space-y-2">
                      <p><strong>How we assist:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Information and guidance on available benefits and procedures</li>
                        <li>Help with application preparation and documentation</li>
                        <li>Follow-up and status tracking with relevant authorities</li>
                        <li>Connecting members with appropriate government offices and departments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
