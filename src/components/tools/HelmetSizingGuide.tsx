import React, { useState } from 'react';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export const HelmetSizingGuide: React.FC = () => {
  const [circumferenceCm, setCircumferenceCm] = useState<number>(57.5);
  const [headShape, setHeadShape] = useState<'intermediate' | 'long' | 'round'>('intermediate');

  const calculateSize = (cm: number) => {
    if (cm < 54) return { size: 'XS (Extra Small)', hat: '6 5/8 - 6 3/4' };
    if (cm <= 56) return { size: 'S (Small)', hat: '6 7/8 - 7' };
    if (cm <= 58) return { size: 'M (Medium)', hat: '7 1/8 - 7 1/4' };
    if (cm <= 60) return { size: 'L (Large)', hat: '7 3/8 - 7 1/2' };
    if (cm <= 62) return { size: 'XL (Extra Large)', hat: '7 5/8 - 7 3/4' };
    return { size: '2XL (Double Extra Large)', hat: '7 7/8 - 8' };
  };

  const currentResult = calculateSize(circumferenceCm);

  const brandRecommendations = {
    intermediate: 'Shoei (RF-1400), HJC (RPHA 1N / 71), Scorpion (EXO-R1 Air), AGV (K6 S)',
    long: 'Arai (Signet-X), Icon (Airflite), LS2 (Challenger GT)',
    round: 'Arai (Quantum-X), Bell (Star DLX MIPS / Qualifier)'
  };

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide font-display">
            Interactive Helmet Fit & Head Shape Diagnostic
          </h3>
          <p className="text-xs text-neutral-400">
            Find your precise helmet shell size and ideal manufacturer fit geometry.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Crown Circumference: <span className="text-white font-bold tabular-nums">{circumferenceCm} cm</span>
            </label>
            <span className="text-xs text-neutral-500 tabular-nums">
              {(circumferenceCm / 2.54).toFixed(1)} inches
            </span>
          </div>
          <input
            type="range"
            min="52"
            max="65"
            step="0.5"
            value={circumferenceCm}
            onChange={(e) => setCircumferenceCm(Number(e.target.value))}
            className="mt-3 w-full accent-red-600"
          />
          <p className="mt-2 text-[11px] text-neutral-500">
            Measure 1 inch above your eyebrows with a flexible tape measure across the widest point of your skull.
          </p>

          <div className="mt-5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Skull Shape Profile
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'intermediate', label: 'Intermediate Oval', note: '80% of riders' },
                { id: 'long', label: 'Long Oval', note: 'Narrow side-to-side' },
                { id: 'round', label: 'Round Oval', note: 'Equal width & depth' }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setHeadShape(s.id as any)}
                  className={`p-2 rounded-lg text-left border transition text-xs ${
                    headShape === s.id
                      ? 'border-red-600 bg-red-950/30 text-white'
                      : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="font-semibold text-white">{s.label}</div>
                  <div className="text-[10px] text-neutral-500">{s.note}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-neutral-950/80 p-5 border border-neutral-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
              Diagnostic Fit Output
            </span>
            <div className="mt-2 flex items-baseline gap-3">
              <div className="text-3xl font-extrabold text-white font-display">
                {currentResult.size}
              </div>
              <span className="text-xs text-neutral-400 tabular-nums">
                Hat Size: {currentResult.hat}
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80">
              <span className="text-xs font-medium text-neutral-300 block mb-1">
                Optimized Shell Architectures for Your Shape:
              </span>
              <p className="text-xs text-neutral-300 font-medium">
                {brandRecommendations[headShape]}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded bg-neutral-900 p-2.5 text-[11px] text-neutral-400 border border-neutral-800">
            <strong>Check Fit Protocol:</strong> Helmet should grab cheeks firmly. If you shake your head side-to-side, skin on your cheeks should move with the helmet rather than slide.
          </div>
        </div>
      </div>
    </div>
  );
};
