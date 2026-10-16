import React, { useState } from 'react';
import { Zap, Fuel, ArrowRight } from 'lucide-react';

export const TCOCalculator: React.FC = () => {
  const [annualMiles, setAnnualMiles] = useState<number>(6000);
  const [gasPrice, setGasPrice] = useState<number>(3.85);
  const [kwhPrice, setKwhPrice] = useState<number>(0.16);

  // 5 Year running metrics
  const totalMiles5Yr = annualMiles * 5;

  // Gas Bike (45 mpg average, $450/yr maintenance)
  const gasGallons5Yr = totalMiles5Yr / 45;
  const gasFuelCost5Yr = gasGallons5Yr * gasPrice;
  const gasMaintCost5Yr = 500 * 5; // oil, spark plugs, valve adjust, chain, air filters
  const gasTotal5Yr = gasFuelCost5Yr + gasMaintCost5Yr;

  // Electric Bike (85 Wh/mile -> 0.085 kWh/mile, $120/yr maintenance)
  const evKwh5Yr = totalMiles5Yr * 0.085;
  const evEnergyCost5Yr = evKwh5Yr * kwhPrice;
  const evMaintCost5Yr = 140 * 5; // tires, brake fluid, belt check
  const evTotal5Yr = evEnergyCost5Yr + evMaintCost5Yr;

  const totalSavings5Yr = gasTotal5Yr - evTotal5Yr;

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
          <Zap className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide font-display">
            Electric vs. Petrol: 5-Year Total Cost of Ownership (TCO) Calculator
          </h3>
          <p className="text-xs text-neutral-400">
            Compare fuel, maintenance, and operational wear across 5 years of real-world riding.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Annual Miles Ridden
          </label>
          <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white">
            <input
              type="number"
              min="1000"
              max="35000"
              step="500"
              value={annualMiles}
              onChange={(e) => setAnnualMiles(Math.max(500, Number(e.target.value)))}
              className="w-full bg-transparent text-sm focus:outline-none tabular-nums"
            />
            <span className="text-xs text-neutral-500 font-medium">mi/yr</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Gasoline Price
          </label>
          <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white">
            <span className="mr-1 text-sm text-neutral-500">$</span>
            <input
              type="number"
              step="0.10"
              min="2"
              max="10"
              value={gasPrice}
              onChange={(e) => setGasPrice(Math.max(1, Number(e.target.value)))}
              className="w-full bg-transparent text-sm focus:outline-none tabular-nums"
            />
            <span className="text-xs text-neutral-500 font-medium">/ gal</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Electricity Utility Rate
          </label>
          <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white">
            <span className="mr-1 text-sm text-neutral-500">$</span>
            <input
              type="number"
              step="0.01"
              min="0.05"
              max="0.60"
              value={kwhPrice}
              onChange={(e) => setKwhPrice(Math.max(0.01, Number(e.target.value)))}
              className="w-full bg-transparent text-sm focus:outline-none tabular-nums"
            />
            <span className="text-xs text-neutral-500 font-medium">/ kWh</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
        <div className="rounded-lg bg-neutral-950 p-4 border border-neutral-800">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
            <Fuel className="h-4 w-4 text-amber-500" />
            Petrol 5-Yr Running Cost
          </div>
          <div className="mt-2 text-2xl font-bold text-white tabular-nums font-display">
            ${gasTotal5Yr.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <div className="mt-2 text-[11px] text-neutral-500 space-y-0.5">
            <div>Fuel: ${gasFuelCost5Yr.toFixed(0)}</div>
            <div>Maint (Valves, Oil, Plugs): ${gasMaintCost5Yr.toFixed(0)}</div>
          </div>
        </div>

        <div className="rounded-lg bg-neutral-950 p-4 border border-neutral-800">
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
            <Zap className="h-4 w-4" />
            Electric 5-Yr Running Cost
          </div>
          <div className="mt-2 text-2xl font-bold text-emerald-400 tabular-nums font-display">
            ${evTotal5Yr.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <div className="mt-2 text-[11px] text-neutral-500 space-y-0.5">
            <div>Electricity: ${evEnergyCost5Yr.toFixed(0)}</div>
            <div>Routine Wear (Tires/Fluid): ${evMaintCost5Yr.toFixed(0)}</div>
          </div>
        </div>

        <div className="rounded-lg bg-red-950/30 p-4 border border-red-900/40">
          <span className="text-xs text-red-300 font-medium">5-Year Operational Savings</span>
          <div className="mt-2 text-2xl font-bold text-red-400 tabular-nums font-display">
            ${totalSavings5Yr.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <p className="mt-2 text-[11px] text-red-300/80">
            Offsets roughly ${Math.round(totalSavings5Yr / 5)} per year of initial purchase price premium!
          </p>
        </div>
      </div>
    </div>
  );
};
