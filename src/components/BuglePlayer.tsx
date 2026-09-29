'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface BugleNote {
  freq: number;
  duration: number; // in seconds
  pause: number;    // pause after note in seconds
}

interface BugleTrack {
  id: string;
  titleEn: string;
  titleMr: string;
  titleHi: string;
  occasionEn: string;
  occasionMr: string;
  occasionHi: string;
  tempo: number;
  notes: BugleNote[];
}

// Bugle pitches (B-flat instrument harmonics in standard pitch):
// Bb3 = 233.08, F4 = 349.23, Bb4 = 466.16, D5 = 587.33, F5 = 698.46
const Bb3 = 233.08;
const F4 = 349.23;
const Bb4 = 466.16;
const D5 = 587.33;
const F5 = 698.46;

const bugleTracks: BugleTrack[] = [
  {
    id: 'last-post',
    titleEn: 'The Last Post (अंतिम बिगुल)',
    titleMr: 'द लास्ट पोस्ट (हुतात्मा स्मरण बिगुल)',
    titleHi: 'द लास्ट पोस्ट (शहीद स्मृति बिगुल)',
    occasionEn: 'Played during military funerals, wreath-laying ceremonies & Amar Jawan remembrance',
    occasionMr: 'सैनिक अंत्यसंस्कार, हुतात्मा स्मरण व अमर जवान ज्योती अभिवादन प्रसंगी',
    occasionHi: 'सैन्य अंत्येष्टि, अमर जवान ज्योति एवं शहीद स्मरण के अवसर पर',
    tempo: 1.0,
    notes: [
      { freq: Bb3, duration: 1.2, pause: 0.1 },
      { freq: F4, duration: 0.35, pause: 0.05 },
      { freq: Bb4, duration: 1.2, pause: 0.2 },
      { freq: F4, duration: 0.35, pause: 0.05 },
      { freq: Bb4, duration: 0.35, pause: 0.05 },
      { freq: D5, duration: 1.3, pause: 0.25 },
      { freq: Bb4, duration: 0.35, pause: 0.05 },
      { freq: D5, duration: 0.35, pause: 0.05 },
      { freq: F5, duration: 1.8, pause: 0.4 },
      // Descending solemn phrase
      { freq: D5, duration: 0.5, pause: 0.05 },
      { freq: Bb4, duration: 0.5, pause: 0.05 },
      { freq: F4, duration: 0.6, pause: 0.1 },
      { freq: Bb3, duration: 2.2, pause: 0.3 },
    ],
  },
  {
    id: 'reveille',
    titleEn: 'Reveille (प्रभात बिगुल)',
    titleMr: 'रेवेली (सकाळची जागृती धून)',
    titleHi: 'रेवेली (प्रातः कालीन सैन्य बिगुल)',
    occasionEn: 'Played at sunrise in Indian Army & Navy cantonments to mark duty and new dawn',
    occasionMr: 'सूर्योदयावेळी सैन्य छावण्यांमध्ये नवीन दिवसाच्या कर्तव्य शुभारंभासाठी',
    occasionHi: 'सूर्योदय के समय सैन्य छावनियों में कर्तव्य आह्वान हेतु',
    tempo: 1.2,
    notes: [
      { freq: F4, duration: 0.2, pause: 0.04 },
      { freq: Bb4, duration: 0.2, pause: 0.04 },
      { freq: D5, duration: 0.2, pause: 0.04 },
      { freq: Bb4, duration: 0.4, pause: 0.1 },
      { freq: F4, duration: 0.2, pause: 0.04 },
      { freq: Bb4, duration: 0.2, pause: 0.04 },
      { freq: D5, duration: 0.2, pause: 0.04 },
      { freq: Bb4, duration: 0.4, pause: 0.1 },
      { freq: F4, duration: 0.2, pause: 0.04 },
      { freq: Bb4, duration: 0.2, pause: 0.04 },
      { freq: D5, duration: 0.2, pause: 0.04 },
      { freq: Bb4, duration: 0.2, pause: 0.04 },
      { freq: D5, duration: 0.2, pause: 0.04 },
      { freq: F5, duration: 0.6, pause: 0.2 },
      { freq: D5, duration: 0.3, pause: 0.05 },
      { freq: Bb4, duration: 0.6, pause: 0.2 },
    ],
  },
  {
    id: 'rouse',
    titleEn: 'The Rouse (जागृत बिगुल)',
    titleMr: 'द राउझ (कर्तव्य बिगुल)',
    titleHi: 'द राउज (उत्साह बिगुल)',
    occasionEn: 'Played immediately after The Last Post symbolizing the soldier rising to eternal glory',
    occasionMr: 'लास्ट पोस्ट नंतर लगेचच अमर सैनिकाच्या अमरत्वाचे प्रतीक म्हणून',
    occasionHi: 'द लास्ट पोस्ट के तुरंत बाद अमर सैनिक के अमरत्व के प्रतीक रूप में',
    tempo: 1.1,
    notes: [
      { freq: F4, duration: 0.25, pause: 0.05 },
      { freq: Bb4, duration: 0.25, pause: 0.05 },
      { freq: D5, duration: 0.25, pause: 0.05 },
      { freq: Bb4, duration: 0.5, pause: 0.1 },
      { freq: D5, duration: 0.25, pause: 0.05 },
      { freq: F5, duration: 0.7, pause: 0.15 },
      { freq: D5, duration: 0.3, pause: 0.05 },
      { freq: Bb4, duration: 0.8, pause: 0.2 },
    ],
  },
  {
    id: 'retreat',
    titleEn: 'Sunset / Retreat (संध्या बिगुल)',
    titleMr: 'सनसेट / रिट्रीट (ध्वज अवतरण बिगुल)',
    titleHi: 'सनसेट / रिट्रीट (ध्वज अवरोहण बिगुल)',
    occasionEn: 'Played at dusk as the National Flag is lowered with full ceremonial honors',
    occasionMr: 'सूर्यास्तावेळी राष्ट्रध्वज सन्मानपूर्वक उतरवताना वाजवला जाणारा बिगुल',
    occasionHi: 'सूर्यास्त के समय राष्ट्रीय ध्वज को ससम्मान उतारते समय',
    tempo: 0.95,
    notes: [
      { freq: Bb3, duration: 0.7, pause: 0.1 },
      { freq: F4, duration: 0.5, pause: 0.08 },
      { freq: Bb4, duration: 0.8, pause: 0.12 },
      { freq: D5, duration: 0.6, pause: 0.08 },
      { freq: Bb4, duration: 0.5, pause: 0.08 },
      { freq: F4, duration: 0.6, pause: 0.1 },
      { freq: Bb3, duration: 1.5, pause: 0.3 },
    ],
  },
];

export default function BuglePlayer() {
  const { language } = useLanguage();
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(-1);
  const [volume, setVolume] = useState(0.7);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const abortControllerRef = useRef<boolean>(false);

  const stopPlayback = () => {
    abortControllerRef.current = true;
    isPlayingRef.current = false;
    setIsPlaying(false);
    setCurrentNoteIndex(-1);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, []);

  const getAudioContext = (): AudioContext => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtxClass();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playBrassTone = (ctx: AudioContext, freq: number, duration: number, masterVolume: number): Promise<void> => {
    return new Promise((resolve) => {
      const now = ctx.currentTime;

      // Primary oscillator (Sawtooth for bright brass harmonics)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(freq, now);

      // Sub oscillator (Triangle for warm trumpet body)
      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq, now);

      // Slight vibrato LFO
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(5.5, now); // 5.5 Hz vibrato
      lfoGain.gain.setValueAtTime(freq * 0.007, now); // subtle depth
      lfo.connect(osc1.frequency);
      lfo.connect(osc2.frequency);

      // Lowpass resonant filter to shape brass timbre
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.Q.setValueAtTime(2.5, now);
      // Filter envelope: starts lower, opens during attack, settles
      filter.frequency.setValueAtTime(freq * 1.5, now);
      filter.frequency.exponentialRampToValueAtTime(Math.min(freq * 5.0, 6000), now + 0.08);
      filter.frequency.exponentialRampToValueAtTime(Math.min(freq * 3.5, 4500), now + duration);

      // Amplitude Envelope (brass attack & gentle decay)
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.0001, now);
      // Fast attack
      gainNode.gain.exponentialRampToValueAtTime(masterVolume * 0.45, now + 0.05);
      // Sustain
      gainNode.gain.setValueAtTime(masterVolume * 0.42, now + duration - 0.08);
      // Decay release
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Connect graph
      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Start nodes
      lfo.start(now);
      osc1.start(now);
      osc2.start(now);

      // Stop nodes
      const stopTime = now + duration + 0.05;
      osc1.stop(stopTime);
      osc2.stop(stopTime);
      lfo.stop(stopTime);

      setTimeout(() => {
        resolve();
      }, (duration) * 1000);
    });
  };

  const handlePlay = async () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }

    try {
      const ctx = getAudioContext();
      abortControllerRef.current = false;
      isPlayingRef.current = true;
      setIsPlaying(true);

      const track = bugleTracks[selectedTrackIndex];

      for (let i = 0; i < track.notes.length; i++) {
        if (abortControllerRef.current || !isPlayingRef.current) break;

        setCurrentNoteIndex(i);
        const note = track.notes[i];

        await playBrassTone(ctx, note.freq, note.duration, volume);

        if (abortControllerRef.current || !isPlayingRef.current) break;

        // Pause between notes
        if (note.pause > 0) {
          await new Promise((r) => setTimeout(r, note.pause * 1000));
        }
      }
    } catch (e) {
      console.error('Audio playback error:', e);
    } finally {
      stopPlayback();
    }
  };

  const currentTrack = bugleTracks[selectedTrackIndex];
  const title = language === 'mr' ? currentTrack.titleMr : language === 'hi' ? currentTrack.titleHi : currentTrack.titleEn;
  const occasion = language === 'mr' ? currentTrack.occasionMr : language === 'hi' ? currentTrack.occasionHi : currentTrack.occasionEn;

  return (
    <div className="bg-gradient-to-br from-navy-900/90 via-navy-950/95 to-navy-900/90 border border-saffron-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
      {/* Header with brass bugle icon */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-navy-950 text-2xl font-bold shadow-lg shadow-amber-500/20 border border-amber-200">
            🎺
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-400 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 animate-pulse" />
              {language === 'mr' ? 'सैनिकी बिगुल धून वादक' : language === 'hi' ? 'सैन्य बिगुल धुन वादक' : 'Ceremonial Bugle Calls'}
            </div>
            <h4 className="text-lg font-bold text-white font-heading">
              {language === 'mr' ? 'अमर जवान स्मृति बिगुल वादन' : language === 'hi' ? 'अमर जवान स्मृति बिगुल वादन' : 'Military Bugle & Memorial Honors'}
            </h4>
          </div>
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-2 text-xs text-white/70 bg-navy-800/80 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
          <span>🔊</span>
          <label htmlFor="bugle-volume-slider" className="sr-only">Bugle volume</label>
          <input
            id="bugle-volume-slider"
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 accent-saffron-500 cursor-pointer"
            aria-label="Bugle volume"
          />
          <span className="text-white font-mono text-[11px]">{Math.round(volume * 100)}%</span>
        </div>
      </div>

      {/* Track Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
        {bugleTracks.map((track, idx) => {
          const isSelected = selectedTrackIndex === idx;
          const trackTitle = language === 'mr' ? track.titleMr : language === 'hi' ? track.titleHi : track.titleEn;
          return (
            <button
              key={track.id}
              onClick={() => {
                if (isPlaying) stopPlayback();
                setSelectedTrackIndex(idx);
              }}
              className={`p-2.5 rounded-xl text-left text-xs transition-all border ${
                isSelected
                  ? 'bg-saffron-500/20 border-saffron-500 text-saffron-200 font-bold shadow-md shadow-saffron-500/10'
                  : 'bg-navy-800/50 border-white/10 text-white/80 hover:bg-navy-800 hover:text-white'
              }`}
            >
              <div className="font-semibold truncate">{trackTitle.split('(')[0]}</div>
              <div className="text-[10px] text-white/50 truncate">
                {track.id === 'last-post' ? 'Memorial' : track.id === 'reveille' ? 'Dawn' : track.id === 'rouse' ? 'Glory' : 'Sunset'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Track Information & Audio Player Action */}
      <div className="bg-navy-950/80 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-amber-400 font-bold text-sm">{title}</span>
            {isPlaying && (
              <span className="inline-flex items-center gap-1 text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full border border-red-500/30 animate-pulse font-bold">
                ● LIVE
              </span>
            )}
          </div>
          <p className="text-xs text-white/60 leading-relaxed">{occasion}</p>

          {/* Visualizer audio waves */}
          <div className="flex items-center gap-1 mt-3 h-5">
            {currentTrack.notes.map((_, i) => (
              <div
                key={i}
                className={`w-2 rounded-full transition-all duration-150 ${
                  isPlaying && currentNoteIndex === i
                    ? 'h-5 bg-gradient-to-t from-saffron-500 to-amber-300 shadow-sm shadow-amber-400'
                    : isPlaying && i < currentNoteIndex
                    ? 'h-3 bg-saffron-600/60'
                    : 'h-1.5 bg-white/15'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Play/Stop Button */}
        <button
          onClick={handlePlay}
          className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg ${
            isPlaying
              ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30'
              : 'bg-gradient-to-r from-amber-500 to-saffron-500 hover:from-amber-400 hover:to-saffron-400 text-navy-950 font-extrabold shadow-amber-500/30 hover:scale-105 active:scale-95'
          }`}
          aria-label={isPlaying ? 'Stop bugle playback' : `Play ${title}`}
        >
          <span>{isPlaying ? '⏹' : '▶'}</span>
          <span>{isPlaying ? (language === 'mr' ? 'थांबवा' : language === 'hi' ? 'रोकें' : 'Stop') : (language === 'mr' ? 'बिगुल वाजवा' : language === 'hi' ? 'बिगुल बजाएं' : 'Play Bugle')}</span>
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-white/40">
        <span>🎖️ Synthesized Ceremonial B-flat Brass Bugle Call</span>
        <span>Honoring Indian Armed Forces Traditions</span>
      </div>
    </div>
  );
}
