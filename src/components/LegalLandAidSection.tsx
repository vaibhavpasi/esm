'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface LegalProvision {
  titleEn: string;
  titleMr: string;
  lawSection: string;
  badge: string;
  summaryEn: string;
  summaryMr: string;
  actionStepEn: string;
  actionStepMr: string;
}

const legalProvisions: LegalProvision[] = [
  {
    titleEn: 'Recovery of Rented Residential Flat / House',
    titleMr: 'भाड्याने दिलेले घर तात्काळ परत मिळविण्याचा अधिकार',
    lawSection: 'Maharashtra Rent Control Act, 1999 — Section 23',
    badge: '🏠 Rent Protection',
    summaryEn: 'Ex-servicemen and war widows have an absolute statutory right to recover immediate possession of their rented residential premises upon retirement/demobilisation.',
    summaryMr: 'निवृत्तीनंतर किंवा सेवेदरम्यान आपले स्वतःचे भाड्याने दिलेले घर भाडेकरूकडून तात्काळ रिक्त करून मिळविण्याचा माजी सैनिक व वीर नारींना विशेष कायदेशीर अधिकार आहे.',
    actionStepEn: 'Submit application along with MoD / Competent Authority Certificate directly before the Competent Authority (Rent Controller) without prolonged civil litigation.',
    actionStepMr: 'दीर्घ दिवाणी खटल्यांशिवाय सक्षम प्राधिकरणाकडे (Rent Controller) डिस्चार्ज बुक व संरक्षण प्रमाणपत्र जोडून थेट अर्ज सादर करावा.',
  },
  {
    titleEn: 'Agricultural Land (7/12) Resumption & Tenancy',
    titleMr: 'शेतजमीन (७/१२) प्रत्यक्ष वहिवाटीसाठी परत घेणे',
    lawSection: 'Maharashtra Tenancy & Agricultural Lands Act — Sec 43-1B',
    badge: '🌾 7/12 Land Rights',
    summaryEn: 'Members of the Armed Forces who leased their agricultural land during service can terminate tenancy and resume the land for self-cultivation post-retirement.',
    summaryMr: 'सशस्त्र दलातील सेवेमुळे इतरांना वहिवाटीस दिलेली वडिलोपार्जित शेतजमीन निवृत्तीनंतर स्वतः कसण्यासाठी परत मिळविण्याची कायदेशीर मुभा.',
    actionStepEn: 'Serve 1-year prior notice before retirement or within 2 years of demobilisation to the Mamlatdar/Tahsildar for formal possession order.',
    actionStepMr: 'निवृत्तीच्या १ वर्ष आधी किंवा निवृत्तीनंतर २ वर्षांच्या आत संबंधित तहसीलदारांकडे ताबा मिळण्यासाठी रीतसर नोटीस व अर्ज दाखल करावा.',
  },
  {
    titleEn: 'Encroachment Protection on Farmland & Way-Rights',
    titleMr: 'शेतजमिनीवरील अतिक्रमण व वहिवाट रस्ता विवाद',
    lawSection: 'Maharashtra Land Revenue Code, 1966 — Sec 143 & MLRC Rules',
    badge: '⚖️ Anti-Encroachment',
    summaryEn: 'Special expedited disposal by Tahsildar / SDO for boundary disputes, farm road obstruction, and illegal encroachment on serving & retired jawans lands.',
    summaryMr: 'माजी सैनिकांच्या शेताचा रस्ता अडवणे किंवा बांध कोरून अतिक्रमण झाल्यास तहसीलदारांमार्फत तातडीने मोजणी व जलद सुनावणीचे आदेश.',
    actionStepEn: 'Apply through Zilla Sainik Welfare Office (ZSPO) with a priority liaison letter to the Nashik District Collector & Taluka Tahsildar.',
    actionStepMr: 'जिल्हा सैनिक कल्याण कार्यालयाच्या (ZSPO) शिफारस पत्रासह संबंधित तालुक्याच्या तहसीलदारांकडे प्राधान्य सुनावणीचा अर्ज करावा.',
  },
  {
    titleEn: 'War Widows & Gallantry Awardees Land Grant',
    titleMr: 'वीर नारी व शौर्य पदक विजेत्यांना शासकीय जमीन वाटप',
    lawSection: 'Govt of Maharashtra Revenue & Forest Dept G.R. Schemes',
    badge: '🎖️ State Land Grant',
    summaryEn: 'Allotment of agricultural land (up to 5 acres) or residential plots in municipal areas for Param Vir Chakra, Maha Vir Chakra, Vir Chakra, Ashok Chakra recipients & battle casualties.',
    summaryMr: 'परमवीर चक्र, महावीर चक्र, वीर चक्र, अशोक चक्र विजेते तसेच युद्धात वीरमरण आलेल्या जवानांच्या वीर पत्नींसाठी शासकीय शेतजमीन (५ एकरांपर्यंत) किंवा निवासी भूखंड वाटप योजना.',
    actionStepEn: 'Liaison through Collectorate Nashik Revenue Branch with Form "A" and gallantry citation gazette.',
    actionStepMr: 'नाशिक जिल्हाधिकारी महसूल शाखेकडे गॅझेट अधिसूचना व सैन्य शिफारस पत्रासह विहित नमुन्यात प्रस्ताव सादर करावा.',
  },
];

export default function LegalLandAidSection() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'provisions' | 'clinic' | 'drafts'>('provisions');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownloadDraft = (filename: string) => {
    setDownloadSuccess(filename);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <section id="legal-cell" className="py-20 sm:py-24 bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-navy-800 transition-colors" aria-labelledby="legal-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            {language === 'mr' ? 'माजी सैनिक कायदेशीर संरक्षण व जमीन कक्ष' : 'Veterans Legal Aid & Land Rights Desk'}
          </div>

          <h2 id="legal-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy-950 dark:text-white mb-4">
            {language === 'mr'
              ? 'महाराष्ट्र शेतजमीन (७/१२) व कायदेशीर हक्क संरक्षण'
              : 'Maharashtra Farmland (7/12) & Legal Protection Cell'}
          </h2>

          <p className="text-slate-600 dark:text-white/75 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? 'सीमेवर देशसेवा करणाऱ्या जवानांच्या आणि निवृत्त सैनिकांच्या वडिलोपार्जित जमिनीचे अतिक्रमण, भाडेकरू विवाद व महसूल अधिकारांचे मोफत कायदेशीर मार्गदर्शन.'
              : 'Protecting ancestral agricultural land, stopping encroachment, and asserting statutory rights under the Maharashtra Land Revenue Code and Rent Control Act for veterans and Veer Naris.'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 dark:bg-navy-900 p-1.5 rounded-2xl flex gap-1 border border-slate-200 dark:border-white/10">
            <button
              onClick={() => setActiveTab('provisions')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'provisions'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ⚖️ {language === 'mr' ? 'महाराष्ट्र कायदेशीर संरक्षण' : 'Statutory Land Rights'}
            </button>
            <button
              onClick={() => setActiveTab('clinic')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'clinic'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              📅 {language === 'mr' ? 'मोफत विधी सल्ला क्लिनिक' : 'Free Legal Clinic'}
            </button>
            <button
              onClick={() => setActiveTab('drafts')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'drafts'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              📝 {language === 'mr' ? 'अर्ज नमुने (Legal Drafts)' : 'Application Drafts'}
            </button>
          </div>
        </div>

        {/* Tab Content: Provisions */}
        {activeTab === 'provisions' && (
          <div className="grid md:grid-cols-2 gap-6">
            {legalProvisions.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-navy-900/70 border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-500/30">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-white/50">
                      {item.lawSection.split('—')[0]}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white mb-2">
                    {language === 'mr' ? item.titleMr : item.titleEn}
                  </h3>

                  <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-3">
                    📜 {item.lawSection}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-white/75 leading-relaxed mb-4">
                    {language === 'mr' ? item.summaryMr : item.summaryEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-navy-950/60 p-3 rounded-xl text-xs">
                  <strong className="text-navy-900 dark:text-white block mb-1">
                    👉 {language === 'mr' ? 'कायदेशीर प्रक्रिया / उपाय:' : 'Recommended Action:'}
                  </strong>
                  <span className="text-slate-600 dark:text-white/70">
                    {language === 'mr' ? item.actionStepMr : item.actionStepEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Free Legal Clinic */}
        {activeTab === 'clinic' && (
          <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 dark:from-navy-900 dark:to-navy-950 border border-amber-300 dark:border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-navy-950 flex items-center justify-center text-3xl font-bold shadow-lg shadow-amber-500/20">
                  ⚖️
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy-950 dark:text-white">
                    {language === 'mr' ? 'मासिक मोफत विधी सल्ला सत्र' : 'Monthly Free Veteran Legal Clinic'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-white/60">
                    Every 1st & 3rd Saturday of the Month • 14:00 to 18:00 hrs
                  </p>
                </div>
              </div>

              <a
                href="tel:0253-2570123"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs inline-flex items-center gap-2 shadow-md shrink-0"
              >
                <span>📞 Book Slot: 0253-2570123</span>
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-xs mb-8">
              <div className="bg-white dark:bg-navy-950 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                <span className="text-amber-500 font-bold block mb-1 text-sm">Adv. Sharad Patil</span>
                <span className="text-slate-500 dark:text-white/50 block mb-2">High Court & District Bar Nashik</span>
                <p className="text-slate-600 dark:text-white/80">Specialist in 7/12 Farmland Mutation, Encroachment & Revenue Appeals.</p>
              </div>

              <div className="bg-white dark:bg-navy-950 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                <span className="text-amber-500 font-bold block mb-1 text-sm">Adv. S. K. Deshmukh</span>
                <span className="text-slate-500 dark:text-white/50 block mb-2">Armed Forces Tribunal (AFT) Practice</span>
                <p className="text-slate-600 dark:text-white/80">Specialist in Disability Pension appeals, Court of Inquiry & Service disputes.</p>
              </div>

              <div className="bg-white dark:bg-navy-950 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                <span className="text-amber-500 font-bold block mb-1 text-sm">Adv. Meena Jadhav</span>
                <span className="text-slate-500 dark:text-white/50 block mb-2">Family & Civil Law Consultant</span>
                <p className="text-slate-600 dark:text-white/80">Special counsel for Veer Naris, succession certificates & family pension disputes.</p>
              </div>
            </div>

            <div className="bg-amber-100/50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-500/20 rounded-xl p-4 text-xs text-amber-900 dark:text-amber-200">
              📌 <strong>Venue:</strong> Conference Hall, ESM Welfare Association Office, Old Agra Road, CBS, Nashik. Please bring original Discharge Book, PPO, 7/12 extract copy and all relevant correspondence.
            </div>
          </div>
        )}

        {/* Tab Content: Drafts */}
        {activeTab === 'drafts' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {downloadSuccess && (
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500 text-emerald-800 dark:text-emerald-200 rounded-xl text-xs text-center font-bold animate-fade-in">
                ✓ Template &ldquo;{downloadSuccess}&rdquo; prepared for printing and filing!
              </div>
            )}

            {[
              {
                id: 'draft-tahsildar',
                nameEn: 'Application to Tahsildar for Urgent Land Encroachment Removal (Sec 143 MLRC)',
                nameMr: 'तहसीलदारांकडे शेताचा रस्ता अडवणे / अतिक्रमण हटविण्याबाबतचा प्राधान्य अर्ज',
                lang: 'Marathi & English Format',
                pages: 'Word & PDF (.docx)',
              },
              {
                id: 'draft-rent',
                nameEn: 'Notice to Tenant for Vacating Premises under Sec 23 Maharashtra Rent Control Act',
                nameMr: 'भाडेकरूस घर रिकामे करून देण्याबाबतची कायदेशीर नोटीस (कलम २३)',
                lang: 'Bilingual Legal Format',
                pages: 'Legal Notice Template',
              },
              {
                id: 'draft-police',
                nameEn: 'Representation to Commissioner of Police / SP Nashik for Veteran Protection',
                nameMr: 'पोलीस आयुक्त / पोलीस अधीक्षक नाशिक यांच्याकडे संरक्षण व सहकार्य अर्ज',
                lang: 'Marathi Official Letter',
                pages: 'Official Format',
              },
              {
                id: 'draft-collector',
                nameEn: 'Memorandum to District Collector Nashik for Priority Redressal of Armed Forces Grievance',
                nameMr: 'जिल्हाधिकारी नाशिक यांच्याकडे सैनिक कल्याण प्राधान्य सुनावणी मागणी अर्ज',
                lang: 'Marathi Formal Draft',
                pages: 'Collectorate Memo',
              },
            ].map((draft) => (
              <div
                key={draft.id}
                className="bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-500/50 transition-all"
              >
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-navy-950 dark:text-white mb-1">
                    {language === 'mr' ? draft.nameMr : draft.nameEn}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-white/50">
                    <span>📄 {draft.lang}</span>
                    <span>•</span>
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">{draft.pages}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDownloadDraft(draft.nameEn)}
                  className="px-4 py-2 rounded-xl bg-navy-900 dark:bg-navy-800 hover:bg-amber-600 dark:hover:bg-amber-600 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors shrink-0 shadow-sm"
                >
                  <span>📥 Download Template</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
