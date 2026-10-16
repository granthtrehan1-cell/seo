import React, { useState } from 'react';
import { Gauge, Zap, Flame } from 'lucide-react';

interface BikeSpec {
  name: string;
  engine: string;
  hp: number;
  torque: number;
  weightLbs: number;
  p2w: number; // hp per ton
  revLimit: string;
  focus: string;
}

const SPORT_BIKES: BikeSpec[] = [
  { name: 'Ducati Panigale V4 S', engine: '1,103cc Desmosedici V4', hp: 215.5, torque: 91.2, weightLbs: 431, p2w: 1102, revLimit: '14,500 RPM', focus: 'Apex Track Weapon' },
  { name: 'BMW S 1000 RR', engine: '999cc ShiftCam Inline-4', hp: 205, torque: 83, weightLbs: 434, p2w: 1042, revLimit: '14,600 RPM', focus: 'Superbike All-Rounder' },
  { name: 'Yamaha YZF-R9', engine: '890cc CP3 Triple', hp: 117, torque: 68.6, weightLbs: 430, p2w: 599, revLimit: '11,500 RPM', focus: 'Real-World Canyon Master' },
  { name: 'Aprilia RS 660 Extrema', engine: '659cc Parallel-Twin', hp: 100, torque: 49.4, weightLbs: 366, p2w: 601, revLimit: '11,500 RPM', focus: 'Featherweight Corner Speed' },
  { name: 'Kawasaki Ninja ZX-4RR', engine: '399cc Screamer Inline-4', hp: 76, torque: 28, weightLbs: 414, p2w: 405, revLimit: '16,000 RPM', focus: 'High-Rev Track Training' }
];

export const SportsSpecAnalyzer: React.FC = () => {
  const [selectedBike, setSelectedBike] = useState<BikeSpec>(SPORT_BIKES[0]);

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
          <Flame className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide font-display">
            Interactive Sportbike Power-to-Weight Spec Matrix
          </h3>
          <p className="text-xs text-neutral-400">
            Compare real dyno horsepower, wet curb mass, and power-to-weight ratios.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Select Superbike Platform
          </label>
          <div className="space-y-1.5">
            {SPORT_BIKES.map((bike) => (
              <button
                key={bike.name}
                onClick={() => setSelectedBike(bike)}
                className={`w-full text-left p-3 rounded-lg border text-xs font-medium transition flex items-center justify-between ${
                  selectedBike.name === bike.name
                    ? 'border-red-600 bg-red-950/30 text-white'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-neutral-700'
                }`}
              >
                <span>{bike.name}</span>
                <span className="text-[11px] text-neutral-400 font-mono tabular-nums">
                  {bike.hp} hp / {bike.weightLbs} lbs
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-neutral-950 p-5 border border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                  {selectedBike.focus}
                </span>
                <div className="text-2xl font-bold text-white font-display mt-0.5">
                  {selectedBike.name}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-neutral-500 uppercase block">Power to Weight</span>
                <span className="text-sm font-bold text-red-400 font-mono tabular-nums">
                  {selectedBike.p2w} hp/ton
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 py-3 border-y border-neutral-800 text-center">
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Engine Peak</span>
                <span className="text-xs font-bold text-white tabular-nums">{selectedBike.hp} HP</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Torque</span>
                <span className="text-xs font-bold text-white tabular-nums">{selectedBike.torque} lb-ft</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Rev Ceiling</span>
                <span className="text-xs font-bold text-white tabular-nums">{selectedBike.revLimit}</span>
              </div>
            </div>

            <div className="mt-4 text-xs text-neutral-400 space-y-1">
              <div><strong>Engine Architecture:</strong> {selectedBike.engine}</div>
              <div><strong>Curb Weight (Wet):</strong> {selectedBike.weightLbs} lbs ({(selectedBike.weightLbs * 0.453592).toFixed(1)} kg)</div>
            </div>
          </div>

          <div className="mt-4 rounded bg-neutral-900 p-2.5 text-[11px] text-neutral-400 border border-neutral-800">
            <strong>Rider Note:</strong> On twisty technical roads with short straights, bikes with lower weight and usable midrange (like RS 660 or R9) frequently set faster corner exit speeds than 215hp superbikes.
          </div>
        </div>
      </div>
    </div>
  );
};
