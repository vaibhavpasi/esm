'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

type DefenceCategory = 'all' | 'medical' | 'canteen' | 'admin' | 'training' | 'transit';

interface DefenceInstallation {
  id: string;
  nameEn: string;
  nameMr: string;
  category: DefenceCategory;
  branch: 'Army' | 'Navy' | 'Air Force' | 'Tri-Service';
  badge: string;
  taglineEn: string;
  taglineMr: string;
  addressEn: string;
  addressMr: string;
  distFromCBS: string;
  distFromStation: string;
  busRoutes: string[];
  autoFareEst: string;
  timings: string;
  gateProtocolEn: string;
  gateProtocolMr: string;
  contactNumber: string;
  mapsQuery: string;
}

const defenceInstallations: DefenceInstallation[] = [
  {
    id: 'artillery-centre',
    nameEn: 'Artillery Centre & School of Artillery, Deolali',
    nameMr: 'आर्टिलरी सेंटर व तोफखाना प्रशिक्षण केंद्र, देवळाली',
    category: 'training',
    branch: 'Army',
    badge: '🎖️ Topkhana',
    taglineEn: 'Alma Mater of the Indian Regiment of Artillery — "Sarvatra Izzat-o-Iqbal"',
    taglineMr: 'भारतीय तोफखाना दलाचे मुख्य प्रशिक्षण केंद्र — "सर्वत्र इज्जत-ओ-इकबाल"',
    addressEn: 'Temple Hill / Shingave Gate, Deolali Cantonment, Nashik - 422401',
    addressMr: 'टेंपल हिल / शिंगवे गेट, देवळाली छावणी, नाशिक - ४२२४०१',
    distFromCBS: '14.5 km (30 mins)',
    distFromStation: '5.2 km (12 mins)',
    busRoutes: ['CityLink Bus 101 (CBS to Deolali Camp)', 'Bus 107 (Nashik Road to Artillery)'],
    autoFareEst: '₹90 - ₹130 from Nashik Road Rly Stn',
    timings: '08:30 hrs - 17:30 hrs (Mon - Sat)',
    gateProtocolEn: 'Entry requires ESM Identity Card or Veteran CSD Card. Dependents must show valid Dependent Card / Aadhaar.',
    gateProtocolMr: 'प्रवेशासाठी माजी सैनिक ओळखपत्र किंवा CSD कार्ड अनिवार्य. कुटुंबियांसाठी वैध ओळखपत्र आवश्यक.',
    contactNumber: '0253-2491101',
    mapsQuery: 'Artillery+Centre+Deolali+Nashik',
  },
  {
    id: 'mh-deolali',
    nameEn: 'Military Hospital (MH) Deolali — 500 Bed Tertiary Centre',
    nameMr: 'मिलिटरी हॉस्पिटल (MH) देवळाली — ५०० खाटांचे सैन्य रुग्णालय',
    category: 'medical',
    branch: 'Tri-Service',
    badge: '🏥 Tertiary Care',
    taglineEn: 'Premier multispeciality military hospital offering ICU, surgery & veteran priority OPD',
    taglineMr: 'माजी सैनिक व वीर नारींसाठी प्राधान्य ओपीडी, अतिदक्षता व शस्त्रक्रिया सुविधा',
    addressEn: 'Cathcart Road, Near Rest Camp, Deolali Cantonment, Nashik - 422401',
    addressMr: 'कॅथकार्ट रोड, रेस्ट कॅम्प जवळ, देवळाली छावणी, नाशिक - ४२२४०१',
    distFromCBS: '13.8 km (28 mins)',
    distFromStation: '4.8 km (10 mins)',
    busRoutes: ['CityLink Bus 101 (Alight at MH Gate Stop)', 'Bus 214 (Nashik Road to Deolali)'],
    autoFareEst: '₹80 - ₹110 from Nashik Road',
    timings: 'OPD: 08:00 - 14:00 hrs | Emergency / Casualty: 24x7 Hours Open',
    gateProtocolEn: 'ESM / ECHS Beneficiary Smart Card mandatory. In emergency, entry allowed on proof of defence service.',
    gateProtocolMr: 'माजी सैनिक / ECHS स्मार्ट कार्ड अनिवार्य. आपत्कालीन स्थितीत सैनिकी सेवेच्या पुराव्यावर तात्काळ प्रवेश.',
    contactNumber: '0253-2491234',
    mapsQuery: 'Military+Hospital+Deolali+Nashik',
  },
  {
    id: 'cats-gandhinagar',
    nameEn: 'Combat Army Aviation Training School (CATS), Gandhinagar',
    nameMr: 'कॉम्बॅट आर्मी एव्हिएशन ट्रेनिंग स्कूल (CATS), गांधीनगर एअरफील्ड',
    category: 'training',
    branch: 'Army',
    badge: '🚁 Suvarna Chhatra',
    taglineEn: 'Main combat aviation academy training helicopter pilots for Rudra, Dhruv & Prachand',
    taglineMr: 'भारतीय लष्कराच्या हेलिकॉप्टर वैमानिकांचे मुख्य लढाऊ उड्डाण प्रशिक्षण केंद्र',
    addressEn: 'Gandhinagar Airfield, Nashik Road, Nashik - 422101',
    addressMr: 'गांधीनगर विमानतळ, नाशिक रोड, नाशिक - ४२२१०१',
    distFromCBS: '9.2 km (20 mins)',
    distFromStation: '3.1 km (8 mins)',
    busRoutes: ['CityLink Bus 105 (CBS to Gandhinagar)', 'Bus 102 (Nashik Road to CBS)'],
    autoFareEst: '₹60 - ₹80 from Nashik Road Stn',
    timings: '09:00 hrs - 17:00 hrs (Restricted military zone)',
    gateProtocolEn: 'Strict restricted military aviation zone. Prior appointment or official liaison pass required.',
    gateProtocolMr: 'लष्करी विमानतळ प्रतिबंधक क्षेत्र. पूर्वपरवानगी किंवा अधिकृत संपर्क पास आवश्यक.',
    contactNumber: '0253-2462201',
    mapsQuery: 'Combat+Army+Aviation+Training+School+Gandhinagar+Nashik',
  },
  {
    id: '11-brd-ojhar',
    nameEn: 'Air Force Station Ojhar (11 Base Repair Depot / 11 BRD)',
    nameMr: 'एअर फोर्स स्टेशन ओझर (११ बेस रिपेअर डेपो / 11 BRD)',
    category: 'training',
    branch: 'Air Force',
    badge: '✈️ IAF Sukhoi Base',
    taglineEn: 'Premier IAF overhaul & maintenance base for Su-30MKI air superiority fighters',
    taglineMr: 'सुखोई-३० एमकेआय लढाऊ विमानांचे मुख्य देखभाल व ओव्हरहॉल केंद्र',
    addressEn: 'Ojhar Airfield, Pune-Nashik-Agra Highway, Niphad Taluka, Nashik - 422206',
    addressMr: 'ओझर विमानतळ, मुंबई-आग्रा महामार्ग, निफाड तालुका, नाशिक - ४२२२०६',
    distFromCBS: '21.0 km (35 mins)',
    distFromStation: '24.5 km (40 mins)',
    busRoutes: ['CityLink Bus 201 (CBS to Ojhar Air Force Gate)', 'MSRTC Bus towards Chandwad/Dhule'],
    autoFareEst: '₹280 - ₹350 from CBS / Nashik Road',
    timings: '08:30 hrs - 17:00 hrs (Mon - Fri)',
    gateProtocolEn: 'Air Force Identity Card / ESM Card required. Civilian visitors require pre-approved AF Pass.',
    gateProtocolMr: 'हवाई दल ओळखपत्र / माजी सैनिक कार्ड आवश्यक. पूर्वपरवानगी आवश्यक.',
    contactNumber: '02557-235101',
    mapsQuery: 'Air+Force+Station+Ojhar+Nashik',
  },
  {
    id: 'echs-polyclinic',
    nameEn: 'ECHS Polyclinic Nashik (Type B / Non-Military Station)',
    nameMr: 'ई.सी.एच.एस. पॉलीक्लिनिक, नाशिक (माजी सैनिक आरोग्य केंद्र)',
    category: 'medical',
    branch: 'Tri-Service',
    badge: '🩺 Free Medicine',
    taglineEn: 'Daily cashless OPD, chronic medicine dispensary, dental & lab tests for ESM',
    taglineMr: 'माजी सैनिकांसाठी दररोज मोफत औषध वाटप, दंतचिकित्सा व रक्त तपासणी',
    addressEn: 'Behind Zilla Parishad, Old Agra Road, Near CBS, Nashik - 422002',
    addressMr: 'जिल्हा परिषदेमागे, जुना आग्रा रोड, सीबीएस जवळ, नाशिक - ४२२००२',
    distFromCBS: '0.8 km (Walkable 5 mins)',
    distFromStation: '9.5 km (22 mins)',
    busRoutes: ['All buses terminating at Nashik Old CBS / Thakkar Bazaar'],
    autoFareEst: '₹20 from CBS | ₹120 from Nashik Road Stn',
    timings: '08:30 hrs - 15:30 hrs (Mon - Sat, Sun Closed)',
    gateProtocolEn: 'Open to all Tri-Service Veterans, Widows & registered dependents with 64-KB ECHS Card.',
    gateProtocolMr: '६४-केबी ईसीएचएस कार्डधारक सर्व निवृत्त सैनिक, वीर नारी व त्यांच्या अवलंबितांसाठी खुले.',
    contactNumber: '0253-2570188',
    mapsQuery: 'ECHS+Polyclinic+Nashik',
  },
  {
    id: 'zspo-nashik',
    nameEn: 'Zilla Sainik Welfare Office (ZSPO) Nashik',
    nameMr: 'जिल्हा सैनिक कल्याण कार्यालय, नाशिक जिल्हा',
    category: 'admin',
    branch: 'Tri-Service',
    badge: '🏛️ District Nodal',
    taglineEn: 'Government nodal centre for ESM registration, scholarships, ST bus pass & land queries',
    taglineMr: 'माजी सैनिक नोंदणी, शिष्यवृत्ती, एसटी मोफत बस पास व शासकीय सवलतींचे नोडल केंद्र',
    addressEn: 'District Collectorate Compound, Old Agra Road, CBS, Nashik - 422001',
    addressMr: 'जिल्हाधिकारी कार्यालय आवार, जुना आग्रा रोड, सीबीएस, नाशिक - ४२२००१',
    distFromCBS: '0.5 km (Walkable 3 mins)',
    distFromStation: '9.0 km (20 mins)',
    busRoutes: ['Directly opposite District Court / CBS Bus Station'],
    autoFareEst: '₹20 from CBS | ₹110 from Nashik Road',
    timings: '10:00 hrs - 17:45 hrs (Mon - Sat, 2nd & 4th Sat Holiday)',
    gateProtocolEn: 'Civilian administrative office. Carry Discharge Book, PPO, and ESM I-Card for validation.',
    gateProtocolMr: 'प्रशासकीय कार्यालय. डिस्चार्ज बुक, पीपीओ आणि माजी सैनिक ओळखपत्र सोबत आणावे.',
    contactNumber: '0253-2578235',
    mapsQuery: 'Zilla+Sainik+Welfare+Office+Nashik',
  },
  {
    id: 'csd-deolali',
    nameEn: 'Station HQ CSD Main Canteen, Deolali',
    nameMr: 'स्टेशन मुख्यालय सी.एस.डी. मुख्य कॅन्टीन, देवळाली',
    category: 'canteen',
    branch: 'Tri-Service',
    badge: '🛒 CSD Depot',
    taglineEn: 'Central CSD grocery, household & liquor depot with computerized smart billing',
    taglineMr: 'किराणा, घरगुती साहित्य व लिकर कोटा उपलब्ध असणारे मुख्य सैनिक कॅन्टीन',
    addressEn: 'Station HQ Camp, Near Deolali Golf Club Road, Deolali - 422401',
    addressMr: 'स्टेशन मुख्यालय कॅम्प, गोल्फ क्लब रोडजवळ, देवळाली - ४२२४०१',
    distFromCBS: '14.0 km (28 mins)',
    distFromStation: '4.5 km (10 mins)',
    busRoutes: ['CityLink Bus 101 (Alight at Station HQ Stop)', 'Bus 107 from Nashik Road'],
    autoFareEst: '₹80 - ₹100 from Nashik Road Station',
    timings: '09:00 hrs - 13:00 hrs & 15:00 hrs - 17:00 hrs (Tuesday Closed)',
    gateProtocolEn: 'Biometric CSD Smart Card with active annual entitlement token required. Tokens booked online/spot.',
    gateProtocolMr: 'बायोमेट्रिक सीएसडी स्मार्ट कार्ड आवश्यक. टोकन ऑनलाइन किंवा काउंटरवर उपलब्ध.',
    contactNumber: '0253-2491180',
    mapsQuery: 'CSD+Canteen+Deolali+Nashik',
  },
  {
    id: 'mco-railway',
    nameEn: 'Movement Control Office (MCO), Nashik Road Railway Station',
    nameMr: 'मिलिटरी मूव्हमेंट कंट्रोल ऑफिस (MCO), नाशिक रोड रेल्वे स्थानक',
    category: 'transit',
    branch: 'Tri-Service',
    badge: '🚂 Platform 1',
    taglineEn: '24x7 Military transit assistance, defence warrant booking, duty berths & emergency liaison',
    taglineMr: '२४x७ रेल्वे वॉरंट आरक्षण, सैनिकी राखीव बर्थ व ट्रान्झिट मदत केंद्र',
    addressEn: 'Platform No. 1, Nashik Road Central Railway Station, Nashik - 422101',
    addressMr: 'प्लॅटफॉर्म क्रमांक १, नाशिक रोड मध्य रेल्वे स्थानक, नाशिक - ४२२१०१',
    distFromCBS: '9.2 km (20 mins)',
    distFromStation: '0.0 km (Inside Railway Station)',
    busRoutes: ['All CityLink buses to Nashik Road Station (Route 101, 102, 105, 214)'],
    autoFareEst: 'Located right at Platform 1 Entrance',
    timings: '24 Hours Open (Round the Clock Operational)',
    gateProtocolEn: 'Open to all Serving Personnel, Veterans, and Military Families with valid travel warrants/ID.',
    gateProtocolMr: 'सर्व सेवारत सैनिक, माजी सैनिक व कुटुंबीयांसाठी २४ तास सुरू.',
    contactNumber: '0253-2465191',
    mapsQuery: 'Nashik+Road+Railway+Station',
  },
];

const startPoints = [
  { id: 'cbs', labelEn: 'Nashik Central Bus Stand (CBS)', labelMr: 'नाशिक मध्यवर्ती बस स्थानक (CBS)' },
  { id: 'stn', labelEn: 'Nashik Road Railway Station', labelMr: 'नाशिक रोड रेल्वे स्टेशन' },
  { id: 'gangapur', labelEn: 'Gangapur Road / College Road', labelMr: 'गंगापूर रोड / कॉलेज रोड' },
  { id: 'mumbai-naka', labelEn: 'Mumbai Naka / Dwarka Circle', labelMr: 'मुंबई नाका / द्वारका सर्कल' },
];

export default function MilitaryTransitGuide() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<DefenceCategory>('all');
  const [selectedStartPoint, setSelectedStartPoint] = useState('cbs');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('artillery-centre');

  const filteredInstallations = defenceInstallations.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameMr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.addressEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="transit-guide" className="py-20 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden" aria-labelledby="transit-heading">
      {/* Background accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-military-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-saffron-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-military-400/40 bg-military-500/15 text-military-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-military-400 animate-pulse" />
            {language === 'mr' ? 'नाशिक छावणी व सैन्य वारसा मार्गदर्शिका' : 'Nashik Military Heritage & Cantonment Transit Guide'}
          </div>

          <h2 id="transit-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {language === 'mr'
              ? 'नाशिक जिल्हा सैनिकी संपर्क व सुगम प्रवास मार्ग'
              : 'Nashik Defence Transit & Cantonment Navigator'}
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? 'तोफखाना केंद्र देवळाली, सैन्य रुग्णालय, ओझर वायुसेना तळ आणि ईसीएचएस पॉलीक्लिनिकपर्यंत पोहचण्यासाठी बस मार्ग, अंतर व सुरक्षा नियम.'
              : 'Essential transit routes, CityLink bus numbers, gate security protocols and direct officer contacts for major Indian Armed Forces installations across Nashik district.'}
          </p>
        </div>

        {/* Quick Route Origin Selector & Search Bar */}
        <div className="bg-navy-900/90 border border-white/10 rounded-2xl p-4 sm:p-6 mb-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Origin selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-saffron-400 font-bold uppercase tracking-wider">
                {language === 'mr' ? 'प्रस्थान स्थान निवडा:' : 'Departing From:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {startPoints.map((sp) => (
                  <button
                    key={sp.id}
                    onClick={() => setSelectedStartPoint(sp.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedStartPoint === sp.id
                        ? 'bg-saffron-500 text-navy-950 font-bold shadow-md'
                        : 'bg-navy-800 text-white/70 hover:bg-navy-700 hover:text-white'
                    }`}
                  >
                    {language === 'mr' ? sp.labelMr : sp.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'mr' ? 'कॅन्टीन, हॉस्पिटल किंवा तळ शोधा...' : 'Search installation or base...'}
                className="w-full pl-9 pr-3 py-2 bg-navy-950 border border-white/15 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-saffron-500"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
            {[
              { id: 'all', labelEn: 'All Facilities (8)', labelMr: 'सर्व सैनिकी केंद्रे (८)' },
              { id: 'medical', labelEn: 'Medical (MH & ECHS)', labelMr: 'आरोग्य (MH व ECHS)' },
              { id: 'canteen', labelEn: 'CSD Canteen & Logistics', labelMr: 'कॅन्टीन व रसद' },
              { id: 'training', labelEn: 'Training & Air Bases', labelMr: 'प्रशिक्षण व हवाई तळ' },
              { id: 'admin', labelEn: 'Zilla Sainik Welfare', labelMr: 'जिल्हा सैनिक कार्यालय' },
              { id: 'transit', labelEn: 'Railway MCO Transit', labelMr: 'रेल्वे ट्रान्झिट MCO' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as DefenceCategory)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-military-500 text-white shadow-sm'
                    : 'bg-navy-800/60 text-white/60 hover:text-white hover:bg-navy-800'
                }`}
              >
                {language === 'mr' ? tab.labelMr : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredInstallations.map((item) => {
            const isExpanded = expandedId === item.id;
            const distance = selectedStartPoint === 'stn' ? item.distFromStation : item.distFromCBS;
            const originName = selectedStartPoint === 'stn'
              ? (language === 'mr' ? 'नाशिक रोड रेल्वे स्थानक' : 'Nashik Road Railway Station')
              : (language === 'mr' ? 'नाशिक सीबीएस' : 'Nashik CBS');

            return (
              <div
                key={item.id}
                className="bg-navy-900/80 border border-white/10 hover:border-saffron-500/40 rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-saffron-500/20 text-saffron-300 text-xs font-bold border border-saffron-500/30">
                      {item.badge}
                    </span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                      item.branch === 'Army'
                        ? 'bg-military-700/60 text-military-200 border border-military-500/30'
                        : item.branch === 'Air Force'
                        ? 'bg-sky-900/60 text-sky-200 border border-sky-500/30'
                        : 'bg-blue-900/60 text-blue-200 border border-blue-500/30'
                    }`}>
                      {item.branch}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1">
                    {language === 'mr' ? item.nameMr : item.nameEn}
                  </h3>
                  <p className="text-xs text-saffron-300/90 italic mb-4">
                    {language === 'mr' ? item.taglineMr : item.taglineEn}
                  </p>

                  {/* Route & Distance Card */}
                  <div className="bg-navy-950/70 border border-white/10 rounded-xl p-3.5 mb-4 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-white/45 block text-[11px] mb-0.5">
                        {language === 'mr' ? `अंतर (${originName} पासून):` : `Distance (From ${originName}):`}
                      </span>
                      <span className="font-bold text-amber-400 text-sm">{distance}</span>
                    </div>
                    <div>
                      <span className="text-white/45 block text-[11px] mb-0.5">
                        {language === 'mr' ? 'अंदाजे रिक्षा भाडे:' : 'Approx Auto Fare:'}
                      </span>
                      <span className="font-semibold text-white/90">{item.autoFareEst}</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 text-xs text-white/70 mb-3">
                    <span className="text-saffron-400 mt-0.5">📍</span>
                    <span>{language === 'mr' ? item.addressMr : item.addressEn}</span>
                  </div>

                  {/* Bus routes */}
                  <div className="flex items-start gap-2 text-xs text-white/75 mb-3">
                    <span className="text-military-400 mt-0.5">🚌</span>
                    <div>
                      <span className="font-bold text-white/90 mr-1">CityLink Bus:</span>
                      {item.busRoutes.join(' | ')}
                    </div>
                  </div>

                  {/* Expandable Gate Protocol Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-3 text-xs bg-navy-950/40 p-3.5 rounded-xl">
                      <div>
                        <span className="font-bold text-saffron-300 block mb-1">
                          🛡️ {language === 'mr' ? 'प्रवेश द्वार व सुरक्षा नियम (Gate Protocol):' : 'Gate Entry Protocol:'}
                        </span>
                        <p className="text-white/70 leading-relaxed">
                          {language === 'mr' ? item.gateProtocolMr : item.gateProtocolEn}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-white/80">
                        <span>🕒 <strong className="text-white">Timings:</strong> {item.timings}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="text-xs text-saffron-400 hover:text-saffron-300 font-bold underline"
                  >
                    {isExpanded
                      ? (language === 'mr' ? 'माहिती संक्षिप्त करा ▲' : 'Show Less ▲')
                      : (language === 'mr' ? 'सुरक्षा नियम व वेळा पहा ▼' : 'Gate Protocols & Timings ▼')}
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${item.contactNumber}`}
                      className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-white font-semibold text-xs inline-flex items-center gap-1.5 border border-white/10"
                    >
                      <span>📞</span>
                      <span>{item.contactNumber}</span>
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${item.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-saffron-500 hover:bg-saffron-400 text-navy-950 font-bold text-xs inline-flex items-center gap-1 shadow-md"
                    >
                      <span>🗺️</span>
                      <span>{language === 'mr' ? 'नकाशा' : 'Navigate'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
