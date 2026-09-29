'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import BuglePlayer from '@/components/BuglePlayer';

interface MartyrItem {
  name: string;
  rankRegiment: string;
  award: string;
  operationLocation: string;
  year: string;
  tributeSnippet: string;
}

const martyrsList: MartyrItem[] = [
  {
    name: 'Capt. Sachin Nimbalkar',
    rankRegiment: 'Captain • 18 Maratha Light Infantry',
    award: 'Shaurya Chakra (Posthumous)',
    operationLocation: 'Nashik Braveheart • Poonch Sector, J&K',
    year: '2000',
    tributeSnippet: 'Displaying unmatched courage and leadership under heavy enemy fire, sacrificing his life defending Indian soil.',
  },
  {
    name: '2nd Lt. Rama Raghoba Rane',
    rankRegiment: 'Second Lieutenant • Bombay Sappers',
    award: 'Param Vir Chakra (PVC)',
    operationLocation: 'Naushera to Rajouri, J&K',
    year: '1948',
    tributeSnippet: 'Cleared minefields under intense enemy mortar fire despite severe wounds, enabling the Indian tanks to secure Rajouri.',
  },
  {
    name: 'Major Kaustubh Rane',
    rankRegiment: 'Major • 36 Rashtriya Rifles / Garhwal Rifles',
    award: 'Sena Medal (Gallantry)',
    operationLocation: 'Gurez Sector, J&K',
    year: '2018',
    tributeSnippet: 'Foiled an infiltration bid by heavily armed terrorists on the LoC, making the supreme sacrifice with steadfast devotion.',
  },
  {
    name: 'Havildar Tukaram Omble',
    rankRegiment: 'Assistant Sub-Inspector / Ex-Army (Signals)',
    award: 'Ashok Chakra (Posthumous)',
    operationLocation: 'Mumbai Terror Defense',
    year: '2008',
    tributeSnippet: 'Ex-serviceman who grappled with an AK-47 armed terrorist barehanded, absorbing bullets to capture the perpetrator alive.',
  },
];

export default function MartyrsTributeSection() {
  const { language, t } = useLanguage();
  const [tributesCount, setTributesCount] = useState(1842);
  const [hasPaidTribute, setHasPaidTribute] = useState(false);
  const [flowerPetals, setFlowerPetals] = useState<number[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('esm_tribute_paid');
      const storedCount = localStorage.getItem('esm_tribute_count');
      if (storedCount) {
        setTributesCount(parseInt(storedCount, 10));
      }
      if (stored === 'true') {
        setHasPaidTribute(true);
      }
    } catch {}
  }, []);

  const handlePayTribute = () => {
    if (hasPaidTribute) return;
    const newCount = tributesCount + 1;
    setTributesCount(newCount);
    setHasPaidTribute(true);
    setFlowerPetals([1, 2, 3, 4, 5, 6, 7, 8]);
    try {
      localStorage.setItem('esm_tribute_paid', 'true');
      localStorage.setItem('esm_tribute_count', newCount.toString());
    } catch {}
  };

  return (
    <section id="tribute" className="py-20 sm:py-24 bg-navy-950 text-white relative overflow-hidden" aria-labelledby="tribute-heading">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-saffron-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-military-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/40 bg-saffron-500/10 text-saffron-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
            {language === 'mr' ? 'वीर स्मरण व अमर जवान ज्योती' : language === 'hi' ? 'अमर जवान एवं वीर स्मृति' : 'Sacred Remembrance'}
          </div>

          <h2 id="tribute-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.tributeTitle}
          </h2>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed">
            {language === 'mr'
              ? 'देशाच्या सार्वभौमत्वासाठी आणि सुरक्षेसाठी प्राणांचे बलिदान देणाऱ्या नाशिक व महाराष्ट्रातील शूरवीर हुतात्म्यांना आणि वीर नारींना आमचा शतश: प्रणाम.'
              : language === 'hi'
              ? 'राष्ट्र की संप्रभुता और अखंडता की रक्षा में अपने प्राणों की आहुति देने वाले वीर शहीदों एवं उनके परिवारों को हमारी भावभीनी श्रद्धांजलि।'
              : 'Paying solemn homage to the immortal bravehearts of Nashik district and the Indian Armed Forces who laid down their lives in service to Bharat Mata.'}
          </p>
        </div>

        {/* Central Diya / Flame Homage Card */}
        <div className="bg-gradient-to-b from-navy-900/90 to-navy-950/90 border border-saffron-500/30 rounded-3xl p-8 sm:p-12 mb-16 text-center max-w-2xl mx-auto shadow-2xl relative">
          {/* Falling Flower Petals animation when clicked */}
          {flowerPetals.length > 0 && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {flowerPetals.map((i) => (
                <span
                  key={i}
                  className="absolute text-xl animate-float-slow"
                  style={{
                    left: `${15 + i * 10}%`,
                    top: `${10 + (i % 3) * 20}%`,
                    animationDuration: `${3 + i * 0.5}s`,
                    opacity: 0.8,
                  }}
                >
                  🌸
                </span>
              ))}
            </div>
          )}

          {/* Diya SVG Illustration */}
          <div className="relative w-32 h-32 mx-auto mb-6 flex flex-col items-center justify-end">
            {/* The Flame */}
            <div className="animate-flame mb-1">
              <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
                <path
                  d="M24 0C24 0 38 20 38 38C38 52 30 62 24 62C18 62 10 52 10 38C10 20 24 0 24 0Z"
                  fill="url(#flameGradient)"
                />
                <path
                  d="M24 16C24 16 32 28 32 40C32 49 28 56 24 56C20 56 16 49 16 40C16 28 24 16 24 16Z"
                  fill="url(#innerFlame)"
                />
                <defs>
                  <linearGradient id="flameGradient" x1="24" y1="0" x2="24" y2="62" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFF176" />
                    <stop offset="0.3" stopColor="#FFB300" />
                    <stop offset="0.7" stopColor="#FF6F00" />
                    <stop offset="1" stopColor="#E65100" />
                  </linearGradient>
                  <linearGradient id="innerFlame" x1="24" y1="16" x2="24" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="0.5" stopColor="#FFF9C4" />
                    <stop offset="1" stopColor="#FFE082" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Brass Diya Vessel */}
            <svg width="110" height="42" viewBox="0 0 110 42" fill="none">
              <path
                d="M5 14C18 28 35 36 55 36C75 36 92 28 105 14C80 20 60 22 55 22C50 22 30 20 5 14Z"
                fill="url(#diyaBrass)"
                stroke="#FFE082"
                strokeWidth="1.5"
              />
              <ellipse cx="55" cy="38" rx="28" ry="4" fill="#B78103" />
              <defs>
                <linearGradient id="diyaBrass" x1="5" y1="14" x2="105" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F59E0B" />
                  <stop offset="0.5" stopColor="#D97706" />
                  <stop offset="1" stopColor="#92400E" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2 text-saffron-300">
            {language === 'mr'
              ? 'अमर जवान — शत शत नमन'
              : language === 'hi'
              ? 'अमर जवान ज्योति — कोटि-कोटि नमन'
              : 'Amar Jawan Jyoti — Eternal Flame of Honor'}
          </h3>

          <p className="text-white/70 text-sm max-w-md mx-auto mb-6">
            &ldquo;शहीदों की चिताओं पर लगेंगे हर बरस मेले, वतन पर मरने वालों का यही बाकी निशां होगा।&rdquo;
          </p>

          {/* Action button */}
          <button
            onClick={handlePayTribute}
            disabled={hasPaidTribute}
            className={`px-8 py-3.5 rounded-full font-bold text-base transition-all transform duration-300 shadow-xl inline-flex items-center gap-2 ${
              hasPaidTribute
                ? 'bg-military-700/80 text-white cursor-default border border-military-500/50'
                : 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white hover:from-saffron-400 hover:to-saffron-500 hover:scale-105 active:scale-95 border border-saffron-300/40 shadow-saffron-500/25'
            }`}
          >
            <span>{hasPaidTribute ? '🪔' : '✨'}</span>
            <span>{hasPaidTribute ? t.diyaLit : t.lightDiya}</span>
          </button>

          {/* Counter */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-white/80">
            <span className="font-extrabold text-saffron-400 text-lg">{tributesCount.toLocaleString()}</span>
            <span>{t.tributesCount}</span>
          </div>
        </div>

        {/* Ceremonial Military Bugle Synthesizer */}
        <div className="max-w-2xl mx-auto mb-16">
          <BuglePlayer />
        </div>

        {/* Honoring Local Heroes Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {martyrsList.map((m, idx) => (
            <div
              key={idx}
              className="bg-navy-900/60 border border-white/10 rounded-2xl p-6 hover:border-saffron-500/50 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="inline-block px-2.5 py-1 rounded-md bg-saffron-500/20 text-saffron-300 text-xs font-bold mb-3 border border-saffron-500/30">
                {m.award}
              </div>
              <h4 className="font-heading font-bold text-lg text-white mb-1">{m.name}</h4>
              <p className="text-xs text-saffron-400 font-medium mb-2">{m.rankRegiment}</p>
              <div className="text-xs text-white/50 mb-3 flex items-center gap-1">
                <span>📍</span>
                <span>{m.operationLocation} ({m.year})</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed italic">
                &ldquo;{m.tributeSnippet}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
