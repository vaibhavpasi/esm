'use client';

interface IndianArmyCrestProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showMotto?: boolean;
  className?: string;
}

export default function IndianArmyCrest({
  size = 'md',
  showMotto = true,
  className = '',
}: IndianArmyCrestProps) {
  const dimMap = {
    sm: { w: 36, h: 36, text: 'text-[9px]' },
    md: { w: 48, h: 48, text: 'text-xs' },
    lg: { w: 64, h: 64, text: 'text-sm' },
    xl: { w: 88, h: 88, text: 'text-base' },
  };

  const current = dimMap[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Official Indian Army Crossed Swords & Ashoka Capitol Emblem */}
      <svg
        width={current.w}
        height={current.h}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
        aria-label="Indian Army Official Insignia — Crossed Swords and Ashoka Lion Capitol"
      >
        {/* Outer Circular Regimental Border (Gold & Scarlet) */}
        <circle cx="50" cy="50" r="47" stroke="url(#armyGoldGrad)" strokeWidth="3" fill="#121c0f" />
        <circle cx="50" cy="50" r="44" stroke="#991b1b" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />

        {/* Crossed Indian Scimitars / Cavalry Swords */}
        {/* Sword 1: Top-Left to Bottom-Right */}
        <g id="sword1">
          {/* Blade */}
          <path
            d="M20 22 C22 20 74 72 78 76 L76 78 C72 74 18 24 20 22 Z"
            fill="url(#bladeShine)"
            stroke="#D4AF37"
            strokeWidth="0.8"
          />
          {/* Curved Sabre Tip */}
          <path d="M19 23 Q16 17 25 21 Z" fill="#FFF8DC" />
          {/* Hilt / Crossguard */}
          <rect x="73" y="70" width="10" height="2.5" transform="rotate(45 78 71.25)" fill="#D4AF37" stroke="#8B7500" strokeWidth="0.5" />
          {/* Grip & Pommel */}
          <circle cx="81" cy="81" r="2.5" fill="#D4AF37" />
        </g>

        {/* Sword 2: Top-Right to Bottom-Left */}
        <g id="sword2">
          {/* Blade */}
          <path
            d="M80 22 C78 20 26 72 22 76 L24 78 C28 74 82 24 80 22 Z"
            fill="url(#bladeShine)"
            stroke="#D4AF37"
            strokeWidth="0.8"
          />
          {/* Curved Sabre Tip */}
          <path d="M81 23 Q84 17 75 21 Z" fill="#FFF8DC" />
          {/* Hilt / Crossguard */}
          <rect x="17" y="70" width="10" height="2.5" transform="rotate(-45 22 71.25)" fill="#D4AF37" stroke="#8B7500" strokeWidth="0.5" />
          {/* Grip & Pommel */}
          <circle cx="19" cy="81" r="2.5" fill="#D4AF37" />
        </g>

        {/* Ashoka Lion Capitol Crest (Center Top) */}
        <g id="ashokaCapitol" transform="translate(36, 26) scale(0.28)">
          {/* Central Pedestal / Abacus */}
          <rect x="12" y="70" width="76" height="12" rx="2" fill="url(#armyGoldGrad)" stroke="#8B7500" strokeWidth="1" />
          {/* Ashoka Chakra Wheel */}
          <circle cx="50" cy="76" r="5" fill="#1E3A8A" stroke="#FFF" strokeWidth="0.8" />

          {/* Three Lions Silhouette */}
          {/* Center Lion */}
          <path
            d="M50 8 C42 8 38 18 38 28 C38 40 42 54 44 68 L56 68 C58 54 62 40 62 28 C62 18 58 8 50 8 Z"
            fill="url(#armyGoldGrad)"
          />
          {/* Mane Details */}
          <path d="M46 16 Q50 12 54 16 Q50 24 46 16 Z" fill="#FFF8DC" />
          <circle cx="47" cy="22" r="1.5" fill="#121c0f" />
          <circle cx="53" cy="22" r="1.5" fill="#121c0f" />

          {/* Left Facing Lion */}
          <path
            d="M38 24 C30 20 22 28 22 38 C22 48 30 60 38 68 L44 68 C38 56 34 44 38 24 Z"
            fill="url(#armyGoldGrad)"
          />

          {/* Right Facing Lion */}
          <path
            d="M62 24 C70 20 78 28 78 38 C78 48 70 60 62 68 L56 68 C62 56 66 44 62 24 Z"
            fill="url(#armyGoldGrad)"
          />
        </g>

        {/* Center Shield / Star Motif */}
        <circle cx="50" cy="50" r="11" fill="#991b1b" stroke="url(#armyGoldGrad)" strokeWidth="1.5" />
        <polygon
          points="50,42 52.5,47.5 58,47.5 53.5,51 55,56.5 50,53 45,56.5 46.5,51 42,47.5 47.5,47.5"
          fill="#FFD700"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="armyGoldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE082" />
            <stop offset="0.3" stopColor="#FFD54F" />
            <stop offset="0.7" stopColor="#FFB300" />
            <stop offset="1" stopColor="#B78103" />
          </linearGradient>
          <linearGradient id="bladeShine" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.4" stopColor="#E2E8F0" />
            <stop offset="0.8" stopColor="#94A3B8" />
            <stop offset="1" stopColor="#475569" />
          </linearGradient>
        </defs>
      </svg>

      {/* Motto text */}
      {showMotto && (
        <span className={`font-bold tracking-wider text-amber-300 font-heading mt-1 uppercase ${current.text} drop-shadow-sm`}>
          सेवा परमो धर्मः
        </span>
      )}
    </div>
  );
}
