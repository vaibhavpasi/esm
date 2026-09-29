'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface CourseOption {
  name: string;
  isEligible: boolean;
  type: string;
}

const coursesList: CourseOption[] = [
  { name: 'B.Tech / B.E. (Engineering)', isEligible: true, type: 'Professional Degree' },
  { name: 'M.B.B.S. / B.D.S. (Medical)', isEligible: true, type: 'Professional Degree' },
  { name: 'B.Pharm / Pharm.D', isEligible: true, type: 'Professional Degree' },
  { name: 'M.B.A. / M.C.A.', isEligible: true, type: 'Professional Master Degree' },
  { name: 'B.Sc. Agriculture / Forestry', isEligible: true, type: 'Professional Degree' },
  { name: 'L.L.B. (3 or 5 Years Law)', isEligible: true, type: 'Professional Degree' },
  { name: 'B.Sc. Nursing', isEligible: true, type: 'Professional Degree' },
  { name: 'B.A. / B.Com / B.Sc. (General Arts/Sci/Com)', isEligible: false, type: 'Non-Professional (Not covered in PMSS)' },
  { name: 'Polytechnic Diploma', isEligible: false, type: 'Diploma (Covered under State Grant only)' },
];

export default function ScholarshipDeskSection() {
  const { language } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState(coursesList[0].name);
  const [percentage, setPercentage] = useState(72);
  const [childGender, setChildGender] = useState<'girl' | 'boy'>('girl');
  const [priorityCat, setPriorityCat] = useState('category6');

  const selectedCourseObj = coursesList.find((c) => c.name === selectedCourse) || coursesList[0];
  const isPercentEligible = percentage >= 60;
  const isOverallEligible = selectedCourseObj.isEligible && isPercentEligible;
  const annualStipend = childGender === 'girl' ? '₹36,000 / year (₹3,000/mo)' : '₹30,000 / year (₹2,500/mo)';

  return (
    <section id="scholarship-desk" className="py-20 sm:py-24 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden" aria-labelledby="scholarship-heading">
      {/* Background radial highlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-saffron-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/40 bg-saffron-500/15 text-saffron-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
            {language === 'mr' ? 'सैन्य पाल्य उच्च शिक्षण व शिष्यवृत्ती केंद्र' : 'Veteran Children Higher Education & PMSS Desk'}
          </div>

          <h2 id="scholarship-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {language === 'mr'
              ? 'पंतप्रधान शिष्यवृत्ती (PMSS) व सैनिकी शिक्षण योजना'
              : "Prime Minister's Scholarship Scheme (PMSS) & Education Desk"}
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? 'माजी सैनिकांच्या पाल्यांसाठी व्यावसायिक पदवी शिक्षणासाठी वार्षिक ₹३६,००० पर्यंत शिष्यवृत्ती, राज्य शासकीय अनुदान आणि नाशिकमधील मोफत एनडीए/अग्निवीर अकादमी.'
              : 'Empowering children of defence veterans, war widows and gallantry awardees with annual scholarships up to ₹36,000 for MBBS, Engineering and MBA, plus free Agniveer & NDA preparatory coaching in Nashik.'}
          </p>
        </div>

        {/* Feature 1: Interactive PMSS Eligibility Checker */}
        <div className="bg-navy-900/90 border border-saffron-500/30 rounded-3xl p-6 sm:p-10 mb-14 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs text-saffron-400 font-bold uppercase tracking-wider block mb-1">
                {language === 'mr' ? 'त्वरित पात्रता पडताळणी' : 'Instant Eligibility Calculator'}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                {language === 'mr'
                  ? 'आपला पाल्य पंतप्रधान शिष्यवृत्तीसाठी (PMSS) पात्र आहे का?'
                  : 'Check PMSS Scholarship Eligibility & Stipend'}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8 text-xs">
              {/* Course Selection */}
              <div>
                <label htmlFor="course-selection" className="text-white/80 font-bold block mb-1.5">
                  Degree Course Enrolled (प्रवेश घेतलेला अभ्यासक्रम) *
                </label>
                <select
                  id="course-selection"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full p-3 bg-navy-950 border border-white/20 rounded-xl text-white focus:outline-none focus:border-saffron-500 font-medium"
                >
                  {coursesList.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name} ({c.type})
                    </option>
                  ))}
                </select>
              </div>

              {/* Gender Selection */}
              <div>
                <span className="text-white/80 font-bold block mb-1.5">
                  Candidate Gender (विद्यार्थी लिंग) *
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setChildGender('girl')}
                    className={`p-3 rounded-xl font-bold border transition-all text-xs flex items-center justify-center gap-1.5 ${
                      childGender === 'girl'
                        ? 'bg-saffron-500 text-navy-950 border-saffron-400 shadow-md'
                        : 'bg-navy-950 text-white/70 border-white/10 hover:text-white'
                    }`}
                  >
                    <span>👧 Girl Student</span>
                    <span className="font-mono text-[11px]">(₹3,000/mo)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setChildGender('boy')}
                    className={`p-3 rounded-xl font-bold border transition-all text-xs flex items-center justify-center gap-1.5 ${
                      childGender === 'boy'
                        ? 'bg-saffron-500 text-navy-950 border-saffron-400 shadow-md'
                        : 'bg-navy-950 text-white/70 border-white/10 hover:text-white'
                    }`}
                  >
                    <span>👦 Boy Student</span>
                    <span className="font-mono text-[11px]">(₹2,500/mo)</span>
                  </button>
                </div>
              </div>

              {/* Percentage Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="percentage-slider" className="text-white/80 font-bold">
                    Class 12th / Diploma Score (%) *
                  </label>
                  <span className="font-bold text-amber-400 font-mono text-sm">{percentage}%</span>
                </div>
                <input
                  id="percentage-slider"
                  type="range"
                  min="45"
                  max="99"
                  value={percentage}
                  onChange={(e) => setPercentage(parseInt(e.target.value, 10))}
                  className="w-full accent-saffron-500 cursor-pointer"
                  aria-label="Class 12th percentage"
                />
                <span className="text-[11px] text-white/45 block mt-1">Minimum 60% required for PMSS</span>
              </div>

              {/* Category Priority */}
              <div>
                <label htmlFor="priority-category" className="text-white/80 font-bold block mb-1.5">
                  KSB Priority Category (सैनिक संवर्ग) *
                </label>
                <select
                  id="priority-category"
                  value={priorityCat}
                  onChange={(e) => setPriorityCat(e.target.value)}
                  className="w-full p-3 bg-navy-950 border border-white/20 rounded-xl text-white focus:outline-none focus:border-saffron-500 font-medium"
                >
                  <option value="category1">Priority I: Widows/Wards of Killed in Action</option>
                  <option value="category2">Priority II: Wards of Disabled in Action</option>
                  <option value="category3">Priority III: Widows/Wards died in service (peace)</option>
                  <option value="category4">Priority IV: Wards of Disabled in service (peace)</option>
                  <option value="category5">Priority V: Wards of Gallantry Award Winners</option>
                  <option value="category6">Priority VI: Wards of Ex-Servicemen (General)</option>
                </select>
              </div>
            </div>

            {/* Verdict Box */}
            <div className={`p-6 rounded-2xl border text-center transition-all ${
              isOverallEligible
                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                : 'bg-red-950/40 border-red-500/50 text-red-200'
            }`}>
              <div className="text-3xl mb-2">{isOverallEligible ? '🎉' : '⚠️'}</div>
              <h4 className="font-heading text-lg sm:text-xl font-bold mb-2">
                {isOverallEligible
                  ? (language === 'mr' ? 'अभिनंदन! आपला पाल्य पंतप्रधान शिष्यवृत्तीसाठी पूर्णपणे पात्र आहे!' : 'Congratulations! Your Ward is Fully Eligible for PMSS!')
                  : (language === 'mr' ? 'पात्रता अटींची पूर्तता होत नाही' : 'Criteria Not Met for PMSS Scheme')}
              </h4>

              {isOverallEligible ? (
                <div>
                  <p className="text-xs text-white/80 max-w-lg mx-auto mb-3">
                    {language === 'mr'
                      ? `आपल्या पाल्यास प्रति वर्ष ${annualStipend} थेट बँक खात्यात (DBT) जमा होईल. अभ्यासक्रमाच्या संपूर्ण कालावधीसाठी (४ किंवा ५ वर्षे) ही शिष्यवृत्ती उपलब्ध राहील.`
                      : `Eligible for direct bank credit (DBT) of ${annualStipend} for the full normal duration of the degree course.`}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-500/30">
                    ✓ UGC/AICTE recognized course • Score {percentage}% &gt;= 60%
                  </div>
                </div>
              ) : (
                <p className="text-xs text-white/80 max-w-lg mx-auto">
                  {!selectedCourseObj.isEligible
                    ? 'General degrees (BA/B.Com/B.Sc/Diploma) are not covered by PMSS. Please check Maharashtra State Sainik Department special grants below.'
                    : `Percentage (${percentage}%) is below the mandatory KSB cut-off of 60.00% in 12th/Diploma.`}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Feature 2: Additional Education Schemes & Free Coaching Academy */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Free Agniveer & NDA Coaching */}
          <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-6 hover:border-saffron-500/40 transition-all flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-military-500/20 text-military-300 text-xs font-bold mb-3 inline-block border border-military-500/30">
                🎖️ Free Military Academy
              </span>
              <h4 className="font-heading font-bold text-lg text-white mb-2">
                {language === 'mr' ? 'नाशिक मोफत एनडीए, सीडीएस व अग्निवीर अकादमी' : 'Free Agniveer, NDA & CDS Coaching'}
              </h4>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                {language === 'mr'
                  ? 'देवळाली कॅम्प मैदानावर निवृत्त सुभेदार मेजर यांच्या मार्गदर्शनाखाली शारीरिक चाचणी सराव आणि लेखी परीक्षेची मोफत तयारी.'
                  : 'Rigorous daily morning physical training on Deolali grounds and weekend written exam coaching mentored by veteran officers for martyr and jawan wards.'}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs text-saffron-300 font-semibold flex items-center justify-between">
              <span>📍 Deolali Military Ground</span>
              <span>Batch starts 1st of every month</span>
            </div>
          </div>

          {/* Card 2: RMDF Grant */}
          <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-6 hover:border-saffron-500/40 transition-all flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-saffron-500/20 text-saffron-300 text-xs font-bold mb-3 inline-block border border-saffron-500/30">
                📚 School Children
              </span>
              <h4 className="font-heading font-bold text-lg text-white mb-2">
                {language === 'mr' ? 'रक्षा मंत्री discretionary फंड (RMDF) शिक्षण अनुदान' : 'Raksha Mantri Education Grant (RMDF)'}
              </h4>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                {language === 'mr'
                  ? 'इयत्ता १ ली ते १२ वी मध्ये शिकणाऱ्या माजी सैनिकांच्या व विधवांच्या कमाल २ मुलांसाठी प्रति महिना ₹१,००० शालेय शैक्षणिक अनुदान.'
                  : 'Financial assistance of ₹1,000/month per child for up to 2 school-going children (Class 1 to 12) of non-pensioner ex-servicemen and war widows.'}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs text-white/60 flex items-center justify-between">
              <span>Disbursed via Kendriya Sainik Board</span>
              <span className="text-emerald-400 font-bold">₹12,000 / Year</span>
            </div>
          </div>

          {/* Card 3: Maharashtra State Grants */}
          <div className="bg-navy-900/80 border border-white/10 rounded-2xl p-6 hover:border-saffron-500/40 transition-all flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold mb-3 inline-block border border-amber-500/30">
                🏛️ Maharashtra Govt
              </span>
              <h4 className="font-heading font-bold text-lg text-white mb-2">
                {language === 'mr' ? 'महाराष्ट्र राज्य सैनिक कल्याण १० वी/१२ वी गौरव पुरस्कार' : 'State Board Toppers Merit Awards'}
              </h4>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                {language === 'mr'
                  ? '१० वी व १२ वी बोर्ड परीक्षेत ८५% पेक्षा जास्त गुण मिळवणाऱ्या सैनिकी पाल्यांना नाशिक जिल्हा सैनिक कार्यालयातर्फे विशेष रोख पारितोषिक व प्रमाणपत्र.'
                  : 'Special cash rewards and honor certificates awarded by the District Collector and ZSPO Nashik to meritorious veteran wards scoring 85%+ in SSC/HSC exams.'}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs text-white/60 flex items-center justify-between">
              <span>Apply via ZSPO Nashik</span>
              <span className="text-amber-400 font-bold">Annual Felicitations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
