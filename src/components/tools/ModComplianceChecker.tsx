import React, { useState } from 'react';
import { Sliders, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface ModItem {
  id: string;
  name: string;
  legalStatus: 'Street Legal' | 'Conditionally Legal' | 'Off-Road Only';
  roiRating: 'Very High' | 'High' | 'Moderate' | 'Low / Cosmetic';
  notes: string;
}

const MODS: ModItem[] = [
  { id: 'suspension', name: 'Re-valved Fork Cartridges & Shock Spring', legalStatus: 'Street Legal', roiRating: 'Very High', notes: 'Zero emissions impact, massive handling and braking safety improvement.' },
  { id: 'brakelines', name: 'Braided Stainless Steel Brake Lines', legalStatus: 'Street Legal', roiRating: 'Very High', notes: 'DOT-compliant lines eliminate lever fade and expand line lifespan.' },
  { id: 'tailtidy', name: 'Tail Tidy / Fender Eliminator', legalStatus: 'Conditionally Legal', roiRating: 'Moderate', notes: 'Must maintain illuminated license plate lamp, 30° angle, and rear reflector.' },
  { id: 'slipon', name: 'Slip-On Exhaust (Retains Catalytic Converter)', legalStatus: 'Street Legal', roiRating: 'Moderate', notes: 'CARB / EPA compliant if stock headers and cat are intact.' },
  { id: 'fullexhaust', name: 'Full Decat Race Exhaust System', legalStatus: 'Off-Road Only', roiRating: 'Low / Cosmetic', notes: 'Violates EPA/emissions laws on public roads; lean AFR requires dyno flash.' },
  { id: 'ecutune', name: 'ECU Fuel Flash / Remap', legalStatus: 'Conditionally Legal', roiRating: 'High', notes: 'Optimizes throttle smoothness; can void factory powertrain warranty.' }
];

export const ModComplianceChecker: React.FC = () => {
  const [selectedModId, setSelectedModId] = useState<string>('suspension');
  const active = MODS.find((m) => m.id === selectedModId) || MODS[0];

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
          <Sliders className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide font-display">
            Interactive Motorcycle Mod & Legality Inspector
          </h3>
          <p className="text-xs text-neutral-400">
            Inspect performance value, warranty exposure, and DOT/EPA street legality before wrenching.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Select Modification to Inspect
          </label>
          <div className="space-y-1.5">
            {MODS.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setSelectedModId(mod.id)}
                className={`w-full text-left p-3 rounded-lg border text-xs font-medium transition flex items-center justify-between ${
                  selectedModId === mod.id
                    ? 'border-red-600 bg-red-950/30 text-white'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-neutral-700'
                }`}
              >
                <span>{mod.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                  mod.legalStatus === 'Street Legal' ? 'text-emerald-400' :
                  mod.legalStatus === 'Conditionally Legal' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {mod.legalStatus}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-neutral-950 p-5 border border-neutral-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
              Diagnostic Mod Report
            </span>
            <div className="mt-1 text-2xl font-bold text-white font-display">
              {active.name}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 py-3 border-y border-neutral-800">
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Street Legality</span>
                <span className={`text-sm font-bold flex items-center gap-1.5 ${
                  active.legalStatus === 'Street Legal' ? 'text-emerald-400' :
                  active.legalStatus === 'Conditionally Legal' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {active.legalStatus}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block">Performance ROI</span>
                <span className="text-sm font-bold text-white">{active.roiRating}</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-neutral-300 leading-relaxed">
              {active.notes}
            </p>
          </div>

          <div className="mt-4 rounded bg-neutral-900 p-2.5 text-[11px] text-neutral-400 border border-neutral-800">
            <strong>MotoGuide Tech Advice:</strong> Always retain all original OEM factory components in labeled bins. When trading or selling your motorcycle, returning it to factory stock increases resale desirability.
          </div>
        </div>
      </div>
    </div>
  );
};
