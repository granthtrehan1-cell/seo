import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'All Articles', path: '/articles/' },
    { label: 'Buying Guide', path: '/articles/best-bikes-for-beginners/' },
    { label: 'Maintenance', path: '/articles/bike-maintenance-tips/' },
    { label: 'Safety', path: '/articles/motorcycle-safety-tips/' },
    { label: 'About', path: '/about/' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element brand wordmark */}
        <button
          onClick={() => handleNav('/')}
          className="text-2xl font-black tracking-wider text-white whitespace-nowrap shrink-0 font-display flex items-center gap-1 group text-left cursor-pointer"
        >
          <span>MOTO</span>
          <span className="text-red-600 group-hover:text-red-500 transition-colors">GUIDE</span>
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`whitespace-nowrap shrink-0 transition-colors hover:text-white cursor-pointer ${
                  isActive ? 'text-red-500 font-semibold' : 'text-neutral-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNav('/contact/')}
            className="rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white uppercase tracking-wider hover:bg-red-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact Experts
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPath === link.path ? 'text-red-500 font-semibold' : 'text-neutral-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => handleNav('/contact/')}
              className="w-full rounded-lg bg-red-600 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white"
            >
              Contact Experts
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
