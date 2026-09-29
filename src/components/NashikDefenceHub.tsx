'use client';

import { useLanguage } from '@/lib/LanguageContext';

interface HubLocation {
  name: string;
  marathiName: string;
  category: string;
  badgeColor: string;
  address: string;
  phone: string;
  timing: string;
  keyServices: string[];
}

const locations: HubLocation[] = [
  {
    name: 'Zilla Sainik Welfare Office (ZSPO) Nashik',
    marathiName: 'जिल्हा सैनिक कल्याण कार्यालय, नाशिक',
    category: 'Government Administration',
    badgeColor: 'bg-blue-100 text-blue-800',
    address: 'Near Collector Office, Old Agra Road, Nashik - 422002',
    phone: '0253-2578500',
    timing: '10:00 AM – 05:30 PM (Mon to Fri)',
    keyServices: [
      'Ex-Servicemen Identity Card Issue & Renewal',
      'Maharashtra State Govt Welfare Grants & Financial Aid',
      'Education Scholarships for Veterans’ Children',
      'Veer Nari / War Widow Pension Documentation',
    ],
  },
  {
    name: 'Military Hospital (MH) Deolali',
    marathiName: 'सैन्य रुग्णालय (MH) देवळाली छावणी',
    category: 'Tertiary Healthcare',
    badgeColor: 'bg-red-100 text-red-800',
    address: 'Cantonment Board, Deolali, Nashik - 422401',
    phone: '0253-2491234 (Casualty) / 0253-2491200',
    timing: '24x7 Emergency & Casualty • OPD: 08:00 AM – 01:00 PM',
    keyServices: [
      '24-Hour Emergency Medical Care & Ambulance Service',
      'Specialist Clinics: Cardiology, Orthopaedics, Medicine, Surgery',
      'Inpatient Wards & Intensive Care Unit',
      'Veterans & Dependents Healthcare Priority Counter',
    ],
  },
  {
    name: 'ECHS Polyclinic Nashik Road',
    marathiName: 'ई.सी.एच.एस. पॉलीक्लिनिक, नाशिक रोड',
    category: 'Veteran Medical Facility',
    badgeColor: 'bg-green-100 text-green-800',
    address: 'Opp. Artillery Centre Gate No. 2, Nashik Road, Nashik - 422101',
    phone: '0253-2465800',
    timing: '08:30 AM – 02:30 PM (Mon to Sat)',
    keyServices: [
      'Daily Medical Officer Consultations & Prescriptions',
      'Free Diagnostic Pathology & Basic Radiology',
      'Authorized Medicine Dispensary for Chronic Illnesses',
      'Cashless Referrals to Empaneled Private Super-Specialty Hospitals',
    ],
  },
  {
    name: 'CSD Canteen & Station HQ Deolali',
    marathiName: 'सी.एस.डी. कॅन्टीन, देवळाली स्टेशन',
    category: 'Canteen & Supplies',
    badgeColor: 'bg-amber-100 text-amber-800',
    address: 'Near Temple Hill, Artillery Centre Road, Deolali - 422401',
    phone: '0253-2491500',
    timing: '09:00 AM – 01:30 PM, 03:00 PM – 05:00 PM (Closed Tuesday)',
    keyServices: [
      'Grocery & Liquor Smart Card Entitlements',
      'AFD-I Portal Car, Two-Wheeler & White Goods Sanctions',
      'Golden Jubilee Veteran Rest House & Transit Rooms',
      'Regiment of Artillery Museum & Memorial Visits',
    ],
  },
];

export default function NashikDefenceHub() {
  const { language, t } = useLanguage();

  return (
    <section id="nashik-hub" className="py-20 sm:py-24 bg-white" aria-labelledby="nashik-hub-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-divider mb-4" />
          <h2 id="nashik-hub-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            {t.nashikHubTitle}
          </h2>
          <p className="text-navy-600 text-base sm:text-lg">
            {language === 'mr'
              ? 'नाशिक जिल्ह्यातील प्रमुख सैनिक आस्थापने, संपर्क क्रमांक, कामाच्या वेळा आणि सेवांची अधिकृत यादी.'
              : language === 'hi'
              ? 'नासिक जिले के प्रमुख सैन्य संस्थान, संपर्क सूत्र, समय एवं महत्वपूर्ण सेवाओं का विवरण।'
              : 'Direct verified coordinates, working hours, and emergency hotlines for key defence infrastructure in Nashik district.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="premium-card p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 hover:border-navy-300 transition-all shadow-md hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${loc.badgeColor}`}>
                    {loc.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{loc.timing}</span>
                </div>

                <h3 className="text-xl font-bold text-navy-800 font-heading mb-1">{loc.name}</h3>
                <p className="text-xs text-saffron-600 font-semibold mb-4">{loc.marathiName}</p>

                <div className="space-y-2 mb-6 text-sm text-navy-700">
                  <div className="flex items-start gap-2.5">
                    <span className="text-base text-slate-400 shrink-0">📍</span>
                    <span className="text-xs sm:text-sm text-slate-600">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-base text-slate-400 shrink-0">📞</span>
                    <a href={`tel:${loc.phone.split(' ')[0]}`} className="text-xs sm:text-sm font-semibold text-navy-700 hover:text-saffron-600 transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">Available Key Services:</p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {loc.keyServices.map((srv, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-military-600 font-bold">✓</span>
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                  className="text-xs font-bold text-navy-700 hover:text-saffron-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>Dial Direct</span>
                  <span>📞</span>
                </a>
                <span className="text-xs text-slate-400">Nashik Defence Network</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
