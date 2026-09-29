'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const benchmarkData: Record<string, number> = {
  // Army
  'Sepoy (17 Yrs)': 18807,
  'Naik (19 Yrs)': 21101,
  'Havildar (24 Yrs)': 22257,
  'Naib Subedar (26 Yrs)': 24825,
  'Subedar (28 Yrs)': 31529,
  'Subedar Major (30 Yrs)': 33400,
  'Honorary Captain (32 Yrs)': 43719,
  'Captain (20 Yrs)': 61300,
  'Major (21 Yrs)': 68550,
  'Lt Colonel (23 Yrs)': 84300,
  'Colonel (26 Yrs)': 95215,
  'Brigadier (28 Yrs)': 108300,

  // Navy
  'Seaman / Leading Seaman': 21101,
  'Petty Officer': 22257,
  'Chief Petty Officer': 24825,
  'Master Chief Petty Officer II': 31529,
  'Master Chief Petty Officer I': 33400,
  'Commander (Navy)': 84300,

  // Air Force
  'Corporal / LAC': 21101,
  'Sergeant': 22257,
  'Junior Warrant Officer': 24825,
  'Warrant Officer': 31529,
  'Master Warrant Officer': 33400,
  'Wing Commander (IAF)': 84300,
};

export default function PensionCalculator() {
  const { language } = useLanguage();
  const [selectedRank, setSelectedRank] = useState<string>('Subedar Major (30 Yrs)');
  const [drRate, setDrRate] = useState<number>(53); // Current DA/DR rate in %
  const [commutationPercentage, setCommutationPercentage] = useState<number>(0);

  const basicPension = benchmarkData[selectedRank] || 25000;
  const commutedAmount = (basicPension * commutationPercentage) / 100;
  const netBasic = basicPension - commutedAmount;
  const dearnessRelief = Math.round(basicPension * (drRate / 100)); // DR is calculated on full basic pension
  const totalMonthlyPension = Math.round(netBasic + dearnessRelief);
  const annualized = totalMonthlyPension * 12;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-navy-100/80 hover:border-gold-400/40 shadow-2xl max-w-4xl mx-auto my-12 relative overflow-hidden transition-all">
      {/* Tricolor Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-saffron-500 via-gold-400 to-tiranga-500" aria-hidden="true" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8 pt-2">
        <div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-200 uppercase tracking-wider inline-block mb-2">
            🇮🇳 Interactive Defence Tool
          </span>
          <h3 className="font-heading font-extrabold text-2xl text-navy-900">
            {language === 'mr' ? 'माजी सैनिक पेन्शन व महागाई भत्ता गणक' : 'SPARSH / OROP Pension & DR Calculator'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Calculate your approximate monthly defence pension with current Dearness Relief (DR) rates
          </p>
        </div>
        <div className="text-right bg-amber-50 px-4 py-2.5 rounded-2xl border border-amber-200">
          <span className="text-xs font-bold text-amber-800">Current 7th CPC DR:</span>
          <p className="font-heading font-extrabold text-saffron-600 text-2xl leading-none mt-0.5">{drRate}%</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Controls */}
        <div className="space-y-5">
          <div>
            <label htmlFor="pension-rank" className="block text-xs font-bold text-navy-700 mb-1">
              Select Rank & Qualifying Service:
            </label>
            <select
              id="pension-rank"
              value={selectedRank}
              onChange={(e) => setSelectedRank(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-navy-900 bg-slate-50 focus:ring-2 focus:ring-saffron-500 focus:outline-none"
            >
              <optgroup label="Indian Army">
                <option>Sepoy (17 Yrs)</option>
                <option>Naik (19 Yrs)</option>
                <option>Havildar (24 Yrs)</option>
                <option>Naib Subedar (26 Yrs)</option>
                <option>Subedar (28 Yrs)</option>
                <option>Subedar Major (30 Yrs)</option>
                <option>Honorary Captain (32 Yrs)</option>
                <option>Captain (20 Yrs)</option>
                <option>Major (21 Yrs)</option>
                <option>Lt Colonel (23 Yrs)</option>
                <option>Colonel (26 Yrs)</option>
                <option>Brigadier (28 Yrs)</option>
              </optgroup>
              <optgroup label="Indian Navy">
                <option>Seaman / Leading Seaman</option>
                <option>Petty Officer</option>
                <option>Chief Petty Officer</option>
                <option>Master Chief Petty Officer II</option>
                <option>Master Chief Petty Officer I</option>
                <option>Commander (Navy)</option>
              </optgroup>
              <optgroup label="Indian Air Force">
                <option>Corporal / LAC</option>
                <option>Sergeant</option>
                <option>Junior Warrant Officer</option>
                <option>Warrant Officer</option>
                <option>Master Warrant Officer</option>
                <option>Wing Commander (IAF)</option>
              </optgroup>
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="dr-slider" className="text-xs font-bold text-navy-700">
                Dearness Relief (DR %):
              </label>
              <span className="font-mono font-bold text-xs text-saffron-600">{drRate}%</span>
            </div>
            <input
              id="dr-slider"
              type="range"
              min={40}
              max={65}
              value={drRate}
              onChange={(e) => setDrRate(Number(e.target.value))}
              className="w-full accent-saffron-500"
            />
            <p className="text-[10px] text-slate-400 mt-1">Adjust based on latest Central Government Dearness Relief notifications.</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="comm-slider" className="text-xs font-bold text-navy-700">
                Commutation Deduction (%):
              </label>
              <span className="font-mono font-bold text-xs text-navy-700">{commutationPercentage}%</span>
            </div>
            <input
              id="comm-slider"
              type="range"
              min={0}
              max={50}
              step={10}
              value={commutationPercentage}
              onChange={(e) => setCommutationPercentage(Number(e.target.value))}
              className="w-full accent-navy-700"
            />
            <p className="text-[10px] text-slate-400 mt-1">If pension was commuted (restored after 15 years from retirement date).</p>
          </div>
        </div>

        {/* Calculation Result Sheet */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-gold-400/40 glow-gold">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[11px] uppercase tracking-wider text-gold-300 font-extrabold">
              Estimated Monthly Credit (SPARSH / Bank)
            </p>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-3 pb-6 border-b border-white/10 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span className="text-white/80 font-medium">OROP-2 Benchmark Basic:</span>
              <span className="font-mono font-bold text-white">₹{basicPension.toLocaleString()}</span>
            </div>
            {commutationPercentage > 0 && (
              <div className="flex justify-between text-rose-300">
                <span className="font-medium">Commutation Deduction (-{commutationPercentage}%):</span>
                <span className="font-mono font-bold">-₹{Math.round(commutedAmount).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-emerald-300 font-medium">Dearness Relief (DR @ {drRate}%):</span>
              <span className="font-mono font-bold text-emerald-400">+₹{dearnessRelief.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-xs text-white/70 mb-1 font-semibold">Total Estimated Monthly Pension:</p>
            <p className="font-heading font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 via-amber-300 to-gold-400 leading-none drop-shadow-sm">
              ₹{totalMonthlyPension.toLocaleString()}
            </p>
            <p className="text-xs text-gold-300/80 mt-2 font-medium">
              Annual Pension Payout: ~₹{annualized.toLocaleString()} / year
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
            <span>Disbursed via SPARSH PCDA</span>
            <span className="text-gold-300 font-bold">ESM Nashik Helpdesk</span>
          </div>
        </div>
      </div>
    </div>
  );
}
