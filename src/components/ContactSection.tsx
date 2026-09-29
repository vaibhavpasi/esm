'use client';

import { contactInfo } from '@/lib/data';
import { useReveal } from '@/lib/hooks';

export default function ContactSection() {
  const headingRef = useReveal();

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-navy-50/30 to-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <div className="section-divider mb-6" />
          <h2 id="contact-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Contact the Association
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Reach out to the ESM Welfare Association of Nashik for any queries, assistance, or information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="premium-card p-6">
              <h3 className="font-heading font-bold text-navy-800 text-lg mb-4">Association Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">📍</span>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">Address</p>
                    <p className="text-navy-600 text-sm">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">📞</span>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-navy-600 text-sm hover:text-saffron-600 transition-colors">{contactInfo.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">💬</span>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">WhatsApp</p>
                    <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} className="text-navy-600 text-sm hover:text-saffron-600 transition-colors">{contactInfo.whatsapp}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">✉️</span>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-navy-600 text-sm hover:text-saffron-600 transition-colors">{contactInfo.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">🕐</span>
                  <div>
                    <p className="font-semibold text-navy-700 text-sm">Office Hours</p>
                    <p className="text-navy-600 text-sm">{contactInfo.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex-1 px-5 py-3 rounded-xl font-semibold text-center bg-navy-700 text-white hover:bg-navy-800 transition-all shadow-md hover:shadow-lg"
              >
                📞 Call Us
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-3 rounded-xl font-semibold text-center bg-green-600 text-white hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
              >
                💬 WhatsApp Us
              </a>
              <a
                href={`https://maps.google.com/?q=ESM+Welfare+Association+Nashik`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-3 rounded-xl font-semibold text-center bg-saffron-500 text-white hover:bg-saffron-600 transition-all shadow-md hover:shadow-lg"
              >
                📍 Get Directions
              </a>
            </div>
          </div>

          {/* Contact Form + Map */}
          <div className="space-y-6">
            {/* Quick Contact Form */}
            <div className="premium-card p-6">
              <h3 className="font-heading font-bold text-navy-800 text-lg mb-4">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); }}>
                <div>
                  <label htmlFor="contact-name" className="form-label">Full Name</label>
                  <input type="text" id="contact-name" className="form-input" placeholder="Enter your full name" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="form-label">Phone</label>
                    <input type="tel" id="contact-phone" className="form-input" placeholder="Mobile number" required />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="form-label">Email</label>
                    <input type="email" id="contact-email" className="form-input" placeholder="Email address" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea id="contact-message" className="form-input" rows={4} placeholder="Write your message…" required />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold bg-navy-700 text-white hover:bg-navy-800 transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ESM Welfare Association of Nashik — Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
