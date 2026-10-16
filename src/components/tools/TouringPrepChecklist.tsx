import React, { useState } from 'react';
import { Luggage, Check, Sparkles } from 'lucide-react';

export const TouringPrepChecklist: React.FC = () => {
  const [packedItems, setPackedItems] = useState<string[]>(['tire-plug', 'earplugs', 'hydration']);

  const categories = [
    {
      title: 'Pannier Low & Forward (Heavy Spares)',
      items: [
        { id: 'tire-plug', label: 'Tubeless Tire Plug Kit & 12V Mini-Compressor' },
        { id: 'tool-roll', label: 'Metric Allen & Torx Wrenches + Multi-Pliers' },
        { id: 'chain-lube', label: 'Compact Travel Chain Cleaner & Lube Spray' },
        { id: 'cable-repair', label: 'Emergency Clutch/Throttle Cable Solderless Kit' }
      ]
    },
    {
      title: 'Tank Bag & Cockpit (Fast Access)',
      items: [
        { id: 'earplugs', label: 'Filtered Moto Earplugs (24dB SNR)' },
        { id: 'hydration', label: '2L Hydro Bladder with Hands-Free Bite Valve' },
        { id: 'visorkit', label: 'Microfiber Cloth & Visor Spray in Ziploc' },
        { id: 'powerbank', label: 'Weatherproof USB Powerbank + Garmin/Phone Cable' }
      ]
    },
    {
      title: 'Top Duffel & Pillion Rack (Light Bulk)',
      items: [
        { id: 'raingear', label: 'Packable High-Vis Waterproof Over-Jacket & Pants' },
        { id: 'thermal', label: 'Merino Wool Base Layers & Heated Glove Liners' },
        { id: 'firstaid', label: 'Motorcycle Trauma IFAK with Tourniquet' }
      ]
    }
  ];

  const toggle = (id: string) => {
    setPackedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);
  const percentPacked = Math.round((packedItems.length / totalItems) * 100);

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
            <Luggage className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide font-display">
              Long-Distance Tourer Packing & Weight Distribution Planner
            </h3>
            <p className="text-xs text-neutral-400">
              Interactive 500+ mile prep checklist calibrated for low center of gravity.
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs text-neutral-400">Pack Readiness</span>
          <div className="text-lg font-bold text-white tabular-nums">{percentPacked}%</div>
        </div>
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-neutral-950">
        <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${percentPacked}%` }} />
      </div>

      <div className="mt-6 space-y-5">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
              {cat.title}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cat.items.map((item) => {
                const isChecked = packedItems.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggle(item.id)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left text-xs transition ${
                      isChecked
                        ? 'border-red-900/60 bg-red-950/20 text-neutral-200'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span className={`h-4 w-4 rounded flex items-center justify-center shrink-0 border ${
                      isChecked ? 'bg-red-600 border-red-500 text-white' : 'border-neutral-700 bg-neutral-900'
                    }`}>
                      {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                    </span>
                    <span className={isChecked ? 'line-through opacity-80' : ''}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
