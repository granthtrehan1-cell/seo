import React, { useState } from 'react';
import { Compass, Check } from 'lucide-react';

export const BeginnerErgoQuiz: React.FC = () => {
  const [heightInches, setHeightInches] = useState<number>(69); // 5'9"
  const [stylePreference, setStylePreference] = useState<'naked' | 'sport' | 'cruiser' | 'adv'>('naked');

  const recommendations = {
    naked: {
      model: 'Yamaha MT-03 / Kawasaki Z500',
      seatHeight: '30.7 in (780 mm)',
      weight: '368 lbs (167 kg)',
      power: '42 - 51 hp',
      verdict: 'Upright, nimble handlebars allow effortless low-speed maneuvering and natural shoulder relaxation.'
    },
    sport: {
      model: 'Kawasaki Ninja 500 / CFMOTO 450SS',
      seatHeight: '30.9 in (785 mm)',
      weight: '377 lbs (171 kg)',
      power: '51 hp',
      verdict: 'Mild clip-on risers prevent excessive wrist strain while providing genuine wind deflection on highway commutes.'
    },
    cruiser: {
      model: 'Honda Rebel 500 / Royal Enfield Meteor 350',
      seatHeight: '27.2 in (690 mm)',
      weight: '408 lbs (185 kg)',
      power: '46 hp',
      verdict: 'Ultra-low seat allows almost any rider to plant both feet flat on the ground at stops.'
    },
    adv: {
      model: 'Honda NX500 / KTM 390 Adventure',
      seatHeight: '32.6 in (828 mm)',
      weight: '432 lbs (196 kg)',
      power: '47 hp',
      verdict: 'Long-travel suspension absorbs rough potholes and gravel; best suited for riders with 31"+ inseam.'
    }
  };

  const rec = recommendations[stylePreference];
  const feet = Math.floor(heightInches / 12);
  const inches = heightInches % 12;

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
          <Compass className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide font-display">
            Interactive Beginner Motorcycle Matcher
          </h3>
          <p className="text-xs text-neutral-400">
            Tailor engine characteristics and seat heights to your body frame and preferred riding style.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Your Height: <span className="text-white font-bold">{feet}’ {inches}”</span> ({Math.round(heightInches * 2.54)} cm)
            </label>
          </div>
          <input
            type="range"
            min="60"
            max="78"
            value={heightInches}
            onChange={(e) => setHeightInches(Number(e.target.value))}
            className="mt-3 w-full accent-red-600"
          />

          <div className="mt-5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Preferred Motorcycle Architecture
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'naked', label: 'Naked Roadster' },
                { id: 'sport', label: 'Sport Faired' },
                { id: 'cruiser', label: 'Low Cruiser' },
                { id: 'adv', label: 'Adventure / Touring' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setStylePreference(item.id as any)}
                  className={`p-2.5 rounded-lg text-left border text-xs font-medium transition ${
                    stylePreference === item.id
                      ? 'border-red-600 bg-red-950/30 text-white'
                      : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-neutral-950 p-5 border border-neutral-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
              Recommended Starter Match
            </span>
            <div className="mt-1 text-2xl font-bold text-white font-display">
              {rec.model}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 py-3 border-y border-neutral-800 text-center">
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Seat Height</span>
                <span className="text-xs font-bold text-white tabular-nums">{rec.seatHeight}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Curb Weight</span>
                <span className="text-xs font-bold text-white tabular-nums">{rec.weight}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Output</span>
                <span className="text-xs font-bold text-white tabular-nums">{rec.power}</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-300 leading-relaxed">
              {rec.verdict}
            </p>
          </div>

          <div className="mt-3 text-[11px] text-neutral-500">
            {heightInches < 66 && stylePreference === 'adv' && (
              <span className="text-amber-400 font-medium">
                Note: At your height, an Adventure bike will likely require one-footing at stops. Consider suspension lowering links or the Low Cruiser option.
              </span>
            )}
            {heightInches >= 73 && stylePreference === 'cruiser' && (
              <span className="text-amber-400 font-medium">
                Note: At your height, standard forward-controls or highway pegs will be recommended to prevent cramped hips.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
