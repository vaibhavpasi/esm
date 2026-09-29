'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface MedalInfo {
  id: string;
  name: string;
  category: 'Wartime Gallantry' | 'Peacetime Gallantry' | 'Distinguished Service';
  ribbonColors: string;
  establishedYear: string;
  modPensionAllowance: string;
  maharashtraStateGrant: string;
  description: string;
}

const medalsList: MedalInfo[] = [
  {
    id: 'pvc',
    name: 'Param Vir Chakra (PVC)',
    category: 'Wartime Gallantry',
    ribbonColors: 'bg-purple-700',
    establishedYear: '1950',
    modPensionAllowance: '₹20,000 / month (Tax-free)',
    maharashtraStateGrant: '₹60 Lakhs lump-sum + Land allotment',
    description: "India's highest military decoration awarded for conspicuous bravery or self-sacrifice in the presence of the enemy on land, at sea, or in the air.",
  },
  {
    id: 'ac',
    name: 'Ashok Chakra (AC)',
    category: 'Peacetime Gallantry',
    ribbonColors: 'bg-gradient-to-r from-green-700 via-amber-400 to-green-700',
    establishedYear: '1952',
    modPensionAllowance: '₹12,000 / month (Tax-free)',
    maharashtraStateGrant: '₹45 Lakhs lump-sum + Agricultural land',
    description: "India's highest peacetime military decoration for valor, courageous action, or self-sacrifice away from the battlefield.",
  },
  {
    id: 'mvc',
    name: 'Maha Vir Chakra (MVC)',
    category: 'Wartime Gallantry',
    ribbonColors: 'bg-gradient-to-r from-white via-white to-amber-500',
    establishedYear: '1950',
    modPensionAllowance: '₹10,000 / month (Tax-free)',
    maharashtraStateGrant: '₹35 Lakhs lump-sum',
    description: "Second highest military decoration for gallantry in the presence of the enemy.",
  },
  {
    id: 'kc',
    name: 'Kirti Chakra (KC)',
    category: 'Peacetime Gallantry',
    ribbonColors: 'bg-gradient-to-r from-green-700 via-amber-400 to-green-700',
    establishedYear: '1952',
    modPensionAllowance: '₹9,000 / month (Tax-free)',
    maharashtraStateGrant: '₹30 Lakhs lump-sum',
    description: "Second highest peacetime gallantry award given to military personnel and civilians.",
  },
  {
    id: 'vrc',
    name: 'Vir Chakra (VrC)',
    category: 'Wartime Gallantry',
    ribbonColors: 'bg-gradient-to-r from-blue-700 via-blue-700 to-amber-500',
    establishedYear: '1950',
    modPensionAllowance: '₹7,000 / month (Tax-free)',
    maharashtraStateGrant: '₹20 Lakhs lump-sum',
    description: "Third in precedence in wartime gallantry decorations for acts of bravery on the battlefield.",
  },
  {
    id: 'sc',
    name: 'Shaurya Chakra (SC)',
    category: 'Peacetime Gallantry',
    ribbonColors: 'bg-gradient-to-r from-green-800 via-amber-300 to-green-800',
    establishedYear: '1952',
    modPensionAllowance: '₹6,000 / month (Tax-free)',
    maharashtraStateGrant: '₹15 Lakhs lump-sum',
    description: "Peacetime gallantry award awarded to bravehearts like Capt. Sachin Nimbalkar of Nashik.",
  },
  {
    id: 'sm',
    name: 'Sena / Nao Sena / Vayu Sena Medal',
    category: 'Distinguished Service',
    ribbonColors: 'bg-gradient-to-r from-military-700 via-white to-military-700',
    establishedYear: '1960',
    modPensionAllowance: '₹2,000 / month for Gallantry awards',
    maharashtraStateGrant: '₹5 Lakhs lump-sum for Gallantry',
    description: "Awarded to members of the Indian Army, Navy, and Air Force for acts of exceptional devotion to duty or courage.",
  },
  {
    id: 'pvsm',
    name: 'Param Vishisht Seva Medal (PVSM)',
    category: 'Distinguished Service',
    ribbonColors: 'bg-gradient-to-r from-amber-400 via-blue-800 to-amber-400',
    establishedYear: '1960',
    modPensionAllowance: 'Honorary Precedence Recognition',
    maharashtraStateGrant: 'State Civic Honor & State Guest status',
    description: "Awarded in recognition of peacetime service of the most exceptional order to senior commanders.",
  },
];

export default function MedalsRibbonSection() {
  const { language, t } = useLanguage();
  const [selectedMedal, setSelectedMedal] = useState<MedalInfo>(medalsList[0]);

  return (
    <section id="medals" className="py-20 bg-white border-t border-slate-200" aria-labelledby="medals-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-divider mb-4" />
          <h2 id="medals-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-3">
            {t.medalsTitle}
          </h2>
          <p className="text-navy-600 text-base sm:text-lg">
            {language === 'mr'
              ? 'भारतीय सैन्य दलातील शौर्य व विशिष्ट सेवा पदके, रिबन पट्टी व महाराष्ट्र शासनाचे सन्मान अनुदान.'
              : language === 'hi'
              ? 'भारतीय सेना के शौर्य एवं विशिष्ट सेवा पदक, रिबन बार एवं राज्य शासन द्वारा देय सम्मान राशि।'
              : 'Interactive repository of Indian Armed Forces gallantry decorations, ribbon bar patterns, and state monetary grants.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Ribbons List (7 cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {medalsList.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelectedMedal(m)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all shadow-sm ${
                  selectedMedal.id === m.id
                    ? 'border-saffron-500 bg-saffron-50/50 shadow-md ring-2 ring-saffron-400/30 -translate-y-1'
                    : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                }`}
              >
                {/* Physical ribbon bar replica */}
                <div className={`w-28 h-6 rounded-sm shadow-inner mb-3 border border-black/30 ${m.ribbonColors}`} />
                <h4 className="font-heading font-bold text-sm text-navy-800 mb-1">{m.name}</h4>
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>{m.category}</span>
                  <span className="text-saffron-600 font-semibold">View Details →</span>
                </div>
              </div>
            ))}
          </div>

          {/* Inspector Panel (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-saffron-500/20 text-saffron-300 border border-saffron-500/40">
                {selectedMedal.category}
              </span>
              <span className="text-xs text-white/50">Estd. {selectedMedal.establishedYear}</span>
            </div>

            {/* Large Ribbon Bar */}
            <div className={`w-40 h-8 rounded shadow-lg border-2 border-white/30 mb-6 ${selectedMedal.ribbonColors}`} />

            <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
              {selectedMedal.name}
            </h3>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
              {selectedMedal.description}
            </p>

            <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs">
              <div>
                <p className="text-[10px] uppercase font-bold text-saffron-400 tracking-wider">MoD Recurring Monthly Allowance</p>
                <p className="font-semibold text-white text-sm">{selectedMedal.modPensionAllowance}</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-[10px] uppercase font-bold text-military-400 tracking-wider">Govt of Maharashtra Ex-Gratia Grant</p>
                <p className="font-semibold text-white text-sm">{selectedMedal.maharashtraStateGrant}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
              <span>National Order of Precedence</span>
              <span className="text-saffron-400 font-semibold">Honoring Nashik Heroes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
