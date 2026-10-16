import React, { useState } from 'react';
import { Calculator, ArrowRight, Gauge } from 'lucide-react';

export const MileageCalculator: React.FC = () => {
  const [weeklyMiles, setWeeklyMiles] = useState<number>(150);
  const [currentMpg, setCurrentMpg] = useState<number>(45);
  const [gasPrice, setGasPrice] = useState<number>(3.85);

  const annualMiles = weeklyMiles * 52;
  const annualGallons = annualMiles / (currentMpg || 1);
  const annualCost = annualGallons * gasPrice;

  // Optimized scenario (proper tire pressure + highway aerodynamics + smooth throttle = ~20% improvement)
  const optimizedMpg = Math.round(currentMpg * 1.22);
  const optimizedAnnualCost = (annualMiles / optimizedMpg) * gasPrice;
  const annualSavings = annualCost - optimizedAnnualCost;

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide font-display">
            Interactive Motorcycle Fuel & Mileage Calculator
          </h3>
          <p className="text-xs text-neutral-400">
            Calculate your annual fuel expenditure and see how tuning tires & throttle saves cash.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Weekly Riding Distance
          </label>
          <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white focus-within:border-red-600">
            <input
              type="number"
              min="10"
              max="2000"
              value={weeklyMiles}
              onChange={(e) => setWeeklyMiles(Math.max(1, Number(e.target.value)))}
              className="w-full bg-transparent text-sm focus:outline-none tabular-nums"
            />
            <span className="text-xs text-neutral-500 font-medium">miles/wk</span>
          </div>
          <span className="mt-1 text-[11px] text-neutral-500 tabular-nums">
            {(weeklyMiles * 1.609).toFixed(0)} km per week
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Current Bike Fuel Economy
          </label>
          <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white focus-within:border-red-600">
            <input
              type="number"
              min="15"
              max="130"
              value={currentMpg}
              onChange={(e) => setCurrentMpg(Math.max(5, Number(e.target.value)))}
              className="w-full bg-transparent text-sm focus:outline-none tabular-nums"
            />
            <span className="text-xs text-neutral-500 font-medium">MPG</span>
          </div>
          <span className="mt-1 text-[11px] text-neutral-500 tabular-nums">
            ~{(235.215 / (currentMpg || 1)).toFixed(1)} L/100km
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Gasoline Price
          </label>
          <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white focus-within:border-red-600">
            <span className="mr-1 text-sm text-neutral-500">$</span>
            <input
              type="number"
              step="0.05"
              min="1"
              max="15"
              value={gasPrice}
              onChange={(e) => setGasPrice(Math.max(0.5, Number(e.target.value)))}
              className="w-full bg-transparent text-sm focus:outline-none tabular-nums"
            />
            <span className="text-xs text-neutral-500 font-medium">/ gal</span>
          </div>
          <span className="mt-1 text-[11px] text-neutral-500 tabular-nums">
            ~${(gasPrice / 3.785).toFixed(2)} per liter
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80">
        <div className="rounded-lg bg-neutral-950/60 p-4 border border-neutral-800">
          <span className="text-xs text-neutral-400">Current Annual Fuel Cost</span>
          <div className="text-2xl font-bold text-white tabular-nums font-display tracking-tight">
            ${annualCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <span className="text-[11px] text-neutral-500 tabular-nums">
            {annualGallons.toFixed(0)} gallons / year
          </span>
        </div>

        <div className="rounded-lg bg-neutral-950/60 p-4 border border-neutral-800">
          <span className="text-xs text-neutral-400">Optimized Fuel Economy (+22%)</span>
          <div className="text-2xl font-bold text-emerald-400 tabular-nums font-display tracking-tight flex items-center gap-1.5">
            <Gauge className="h-5 w-5" />
            {optimizedMpg} MPG
          </div>
          <span className="text-[11px] text-neutral-500">
            With dialed PSI, clean chain & smooth shifting
          </span>
        </div>

        <div className="rounded-lg bg-red-950/30 p-4 border border-red-900/40">
          <span className="text-xs text-red-300 font-medium">Your Annual Fuel Savings</span>
          <div className="text-2xl font-bold text-red-400 tabular-nums font-display tracking-tight">
            ${annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <span className="text-[11px] text-red-300/80">
            Funds your entire season of oil & filter changes!
          </span>
        </div>
      </div>
    </div>
  );
};
