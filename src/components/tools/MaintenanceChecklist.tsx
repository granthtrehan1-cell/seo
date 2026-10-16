import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, RotateCcw, Wrench } from 'lucide-react';

interface ChecklistItem {
  id: string;
  category: 'T-CLOCS' | 'Interval Care' | 'Chain & Drivetrain';
  title: string;
  detail: string;
}

const DEFAULT_ITEMS: ChecklistItem[] = [
  { id: 'tires-psi', category: 'T-CLOCS', title: 'Tires Cold Pressure & Tread', detail: 'Verify swingarm label PSI and inspect tread for foreign nails or glass.' },
  { id: 'controls-throttle', category: 'T-CLOCS', title: 'Throttle & Clutch Return', detail: 'Confirm smooth, snap-back throttle return at both left and right lock.' },
  { id: 'lights-brake', category: 'T-CLOCS', title: 'Front & Rear Brake Actuation', detail: 'Check that brake light illuminates from both lever and foot pedal.' },
  { id: 'oil-level', category: 'T-CLOCS', title: 'Engine Oil Sight Glass', detail: 'Level ground inspection: oil meniscus must sit between MIN and MAX marks.' },
  { id: 'chain-slack', category: 'Chain & Drivetrain', title: 'Chain Tension (25-30mm slack)', detail: 'Measure vertical movement midway between front and rear sprockets.' },
  { id: 'chain-lube', category: 'Chain & Drivetrain', title: 'Chain Lubrication', detail: 'Warm chain lubricated on inside link run with O-ring safe formulation.' },
  { id: 'brake-pads', category: 'Interval Care', title: 'Brake Pad Thickness (>1.5mm)', detail: 'Ensure friction grooves are visible and rotor surface is free of deep grooves.' },
  { id: 'brake-fluid', category: 'Interval Care', title: 'Brake Fluid Color & Moisture', detail: 'Fluid must be pale amber; dark coffee color indicates water contamination.' },
  { id: 'fork-seals', category: 'Interval Care', title: 'Front Fork Stanchions Dry', detail: 'Inspect chrome stanchions for any hydraulic oil weeping past seals.' }
];

export const MaintenanceChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('motoguide_maint_checklist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('motoguide_maint_checklist', JSON.stringify(checkedIds));
    } catch {
      // ignore
    }
  }, [checkedIds]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetAll = () => {
    setCheckedIds([]);
  };

  const progress = Math.round((checkedIds.length / DEFAULT_ITEMS.length) * 100);

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
            <Wrench className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide font-display">
              Interactive Pre-Ride & Service Checklist
            </h3>
            <p className="text-xs text-neutral-400">
              Interactive safety walk-around. Saves your progress locally in your browser.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-neutral-400">Bike Readiness</span>
            <div className="text-lg font-bold text-white tabular-nums">{progress}%</div>
          </div>
          <button
            onClick={resetAll}
            className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs text-neutral-400 hover:text-white hover:border-neutral-700 transition"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-neutral-950">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        {DEFAULT_ITEMS.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition ${
                isChecked
                  ? 'border-red-900/60 bg-red-950/20'
                  : 'border-neutral-800 bg-neutral-950/40 hover:border-neutral-700'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-red-500 focus:outline-none"
                aria-label={isChecked ? `Uncheck ${item.title}` : `Check ${item.title}`}
              >
                {isChecked ? (
                  <CheckCircle2 className="h-5 w-5 fill-red-600 text-neutral-950" />
                ) : (
                  <Circle className="h-5 w-5 text-neutral-600" />
                )}
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold ${isChecked ? 'text-neutral-200 line-through opacity-80' : 'text-white'}`}>
                    {item.title}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-neutral-400">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
