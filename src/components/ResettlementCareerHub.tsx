'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface TradeMapping {
  id: string;
  militaryTradeEn: string;
  militaryTradeMr: string;
  corpsBadge: string;
  civilianRolesEn: string[];
  civilianRolesMr: string[];
  nashikIndustries: string;
  avgSalaryRange: string;
  qualifyingCert: string;
}

const tradeMappings: TradeMapping[] = [
  {
    id: 'combat',
    militaryTradeEn: 'Combat Arms (Infantry, Artillery, Armoured, Special Forces)',
    militaryTradeMr: 'लढाऊ दल (इन्फंट्री, तोफखाना, आर्मर्ड, पॅरा एसएफ)',
    corpsBadge: '⚔️ Combat Specialists',
    civilianRolesEn: ['Chief Security Officer (CSO)', 'Industrial Loss Prevention Manager', 'Executive Protection / VIP Security', 'Logistics Operations Lead'],
    civilianRolesMr: ['मुख्य सुरक्षा अधिकारी (CSO)', 'औद्योगिक नुकसान प्रतिबंधक व्यवस्थापक', 'व्हीआयपी सुरक्षा अधिकारी', 'लॉजिस्टिक्स प्रमुख'],
    nashikIndustries: 'MIDC Ambad & Satpur automobile plants, 5-Star Hotels, Corporate Banks',
    avgSalaryRange: '₹35,000 - ₹75,000 / month',
    qualifyingCert: 'Military Service Graduation Certificate / DGR Security Course',
  },
  {
    id: 'technical-eme',
    militaryTradeEn: 'Technical & Engineering (EME, Corps of Engineers / Sappers)',
    militaryTradeMr: 'तांत्रिक व अभियांत्रिकी (ईएमई, बॉम्बे सॅपर्स, इंजिनिअर्स)',
    corpsBadge: '🔧 Technical Corps',
    civilianRolesEn: ['Industrial Plant Maintenance Manager', 'Automotive Fleet Superintendent', 'Heavy Machinery & Crane Supervisor', 'Workshop Head'],
    civilianRolesMr: ['औद्योगिक प्रकल्प देखभाल प्रमुख', 'वाहन ताफा व्यवस्थापक (Fleet Lead)', 'जड यंत्रसामग्री पर्यवेक्षक', 'वर्कशॉप इन्चार्ज'],
    nashikIndustries: 'Mahindra & Mahindra, Bosch Nashik, Glenmark, ABB Satpur',
    avgSalaryRange: '₹40,000 - ₹85,000 / month',
    qualifyingCert: 'Diploma in Mech/Auto Engg (Recognized Army Equivalent)',
  },
  {
    id: 'signals-iaf',
    militaryTradeEn: 'Signals, Avionics & Radar (Corps of Signals, IAF Tech)',
    militaryTradeMr: 'सिग्नल्स, एव्हिऑनिक्स व रडार (सिग्नल्स दल, हवाई दल तांत्रिक)',
    corpsBadge: '📡 Telecom & Radar',
    civilianRolesEn: ['Telecom Towers Operations Lead', 'Drone Pilot & Aerial Surveyor', 'CCTV & Command Control Specialist', 'Data Centre Infrastructure Admin'],
    civilianRolesMr: ['दूरसंचार टॉवर संचालन प्रमुख', 'ड्रोन पायलट व हवाई सर्व्हेअर', 'कमांड कंट्रोल व सीसीटीव्ही तज्ज्ञ', 'डेटा सेंटर इन्फ्रा ॲडमिन'],
    nashikIndustries: 'Telecom Operators (Jio/Airtel), IT Parks, HAL Ojhar Vendor Network',
    avgSalaryRange: '₹45,000 - ₹95,000 / month',
    qualifyingCert: 'Signalman Class-I / IAF Group X Tech Equivalence',
  },
  {
    id: 'navy-marine',
    militaryTradeEn: 'Navy Marine Engineering, Electrical & Logistics',
    militaryTradeMr: 'नौदल मरीन इंजिनिअरिंग, इलेक्ट्रिकल व रसद',
    corpsBadge: '⚓ Naval Engineering',
    civilianRolesEn: ['HV/LV Electrical Substation Supervisor', 'Refrigeration & HVAC Industrial Plant Head', 'Supply Chain & Port Cargo Coordinator', 'Safety Auditor'],
    civilianRolesMr: ['उच्च दाब विद्युत सबस्टेशन पर्यवेक्षक', 'एचव्हीएसी व शीतकरण प्रकल्प प्रमुख', 'सप्लाय चेन व कार्गो समन्वय', 'सुरक्षा ऑडिटर'],
    nashikIndustries: 'EPC Contracting, Warehousing Hubs at Nashik-Igatpuri corridor',
    avgSalaryRange: '₹45,000 - ₹90,000 / month',
    qualifyingCert: 'Naval Artificer / Petty Officer Technical Trade Certificate',
  },
  {
    id: 'clerical-asc',
    militaryTradeEn: 'Clerical, Administration & Supply (ASC, AEC, Record)',
    militaryTradeMr: 'प्रशासकीय, कारकून व रसद (एएससी, शिक्षण दल)',
    corpsBadge: '📋 Admin & Logistics',
    civilianRolesEn: ['Warehouse Manager / Inventory Controller', 'Bank Office Associate / Security Officer', 'Hospital Administration Officer', 'Government Group C Cadre'],
    civilianRolesMr: ['गोदाम व्यवस्थापक (Warehouse Head)', 'बँक सुरक्षा अधिकारी / सहाय्यक', 'रुग्णालय प्रशासक', 'शासकीय गट-क लिपिक वर्ग'],
    nashikIndustries: 'E-commerce logistics, Cooperative & Nationalized Banks in Nashik',
    avgSalaryRange: '₹30,000 - ₹60,000 / month',
    qualifyingCert: 'Army Special Certificate of Education (Matric/Graduation)',
  },
];

export default function ResettlementCareerHub() {
  const { language } = useLanguage();
  const [selectedTrade, setSelectedTrade] = useState('combat');
  const [calcAge, setCalcAge] = useState<number>(42);
  const [calcService, setCalcService] = useState<number>(17);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceBranch: 'Army',
    rank: '',
    preferredMidc: 'Ambad',
  });

  // Maharashtra Gov Age Relaxation Formula:
  // Qualifying Age for Exam = Current Age - (Years of Military Service + 3 years grace)
  const qualifyingAge = Math.max(18, calcAge - (calcService + 3));

  const activeTrade = tradeMappings.find((t) => t.id === selectedTrade) || tradeMappings[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="resettlement" className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="resettlement-heading">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-military-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/40 bg-saffron-500/10 text-saffron-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
            {language === 'mr' ? 'डी.जी.आर. पुनर्वसन व द्वितीय कारकीर्द दालन' : 'DGR Resettlement & Veteran Second Careers'}
          </div>

          <h2 id="resettlement-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {language === 'mr'
              ? 'माजी सैनिक पुनर्वसन, नोकरी व उद्योग सहाय्य'
              : 'Ex-Servicemen Resettlement & Career Hub'}
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? 'सशस्त्र दलातील निवृत्तीनंतर नाशिक एमआयडीसी (अंबड, सातपूर, सिन्नर), बँकिंग क्षेत्र आणि महाराष्ट्र शासनाच्या १५% आरक्षणामध्ये रोजगाराच्या सुवर्णसंधी.'
              : 'Empowering young retiring veterans to transition into rewarding second careers across Nashik industrial corridors, bank security leadership, and Maharashtra Government 15% reservation quotas.'}
          </p>
        </div>

        {/* Feature 1: Trade to Civilian Career Matcher */}
        <div className="bg-navy-950/80 border border-white/10 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs text-saffron-400 font-bold uppercase tracking-wider block mb-1">
                {language === 'mr' ? 'कौशल्य मॅपिंग टूल' : 'Military Skills Translation Tool'}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                {language === 'mr'
                  ? 'आपल्या सैन्य ट्रेडनुसार नाशिकमधील कॉर्पोरेट संधी'
                  : 'Map Your Military Trade to Nashik Corporate Roles'}
              </h3>
            </div>

            {/* Trade Selector Pills */}
            <div className="flex flex-wrap gap-1.5">
              {tradeMappings.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTrade(t.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedTrade === t.id
                      ? 'bg-saffron-500 text-navy-950 shadow-md'
                      : 'bg-navy-800 text-white/70 hover:bg-navy-700 hover:text-white'
                  }`}
                >
                  {t.id === 'combat' ? '⚔️ Combat' : t.id === 'technical-eme' ? '🔧 EME Tech' : t.id === 'signals-iaf' ? '📡 Signals' : t.id === 'navy-marine' ? '⚓ Navy' : '📋 Admin'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Trade Details */}
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Column 1: Military Profile */}
            <div className="bg-navy-900/90 border border-white/10 rounded-2xl p-5">
              <span className="inline-block px-2.5 py-1 rounded bg-military-500/20 text-military-300 text-xs font-bold mb-3 border border-military-500/30">
                {activeTrade.corpsBadge}
              </span>
              <h4 className="font-heading font-bold text-lg text-white mb-2">
                {language === 'mr' ? activeTrade.militaryTradeMr : activeTrade.militaryTradeEn}
              </h4>
              <div className="text-xs text-white/60 mb-4 leading-relaxed">
                <strong className="text-white block mb-0.5">
                  {language === 'mr' ? 'समकक्ष पात्रता प्रमाणपत्र:' : 'Civilian Equivalence:'}
                </strong>
                {activeTrade.qualifyingCert}
              </div>
              <div className="p-3 bg-navy-950/60 rounded-xl border border-white/5 text-xs">
                <span className="text-saffron-300 font-bold block mb-1">
                  {language === 'mr' ? 'अपेक्षित वेतन श्रेणी:' : 'Expected Monthly Package:'}
                </span>
                <span className="text-amber-400 font-mono font-bold text-sm">{activeTrade.avgSalaryRange}</span>
              </div>
            </div>

            {/* Column 2: Matching Civilian Roles */}
            <div className="bg-navy-900/90 border border-white/10 rounded-2xl p-5">
              <h4 className="font-heading font-bold text-base text-saffron-300 mb-3 flex items-center gap-2">
                <span>🎯</span>
                <span>{language === 'mr' ? 'नाशिकमधील प्रमुख पदनामे:' : 'High-Demand Corporate Job Roles:'}</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-white/85">
                {(language === 'mr' ? activeTrade.civilianRolesMr : activeTrade.civilianRolesEn).map((role, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-navy-950/50 p-2.5 rounded-lg border border-white/5">
                    <span className="text-saffron-400 font-bold">✓</span>
                    <span className="font-semibold">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Nashik Target Corridors */}
            <div className="bg-navy-900/90 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <h4 className="font-heading font-bold text-base text-emerald-400 mb-2 flex items-center gap-2">
                  <span>🏭</span>
                  <span>{language === 'mr' ? 'नाशिक औद्योगिक क्षेत्र (MIDC):' : 'Key Nashik Hirers:'}</span>
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  {activeTrade.nashikIndustries}
                </p>
                <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-3 text-xs text-emerald-200">
                  💡 <strong>Pro Tip:</strong> Veteran candidates hold priority preference for Bank Security Officer examinations (IBPS) and DGR Security Agency registrations.
                </div>
              </div>

              <a
                href="#career-register"
                className="mt-4 px-4 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-400 text-navy-950 font-bold text-xs text-center shadow-md transition-all"
              >
                {language === 'mr' ? 'या पदांसाठी नाव नोंदवा' : 'Register for this Career Stream'}
              </a>
            </div>
          </div>
        </div>

        {/* Feature 2: Maharashtra Govt 15% Reservation & Age Relaxation Calculator */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Age Calculator Card */}
          <div className="bg-gradient-to-br from-navy-950 to-navy-900 border border-saffron-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-saffron-500/20 text-saffron-300 text-xs font-bold mb-3 border border-saffron-500/30">
              🧮 {language === 'mr' ? 'वयोमर्यादा सूट गणक' : 'Govt Exam Age Relaxation Calculator'}
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              {language === 'mr'
                ? 'महाराष्ट्र शासन नोकरी वयोमर्यादा सूट'
                : 'Calculate Your Age Eligibility for MPSC & Govt Exams'}
            </h3>

            <p className="text-white/70 text-xs sm:text-sm mb-6 leading-relaxed">
              {language === 'mr'
                ? 'महाराष्ट्र शासनाच्या नियमांनुसार: उमेदवाराचे वय - (सशस्त्र दलातील प्रत्यक्ष सेवा वर्षे + ३ वर्षे सूट) = स्पर्धा परीक्षेसाठी ग्राह्य धरले जाणारे वय.'
                : 'As per Maharashtra Civil Services Rules, ESM are granted deduction of actual military service plus 3 grace years from their current age.'}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/75">{language === 'mr' ? 'आपले सध्याचे वय:' : 'Your Current Age:'}</span>
                  <span className="font-bold text-amber-400 font-mono text-sm">{calcAge} Years</span>
                </div>
                <input
                  type="range"
                  min="32"
                  max="58"
                  value={calcAge}
                  onChange={(e) => setCalcAge(parseInt(e.target.value, 10))}
                  className="w-full accent-saffron-500 cursor-pointer"
                  aria-label="Your current age"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/75">{language === 'mr' ? 'सैन्य सेवेचा कालावधी (वर्षे):' : 'Completed Defence Service (Years):'}</span>
                  <span className="font-bold text-emerald-400 font-mono text-sm">{calcService} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  value={calcService}
                  onChange={(e) => setCalcService(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-500 cursor-pointer"
                  aria-label="Completed military service"
                />
              </div>
            </div>

            {/* Result Box */}
            <div className="bg-navy-900 border border-saffron-500/40 rounded-2xl p-4 text-center">
              <span className="text-xs text-white/60 block mb-1">
                {language === 'mr' ? 'शासकीय परीक्षेसाठी आपले प्रभावी वय:' : 'Your Effective Qualifying Age for Govt Exams:'}
              </span>
              <div className="font-extrabold text-3xl sm:text-4xl text-saffron-400 font-mono mb-1">
                {qualifyingAge} <span className="text-base text-white/80 font-normal">Years Old</span>
              </div>
              <span className="text-xs text-emerald-400 font-semibold block">
                ✓ Fully eligible for MPSC Group C (Limit 38 yrs), Talathi, Police Bharti & Zilla Parishad ESM Quota!
              </span>
            </div>
          </div>

          {/* DGR Schemes List */}
          <div className="bg-navy-950/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-military-500/20 text-military-300 text-xs font-bold mb-3 border border-military-500/30">
                🏢 {language === 'mr' ? 'डी.जी.आर. उद्योग व व्यवसाय योजना' : 'DGR Self-Employment Schemes'}
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                {language === 'mr' ? 'माजी सैनिकांसाठी केंद्र व राज्य योजना' : 'Self-Employment & Enterprise Schemes'}
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-navy-900/80 rounded-xl border border-white/5">
                  <strong className="text-saffron-300 block mb-1 text-sm">
                    1. DGR Sponsored Security Agencies (ESM Officers)
                  </strong>
                  <p className="text-white/70">
                    Registration with DGR for providing security guards to Public Sector Undertakings (PSUs), Ordnance Factories & Banks.
                  </p>
                </div>

                <div className="p-3 bg-navy-900/80 rounded-xl border border-white/5">
                  <strong className="text-emerald-300 block mb-1 text-sm">
                    2. Defence Quota Petrol Pump & LPG Gas Agency
                  </strong>
                  <p className="text-white/70">
                    8% reservation in Indian Oil, BPCL & HPCL retail outlets for war-disabled personnel, Veer Naris & Ex-Servicemen.
                  </p>
                </div>

                <div className="p-3 bg-navy-900/80 rounded-xl border border-white/5">
                  <strong className="text-amber-300 block mb-1 text-sm">
                    3. Coal Tipper Transport Scheme
                  </strong>
                  <p className="text-white/70">
                    Direct coal transportation contracts through Ex-Servicemen Coal Transport Companies affiliated with Coal India subsidiaries.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
              <span>Official DGR Portal: dgrindia.gov.in</span>
              <span className="text-saffron-400 font-bold">Liaison: ZSPO Nashik</span>
            </div>
          </div>
        </div>

        {/* Feature 3: Career Cell Registration Form */}
        <div id="career-register" className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border border-saffron-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              {language === 'mr' ? 'नाशिक माजी सैनिक रोजगार नोंदणी कक्ष' : 'Register for Nashik ESM Placement Assistance'}
            </h3>
            <p className="text-white/70 text-xs sm:text-sm">
              {language === 'mr'
                ? 'आपली माहिती सबमिट करा. नाशिक असोसिएशनच्या जॉब सेलद्वारे स्थानिक उद्योगपतींशी थेट समन्वय साधला जाईल.'
                : 'Submit your profile for interview matchmaking across Nashik MIDC companies and corporate security networks.'}
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-6 text-center">
              <span className="text-4xl block mb-2">🎖️</span>
              <h4 className="font-heading text-lg font-bold text-emerald-300 mb-1">
                {language === 'mr' ? 'आपली नोंदणी यशस्वीरीत्या प्राप्त झाली आहे!' : 'Registration Received Successfully!'}
              </h4>
              <p className="text-xs text-white/80 max-w-md mx-auto">
                {language === 'mr'
                  ? 'आमचे रोजगार समन्वय अधिकारी लवकरच आपल्याशी संपर्क साधतील. जय हिंद!'
                  : 'Our Veteran Placement Liaison Officer will contact you within 3 working days with matching corporate vacancies. Jai Hind!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="resettlement-name" className="text-white/80 font-bold block mb-1">Full Name (नाव) *</label>
                  <input
                    id="resettlement-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Subedar Ramesh Shinde (Retd)"
                    className="w-full p-2.5 bg-navy-950 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-saffron-500"
                  />
                </div>
                <div>
                  <label htmlFor="resettlement-phone" className="text-white/80 font-bold block mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    id="resettlement-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="98XXXXXXXX"
                    className="w-full p-2.5 bg-navy-950 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-saffron-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="resettlement-branch" className="text-white/80 font-bold block mb-1">Service Branch</label>
                  <select
                    id="resettlement-branch"
                    value={formData.serviceBranch}
                    onChange={(e) => setFormData({ ...formData, serviceBranch: e.target.value })}
                    className="w-full p-2.5 bg-navy-950 border border-white/20 rounded-xl text-white focus:outline-none focus:border-saffron-500"
                  >
                    <option value="Army">Indian Army (लष्कर)</option>
                    <option value="Navy">Indian Navy (नौदल)</option>
                    <option value="Air Force">Indian Air Force (हवाई दल)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="resettlement-rank" className="text-white/80 font-bold block mb-1">Last Rank Held *</label>
                  <input
                    id="resettlement-rank"
                    type="text"
                    required
                    value={formData.rank}
                    onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                    placeholder="Havildar / Subedar / Cdr"
                    className="w-full p-2.5 bg-navy-950 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-saffron-500"
                  />
                </div>

                <div>
                  <label htmlFor="resettlement-location" className="text-white/80 font-bold block mb-1">Preferred Location</label>
                  <select
                    id="resettlement-location"
                    value={formData.preferredMidc}
                    onChange={(e) => setFormData({ ...formData, preferredMidc: e.target.value })}
                    className="w-full p-2.5 bg-navy-950 border border-white/20 rounded-xl text-white focus:outline-none focus:border-saffron-500"
                  >
                    <option value="Ambad">MIDC Ambad</option>
                    <option value="Satpur">MIDC Satpur</option>
                    <option value="Sinnar">MIDC Sinnar (Malegaon)</option>
                    <option value="Deolali">Deolali / Nashik Road</option>
                    <option value="Any">Anywhere in Nashik</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-400 hover:to-saffron-500 text-white font-bold text-sm shadow-xl shadow-saffron-500/20 transition-all hover:scale-[1.01]"
              >
                {language === 'mr' ? 'रोजगार सहाय्यासाठी अर्ज सादर करा' : 'Submit Profile to Nashik ESM Career Cell'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
