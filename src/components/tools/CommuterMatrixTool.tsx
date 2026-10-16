import React, { useState } from 'react';
import { Layers, CheckCircle } from 'lucide-react';

export const CommuterMatrixTool: React.FC = () => {
  const [dailyCommuteMiles, setDailyCommuteMiles] = useState<number>(24);
  const [trafficDensity, setTrafficDensity] = useState<'heavy' | 'moderate' | 'open'>('heavy');

  const commuteDaysPerYear = 240;
  const annualMiles = dailyCommuteMiles * commuteDaysPerYear;

  // Commuter costs: 55 mpg, $400 insurance, $300 tires (every 12k mi), $3.80 gas
  const commuterFuel = (annualMiles / 55) * 3.80;
  const commuterTires = (annualMiles / 12000) * 320;
  const commuterInsurance = 450;
  const commuterAnnualTotal = commuterFuel + commuterTires + commuterInsurance;

  // Sportbike costs: 36 mpg, $1,400 insurance, $480 tires (every 4k mi), $3.80 gas
  const sportFuel = (annualMiles / 36) * 3.80;
  const sportTires = (annualMiles / 4000) * 450;
  const sportInsurance = 1350;
  const sportAnnualTotal = sportFuel + sportTires + sportInsurance;

  const annualSavings = sportAnnualTotal - commuterAnnualTotal;

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
          <Layers className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide font-display">
            Commuter vs Sportbike Annual Cost & Ergonomics Simulator
          </h3>
          <p className="text-xs text-neutral-400">
            Compare annual tire wear, insurance rates, and fuel cost for your daily round-trip commute.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Daily Roundtrip Commute: <span className="text-white font-bold tabular-nums">{dailyCommuteMiles} miles</span>
            </label>
            <span className="text-xs text-neutral-500 tabular-nums">
              {annualMiles.toLocaleString()} miles/year
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="80"
            step="1"
            value={dailyCommuteMiles}
            onChange={(e) => setDailyCommuteMiles(Number(e.target.value))}
            className="mt-3 w-full accent-red-600"
          />

          <div className="mt-5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Typical Traffic Flow
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'heavy', label: 'Heavy Gridlock', note: 'Lots of clutch slipping & heat' },
                { id: 'moderate', label: 'Moderate Traffic', note: 'Occasional stop & go' },
                { id: 'open', label: 'Highway Open', note: 'Steady 65+ MPH speed' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTrafficDensity(t.id as any)}
                  className={`p-2 rounded-lg text-left border text-xs font-medium transition ${
                    trafficDensity === t.id
                      ? 'border-red-600 bg-red-950/30 text-white'
                      : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="font-semibold text-white">{t.label}</div>
                  <div className="text-[10px] text-neutral-500">{t.note}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-neutral-950 p-4 border border-neutral-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Commuter Roadster
              </span>
              <div className="text-xl font-bold text-white mt-1 tabular-nums font-display">
                ${commuterAnnualTotal.toFixed(0)} <span className="text-xs font-normal text-neutral-400">/ yr</span>
              </div>
              <div className="mt-3 text-[11px] text-neutral-400 space-y-1">
                <div>Fuel: ${commuterFuel.toFixed(0)}</div>
                <div>Tires: ${commuterTires.toFixed(0)}</div>
                <div>Insurance: ${commuterInsurance}</div>
              </div>
            </div>
            <div className="mt-2 text-[10px] text-neutral-400 border-t border-neutral-800/80 pt-2">
              Comfort: 9/10 (Upright, broad steering lock)
            </div>
          </div>

          <div className="rounded-lg bg-neutral-950 p-4 border border-neutral-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                Sport Superbike
              </span>
              <div className="text-xl font-bold text-white mt-1 tabular-nums font-display">
                ${sportAnnualTotal.toFixed(0)} <span className="text-xs font-normal text-neutral-400">/ yr</span>
              </div>
              <div className="mt-3 text-[11px] text-neutral-400 space-y-1">
                <div>Fuel: ${sportFuel.toFixed(0)}</div>
                <div>Tires: ${sportTires.toFixed(0)}</div>
                <div>Insurance: ${sportInsurance}</div>
              </div>
            </div>
            <div className="mt-2 text-[10px] text-neutral-400 border-t border-neutral-800/80 pt-2">
              Comfort: 4/10 (Wrist weight, engine heat)
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-neutral-950/80 p-3 border border-neutral-800 flex items-center justify-between">
        <span className="text-xs text-neutral-300">
          Net Annual Commuter Savings (Fuel + Tires + Insurance):
        </span>
        <span className="text-lg font-bold text-emerald-400 font-display tabular-nums">
          +${annualSavings.toFixed(0)} / year in your pocket
        </span>
      </div>
    </div>
  );
};
