'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

type RankCategory = 'officer' | 'jco' | 'or';

interface CsdEntitlement {
  groceryLimit: string;
  liquorQuota: string;
  carEligibility: string;
  bikeEligibility: string;
  carEngineCap: string;
  cycleInterval: string;
}

const entitlements: Record<RankCategory, CsdEntitlement> = {
  officer: {
    groceryLimit: '₹11,000 / month',
    liquorQuota: '10 to 14 Units / month',
    carEligibility: 'Up to ₹20,00,000 (Ex-Showroom) excluding taxes',
    bikeEligibility: 'Any capacity once every 3 years',
    carEngineCap: 'Up to 3000cc capacity',
    cycleInterval: 'Once every 3 years (Retd / Serving)',
  },
  jco: {
    groceryLimit: '₹10,000 / month',
    liquorQuota: '6 to 10 Units / month',
    carEligibility: 'Up to ₹10,00,000 (Ex-Showroom) excluding taxes',
    bikeEligibility: 'Any capacity once every 3 years',
    carEngineCap: 'Up to 2000cc engine capacity',
    cycleInterval: 'Once every 5 years (Minimum 5 yrs service as JCO)',
  },
  or: {
    groceryLimit: '₹8,000 / month',
    liquorQuota: '4 to 5 Units / month',
    carEligibility: 'Up to ₹8,00,000 (Ex-Showroom) excluding taxes',
    bikeEligibility: 'Any capacity once every 3 years',
    carEngineCap: 'Up to 1400cc engine capacity',
    cycleInterval: 'First car after 5 yrs service; second after retirement (gap 8 yrs)',
  },
};

export default function CsdAssistantSection() {
  const { language, t } = useLanguage();
  const [selectedRank, setSelectedRank] = useState<RankCategory>('jco');

  const current = entitlements[selectedRank];

  return (
    <section id="csd-assistant" className="py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="csd-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-divider mb-4" />
          <h2 id="csd-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
            {t.csdTitle}
          </h2>
          <p className="text-navy-600 text-base sm:text-lg">
            {language === 'mr'
              ? 'कॅन्टीन स्टोअर्स डिपार्टमेंट (CSD) स्मार्ट कार्ड, मासिक किराणा, मद्य कोटा व चारचाकी वाहन (AFD-I) खरेदी पात्रता गणक.'
              : language === 'hi'
              ? 'कैंटीन स्टोर्स डिपार्टमेंट (CSD) स्मार्ट कार्ड, मासिक राशन, लिकर कोटा एवं चार पहिया वाहन (AFD-I) खरीद पात्रता विवरण।'
              : 'Interactive CSD Canteen grocery, liquor, and AFD-I four-wheeler/two-wheeler purchase entitlement calculator for veterans.'}
          </p>
        </div>

        {/* Rank Category Switcher */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10">
          {[
            { id: 'officer' as const, label: 'Commissioned Officers', sub: 'Lt to General / Naval & Air equivalents' },
            { id: 'jco' as const, label: 'JCOs / Warrant Officers', sub: 'Sub Maj / Sub / Nb Sub / MCPO / MWO' },
            { id: 'or' as const, label: 'NCOs & Other Ranks (ORs)', sub: 'Havildar / Naik / Sepoy / Sailor / Airman' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedRank(cat.id)}
              className={`px-5 py-3 rounded-2xl text-left transition-all border shadow-sm ${
                selectedRank === cat.id
                  ? 'bg-navy-800 text-white border-saffron-500 shadow-lg -translate-y-1'
                  : 'bg-white text-navy-800 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <p className="font-bold text-sm sm:text-base leading-tight">{cat.label}</p>
              <p className={`text-[11px] mt-0.5 hidden sm:block ${selectedRank === cat.id ? 'text-white/70' : 'text-slate-500'}`}>
                {cat.sub}
              </p>
            </button>
          ))}
        </div>

        {/* Entitlement Display Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Grocery */}
          <div className="premium-card p-6 border-l-4 border-l-military-500">
            <span className="text-2xl mb-2 block">🛒</span>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Monthly Grocery Limit</p>
            <p className="font-heading font-extrabold text-2xl text-navy-800 my-1">{current.groceryLimit}</p>
            <p className="text-xs text-slate-600">Valid across any CSD military canteen nationwide on biometric smart card.</p>
          </div>

          {/* Liquor */}
          <div className="premium-card p-6 border-l-4 border-l-saffron-500">
            <span className="text-2xl mb-2 block">🍾</span>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Monthly Liquor Quota</p>
            <p className="font-heading font-extrabold text-2xl text-navy-800 my-1">{current.liquorQuota}</p>
            <p className="text-xs text-slate-600">Beer / Rum / Whisky units conversion as per QMG branch orders.</p>
          </div>

          {/* AFD Car */}
          <div className="premium-card p-6 border-l-4 border-l-blue-500">
            <span className="text-2xl mb-2 block">🚗</span>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">AFD-I Car Purchase Cap</p>
            <p className="font-heading font-bold text-lg text-navy-800 my-1">{current.carEligibility}</p>
            <p className="text-xs text-slate-600">{current.carEngineCap} • {current.cycleInterval}</p>
          </div>

          {/* Bike */}
          <div className="premium-card p-6 border-l-4 border-l-amber-500">
            <span className="text-2xl mb-2 block">🏍️</span>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Two-Wheeler Entitlement</p>
            <p className="font-heading font-bold text-lg text-navy-800 my-1">{current.bikeEligibility}</p>
            <p className="text-xs text-slate-600">Sanctioned online via AFD Portal with 50% GST rebate benefit.</p>
          </div>
        </div>

        {/* Nashik CSD Outlets Directory & Booking Guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h3 className="font-heading font-bold text-xl text-navy-800">
                Official Nashik CSD Canteens & Online Portal
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Advance online token booking is recommended for seamless shopping at Deolali & Nashik Road
              </p>
            </div>
            <a
              href="https://afd.csdindia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs shadow-md transition-all self-start sm:self-center inline-flex items-center gap-1.5"
            >
              <span>AFD Online Car Booking</span>
              <span>↗</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-military-100 text-military-800">Station CSD</span>
              <h4 className="font-bold text-navy-800 text-sm mt-2 mb-1">CSD Artillery Centre Deolali</h4>
              <p className="text-xs text-slate-600 mb-2">Artillery Centre Main Campus, Deolali Cantonment</p>
              <p className="text-xs text-navy-700 font-semibold">📞 0253-2491500 • Timing: 9 AM - 1:30 PM (Closed Tue)</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">Military CSD</span>
              <h4 className="font-bold text-navy-800 text-sm mt-2 mb-1">CSD Station HQ Nashik Road</h4>
              <p className="text-xs text-slate-600 mb-2">Near Artillery Gate 2, Nashik Road, Nashik - 422101</p>
              <p className="text-xs text-navy-700 font-semibold">📞 0253-2465855 • Grocery & Liquor Counter</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">Air Force CSD</span>
              <h4 className="font-bold text-navy-800 text-sm mt-2 mb-1">CSD Air Force Station Ojhar</h4>
              <p className="text-xs text-slate-600 mb-2">11 BRD AFS Campus, Ojhar, Nashik - 422221</p>
              <p className="text-xs text-navy-700 font-semibold">📞 02557-235100 • For Tri-Service Veterans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
