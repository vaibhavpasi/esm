'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

type TermCategory = 'all' | 'pension' | 'health' | 'canteen' | 'welfare' | 'admin';

interface AcronymItem {
  acronym: string;
  fullNameEn: string;
  fullNameMr: string;
  category: TermCategory;
  meaningEn: string;
  meaningMr: string;
  importanceEn: string;
  importanceMr: string;
  portalUrl?: string;
  portalName?: string;
}

const termsList: AcronymItem[] = [
  {
    acronym: 'SPARSH',
    fullNameEn: 'System for Pension Administration (Raksha)',
    fullNameMr: 'सिस्टम फॉर पेन्शन ॲडमिनिस्ट्रेशन (रक्षा) — स्पर्श पोर्टल',
    category: 'pension',
    meaningEn: 'Web-based centralised pension portal implemented by MoD & PCDA(P) for direct credit of monthly defence pension into veteran bank accounts without bank branch intervention.',
    meaningMr: 'संरक्षण मंत्रालयाचे केंद्रीय पेन्शन पोर्टल. बँकांच्या मध्यस्थीशिवाय थेट पीसीडीए (पेन्शन) कडून निवृत्तीवेतन बँक खात्यात जमा केले जाते.',
    importanceEn: 'Vital for monthly pension slips, Form 16, DLC submission, and pension grievance redressal.',
    importanceMr: 'मासिक पेन्शन स्लिप, फॉर्म १६, जीवन प्रमाण पत्र जोडणी आणि तक्रार निवारणासाठी अत्यंत आवश्यक.',
    portalUrl: 'https://sparsh.defencepension.gov.in',
    portalName: 'sparsh.defencepension.gov.in',
  },
  {
    acronym: 'PPO / e-PPO',
    fullNameEn: 'Pension Payment Order (12-Digit Unique Pension Number)',
    fullNameMr: 'पेन्शन पेमेंट ऑर्डर (१२-अंकी विशिष्ट ओळख क्रमांक)',
    category: 'pension',
    meaningEn: 'The definitive legal identity document issued by PCDA sanctioning your armed forces retirement pension, service duration, group, and spouse family pension entitlement.',
    meaningMr: 'संरक्षण लेखा विभागाकडून जारी केलेला १२ अंकी अधिकृत पेन्शन आदेश. यामध्ये सर्व पेन्शन तपशील व वारसदार नोंद असते.',
    importanceEn: 'Required for SPARSH login, bank KYC, ECHS 64-KB card renewal, and widow family pension migration.',
    importanceMr: 'स्पर्श लॉगिन, बँक केवायसी, ईसीएचएस कार्ड आणि कुटुंब निवृत्तीवेतनाच्या वेळी सर्वात महत्त्वाचा दस्तावेज.',
  },
  {
    acronym: 'ECHS',
    fullNameEn: 'Ex-Servicemen Contributory Health Scheme',
    fullNameMr: 'माजी सैनिक अंशदायी आरोग्य योजना (ई.सी.एच.एस.)',
    category: 'health',
    meaningEn: 'Flagship healthcare scheme offering 100% cashless outpatient (OPD) and inpatient (IPD) treatment at Military Hospitals and private empanelled super-specialty hospitals.',
    meaningMr: 'माजी सैनिक, वीर नारी व त्यांच्या अवलंबितांसाठी १००% कॅशलेस ओपीडी व शस्त्रक्रिया उपचार पुरवणारी केंद्रीय आरोग्य योजना.',
    importanceEn: 'Access to free medicines, oncology, dialysis, cardiology, and emergency care via 64-KB Smart Card.',
    importanceMr: '६४-केबी स्मार्ट कार्डद्वारे नाशिक व देशभरातील संलग्न रुग्णालयांमध्ये मोफत औषधे व उपचार.',
    portalUrl: 'https://echs.gov.in',
    portalName: 'echs.gov.in',
  },
  {
    acronym: 'CSD',
    fullNameEn: 'Canteen Stores Department',
    fullNameMr: 'कॅन्टीन स्टोअर्स डिपार्टमेंट (लष्करी कॅन्टीन)',
    category: 'canteen',
    meaningEn: 'Government enterprise under Ministry of Defence providing subsidised grocery, household goods, electronics, and consumer appliances to serving & retired armed forces personnel.',
    meaningMr: 'संरक्षण मंत्रालयांतर्गत चालवले जाणारे अनुदानित दरातील किराणा, इलेक्ट्रॉनिक्स व दैनंदिन वस्तूंचे कॅन्टीन नेटवर्क.',
    importanceEn: 'GST-rebated purchases of groceries and white goods at Deolali Station HQ and unit canteens.',
    importanceMr: 'सवलतीच्या दरात किराणा व घरगुती साहित्याची खरेदी.',
    portalUrl: 'https://csdindia.gov.in',
    portalName: 'csdindia.gov.in',
  },
  {
    acronym: 'AFD-I',
    fullNameEn: 'Against Firm Demand (Category 1: Four-Wheelers & Two-Wheelers)',
    fullNameMr: 'अगेंस्ट फर्म डिमांड (कार, बाईक व ट्रॅक्टर खरेदी पोर्टल)',
    category: 'canteen',
    meaningEn: 'Online portal for purchasing cars, bikes, scooters, and tractors at concessional CSD rates with substantial GST concessions based on your rank category.',
    meaningMr: 'माजी सैनिकांसाठी सवलतीच्या दरात कार, दुचाकी आणि ट्रॅक्टर खरेदी करण्यासाठीचे अधिकृत ऑनलाइन पोर्टल.',
    importanceEn: 'Jawans/OR can purchase cars up to 1400cc; Officers up to 2500cc with 50% GST rebate.',
    importanceMr: 'रँकनुसार कार खरेदीवर जीएसटी सवलत व थेट डीलर डिलिव्हरी.',
    portalUrl: 'https://afd.csdindia.gov.in',
    portalName: 'afd.csdindia.gov.in',
  },
  {
    acronym: 'OROP',
    fullNameEn: 'One Rank One Pension',
    fullNameMr: 'वन रँक वन पेन्शन (ओ.आर.ओ.पी.)',
    category: 'pension',
    meaningEn: 'Uniform pension paid to armed forces personnel retiring in the same rank with the same length of service, irrespective of their actual date of retirement, with periodic revisions.',
    meaningMr: 'समान पद आणि समान सेवा कालावधी असलेल्या सर्व माजी सैनिकांना निवृत्तीच्या तारखेचा भेद न करता समान निवृत्तीवेतन देण्याचे तत्व.',
    importanceEn: 'Protects older pensioners by aligning their pension with recently retired personnel every 5 years.',
    importanceMr: 'दर ५ वर्षांनी पेन्शनचे पुनर्मूल्यांकन करून जुन्या निवृत्त सैनिकांना वाढीव पेन्शनचा लाभ मिळतो.',
  },
  {
    acronym: 'DLC',
    fullNameEn: 'Digital Life Certificate (Jeevan Pramaan)',
    fullNameMr: 'डिजिटल जीवन प्रमाण पत्र (बायोमेट्रिक हयातीचा दाखला)',
    category: 'pension',
    meaningEn: 'Aadhaar-based biometric or mobile Face Authentication certificate submitted annually (usually in November) to verify pensioner life status for continuous pension disbursement.',
    meaningMr: 'दरवर्षी नोव्हेंबर महिन्यात पेन्शन सुरू राहण्यासाठी आधार बायोमेट्रिक किंवा मोबाईल फेस ॲपद्वारे सादर केला जाणारा दाखला.',
    importanceEn: 'Can now be submitted from home using AadhaarFaceRD smartphone app without visiting any bank or office.',
    importanceMr: 'घरी बसून स्मार्टफोन कॅमेऱ्याने ५ मिनिटांत जीवन प्रमाण सादर करता येते.',
    portalUrl: 'https://jeevanpramaan.gov.in',
    portalName: 'jeevanpramaan.gov.in',
  },
  {
    acronym: 'ZSPO',
    fullNameEn: 'Zilla Sainik Welfare Office (Zilla Sainik Kalyan Karyalaya)',
    fullNameMr: 'जिल्हा सैनिक कल्याण कार्यालय, नाशिक',
    category: 'admin',
    meaningEn: 'District-level government administrative office under Department of Sainik Welfare, Maharashtra, headed by a retired defence officer (ZSWO) to care for local ex-servicemen.',
    meaningMr: 'जिल्हा पातळीवरील शासकीय कार्यालय. नाशिक जिल्हाधिकारी आवारात स्थित असून माजी सैनिकांच्या नोंदी व सवलतींचे नियमन करते.',
    importanceEn: 'Nodal authority for ESM identity cards, ST bus passes, PMSS scholarship verification, and land grants.',
    importanceMr: 'माजी सैनिक ओळखपत्र, मोफत एसटी बस पास आणि शासकीय योजनांच्या मंजुरीसाठी मुख्य कार्यालय.',
  },
  {
    acronym: 'RMDF',
    fullNameEn: 'Raksha Mantri Discretionary Fund',
    fullNameMr: 'रक्षा मंत्री discretionary फंड (आपत्कालीन आर्थिक सहाय्य निधी)',
    category: 'welfare',
    meaningEn: 'Discretionary welfare grant administered by Kendriya Sainik Board (KSB) providing financial assistance for daughter marriages, funeral expenses, medical treatment, and children schooling.',
    meaningMr: 'केंद्रीय सैनिक बोर्डामार्फत चालवला जाणारा विशेष कल्याण निधी. कन्या विवाह, अंत्यसंस्कार, वैद्यकीय उपचार व मुलांच्या शिक्षणासाठी अनुदान.',
    importanceEn: '₹50,000 grant for daughter marriage; ₹30,000 for medical/funeral assistance for non-pensioners/widows.',
    importanceMr: 'गरजू माजी सैनिक व विधवा भगिनींच्या मुलींच्या विवाहासाठी ₹५०,००० एकरकमी अनुदान.',
    portalUrl: 'https://ksb.gov.in',
    portalName: 'ksb.gov.in',
  },
  {
    acronym: 'DGR',
    fullNameEn: 'Directorate General Resettlement',
    fullNameMr: 'माजी सैनिक पुनर्वसन महासंचालनालय (डी.जी.आर.)',
    category: 'welfare',
    meaningEn: 'Inter-service organization under Department of Ex-Servicemen Welfare (MoD) tasked with second career training, employment generation, and self-employment enterprise schemes for retired personnel.',
    meaningMr: 'संरक्षण मंत्रालयांतर्गत माजी सैनिकांना निवृत्तीनंतर नोकरी प्रशिक्षण व स्वयंरोजगार योजना पुरवणारी केंद्रीय संस्था.',
    importanceEn: 'Sponsors coal tipper transport schemes, security agencies, and vocational business courses.',
    importanceMr: 'सुरक्षा एजन्सी वाटप, पेट्रोल पंप आरक्षण आणि आयआयएम व्यवस्थापन अभ्यासक्रम.',
    portalUrl: 'https://dgrindia.gov.in',
    portalName: 'dgrindia.gov.in',
  },
  {
    acronym: 'LFP & SFP',
    fullNameEn: 'Liberalised & Special Family Pension',
    fullNameMr: 'उदार व विशेष कुटुंब निवृत्तीवेतन (युद्ध हुतात्मा कुटुंब पेन्शन)',
    category: 'pension',
    meaningEn: 'Enhanced family pension granted to Veer Naris: SFP is 60% of reckonable emoluments (service deaths); LFP is 100% of last drawn pay (battle casualties & enemy action deaths).',
    meaningMr: 'शहीद जवानांच्या पत्नींना (वीर नारी) दिले जाणारे विशेष कुटुंब निवृत्तीवेतन. युद्धात प्राण गमावल्यास १००% मूळ वेतन पेन्शन म्हणून मिळते.',
    importanceEn: 'Assures financial dignity for families of bravehearts who laid down their lives for the country.',
    importanceMr: 'शहीद सैनिकांच्या कुटुंबियांना आजीवन सन्मानजनक आर्थिक सुरक्षा.',
  },
  {
    acronym: 'MCO',
    fullNameEn: 'Movement Control Office (Railway Transit Camp)',
    fullNameMr: 'मिलिटरी मूव्हमेंट कंट्रोल ऑफिस (रेल्वे स्थानक मदत केंद्र)',
    category: 'admin',
    meaningEn: 'Army liaison detachment stationed at major railway junction platforms (e.g. Platform 1, Nashik Road) assisting defence personnel with travel warrants, duty berths, and transit accommodation.',
    meaningMr: 'नाशिक रोड रेल्वे स्थानक प्लॅटफॉर्म १ वर स्थित २४ तास लष्करी मदत केंद्र.',
    importanceEn: '24x7 help for defence travel warrants, military train reservations, and emergency transit assistance.',
    importanceMr: 'रेल्वे प्रवास वॉरंट आरक्षण व आपत्कालीन प्रवासासाठी मदत.',
  },
];

export default function MilitaryTermsDecoder() {
  const { language } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<TermCategory>('all');
  const [searchWord, setSearchWord] = useState('');
  const [expandedAcronym, setExpandedAcronym] = useState<string | null>('SPARSH');

  const filteredTerms = termsList.filter((item) => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    const query = searchWord.toLowerCase();
    const matchesSearch =
      item.acronym.toLowerCase().includes(query) ||
      item.fullNameEn.toLowerCase().includes(query) ||
      item.fullNameMr.toLowerCase().includes(query) ||
      item.meaningEn.toLowerCase().includes(query) ||
      item.meaningMr.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  return (
    <section id="terms-decoder" className="py-20 sm:py-24 bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-navy-800 transition-colors" aria-labelledby="decoder-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            {language === 'mr' ? 'सैनिकी व पेन्शन संज्ञा कोश' : 'Military & Pension Terms Decoder'}
          </div>

          <h2 id="decoder-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy-950 dark:text-white mb-4">
            {language === 'mr'
              ? 'संरक्षण, स्पर्श व ईसीएचएस संज्ञा मार्गदर्शिका'
              : 'Defence, SPARSH & ECHS Acronyms Decoded'}
          </h2>

          <p className="text-slate-600 dark:text-white/75 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? 'निवृत्त सैनिक, वीर नारी आणि पाल्यांसाठी सैनिकी पेन्शन, कॅन्टीन आणि आरोग्य विभागातील क्लिष्ट संक्षेप व संज्ञांचे सोप्या भाषेत स्पष्टीकरण.'
              : 'Demystifying military acronyms, pension terminology, and government schemes in plain language for veterans, Veer Naris, and next-of-kin.'}
          </p>
        </div>

        {/* Filter and Search */}
        <div className="bg-white dark:bg-navy-950 border border-slate-200 dark:border-white/10 rounded-2xl p-4 sm:p-6 mb-10 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {[
                { id: 'all', labelEn: 'All Terms', labelMr: 'सर्व संज्ञा' },
                { id: 'pension', labelEn: 'Pension & SPARSH', labelMr: 'पेन्शन व स्पर्श' },
                { id: 'health', labelEn: 'Health & ECHS', labelMr: 'आरोग्य (ECHS)' },
                { id: 'canteen', labelEn: 'Canteen & AFD', labelMr: 'कॅन्टीन व वाहन' },
                { id: 'welfare', labelEn: 'Welfare & Grants', labelMr: 'कल्याण व अनुदान' },
                { id: 'admin', labelEn: 'Admin & Offices', labelMr: 'प्रशासकीय संस्था' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id as TermCategory)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCat === cat.id
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-white/70 hover:bg-slate-200 dark:hover:bg-navy-700'
                  }`}
                >
                  {language === 'mr' ? cat.labelMr : cat.labelEn}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
              <input
                type="text"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                placeholder={language === 'mr' ? 'संज्ञा शोधा (उदा. PPO, Car, ECHS)...' : 'Search term (e.g. PPO, Car, DLC)...'}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-navy-900 border border-slate-300 dark:border-navy-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/40 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Glossary Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredTerms.map((item) => {
            const isExpanded = expandedAcronym === item.acronym;

            return (
              <div
                key={item.acronym}
                className="bg-white dark:bg-navy-950 border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-extrabold text-xl text-sky-600 dark:text-sky-400">
                        {item.acronym}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-white/60">
                        {item.category}
                      </span>
                    </div>

                    <button
                      onClick={() => setExpandedAcronym(isExpanded ? null : item.acronym)}
                      className="text-xs text-slate-400 hover:text-sky-500 p-1"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? '▲' : '▼'}
                    </button>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-navy-950 dark:text-white mb-3">
                    {language === 'mr' ? item.fullNameMr : item.fullNameEn}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-white/75 leading-relaxed mb-4">
                    {language === 'mr' ? item.meaningMr : item.meaningEn}
                  </p>

                  {/* Why it matters box */}
                  <div className="bg-sky-50/60 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-500/20 rounded-xl p-3 text-xs mb-4">
                    <strong className="text-sky-900 dark:text-sky-300 block mb-1">
                      💡 {language === 'mr' ? 'माजी सैनिकांसाठी महत्त्व:' : 'Why It Matters To You:'}
                    </strong>
                    <span className="text-slate-700 dark:text-white/80">
                      {language === 'mr' ? item.importanceMr : item.importanceEn}
                    </span>
                  </div>
                </div>

                {/* Footer Portal Link if available */}
                {item.portalUrl && (
                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-400 dark:text-white/40">Official Portal:</span>
                    <a
                      href={item.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:underline font-bold inline-flex items-center gap-1"
                    >
                      <span>{item.portalName}</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
