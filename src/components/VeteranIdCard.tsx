'use client';

import { useLanguage } from '@/lib/LanguageContext';

export type ArmedForceType = 'Indian Army' | 'Indian Navy' | 'Indian Air Force';

interface VeteranIdCardProps {
  fullName?: string;
  rank?: string;
  serviceNumber?: string;
  regiment?: string;
  bloodGroup?: string;
  membershipId?: string;
  membershipType?: string;
  validUntil?: string;
  photoUrl?: string;
  armedForce?: ArmedForceType;
}

export default function VeteranIdCard({
  fullName = 'SUB MAJ (HONY CAPT) RAMESH B. PATIL',
  rank = 'Subedar Major',
  serviceNumber = 'JC-123456K',
  regiment = 'Regiment of Artillery',
  bloodGroup = 'B +ve',
  membershipId = 'ESM-NSK-2026-0842',
  membershipType = 'Life Member',
  validUntil = 'Life Time (P)',
  photoUrl = '/hero-veterans.jpg',
  armedForce = 'Indian Army',
}: VeteranIdCardProps) {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  // Branch-specific visuals
  const branchDetails = {
    'Indian Army': {
      label: 'INDIAN ARMY • भारतीय सेना',
      motto: 'सेवा परमो धर्मः',
      colorBadge: 'bg-military-700 text-military-100 border-military-500/50',
      gradient: 'from-navy-950 via-military-950 to-navy-950',
      borderColor: 'border-amber-400/70',
      icon: '🪖',
      insigniaColor: '#8db47e',
    },
    'Indian Navy': {
      label: 'INDIAN NAVY • भारतीय नौसेना',
      motto: 'शं नो वरुणः',
      colorBadge: 'bg-blue-800 text-cyan-200 border-cyan-500/50',
      gradient: 'from-navy-950 via-blue-950 to-slate-950',
      borderColor: 'border-cyan-400/70',
      icon: '⚓',
      insigniaColor: '#38bdf8',
    },
    'Indian Air Force': {
      label: 'INDIAN AIR FORCE • भारतीय वायु सेना',
      motto: 'नभः स्पृशं दीप्तम्',
      colorBadge: 'bg-sky-800 text-sky-100 border-sky-400/50',
      gradient: 'from-slate-950 via-sky-950 to-navy-950',
      borderColor: 'border-sky-400/70',
      icon: '✈️',
      insigniaColor: '#7dd3fc',
    },
  }[armedForce] || {
    label: 'INDIAN ARMED FORCES',
    motto: 'DEFENCE VETERAN',
    colorBadge: 'bg-military-700 text-white',
    gradient: 'from-navy-950 via-navy-900 to-navy-950',
    borderColor: 'border-amber-400/60',
    icon: '🎖️',
    insigniaColor: '#ffd9a8',
  };

  return (
    <div className="flex flex-col items-center">
      {/* Physical-style Card Container */}
      <div
        id="veteran-id-card-preview"
        className={`w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 ${branchDetails.borderColor} bg-gradient-to-br ${branchDetails.gradient} text-white relative p-6 transition-all hover:shadow-saffron-500/20`}
        style={{ aspectRatio: '1.586 / 1' }}
      >
        {/* Tricolor top header stripe */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-saffron-500 via-white to-military-500" />

        {/* Card Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-8xl font-black">ESM</span>
        </div>

        {/* Card Header */}
        <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-saffron-500 flex items-center justify-center text-navy-950 font-black text-sm shadow">
              {branchDetails.icon}
            </div>
            <div>
              <p className="font-heading font-extrabold text-[11px] tracking-wider text-saffron-300 uppercase leading-none">
                Ex-Servicemen Welfare Association
              </p>
              <p className="text-[10px] text-white/80 font-medium tracking-wide">
                Nashik District • Maharashtra State
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${branchDetails.colorBadge} border`}>
              {armedForce.replace('Indian ', '')}
            </span>
            <p className="text-[8px] text-saffron-300 font-serif italic mt-0.5">{branchDetails.motto}</p>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex gap-4 items-center">
          {/* Veteran Photo Frame */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-20 h-24 rounded-lg overflow-hidden border-2 border-saffron-400/80 bg-navy-800 shadow-md relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${photoUrl})` }}
              />
            </div>
            <span className="mt-1 text-[9px] text-amber-300 font-bold">
              {bloodGroup}
            </span>
          </div>

          {/* Details Column */}
          <div className="flex-1 min-w-0 space-y-1 text-xs">
            <div>
              <p className="text-[9px] uppercase tracking-wider text-white/60 font-semibold">Name of Veteran</p>
              <p className="font-heading font-bold text-xs sm:text-sm text-white truncate text-saffron-200">
                {fullName}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <div>
                <p className="text-[8px] uppercase tracking-wider text-white/60">Service No</p>
                <p className="font-mono font-bold text-xs text-white">{serviceNumber}</p>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-wider text-white/60">Rank</p>
                <p className="font-semibold text-xs text-white truncate">{rank}</p>
              </div>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-wider text-white/60">
                {armedForce === 'Indian Navy' ? 'Branch / Specialisation' : armedForce === 'Indian Air Force' ? 'Trade / Branch' : 'Regiment / Arm'}
              </p>
              <p className="font-medium text-xs text-white/90 truncate">{regiment}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-0.5 border-t border-white/10 text-[9px]">
              <div>
                <span className="text-white/60">ID: </span>
                <span className="font-mono font-bold text-amber-300">{membershipId}</span>
              </div>
              <div>
                <span className="text-white/60">Status: </span>
                <span className="font-semibold text-white">{membershipType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer Strip with microchip & security seal */}
        <div className="absolute bottom-2 left-6 right-6 flex items-center justify-between text-[8px] text-white/60 border-t border-white/10 pt-1.5">
          <span className="tracking-widest">{branchDetails.label}</span>
          <span className="font-mono text-saffron-400">NASHIK • BHARAT</span>
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={handlePrint}
          className="px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-900 text-white text-xs font-bold transition-all shadow inline-flex items-center gap-2 border border-navy-700"
        >
          <span>🖨️</span>
          <span>{t.printCard}</span>
        </button>
        <span className="text-xs text-slate-500">Official Tri-Service Veteran Credential</span>
      </div>
    </div>
  );
}
