'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface HospitalItem {
  id: string;
  nameEn: string;
  nameMr: string;
  areaEn: string;
  areaMr: string;
  specialtiesEn: string[];
  specialtiesMr: string[];
  bedCapacity: string;
  echsDeskPhone: string;
  emergencyCasualtyPhone: string;
  cashlessServices: string;
  is24x7Emergency: boolean;
  mapsQuery: string;
}

const empanelledHospitals: HospitalItem[] = [
  {
    id: 'wockhardt',
    nameEn: 'Wockhardt Hospital, Nashik',
    nameMr: 'वोखार्ट रुग्णालय, नाशिक',
    areaEn: 'Wani House, Mumbai Naka, Nashik',
    areaMr: 'वाणी हाऊस, मुंबई नाका, नाशिक',
    specialtiesEn: ['Cardiology & Angioplasty', 'Cardiac Bypass (CABG)', 'Neurology & Neurosurgery', 'Joint Replacement (Knee/Hip)'],
    specialtiesMr: ['हृदयरोग व अँजिओप्लास्टी', 'बायपास शस्त्रक्रिया', 'मेंदूरोग व न्यूरोसर्जरी', 'सांधेरोपण (गुडघे/कंबर)'],
    bedCapacity: '200+ Beds (Super Specialty)',
    echsDeskPhone: '0253-6624444',
    emergencyCasualtyPhone: '0253-6624100',
    cashlessServices: '100% Cashless for ECHS referred veterans & emergency cardiac ICU admissions',
    is24x7Emergency: true,
    mapsQuery: 'Wockhardt+Hospital+Mumbai+Naka+Nashik',
  },
  {
    id: 'ashoka-medicover',
    nameEn: 'Ashoka Medicover Hospital',
    nameMr: 'अशोका मेडिकोव्हर रुग्णालय',
    areaEn: 'Wadala Road, Indira Nagar, Nashik',
    areaMr: 'वड Gala रोड, इंदिरा नगर, नाशिक',
    specialtiesEn: ['Medical & Surgical Oncology (Cancer)', '24x7 Dialysis & Nephrology', 'Polytrauma & Critical Care', 'Urology'],
    specialtiesMr: ['कर्करोग (कॅन्सर) उपचार व शस्त्रक्रिया', '२४ तास डायलिसिस व किडनी विकार', 'अतिदक्षता विभाग', 'मूत्रविकार'],
    bedCapacity: '350+ Beds (Tertiary Care)',
    echsDeskPhone: '0253-6638888',
    emergencyCasualtyPhone: '0253-6638108',
    cashlessServices: 'Full oncology chemoradiotherapy, cashless dialyzer sessions & ICU care',
    is24x7Emergency: true,
    mapsQuery: 'Ashoka+Medicover+Hospital+Nashik',
  },
  {
    id: 'sahyadri',
    nameEn: 'Sahyadri Super Speciality Hospital',
    nameMr: 'सह्याद्री सुपर स्पेशालिटी रुग्णालय',
    areaEn: 'Near Tilakwadi, Sharanpur Road, Nashik',
    areaMr: 'टिळकवाडी जवळ, शरणपूर रोड, नाशिक',
    specialtiesEn: ['Neurosurgery & Spine', 'Gastroenterology & GI Surgery', 'Pulmonology & Respiratory ICU', 'Vascular Surgery'],
    specialtiesMr: ['मेंदू व मणके शस्त्रक्रिया', 'पोटविकार व गॅस्ट्रो शस्त्रक्रिया', 'श्वसनरोग व फुफ्फुस अतिदक्षता', 'रक्तवाहिन्या उपचार'],
    bedCapacity: '150 Beds',
    echsDeskPhone: '0253-6691666',
    emergencyCasualtyPhone: '0253-6691600',
    cashlessServices: 'Pre-authorized cashless spine/brain surgeries & endoscopic interventions',
    is24x7Emergency: true,
    mapsQuery: 'Sahyadri+Super+Speciality+Hospital+Nashik',
  },
  {
    id: 'six-sigma',
    nameEn: 'Six Sigma Hospital & Research Institute',
    nameMr: 'सिक्स सिग्मा रुग्णालय व संशोधन संस्था',
    areaEn: 'Mahatma Nagar, Trimbak Road, Nashik',
    areaMr: 'महात्मा नगर, त्र्यंबक रोड, नाशिक',
    specialtiesEn: ['Orthopedic Trauma & Complex Fractures', 'General & Laparoscopic Surgery', 'Intensive Care Unit (ICU)'],
    specialtiesMr: ['अस्थिरोग व फ्रॅक्चर शस्त्रक्रिया', 'दूरबीन शस्त्रक्रिया', 'अतिदक्षता कक्ष'],
    bedCapacity: '120 Beds',
    echsDeskPhone: '0253-2357777',
    emergencyCasualtyPhone: '0253-2357700',
    cashlessServices: 'Cashless orthopedic implants and veteran trauma care',
    is24x7Emergency: true,
    mapsQuery: 'Six+Sigma+Hospital+Nashik',
  },
  {
    id: 'tulsi-eye',
    nameEn: 'Tulsi Eye Hospital & Micro-Surgery Centre',
    nameMr: 'तुलसी नेत्र रुग्णालय व शस्त्रक्रिया केंद्र',
    areaEn: 'Vise Mala, Gangapur Road, Nashik',
    areaMr: 'विसे मळा, गंगापूर रोड, नाशिक',
    specialtiesEn: ['Cashless Cataract (Phaco + Foldable IOL)', 'Retina & Diabetic Eye Care', 'Glaucoma Management', 'Cornea Clinic'],
    specialtiesMr: ['मोतीबिंदू शस्त्रक्रिया (कॅशलेस फेको)', 'पडदा व मधुमेह डोळ्यांचे आजार', 'काचबिंदू उपचार', 'कॉर्निया क्लिनिक'],
    bedCapacity: '50 Day Care / Surgical Beds',
    echsDeskPhone: '0253-2572700',
    emergencyCasualtyPhone: '0253-2572701',
    cashlessServices: 'Zero-cost cataract surgery with ECHS empanelled lenses for veterans & spouses',
    is24x7Emergency: false,
    mapsQuery: 'Tulsi+Eye+Hospital+Gangapur+Road+Nashik',
  },
  {
    id: 'shatabdi',
    nameEn: 'Shatabdi Hospital & Critical Care Centre',
    nameMr: 'शताब्दी रुग्णालय व क्रिटिकल केअर सेंटर',
    areaEn: 'Dwarka / Mumbai Naka Corridor, Nashik',
    areaMr: 'द्वारका / मुंबई नाका कॉरिडोअर, नाशिक',
    specialtiesEn: ['Internal Medicine & Geriatrics', 'Diabetic Foot & Chronic Wound Care', 'Dialysis Unit'],
    specialtiesMr: ['ज्येष्ठ नागरिक वैद्यकीय उपचार', 'मधुमेही जखम निवारण', 'डायलिसिस केंद्र'],
    bedCapacity: '80 Beds',
    echsDeskPhone: '0253-2591100',
    emergencyCasualtyPhone: '0253-2591105',
    cashlessServices: 'Cashless geriatric care and supportive hemodialysis for retired soldiers',
    is24x7Emergency: true,
    mapsQuery: 'Shatabdi+Hospital+Nashik',
  },
];

export default function EmpanelledHospitalsSection() {
  const { language } = useLanguage();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const specialties = [
    { id: 'all', labelEn: 'All Specialties', labelMr: 'सर्व उपचार विभाग' },
    { id: 'heart', labelEn: 'Cardiology (Heart)', labelMr: 'हृदयरोग' },
    { id: 'cancer', labelEn: 'Oncology (Cancer)', labelMr: 'कर्करोग' },
    { id: 'ortho', labelEn: 'Orthopedics (Joints/Bones)', labelMr: 'अस्थिरोग व सांधे' },
    { id: 'neuro', labelEn: 'Neuro & Spine', labelMr: 'मेंदू व मणके' },
    { id: 'eye', labelEn: 'Eye & Cataract', labelMr: 'नेत्र व मोतीबिंदू' },
    { id: 'dialysis', labelEn: 'Kidney & Dialysis', labelMr: 'किडनी व डायलिसिस' },
  ];

  const filteredHospitals = empanelledHospitals.filter((h) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      h.nameEn.toLowerCase().includes(query) ||
      h.nameMr.toLowerCase().includes(query) ||
      h.specialtiesEn.some((s) => s.toLowerCase().includes(query));

    if (!matchesSearch) return false;

    if (selectedSpecialty === 'heart') return h.specialtiesEn.some((s) => s.includes('Cardio') || s.includes('Cardiac'));
    if (selectedSpecialty === 'cancer') return h.specialtiesEn.some((s) => s.includes('Oncology'));
    if (selectedSpecialty === 'ortho') return h.specialtiesEn.some((s) => s.includes('Orthopedic') || s.includes('Joint'));
    if (selectedSpecialty === 'neuro') return h.specialtiesEn.some((s) => s.includes('Neuro'));
    if (selectedSpecialty === 'eye') return h.specialtiesEn.some((s) => s.includes('Eye') || s.includes('Cataract'));
    if (selectedSpecialty === 'dialysis') return h.specialtiesEn.some((s) => s.includes('Dialysis') || s.includes('Nephrology'));

    return true;
  });

  return (
    <section id="echs-hospitals" className="py-20 sm:py-24 bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-navy-800 transition-colors" aria-labelledby="hospitals-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {language === 'mr' ? 'ई.सी.एच.एस. १००% कॅशलेस संलग्न रुग्णालये' : 'ECHS 100% Cashless Empanelled Hospitals'}
          </div>

          <h2 id="hospitals-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy-950 dark:text-white mb-4">
            {language === 'mr'
              ? 'नाशिक शहरातील ई.सी.एच.एस. कॅशलेस रुग्णालय सूची'
              : 'Nashik ECHS Cashless Empanelled Hospitals'}
          </h2>

          <p className="text-slate-600 dark:text-white/75 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? 'हृदयरोग, कर्करोग, सांधेरोपण आणि अतिदक्षता उपचारांसाठी नाशिकमधील अधिकृत संलग्न रुग्णालयांची संपर्क माहिती आणि आपत्कालीन नियम.'
              : 'Directory of authorized private super-specialty hospitals in Nashik offering cashless treatment for retired defence personnel, war widows and dependent family members.'}
          </p>
        </div>

        {/* 48-Hour Emergency Cashless Protocol Box */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-950/40 dark:to-navy-900/60 border border-red-300 dark:border-red-500/30 rounded-2xl p-6 sm:p-8 mb-12 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-lg shadow-red-600/20">
                🚨
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-red-950 dark:text-red-200 mb-1">
                  {language === 'mr'
                    ? 'आपत्कालीन दाखल (Emergency Admission) ४८ तासांचा नियम'
                    : '48-Hour Emergency ECHS Cashless Protocol'}
                </h3>
                <p className="text-slate-700 dark:text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
                  {language === 'mr'
                    ? 'हार्ट अटॅक, ब्रेन स्ट्रोक किंवा गंभीर अपघातावेळी कोणत्याही संलग्न रुग्णालयात तातडीने दाखल होताना पूर्वपरवानगीची (Referral) गरज नसते. दाखल झाल्यानंतर ४८ तासांच्या आत ई.सी.एच.एस. पॉलीक्लिनिक नाशिक येथे "इमर्जन्सी सर्टिफिकेट" व रुग्णालय दाखल कागदपत्रे ईमेल/व्हॉट्सॲपवर कळवणे बंधनकारक आहे.'
                    : 'In life-threatening emergencies (heart attack, stroke, major accident), a veteran can be admitted directly to any empanelled hospital without prior referral letter. Intimate the OIC ECHS Polyclinic Nashik within 48 hours with the Treating Doctor\'s Emergency Certificate to ensure 100% cashless sanction.'}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-2 w-full md:w-auto">
              <a
                href="tel:0253-2570188"
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm text-center shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>📞 ECHS Nashik: 0253-2570188</span>
              </a>
              <span className="text-[11px] text-center text-slate-500 dark:text-white/50">
                Toll Free ECHS: 1800-114-115
              </span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {specialties.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSpecialty(s.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedSpecialty === s.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-white/70 hover:bg-slate-200 dark:hover:bg-navy-700'
                }`}
              >
                {language === 'mr' ? s.labelMr : s.labelEn}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'mr' ? 'रुग्णालय किंवा विकार शोधा...' : 'Search hospital or disease...'}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.map((h) => (
            <div
              key={h.id}
              className="bg-slate-50 dark:bg-navy-800/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                    {language === 'mr' ? h.nameMr : h.nameEn}
                  </h3>
                  {h.is24x7Emergency && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-500/30 whitespace-nowrap">
                      24x7 ICU
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-white/60 mb-3">
                  <span>📍</span>
                  <span>{language === 'mr' ? h.areaMr : h.areaEn}</span>
                </div>

                <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1">
                  <span>🛏️</span>
                  <span>{h.bedCapacity}</span>
                </div>

                {/* Specialties chips */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-white/40 block mb-1.5 uppercase tracking-wider">
                    {language === 'mr' ? 'कॅशलेस विशेष विभाग:' : 'Cashless Specialties:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(language === 'mr' ? h.specialtiesMr : h.specialtiesEn).map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-[11px] text-slate-700 dark:text-white/80"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cashless remark */}
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/20 rounded-xl p-2.5 text-xs text-emerald-900 dark:text-emerald-200 mb-4 leading-relaxed">
                  ✓ {h.cashlessServices}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
                <a
                  href={`tel:${h.echsDeskPhone}`}
                  className="px-3 py-2 rounded-xl bg-navy-900 dark:bg-navy-700 hover:bg-navy-800 text-white font-semibold text-xs inline-flex items-center gap-1 shadow-sm"
                  title="Call ECHS Desk"
                >
                  <span>📞 Desk</span>
                  <span className="hidden sm:inline font-mono">{h.echsDeskPhone}</span>
                </a>

                <a
                  href={`tel:${h.emergencyCasualtyPhone}`}
                  className="px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs inline-flex items-center gap-1 shadow-sm"
                  title="Call Emergency"
                >
                  <span>🚨 Emergency</span>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${h.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-200 dark:bg-navy-900 hover:bg-slate-300 dark:hover:bg-navy-700 text-slate-800 dark:text-white text-xs"
                  title="Open in Maps"
                >
                  🗺️
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
