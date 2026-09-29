'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function SeniorPensionersCare() {
  const { language, elderMode, toggleElderMode } = useLanguage();
  const [basicPension, setBasicPension] = useState<number>(26500);
  const [ageGroup, setAgeGroup] = useState<number>(80);
  const [activeTab, setActiveTab] = useState<'hike' | 'doorstep' | 'concessions' | 'widowCare'>('hike');

  // Age additional pension hike formula (MoD & 7th CPC):
  // 80 to <85: 20%
  // 85 to <90: 30%
  // 90 to <95: 40%
  // 95 to <100: 50%
  // 100+: 100%
  const getAdditionalPercentage = (age: number) => {
    if (age >= 100) return 100;
    if (age >= 95) return 50;
    if (age >= 90) return 40;
    if (age >= 85) return 30;
    if (age >= 80) return 20;
    return 0;
  };

  const additionalPercent = getAdditionalPercentage(ageGroup);
  const additionalAmount = Math.round((basicPension * additionalPercent) / 100);
  const revisedBasic = basicPension + additionalAmount;
  // Current Dearness Relief (DR) is approx 53%
  const drRate = 0.53;
  const drAmount = Math.round(revisedBasic * drRate);
  const grossMonthlyPension = revisedBasic + drAmount;

  return (
    <section id="senior-care" className="py-20 sm:py-24 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden" aria-labelledby="senior-heading">
      {/* Background accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-military-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header tailored for Retired Persons */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-500/15 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            {language === 'mr' ? 'ज्येष्ठ निवृत्त सैनिक व पेन्शनर विशेष दालन' : 'Senior Veterans & Retired Persons Care Desk'}
          </div>

          <h2 id="senior-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            {language === 'mr'
              ? 'निवृत्त सैनिक, ज्येष्ठ पेन्शनर्स व वीर नारी कल्याण'
              : 'Dedicated Support for Retired Persons & Senior Veterans'}
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? '६० वर्षे आणि त्यापुढील निवृत्त सैनिक, वयोवृद्ध वीर नारींसाठी घरपोच हयातीचा दाखला, ८०+ वर्षांवरील वाढीव पेन्शन, मोफत बस पास व महापालिका घरपट्टी १००% सवलत.'
              : 'Specially created for retired military personnel, senior veterans (60 to 100+ years), and elderly Veer Naris — featuring doorstep life certificates, 80+ pension enhancement, municipal tax exemption, and priority healthcare.'}
          </p>
        </div>

        {/* Big Tap One-Touch Emergency & Helpline Buttons for Senior Eyes */}
        <div className="bg-navy-900/90 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 mb-14 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">👴</span>
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-amber-300">
                  {language === 'mr' ? 'ज्येष्ठ नागरिकांसाठी जलद मदत केंद्र (१-टच कॉल)' : 'Senior Citizen One-Touch Assistance (Click to Call)'}
                </h3>
                <p className="text-xs text-white/70">
                  {language === 'mr' ? 'कोणत्याही अडचणीत खालील बटणावर दाबून थेट संपर्क साधा.' : 'Tap any large button below for immediate direct connection.'}
                </p>
              </div>
            </div>

            {/* Elder Mode Toggle */}
            <button
              onClick={toggleElderMode}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center gap-2 ${
                elderMode
                  ? 'bg-amber-400 text-navy-950 border-amber-300 shadow-lg'
                  : 'bg-military-800 text-amber-300 border-amber-400/30 hover:bg-military-700'
              }`}
            >
              <span>👓</span>
              <span>{elderMode ? (language === 'mr' ? 'मोठा फॉन्ट सुरू आहे ✓' : 'Large Font Mode Active ✓') : (language === 'mr' ? 'वाचण्यास सोपे मोठे अक्षर करा' : 'Enable Large Font Mode')}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="tel:02532570123"
              className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 border-2 border-saffron-500 hover:border-saffron-400 hover:scale-[1.02] transition-all flex items-center gap-4 shadow-lg group"
            >
              <div className="w-14 h-14 rounded-2xl bg-saffron-500 text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                📞
              </div>
              <div>
                <span className="text-[11px] text-saffron-300 font-bold block uppercase tracking-wider">
                  {language === 'mr' ? 'असोसिएशन हेल्पलाइन' : 'Veterans Helpline'}
                </span>
                <span className="font-heading font-black text-lg text-white block">0253-2570123</span>
                <span className="text-[11px] text-white/60">{language === 'mr' ? 'सकाळी ९ ते संध्या. ६' : '09:00 - 18:00 hrs'}</span>
              </div>
            </a>

            <a
              href="tel:02532491234"
              className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 border-2 border-red-500 hover:border-red-400 hover:scale-[1.02] transition-all flex items-center gap-4 shadow-lg group"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                🚑
              </div>
              <div>
                <span className="text-[11px] text-red-300 font-bold block uppercase tracking-wider">
                  {language === 'mr' ? 'सैन्य रुग्णालय देवळाली' : 'MH Deolali Casualty'}
                </span>
                <span className="font-heading font-black text-lg text-white block">0253-2491234</span>
                <span className="text-[11px] text-red-400 font-bold">24x7 Ambulance / Emergency</span>
              </div>
            </a>

            <a
              href="https://wa.me/919876543210?text=Namaskar,%20I%20am%20a%20retired%20veteran%20needing%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 border-2 border-emerald-500 hover:border-emerald-400 hover:scale-[1.02] transition-all flex items-center gap-4 shadow-lg group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                💬
              </div>
              <div>
                <span className="text-[11px] text-emerald-300 font-bold block uppercase tracking-wider">
                  {language === 'mr' ? 'व्हॉट्सॲप स्वयंसेवक' : 'Home Visit Volunteer'}
                </span>
                <span className="font-heading font-black text-base text-white block">WhatsApp Help</span>
                <span className="text-[11px] text-emerald-400 font-semibold">{language === 'mr' ? 'हयातीचा दाखला / पेन्शन' : 'DLC / Bedridden Care'}</span>
              </div>
            </a>

            <a
              href="tel:02532570188"
              className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 border-2 border-sky-500 hover:border-sky-400 hover:scale-[1.02] transition-all flex items-center gap-4 shadow-lg group"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
                🩺
              </div>
              <div>
                <span className="text-[11px] text-sky-300 font-bold block uppercase tracking-wider">
                  {language === 'mr' ? 'ई.सी.एच.एस. दवाखाना' : 'ECHS Polyclinic'}
                </span>
                <span className="font-heading font-black text-lg text-white block">0253-2570188</span>
                <span className="text-[11px] text-white/60">{language === 'mr' ? 'मोफत औषध वाटप ओपीडी' : 'Daily Medicines OPD'}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-navy-900 p-1.5 rounded-2xl flex flex-wrap justify-center gap-1 border border-white/10">
            <button
              onClick={() => setActiveTab('hike')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'hike' ? 'bg-amber-500 text-navy-950 shadow-md' : 'text-white/70 hover:text-white'
              }`}
            >
              📈 {language === 'mr' ? '८०+ वयाची वाढीव पेन्शन (+२०% ते १००%)' : '80+ Age Pension Hike Calculator'}
            </button>

            <button
              onClick={() => setActiveTab('doorstep')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'doorstep' ? 'bg-amber-500 text-navy-950 shadow-md' : 'text-white/70 hover:text-white'
              }`}
            >
              🏡 {language === 'mr' ? 'घरपोच जीवन प्रमाण दाखला' : 'Doorstep Life Certificate'}
            </button>

            <button
              onClick={() => setActiveTab('concessions')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'concessions' ? 'bg-amber-500 text-navy-950 shadow-md' : 'text-white/70 hover:text-white'
              }`}
            >
              🚌 {language === 'mr' ? 'घरपट्टी सूट व एसटी बस सवलत' : 'Tax Rebate & Bus Pass'}
            </button>

            <button
              onClick={() => setActiveTab('widowCare')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'widowCare' ? 'bg-amber-500 text-navy-950 shadow-md' : 'text-white/70 hover:text-white'
              }`}
            >
              🤝 {language === 'mr' ? 'पतीच्या पश्चात कुटुंब निवृत्तीवेतन' : 'Widow Pension Transition'}
            </button>
          </div>
        </div>

        {/* Tab 1: 80+ Age Pension Hike Calculator */}
        {activeTab === 'hike' && (
          <div className="bg-navy-900/80 border border-amber-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-1">
                {language === 'mr' ? '७ व्या वेतन आयोगाचा नियम' : '7th CPC & Ministry of Defence Provision'}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                {language === 'mr'
                  ? '८० वर्षे आणि त्यापुढील निवृत्त सैनिकांसाठी अतिरिक्त पेन्शन गणक'
                  : 'Calculate Additional Quantum of Pension for Senior Pensioners'}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-2xl mx-auto">
                {language === 'mr'
                  ? 'संरक्षण मंत्रालयाच्या नियमांनुसार ८० व्या वाढदिवसापासून मूळ पेन्शनमध्ये २०% ते १००% पर्यंत वाढीव रक्कम आपोआप सुरू होणे कायदेशीर अधिकार आहे.'
                  : 'Armed Forces pensioners and family pensioners reaching 80 years of age are entitled to an additional quantum of pension ranging from 20% to 100% of basic pension.'}
              </p>
            </div>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8 text-xs">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="basic-pension-input" className="text-white/80 font-bold">
                    {language === 'mr' ? 'सध्याची मूळ पेन्शन (Basic Pension ₹):' : 'Current Basic Pension (₹):'}
                  </label>
                  <span className="font-bold text-amber-400 font-mono text-sm">₹{basicPension.toLocaleString()}</span>
                </div>
                <input
                  id="basic-pension-input"
                  type="range"
                  min="15000"
                  max="70000"
                  step="500"
                  value={basicPension}
                  onChange={(e) => setBasicPension(parseInt(e.target.value, 10))}
                  className="w-full accent-amber-500 cursor-pointer"
                  aria-label="Basic Pension input"
                />
                <span className="text-[11px] text-white/50 block mt-1">Enter your Basic pension before Dearness Relief</span>
              </div>

              <div>
                <label htmlFor="age-group-select" className="text-white/80 font-bold block mb-1.5">
                  {language === 'mr' ? 'पेन्शनरचे वय संवर्ग निवडा:' : 'Select Pensioner Age Bracket:'}
                </label>
                <select
                  id="age-group-select"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(parseInt(e.target.value, 10))}
                  className="w-full p-2.5 bg-navy-950 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-400 font-semibold"
                >
                  <option value={75}>Under 80 Years (Standard Pension)</option>
                  <option value={80}>80 to &lt;85 Years (+20% Additional Basic)</option>
                  <option value={85}>85 to &lt;90 Years (+30% Additional Basic)</option>
                  <option value={90}>90 to &lt;95 Years (+40% Additional Basic)</option>
                  <option value={95}>95 to &lt;100 Years (+50% Additional Basic)</option>
                  <option value={100}>100 Years &amp; Above (+100% Double Pension!)</option>
                </select>
              </div>
            </div>

            {/* Calculations Breakdown Card */}
            <div className="bg-navy-950/90 border border-amber-400/40 rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-white/50 text-[11px] block mb-1">Original Basic</span>
                  <span className="font-mono font-bold text-white text-base">₹{basicPension.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-amber-400 text-[11px] font-bold block mb-1">
                    Age Hike ({additionalPercent}%)
                  </span>
                  <span className="font-mono font-bold text-amber-400 text-base">+₹{additionalAmount.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-white/50 text-[11px] block mb-1">Revised Basic</span>
                  <span className="font-mono font-bold text-white text-base">₹{revisedBasic.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-emerald-400 text-[11px] font-bold block mb-1">DR @ 53%</span>
                  <span className="font-mono font-bold text-emerald-400 text-base">₹{drAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="text-center">
                <span className="text-xs text-white/70 block mb-1">
                  {language === 'mr' ? 'दरमहा खात्यात जमा होणारी अंदाजे एकूण पेन्शन:' : 'Estimated Total Monthly Gross Pension Credited:'}
                </span>
                <div className="text-3xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight mb-2">
                  ₹{grossMonthlyPension.toLocaleString()}
                </div>
                <p className="text-xs text-emerald-400 max-w-lg mx-auto">
                  ✓ If your bank/SPARSH has not automatically added this +{additionalPercent}% hike upon your 80th birthday, submit Form &lsquo;A&rsquo; with proof of birth date to the Association office for immediate liaison with PCDA.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Doorstep Life Certificate */}
        {activeTab === 'doorstep' && (
          <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-navy-950 flex items-center justify-center text-3xl font-bold shrink-0">
                🏡
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {language === 'mr' ? 'अंथरूणावर खिळलेल्या व ज्येष्ठ पेन्शनर्ससाठी घरपोच सेवा' : 'Doorstep Digital Life Certificate (DLC) for Seniors'}
                </h3>
                <p className="text-xs text-white/70">
                  Special assistance for veterans aged 75+ and bedridden retirees in Nashik district
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-xs">
              <div className="bg-navy-950 p-5 rounded-2xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-amber-500 text-navy-950 font-bold inline-flex items-center justify-center mb-3">1</span>
                <h4 className="font-bold text-white text-sm mb-2">India Post (डाक विभाग)</h4>
                <p className="text-white/70 leading-relaxed mb-3">
                  Call your local postman via Post Info App. The postman arrives at your home with a biometric fingerprint scanner to generate your DLC on SPARSH for a nominal ₹70 fee.
                </p>
                <span className="text-amber-400 font-bold block">Toll Free: 1800-266-6868</span>
              </div>

              <div className="bg-navy-950 p-5 rounded-2xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-amber-500 text-navy-950 font-bold inline-flex items-center justify-center mb-3">2</span>
                <h4 className="font-bold text-white text-sm mb-2">AadhaarFaceRD (मोबाईल चेहरा)</h4>
                <p className="text-white/70 leading-relaxed mb-3">
                  A family member or child can download the official &lsquo;AadhaarFaceRD&rsquo; &amp; &lsquo;Jeevan Pramaan&rsquo; app on an Android phone. No biometric device needed — just scan face!
                </p>
                <span className="text-emerald-400 font-bold block">100% Free From Home</span>
              </div>

              <div className="bg-navy-950 p-5 rounded-2xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-amber-500 text-navy-950 font-bold inline-flex items-center justify-center mb-3">3</span>
                <h4 className="font-bold text-white text-sm mb-2">Association Volunteer Visit</h4>
                <p className="text-white/70 leading-relaxed mb-3">
                  For completely helpless or bedridden senior veterans in Nashik, Deolali or Ojhar, Association volunteers visit your residence with tablet equipment.
                </p>
                <a href="tel:02532570123" className="text-saffron-400 font-bold underline">
                  Request Visit: 0253-2570123
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Concessions (NMC Property Tax & MSRTC Bus) */}
        {activeTab === 'concessions' && (
          <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto space-y-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">
              {language === 'mr' ? 'नाशिक मनपा घरपट्टी १००% सूट व एसटी मोफत प्रवास' : 'Maharashtra State & NMC Concessions for Senior Veterans'}
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-xs">
              {/* NMC Property Tax */}
              <div className="bg-navy-950 p-6 rounded-2xl border border-amber-400/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏛️</span>
                  <h4 className="font-heading font-bold text-base text-amber-300">
                    Nashik Municipal Corp (NMC) 100% House Tax Exemption
                  </h4>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Under Section 129 of Maharashtra Municipal Corporations Act, residential houses owned and occupied by Ex-Servicemen, war widows, or dependent parents are exempt from municipal general property tax.
                </p>
                <div className="bg-navy-900 p-3 rounded-xl border border-white/5 space-y-1.5 text-white/70">
                  <strong className="text-white block mb-1">Required Documents:</strong>
                  <div>• Discharge Book / PPO Copy</div>
                  <div>• Zilla Sainik Welfare Office (ZSPO) Eligibility Certificate</div>
                  <div>• Latest NMC Property Tax Bill &amp; 7/12 or City Survey Extract</div>
                  <div>• Self-declaration that property is not rented out</div>
                </div>
              </div>

              {/* MSRTC Free Bus Travel */}
              <div className="bg-navy-950 p-6 rounded-2xl border border-emerald-400/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🚌</span>
                  <h4 className="font-heading font-bold text-base text-emerald-300">
                    MSRTC (एसटी) 100% Free Concession Pass
                  </h4>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Free and concessional bus travel across all Maharashtra State Transport buses (Ordinary, Semi-Luxury, Shivshahi):
                </p>
                <div className="bg-navy-900 p-3 rounded-xl border border-white/5 space-y-2 text-white/70">
                  <div>
                    <strong className="text-amber-300">75+ Years Seniors (Amrut Jyeshtha Nagarik):</strong>
                    <p>100% Free Travel in all ST buses with Aadhaar card validation.</p>
                  </div>
                  <div>
                    <strong className="text-emerald-300">Gallantry &amp; War Disabled Veterans:</strong>
                    <p>100% Free Travel across Maharashtra for Veteran + 1 Attendant.</p>
                  </div>
                  <div>
                    <strong className="text-sky-300">65 to 74 Years:</strong>
                    <p>50% Concession on all regular MSRTC routes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Widow Family Pension Transition */}
        {activeTab === 'widowCare' && (
          <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center text-3xl font-bold shrink-0">
                🤝
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {language === 'mr' ? 'पतीच्या निधनानंतर पेन्शन सुरू ठेवण्याची कार्यपद्धती' : 'Family Pension Checklist After Veteran Demise'}
                </h3>
                <p className="text-xs text-white/70">
                  Emergency step-by-step guidance for elderly spouses &amp; Veer Naris to prevent pension stoppage
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              {[
                { step: '1', title: 'Intimate Bank / SPARSH With Death Certificate', desc: 'Submit written letter with Municipal Death Certificate copy to bank branch manager or upload on SPARSH to prevent pension overdraft.' },
                { step: '2', title: 'Submit Form 14 (Family Pension Application)', desc: 'If joint bank account exists with spouse as per PPO, ordinary family pension starts smoothly without need of new succession certificates.' },
                { step: '3', title: 'Apply for ZSPO Widow Identity Card', desc: 'Visit Zilla Sainik Welfare Office Nashik with 4 joint photos, Discharge Book & death certificate to issue official Widow I-Card.' },
                { step: '4', title: 'Re-endorse ECHS 64-KB Smart Card', desc: 'Visit ECHS Polyclinic Nashik to change status from "Spouse Dependent" to primary "Widow Beneficiary" for lifetime cashless hospital cover.' },
                { step: '5', title: 'Apply for KSB Demise Grant (₹30,000)', desc: 'Widows of non-pensioners or jawans can apply for instant funeral/bereavement financial grant of ₹30,000 via Kendriya Sainik Board.' },
              ].map((item) => (
                <div key={item.step} className="p-3.5 bg-navy-950 rounded-xl border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-navy-950 font-bold flex items-center justify-center shrink-0 text-xs">
                    {item.step}
                  </span>
                  <div>
                    <strong className="text-white text-sm block mb-0.5">{item.title}</strong>
                    <span className="text-white/70">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-100/10 border border-amber-400/30 rounded-xl p-4 text-xs text-amber-200 flex items-center justify-between gap-4">
              <span>Need personal assistance with paperwork? Our Association office staff helps elderly widows free of cost.</span>
              <a href="tel:02532570123" className="px-4 py-2 rounded-xl bg-amber-400 text-navy-950 font-bold whitespace-nowrap shadow-md">
                Call Association
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
