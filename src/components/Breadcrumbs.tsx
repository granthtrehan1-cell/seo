import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  navigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, navigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-neutral-400">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
        aria-label="Home"
      >
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="h-3 w-3 text-neutral-600" />
            {item.path && !isLast ? (
              <button
                onClick={() => navigate(item.path!)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-neutral-200 font-medium truncate max-w-[280px] sm:max-w-md">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
