'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import VeteranIdCard from '@/components/VeteranIdCard';
import { useLanguage } from '@/lib/LanguageContext';

export default function MembershipPage() {
  const { language, t } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states for dynamic ID card live preview
  const [formData, setFormData] = useState({
    armedForce: 'Indian Army' as 'Indian Army' | 'Indian Navy' | 'Indian Air Force',
    fullName: 'SUB MAJ (HONY CAPT) RAMESH B. PATIL',
    rank: 'Subedar Major',
    serviceNumber: 'JC-123456K',
    regiment: 'Regiment of Artillery (Nashik)',
    bloodGroup: 'B +ve',
    mobile: '9876543210',
    email: '',
    address: 'Near Artillery Centre, Nashik Road',
    city: 'Nashik',
    pincode: '422101',
    membershipType: 'Life Member',
  });

  const setForce = (force: 'Indian Army' | 'Indian Navy' | 'Indian Air Force') => {
    if (force === 'Indian Army') {
      setFormData((prev) => ({
        ...prev,
        armedForce: force,
        rank: 'Subedar Major',
        serviceNumber: 'JC-123456K',
        regiment: 'Regiment of Artillery (Nashik)',
      }));
    } else if (force === 'Indian Navy') {
      setFormData((prev) => ({
        ...prev,
        armedForce: force,
        rank: 'Master Chief Petty Officer I',
        serviceNumber: '112233-N',
        regiment: 'Marine Engineering / INS Shivaji',
      }));
    } else if (force === 'Indian Air Force') {
      setFormData((prev) => ({
        ...prev,
        armedForce: force,
        rank: 'Master Warrant Officer',
        serviceNumber: '765432-F',
        regiment: 'Technical / 11 BRD Ojhar',
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-20 text-center text-white relative">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-5xl mb-4 block" aria-hidden="true">🤝</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-300 text-xs font-bold border border-saffron-500/30 mb-4">
              Nashik Ex-Servicemen Community • Tri-Services
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              {language === 'mr' ? 'माजी सैनिक सभासद नोंदणी' : language === 'hi' ? 'पूर्व सैनिक सदस्यता पंजीकरण' : 'Become a Member'}
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {language === 'mr'
                ? 'नाशिक जिल्हा माजी सैनिक कल्याण संस्थेचे अधिकृत सभासद व्हा आणि पेन्शन, ECHS, शासकीय योजना व सामाजिक मदतीचा लाभ मिळवा.'
                : 'Join the ESM Welfare Association of Nashik and access comprehensive welfare support, OROP assistance, community camaraderie, and official membership privileges across Army, Navy & Air Force.'}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Live ID Card Spotlight with Tri-Services Switcher */}
          <div className="bg-gradient-to-b from-slate-100 to-white rounded-3xl p-8 sm:p-12 mb-16 border border-slate-200 shadow-lg text-center">
            <div className="max-w-2xl mx-auto mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-military-100 text-military-800 uppercase tracking-wider inline-block mb-3">
                Official Credential Preview
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-800 mb-2">
                {t.idCardTitle}
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Official Identity Card customized with authentic service crest, motto, and branch insignia for Army, Navy, and Air Force:
              </p>

              {/* Force Switch Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {(['Indian Army', 'Indian Navy', 'Indian Air Force'] as const).map((force) => (
                  <button
                    key={force}
                    onClick={() => setForce(force)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm border flex items-center gap-2 ${
                      formData.armedForce === force
                        ? 'bg-navy-900 text-white border-saffron-400 scale-105 shadow-md'
                        : 'bg-white text-navy-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span>{force === 'Indian Army' ? '🪖' : force === 'Indian Navy' ? '⚓' : '✈️'}</span>
                    <span>{force}</span>
                  </button>
                ))}
              </div>
            </div>

            <VeteranIdCard
              fullName={formData.fullName || 'VETERAN FULL NAME'}
              rank={formData.rank || 'Rank'}
              serviceNumber={formData.serviceNumber || 'Service No'}
              regiment={formData.regiment || 'Regiment / Branch'}
              bloodGroup={formData.bloodGroup || 'Blood Group'}
              membershipId="ESM-NSK-2026-0842"
              membershipType={formData.membershipType}
              validUntil="Life Time (P)"
              armedForce={formData.armedForce}
            />
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Eligibility */}
            <div className="premium-card p-8 border border-slate-200">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-4 flex items-center gap-2">
                <span>📋</span>
                <span>Eligibility Criteria</span>
              </h2>
              <ul className="space-y-3 text-navy-700">
                {[
                  'Ex-Servicemen of Indian Armed Forces (Army, Navy, Air Force)',
                  'Retired/Released personnel of all ranks (Officers, JCOs, ORs)',
                  'Veer Naris, war widows and dependent spouses of deceased ex-servicemen',
                  'Resident or native of Nashik district, Maharashtra',
                  'Hold valid Military Discharge Book / PPO record',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="text-military-600 font-bold mt-0.5 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documents */}
            <div className="premium-card p-8 border border-slate-200">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-4 flex items-center gap-2">
                <span>📄</span>
                <span>Required Documents</span>
              </h2>
              <ul className="space-y-3 text-navy-700">
                {[
                  'Discharge Certificate / Release Order copy (Self-attested)',
                  'Original or SPARSH PPO (Pension Payment Order) copy',
                  'Aadhaar Card copy & PAN Card copy',
                  'Passport-size photographs (2 copies with uniform/smart attire)',
                  'Nashik District address proof (Voter ID / Light Bill / Ration Card)',
                  'Existing Zilla Sainik Board Ex-Servicemen Card copy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="text-saffron-500 font-bold mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Membership Process */}
            <div className="premium-card p-8 border border-slate-200">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-4 flex items-center gap-2">
                <span>🔄</span>
                <span>Application Process</span>
              </h2>
              <ol className="space-y-4">
                {[
                  { step: '1', title: 'Submit Details', desc: 'Fill the online membership form below or visit our Nashik office.' },
                  { step: '2', title: 'Document Verification', desc: 'Verification of Service Number and Discharge certificate.' },
                  { step: '3', title: 'Executive Approval', desc: 'Application reviewed by the Governing Body.' },
                  { step: '4', title: 'Card & Welcome Kit', desc: 'Issuance of official Identity Card, certificate, and welfare kit.' },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-navy-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy-800">{item.title}</p>
                      <p className="text-xs text-navy-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Benefits */}
            <div className="premium-card p-8 border border-slate-200">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-4 flex items-center gap-2">
                <span>⭐</span>
                <span>Member Privileges</span>
              </h2>
              <ul className="space-y-3 text-navy-700">
                {[
                  'Priority assistance for SPARSH PPO and OROP arrears discrepancies',
                  'Guidance for ECHS card issue, dependent enrollment & claims',
                  'Support for children educational scholarships & coaching',
                  'Legal and revenue land mutation guidance for veterans',
                  'Access to annual gatherings, welfare camps, and veteran reunions',
                  'Bereavement and immediate financial relief support for family',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="text-saffron-500 font-bold mt-0.5 shrink-0">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Trigger */}
          <div id="apply" className="text-center mb-16">
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-8 py-4 rounded-2xl font-bold text-lg bg-saffron-500 text-white hover:bg-saffron-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <span>{showForm ? '▲' : '📝'}</span>
              <span>{showForm ? 'Close Application Form' : 'Open Membership Application Form & Live Preview'}</span>
            </button>
          </div>

          {/* Dynamic Interactive Application Form */}
          {showForm && !submitted && (
            <div className="grid lg:grid-cols-12 gap-8 mb-16 items-start">
              {/* Form Inputs (7 cols) */}
              <div className="lg:col-span-7 premium-card p-6 sm:p-10 border border-slate-200">
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-2">
                  Membership Application Form
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your official military records. The preview card on the right will update in real time.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="p-3 bg-navy-50 rounded-xl border border-navy-100 text-xs font-semibold text-navy-800">
                    🎖️ Service & Military Credentials
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-navy-700 mb-1">
                      Armed Force / सैन्य दल *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Indian Army', 'Indian Navy', 'Indian Air Force'] as const).map((force) => (
                        <button
                          key={force}
                          type="button"
                          onClick={() => setForce(force)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                            formData.armedForce === force
                              ? 'bg-navy-900 text-white border-saffron-400 shadow-md'
                              : 'bg-white text-navy-700 border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <span>{force === 'Indian Army' ? '🪖' : force === 'Indian Navy' ? '⚓' : '✈️'}</span>
                          <span>{force.replace('Indian ', '')}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="mem-name" className="block text-xs font-bold text-navy-700 mb-1">
                        Full Name (as per Discharge Book) *
                      </label>
                      <input
                        type="text"
                        id="mem-name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mem-rank" className="block text-xs font-bold text-navy-700 mb-1">
                        Rank at Retirement *
                      </label>
                      <input
                        type="text"
                        id="mem-rank"
                        name="rank"
                        value={formData.rank}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none"
                        required
                        placeholder="e.g. Subedar Major / Havildar / Captain"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="mem-svc" className="block text-xs font-bold text-navy-700 mb-1">
                        Service Number *
                      </label>
                      <input
                        type="text"
                        id="mem-svc"
                        name="serviceNumber"
                        value={formData.serviceNumber}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mem-regiment" className="block text-xs font-bold text-navy-700 mb-1">
                        Regiment / Arm *
                      </label>
                      <input
                        type="text"
                        id="mem-regiment"
                        name="regiment"
                        value={formData.regiment}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mem-blood" className="block text-xs font-bold text-navy-700 mb-1">
                        Blood Group *
                      </label>
                      <select
                        id="mem-blood"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none bg-white"
                      >
                        <option>A +ve</option>
                        <option>A -ve</option>
                        <option>B +ve</option>
                        <option>B -ve</option>
                        <option>O +ve</option>
                        <option>O -ve</option>
                        <option>AB +ve</option>
                        <option>AB -ve</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 bg-navy-50 rounded-xl border border-navy-100 text-xs font-semibold text-navy-800">
                    📍 Contact & Nashik Address
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="mem-mobile" className="block text-xs font-bold text-navy-700 mb-1">
                        Mobile Number (SPARSH linked) *
                      </label>
                      <input
                        type="tel"
                        id="mem-mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mem-email" className="block text-xs font-bold text-navy-700 mb-1">
                        Email Address (optional)
                      </label>
                      <input
                        type="email"
                        id="mem-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mem-address" className="block text-xs font-bold text-navy-700 mb-1">
                      Residential Address in Nashik *
                    </label>
                    <textarea
                      id="mem-address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="mem-pin" className="block text-xs font-bold text-navy-700 mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        id="mem-pin"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mem-type" className="block text-xs font-bold text-navy-700 mb-1">
                        Membership Category
                      </label>
                      <select
                        id="mem-type"
                        name="membershipType"
                        value={formData.membershipType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-saffron-500 focus:outline-none bg-white"
                      >
                        <option>Life Member</option>
                        <option>Annual Member</option>
                        <option>Veer Nari (Honorary)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-base bg-saffron-500 hover:bg-saffron-600 text-white shadow-xl transition-all hover:-translate-y-0.5"
                  >
                    Submit Verified Application
                  </button>
                </form>
              </div>

              {/* Live ID Card Preview (5 cols) */}
              <div className="lg:col-span-5 sticky top-28 bg-white p-6 rounded-3xl border border-slate-200 shadow-xl text-center">
                <span className="text-xs font-bold text-navy-800 uppercase tracking-wider block mb-4">
                  🔴 Live Interactive Card Render
                </span>
                <VeteranIdCard
                  fullName={formData.fullName}
                  rank={formData.rank}
                  serviceNumber={formData.serviceNumber}
                  regiment={formData.regiment}
                  bloodGroup={formData.bloodGroup}
                  membershipId="ESM-NSK-2026-0842"
                  membershipType={formData.membershipType}
                  validUntil="Life Time (P)"
                  armedForce={formData.armedForce}
                />
                <p className="text-xs text-slate-500 mt-4">
                  Note: Official embossed card is printed and delivered upon verification by the General Secretary.
                </p>
              </div>
            </div>
          )}

          {/* Submission Success */}
          {submitted && (
            <div className="premium-card p-10 text-center mb-16 max-w-2xl mx-auto border-2 border-green-500/40 bg-gradient-to-b from-green-50/50 to-white">
              <span className="text-6xl mb-4 block" aria-hidden="true">🎖️</span>
              <h2 className="font-heading text-3xl font-bold text-navy-800 mb-2">
                Application Received with Honor!
              </h2>
              <p className="text-navy-700 text-sm mb-6 leading-relaxed">
                Thank you for your service to the nation. Your membership reference number is{' '}
                <strong className="font-mono text-saffron-600 text-base">ESM-NSK-2026-0842</strong>.
                Our Nashik Secretariat will verify your service records and issue your official card.
              </p>

              <div className="mb-8">
                <VeteranIdCard
                  fullName={formData.fullName}
                  rank={formData.rank}
                  serviceNumber={formData.serviceNumber}
                  regiment={formData.regiment}
                  bloodGroup={formData.bloodGroup}
                  membershipId="ESM-NSK-2026-0842"
                  membershipType={formData.membershipType}
                  armedForce={formData.armedForce}
                />
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setShowForm(false);
                }}
                className="px-6 py-3 rounded-xl font-bold bg-navy-800 text-white hover:bg-navy-900 transition-all shadow"
              >
                Back to Membership Page
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
