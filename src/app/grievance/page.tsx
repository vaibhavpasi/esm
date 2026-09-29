'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { serviceCategories, issueTypes } from '@/lib/data';
import { generateReferenceNumber } from '@/lib/hooks';

export default function GrievancePage() {
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [trackRef, setTrackRef] = useState('');
  const [trackResult, setTrackResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateReferenceNumber();
    setRefNumber(ref);
    setSubmitted(true);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackResult(`Grievance ${trackRef}: Status — Under Review. Last updated: 28 Sep 2026. The assigned officer is reviewing your concern.`);
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-5xl mb-4 block" aria-hidden="true">🆘</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Need Assistance? We&apos;re Here to Help.</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Submit your welfare-related concern or request and the association team will review it.
              You will receive a unique reference number to track your grievance.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {!submitted ? (
            <div className="premium-card p-8 sm:p-10">
              <h2 className="font-heading text-2xl font-bold text-navy-800 mb-6">Submit a Grievance</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="grv-name" className="form-label">Full Name *</label>
                    <input type="text" id="grv-name" className="form-input" required placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label htmlFor="grv-rank" className="form-label">Rank</label>
                    <input type="text" id="grv-rank" className="form-input" placeholder="e.g. Havildar (Retd)" />
                  </div>
                  <div>
                    <label htmlFor="grv-service" className="form-label">Service Number</label>
                    <input type="text" id="grv-service" className="form-input" placeholder="e.g. IC-123456" />
                  </div>
                  <div>
                    <label htmlFor="grv-mobile" className="form-label">Mobile Number *</label>
                    <input type="tel" id="grv-mobile" className="form-input" required placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label htmlFor="grv-email" className="form-label">Email</label>
                    <input type="email" id="grv-email" className="form-input" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="grv-category" className="form-label">Service Category *</label>
                    <select id="grv-category" className="form-input" required>
                      <option value="">Select category</option>
                      {serviceCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="grv-issue" className="form-label">Issue Type *</label>
                  <select id="grv-issue" className="form-input" required>
                    <option value="">Select issue type</option>
                    {issueTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="grv-desc" className="form-label">Description *</label>
                  <textarea id="grv-desc" className="form-input" rows={5} required placeholder="Describe your concern in detail…" />
                </div>

                <div>
                  <label htmlFor="grv-doc" className="form-label">Supporting Document (Optional)</label>
                  <input type="file" id="grv-doc" className="form-input" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
                  <p className="text-xs text-navy-400 mt-1">Accepted formats: PDF, JPG, PNG, DOC, DOCX (Max 5MB)</p>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-lg bg-saffron-500 text-white hover:bg-saffron-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Grievance
                </button>
              </form>
            </div>
          ) : (
            <div className="premium-card p-8 sm:p-10 text-center">
              <span className="text-6xl mb-4 block" aria-hidden="true">✅</span>
              <h2 className="font-heading text-2xl font-bold text-navy-800 mb-4">Grievance Submitted Successfully</h2>
              <p className="text-navy-600 text-lg mb-4">Your grievance has been recorded. The association team will review it and take necessary action.</p>
              <div className="inline-block bg-navy-50 rounded-2xl px-8 py-4 mb-6">
                <p className="text-sm text-navy-500 mb-1">Your Reference Number</p>
                <p className="font-heading text-3xl font-bold text-navy-800">{refNumber}</p>
              </div>
              <p className="text-navy-500 text-sm mb-8">Please save this reference number to track your grievance status.</p>
              <button
                onClick={() => { setSubmitted(false); setRefNumber(''); }}
                className="px-6 py-3 rounded-xl font-semibold bg-navy-700 text-white hover:bg-navy-800 transition-all"
              >
                Submit Another Grievance
              </button>
            </div>
          )}

          {/* Track Grievance */}
          <div id="track" className="mt-16 premium-card p-8 sm:p-10">
            <h2 className="font-heading text-2xl font-bold text-navy-800 mb-6">Track Your Grievance</h2>
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={trackRef}
                onChange={(e) => setTrackRef(e.target.value)}
                className="form-input flex-1"
                placeholder="Enter your Reference Number (e.g. GRV-2026-0042)"
                required
                aria-label="Grievance reference number"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold bg-navy-700 text-white hover:bg-navy-800 transition-all shrink-0"
              >
                Track Status
              </button>
            </form>
            {trackResult && (
              <div className="mt-6 p-4 rounded-xl bg-navy-50 border border-navy-100">
                <p className="text-navy-700">{trackResult}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
