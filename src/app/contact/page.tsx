'use client';

import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-white/70 text-lg">Get in touch with the ESM Welfare Association of Nashik for any queries or assistance.</p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
