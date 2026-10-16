import React, { useState } from 'react';
import { 
  Compass, 
  Flame, 
  Wrench, 
  ShieldCheck, 
  Gauge, 
  Shield, 
  GitCompare, 
  Sliders, 
  Luggage, 
  Zap,
  Image as ImageIcon
} from 'lucide-react';

interface ArticleImageProps {
  src: string;
  alt: string;
  filename?: string;
  category?: string;
  aspectRatioClass?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  src,
  alt,
  filename,
  category = 'Motorcycle',
  aspectRatioClass = 'aspect-[16/10]',
  priority = false,
  className = '',
  imageClassName = '',
  width,
  height
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Derive category icon for fallback placeholder
  const getCategoryIcon = () => {
    switch (category.toLowerCase()) {
      case 'buying guide':
        return <Compass className="h-8 w-8 text-red-500" />;
      case 'sports bikes':
        return <Flame className="h-8 w-8 text-red-500" />;
      case 'maintenance':
        return <Wrench className="h-8 w-8 text-red-500" />;
      case 'safety':
        return <ShieldCheck className="h-8 w-8 text-red-500" />;
      case 'efficiency':
        return <Gauge className="h-8 w-8 text-red-500" />;
      case 'gear':
        return <Shield className="h-8 w-8 text-red-500" />;
      case 'comparison':
        return <GitCompare className="h-8 w-8 text-red-500" />;
      case 'customization':
        return <Sliders className="h-8 w-8 text-red-500" />;
      case 'touring':
        return <Luggage className="h-8 w-8 text-red-500" />;
      case 'electric':
        return <Zap className="h-8 w-8 text-red-500" />;
      default:
        return <ImageIcon className="h-8 w-8 text-red-500" />;
    }
  };

  const displayName = filename || (src.includes('/') ? src.split('/').pop() : src);

  return (
    <div
      className={`relative overflow-hidden bg-neutral-950 ${aspectRatioClass} ${className}`}
    >
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            width={width}
            height={height}
            className={`h-full w-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } ${imageClassName}`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 animate-pulse">
              <span className="sr-only">Loading image...</span>
            </div>
          )}
        </>
      ) : (
        /* High-Grade Automotive Editorial Fallback (Zero Broken Icons, Zero Layout Shift) */
        <div className="absolute inset-0 flex flex-col justify-between p-5 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/80">
          {/* Subtle Speed & Telemetry Grid Background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Top Row: Category & Brand */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
              {category}
            </span>
            <span className="font-display text-xs font-bold tracking-wider text-neutral-600 uppercase">
              MotoGuide · Editorial
            </span>
          </div>

          {/* Center Graphic: Technical Icon */}
          <div className="relative z-10 flex flex-col items-center justify-center py-2 text-center">
            <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/90 shadow-inner">
              {getCategoryIcon()}
            </div>
            <p className="max-w-[85%] text-xs font-medium text-neutral-300 line-clamp-1">
              {alt}
            </p>
          </div>

          {/* Bottom Row: Expected Filename Slot */}
          <div className="relative z-10 flex items-center justify-between border-t border-neutral-800/60 pt-2 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1 font-mono text-neutral-400 truncate max-w-[80%]">
              <ImageIcon className="h-3 w-3 text-red-500 shrink-0" />
              <span>public/images/{displayName}</span>
            </span>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 shrink-0">
              Production Ready
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
