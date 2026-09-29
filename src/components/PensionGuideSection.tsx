'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import PensionCalculator from './PensionCalculator';

export default function PensionGuideSection() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'sparsh' | 'jeevan' | 'orop' | 'echs' | 'calculator'>('sparsh');

  const tabs = [
    { id: 'sparsh' as const, label: 'SPARSH Portal', icon: '🏛️' },
    { id: 'jeevan' as const, label: 'Life Certificate (DLC)', icon: '📱' },
    { id: 'orop' as const, label: 'OROP & Arrears', icon: '💰' },
    { id: 'echs' as const, label: 'ECHS Smart Card', icon: '🏥' },
    { id: 'calculator' as const, label: 'Pension Calculator', icon: '🧮' },
  ];

  return (
    <section id="pension-guide" className="py-20 bg-slate-50 border-t border-b border-slate-200/80" aria-labelledby="pension-guide-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-divider mb-4" />
          <h2 id="pension-guide-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
            {t.pensionGuideTitle}
          </h2>
          <p className="text-navy-600 text-base sm:text-lg">
            {language === 'mr'
              ? 'निवृत्त सैनिक व वीर नारींसाठी स्पर्श प्रणाली, जीवन प्रमाण पत्र आणि पेन्शन संबंधी सुलभ मार्गदर्शन.'
              : language === 'hi'
              ? 'पूर्व सैनिकों एवं वीर नारियों के लिए स्पर्श पोर्टल, जीवन प्रमाण पत्र और पेंशन से संबंधित सरल मार्गदर्शिका।'
              : 'Essential, verified step-by-step guides for defence pensioners, Veer Naris, and family pensioners.'}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${
                activeTab === tab.id
                  ? 'bg-navy-800 text-white shadow-md -translate-y-0.5'
                  : 'bg-white text-navy-700 hover:bg-navy-50 border border-slate-200'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Panes */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90">
          {/* SPARSH TAB */}
          {activeTab === 'sparsh' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-navy-800 font-heading">
                    {language === 'mr' ? 'स्पर्श (SPARSH) पोर्टल सहाय्यता व लॉगिन' : language === 'hi' ? 'स्पर्श (SPARSH) पोर्टल सहायता व लॉगिन' : 'SPARSH Portal Access & PPO Migration'}
                  </h3>
                  <p className="text-sm text-navy-500">System for Pension Administration (Raksha) • PCDA (P) Prayagraj</p>
                </div>
                <a
                  href="https://sparsh.defencepension.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow"
                >
                  <span>Open SPARSH Portal</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-navy-800 text-white text-xs font-bold inline-flex items-center justify-center mb-2">1</span>
                  <h4 className="font-bold text-navy-800 text-sm mb-1">Check Migration Status</h4>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    Visit SPARSH &gt; Click &apos;Services&apos; &gt; &apos;Track Migration Status&apos;. Enter your original Army/Navy/Air Force Service Number or Legacy PPO to find your new 12-digit SPARSH PPO.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-navy-800 text-white text-xs font-bold inline-flex items-center justify-center mb-2">2</span>
                  <h4 className="font-bold text-navy-800 text-sm mb-1">First-Time User Login</h4>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    Username is your 12-digit SPARSH PPO followed by &apos;01&apos; (e.g. 10120230000101). Click &apos;Forgot Password&apos; if SMS was not received to generate OTP on registered mobile.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-navy-800 text-white text-xs font-bold inline-flex items-center justify-center mb-2">3</span>
                  <h4 className="font-bold text-navy-800 text-sm mb-1">Perform Pensioner Data Verification (PDV)</h4>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    Verify service details, bank account IFSC, spouse name, date of birth, and Aadhaar linking to avoid disruption in monthly pension credit.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-navy-800 text-white text-xs font-bold inline-flex items-center justify-center mb-2">4</span>
                  <h4 className="font-bold text-navy-800 text-sm mb-1">Nashik Association Support</h4>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    Veterans unable to access SPARSH can visit the ESM Welfare Association Office with discharge book, Aadhaar card, and bank passbook for assisted resolution.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* JEEVAN PRAMAAN TAB */}
          {activeTab === 'jeevan' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-navy-800 font-heading">
                    {language === 'mr' ? 'डिजिटल जीवन प्रमाण पत्र (DLC) सादर करण्याची पद्धत' : language === 'hi' ? 'डिजिटल जीवन प्रमाण पत्र (DLC) जमा करने की विधि' : 'Annual Digital Life Certificate (DLC) Submission'}
                  </h3>
                  <p className="text-sm text-navy-500">Mandatory every November for uninterrupted defence pension</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">Face Authentication Active</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-saffron-50 border border-saffron-200">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold text-navy-800 text-sm mb-1">Method 1: Face Authentication from Home (Smartphone)</h4>
                    <p className="text-xs text-navy-600 leading-relaxed mb-2">
                      Install <strong>&apos;AadhaarFaceRd&apos;</strong> app from Google Play Store + <strong>&apos;Jeevan Pramaan&apos;</strong> app. Open Jeevan Pramaan, enter Aadhaar, Mobile, SPARSH PPO, and Pension Disbursing Agency (SPARSH PCDA). Complete face scan. No biometric fingerprint scanner needed!
                    </p>
                    <span className="text-xs text-saffron-700 font-semibold">✓ Recommended for senior veterans with reduced mobility</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl">📮</span>
                  <div>
                    <h4 className="font-bold text-navy-800 text-sm mb-1">Method 2: Doorstep DLC Service via Postman (India Post)</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">
                      Call your local Nashik post office or request through Post Info App. A postman visits with biometric device to submit DLC at your home for a nominal charge of ₹50.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <h4 className="font-bold text-navy-800 text-sm mb-1">Method 3: ZSPO Nashik or Association Camp</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">
                      Visit the Zilla Sainik Welfare Office Nashik or the Association&apos;s special November DLC helpdesks with original PPO and Aadhaar card.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OROP TAB */}
          {activeTab === 'orop' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-navy-800 font-heading">
                    {language === 'mr' ? 'वन रँक वन पेन्शन (OROP) व थकबाकी माहिती' : language === 'hi' ? 'वन रैंक वन पेंशन (OROP) एवं एरियर विवरण' : 'One Rank One Pension (OROP) & Arrears'}
                  </h3>
                  <p className="text-sm text-navy-500">Ministry of Defence • DESW Guidelines</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-navy-800 text-sm mb-2">OROP-2 Arrears Disbursement</h4>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    Arrears disbursed in installments as per Supreme Court of India guidelines. Special priority categories (Gallantry awardees, Family Pensioners, War Widows, Veterans aged 70+) receive lump-sum clearance.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-navy-800 text-sm mb-2">Pension Table Verification</h4>
                  <p className="text-xs text-navy-600 leading-relaxed">
                    Check your corresponding rank and qualifying service length in MoD Circular No. 666 / 667 tables. If there is a calculation discrepancy, our grievance desk can file a correction petition with PCDA.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <span className="text-xl">⚠️</span>
                <p className="text-xs text-amber-900 leading-relaxed">
                  <strong>Important Notice:</strong> Never share OTPs or banking PINs with unauthorized callers claiming to expedite OROP arrears. The Ministry of Defence or PCDA never asks for bank passwords or debit card credentials over the telephone.
                </p>
              </div>
            </div>
          )}

          {/* ECHS TAB */}
          {activeTab === 'echs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-navy-800 font-heading">
                    {language === 'mr' ? 'ECHS स्मार्ट कार्ड व नाशिक दवाखाने' : language === 'hi' ? 'ECHS स्मार्ट कार्ड एवं नासिक चिकित्सालय' : 'ECHS Smart Card (64 KB) & Healthcare Network'}
                  </h3>
                  <p className="text-sm text-navy-500">Ex-Servicemen Contributory Health Scheme • Polyclinic Nashik</p>
                </div>
                <a
                  href="https://echs.sourceinfosys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-navy-800 text-white rounded-xl text-xs font-bold hover:bg-navy-900 transition-all shadow"
                >
                  ECHS Portal ↗
                </a>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-navy-800 text-sm">ECHS Polyclinic Nashik</h4>
                    <p className="text-xs text-navy-600">Near Artillery Centre, Nashik Road • Timings: 08:30 AM to 02:30 PM (Mon-Sat)</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-military-100 text-military-800 whitespace-nowrap self-start sm:self-center">
                    Type D Polyclinic
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-navy-800 text-sm mb-1">Empaneled Hospitals in Nashik</h4>
                  <p className="text-xs text-navy-600 leading-relaxed mb-2">
                    Super-specialty cashless treatments upon medical officer referral:
                  </p>
                  <ul className="text-xs text-navy-700 space-y-1 list-disc list-inside">
                    <li>Sahyadri Super Speciality Hospital, Wadala Naka, Nashik</li>
                    <li>Wockhardt Hospital, Wani House, Mumbai Naka, Nashik</li>
                    <li>Ashoka Medicover Hospital, Wadala, Nashik</li>
                    <li>Six Sigma Hospital, Mahatma Nagar, Nashik</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <h4 className="font-bold text-navy-800 text-sm mb-1">Emergency Treatment Protocol</h4>
                  <p className="text-xs text-navy-700 leading-relaxed">
                    In life-threatening medical emergencies, ex-servicemen can get admitted directly to any nearby hospital. Inform the nearest ECHS Polyclinic or MH Deolali within 48 hours to claim 100% emergency reimbursement under CGHS rates.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* PENSION CALCULATOR TAB */}
          {activeTab === 'calculator' && (
            <div className="animate-[fadeIn_0.3s_ease]">
              <PensionCalculator />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
