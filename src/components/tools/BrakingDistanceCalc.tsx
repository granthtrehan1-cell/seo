import React, { useState } from 'react';
import { AlertTriangle, Disc } from 'lucide-react';

export const BrakingDistanceCalc: React.FC = () => {
  const [speedMph, setSpeedMph] = useState<number>(60);
  const [roadSurface, setRoadSurface] = useState<'dry' | 'wet' | 'gravel'>('dry');
  const [reactionTimeSec, setReactionTimeSec] = useState<number>(1.0);

  // Speed in ft/s = speed in mph * 1.46667
  const speedFps = speedMph * 1.46667;
  const reactionDistFt = speedFps * reactionTimeSec;

  // Coefficient of friction (mu)
  const muValues = {
    dry: 0.8,
    wet: 0.45,
    gravel: 0.28
  };

  const mu = muValues[roadSurface];
  // Braking distance = v^2 / (2 * g * mu) where g = 32.174 ft/s^2
  const brakingDistFt = (speedFps * speedFps) / (2 * 32.174 * mu);
  const totalStoppingDistFt = reactionDistFt + brakingDistFt;

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 backdrop-blur">
      <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
          <Disc className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide font-display">
            Interactive Motorcycle Stopping Distance Simulator
          </h3>
          <p className="text-xs text-neutral-400">
            See how speed, human perception reaction time, and surface friction dictate stopping distance.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Riding Speed: <span className="text-white font-bold tabular-nums">{speedMph} MPH</span>
            </label>
            <span className="text-xs text-neutral-500 tabular-nums">
              {Math.round(speedMph * 1.609)} km/h
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="120"
            step="5"
            value={speedMph}
            onChange={(e) => setSpeedMph(Number(e.target.value))}
            className="mt-3 w-full accent-red-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
            Road Surface Condition
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'dry', label: 'Dry Asphalt' },
              { id: 'wet', label: 'Wet Rain' },
              { id: 'gravel', label: 'Gravel / Slick' }
            ].map((surface) => (
              <button
                key={surface.id}
                onClick={() => setRoadSurface(surface.id as any)}
                className={`py-2 px-1 rounded-md text-xs font-medium border text-center transition ${
                  roadSurface === surface.id
                    ? 'border-red-600 bg-red-950/40 text-white'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                {surface.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Rider Reaction Time: <span className="text-white font-bold tabular-nums">{reactionTimeSec.toFixed(1)}s</span>
            </label>
          </div>
          <input
            type="range"
            min="0.5"
            max="2.0"
            step="0.1"
            value={reactionTimeSec}
            onChange={(e) => setReactionTimeSec(Number(e.target.value))}
            className="mt-3 w-full accent-red-600"
          />
          <span className="mt-1 block text-[11px] text-neutral-500">
            Average alert rider is ~1.0s; distracted is ~1.8s+
          </span>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="rounded-lg bg-neutral-950 p-3.5 border border-neutral-800">
            <span className="text-xs text-neutral-400">Reaction Distance (No Brakes Yet)</span>
            <div className="text-2xl font-bold text-amber-400 tabular-nums font-display">
              {reactionDistFt.toFixed(0)} ft
            </div>
            <span className="text-[11px] text-neutral-500">
              {(reactionDistFt * 0.3048).toFixed(1)} meters traveled while reacting
            </span>
          </div>

          <div className="rounded-lg bg-neutral-950 p-3.5 border border-neutral-800">
            <span className="text-xs text-neutral-400">Mechanical Braking Distance</span>
            <div className="text-2xl font-bold text-red-500 tabular-nums font-display">
              {brakingDistFt.toFixed(0)} ft
            </div>
            <span className="text-[11px] text-neutral-500">
              {(brakingDistFt * 0.3048).toFixed(1)} meters of tire-to-ground deceleration
            </span>
          </div>

          <div className="rounded-lg bg-red-950/30 p-3.5 border border-red-900/40">
            <span className="text-xs text-red-300 font-semibold">Total Emergency Stopping Distance</span>
            <div className="text-2xl font-bold text-white tabular-nums font-display">
              {totalStoppingDistFt.toFixed(0)} ft
            </div>
            <span className="text-[11px] text-red-300/80">
              ~{(totalStoppingDistFt / 15).toFixed(1)} car lengths needed to stop!
            </span>
          </div>
        </div>

        {/* Visual Bar representation */}
        <div className="mt-3">
          <div className="flex h-3 w-full overflow-hidden rounded-full bg-neutral-950">
            <div
              className="bg-amber-500"
              style={{ width: `${(reactionDistFt / totalStoppingDistFt) * 100}%` }}
              title="Perception & Reaction Distance"
            />
            <div
              className="bg-red-600"
              style={{ width: `${(brakingDistFt / totalStoppingDistFt) * 100}%` }}
              title="Braking Distance"
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span>Reaction ({((reactionDistFt / totalStoppingDistFt) * 100).toFixed(0)}%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              <span>Threshold Braking ({((brakingDistFt / totalStoppingDistFt) * 100).toFixed(0)}%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
