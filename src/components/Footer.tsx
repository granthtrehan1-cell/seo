import React from 'react';
import { ARTICLES } from '../data/articles';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-1">
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-black tracking-wider text-white font-display text-left cursor-pointer"
            >
              MOTO<span className="text-red-600">GUIDE</span>
            </button>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400">
              The premier technical publication for motorcycle buyers, road racers, urban commuters, and long-distance adventure riders.
            </p>
            <div className="mt-4 text-[11px] text-neutral-500">
              Tested on track and open highway. Independent editorial standards.
            </div>
          </div>

          {/* Col 2: Buying & Performance Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Buying & Performance
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/articles/best-bikes-for-beginners/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Best Bikes for Beginners
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/best-sports-bikes/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Best Sports Bikes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/commuter-vs-sports-bikes/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Commuter vs. Sports Bikes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/electric-bikes-vs-petrol-bikes/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Electric vs. Petrol Bikes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/bike-modification-guide/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bike Modification Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Maintenance & Safety Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Maintenance & Safety
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/articles/bike-maintenance-tips/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bike Maintenance Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/motorcycle-safety-tips/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Motorcycle Safety Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/best-helmets-for-bikers/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Best Helmets for Bikers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/bike-mileage-guide/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bike Mileage & Economy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/long-distance-bike-riding/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Long-Distance Touring Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              MotoGuide Editorial
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/about/')}
                  className="hover:text-white transition-colors text-left"
                >
                  About MotoGuide & Editorial Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Technical Staff
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/articles/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Complete 10-Article Directory
                </button>
              </li>
            </ul>
            <div className="mt-4 rounded border border-neutral-800 bg-neutral-900 p-3 text-[11px] text-neutral-400">
              Safety First: Always wear full ECE/DOT-approved gear, inspect tire pressures, and ride sober within your training limits.
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 MotoGuide. All rights reserved. Authoritative motorcycle journalism & technical guides.</p>
          <div className="flex gap-6">
            <button onClick={() => navigate('/about/')} className="hover:text-neutral-400">
              Editorial Policy
            </button>
            <button onClick={() => navigate('/contact/')} className="hover:text-neutral-400">
              Corrections & Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
