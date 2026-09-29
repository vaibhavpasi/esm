'use client';

import { useLanguage } from '@/lib/LanguageContext';

interface WelfareScheme {
  title: string;
  marathiTitle: string;
  amount: string;
  eligibility: string;
  documents: string[];
}

const veerNariSchemes: WelfareScheme[] = [
  {
    title: "Daughters' Marriage Financial Grant",
    marathiTitle: 'मुलीच्या विवाहासाठी आर्थिक अनुदान (RMDF)',
    amount: '₹50,000 per daughter',
    eligibility: 'Widows of ESM / Non-pensioners (up to 2 daughters)',
    documents: ['Marriage Invitation Card', 'Marriage Certificate', 'Discharge Book', 'Bank Passbook'],
  },
  {
    title: 'Children Education Assistance',
    marathiTitle: 'मुलांच्या शिक्षणासाठी मासिक शिष्यवृत्ती',
    amount: '₹1,000 / month per child',
    eligibility: 'School (Class 1) to College / Degree Graduation',
    documents: ['Bonafide Certificate from School/College', 'Previous Year Marksheet', 'PPO Copy'],
  },
  {
    title: 'Liberalized Family Pension (LFP) Facilitation',
    marathiTitle: 'उदार कुटुंब निवृत्तीवेतन (LFP) सहाय्यता',
    amount: '100% of Last Drawn Emoluments',
    eligibility: 'War Widows / Battle Casualties (OP Vijay, OP Meghdoot, etc.)',
    documents: ['Battle Casualty Certificate', 'Army/Navy/Air Force HQ PPO Order', 'Aadhaar Card'],
  },
  {
    title: 'Maharashtra State Veer Nari Welfare Grant',
    marathiTitle: 'महाराष्ट्र शासन वीर पत्नी सन्मान निधी व जमीन वाटप',
    amount: 'Ex-gratia Grant + Housing Assistance',
    eligibility: 'Domicile of Maharashtra State / Nashik District',
    documents: ['District Collector Certificate', 'Zilla Sainik Kalyan Karyalaya (ZSPO) Recommendation'],
  },
];

export default function VeerNariSection() {
  const { language, t } = useLanguage();

  return (
    <section id="veer-nari" className="py-20 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden" aria-labelledby="veer-nari-heading">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-saffron-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/40 bg-saffron-500/10 text-saffron-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>🌸</span>
            <span>Dedicated Veteran Welfare Priority</span>
          </div>

          <h2 id="veer-nari-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.veerNariTitle}
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? 'देशासाठी सर्वोच्च बलिदान देणाऱ्या सैनिकांच्या वीर पत्नी (वीर नारी) आणि त्यांच्या कुटुंबियांना पेन्शन, शिक्षण, विवाह आणि कायदेशीर हक्क मिळवून देण्यासाठी विशेष सहाय्य कक्ष.'
              : language === 'hi'
              ? 'राष्ट्र सेवा में सर्वोच्च बलिदान देने वाले वीर शहीदों की पत्नियों (वीर नारियों) एवं परिवारों हेतु विशेष पेंशन, छात्रवृत्ति एवं प्रशासनिक सहायता केंद्र।'
              : 'Dedicated priority welfare, family pension fast-tracking, education scholarships, and legal mutation support for Veer Naris and war widows in Nashik.'}
          </p>
        </div>

        {/* Priority Help Box */}
        <div className="bg-gradient-to-r from-saffron-500/20 via-navy-800 to-military-900/30 border border-saffron-500/30 rounded-3xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🛡️</span>
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                Veer Nari Priority Assistance Cell (Nashik)
              </h3>
              <p className="text-xs sm:text-sm text-white/80">
                Direct zero-wait assistance at Association Office & doorstep documentation for senior widows.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:02532570123"
              className="px-5 py-3 rounded-2xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs sm:text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>📞</span>
              <span>Veer Nari Helpline: 0253-2570123</span>
            </a>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {veerNariSchemes.map((scheme, idx) => (
            <div
              key={idx}
              className="bg-navy-900/70 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-saffron-400/50 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-saffron-500/20 text-saffron-300 border border-saffron-500/30">
                  {scheme.amount}
                </span>
                <span className="text-xs text-military-400 font-semibold">KSB / Maharashtra Govt</span>
              </div>

              <h4 className="font-heading font-bold text-lg text-white mb-1">{scheme.title}</h4>
              <p className="text-xs text-saffron-400 font-medium mb-3">{scheme.marathiTitle}</p>

              <div className="text-xs text-white/70 mb-4 bg-white/5 p-3 rounded-xl">
                <strong className="text-white">Eligibility: </strong>
                <span>{scheme.eligibility}</span>
              </div>

              <div className="border-t border-white/10 pt-3">
                <p className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2">Required Documentation:</p>
                <div className="flex flex-wrap gap-1.5">
                  {scheme.documents.map((doc, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-white/80 text-[11px] border border-white/5"
                    >
                      ✓ {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
