import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Wrench, Zap, Compass, Flame, CheckCircle, Search } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { HOMEPAGE_HERO_IMAGE_CONFIG } from '../config/articleImages';
import { ArticleCard } from '../components/ArticleCard';
import { ArticleImage } from '../components/ArticleImage';
import { MileageCalculator } from '../components/tools/MileageCalculator';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticles = ARTICLES.slice(0, 4);
  const remainingArticles = ARTICLES.slice(4);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/articles/?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/articles/');
    }
  };

  return (
    <div>
      <SEOHead
        title="MotoGuide: Motorcycle Guides, Buying Advice & Maintenance"
        description="Explore authoritative motorcycle guides, buying advice, and maintenance tips. Read track-tested reviews, gear analyses, and safety tutorials on MotoGuide."
        canonicalPath="/"
        schemaType="WebSite"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-neutral-800 bg-neutral-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Proposition */}
            <div className="lg:col-span-7">
              {/* Quiet editorial kicker - NO PILLS */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-3">
                <span>Independent Automotive Journalism</span>
                <span aria-hidden="true">·</span>
                <span>Track & Highway Tested</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.05] text-balance">
                PRECISION MOTORCYCLE <span className="text-red-600">GUIDES</span> & BUYING INTELLIGENCE.
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-300 max-w-2xl">
                Zero commercial fluff. We deliver empirical motorcycle buying advice, track-tested sportbike telemetry, DIY service intervals, and defensive street survival strategies.
              </p>

              {/* Action buttons & search */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => navigate('/articles/')}
                  className="rounded-lg bg-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-950/40"
                >
                  <span>Explore All 10 Guides</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => navigate('/articles/best-bikes-for-beginners/')}
                  className="rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-3.5 text-sm font-medium text-neutral-200 hover:text-white hover:border-neutral-600 transition-colors flex items-center justify-center cursor-pointer"
                >
                  Beginner Buyer’s Guide
                </button>
              </div>

              {/* Quick Search */}
              <form onSubmit={handleSearchSubmit} className="mt-6 flex max-w-md items-center rounded-lg border border-neutral-800 bg-neutral-900/90 px-3 py-1.5 focus-within:border-red-600">
                <Search className="h-4 w-4 text-neutral-500 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search helmets, mileage, beginner bikes, torque..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-xs text-red-500 font-semibold px-2 py-1 hover:text-red-400"
                >
                  Search
                </button>
              </form>

              {/* Trust proof row adjacent to claim */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-neutral-800/80 pt-6">
                <div>
                  <div className="text-2xl font-black text-white font-display tabular-nums">100%</div>
                  <div className="text-xs text-neutral-400">Independent Testing</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-display tabular-nums">10</div>
                  <div className="text-xs text-neutral-400">In-Depth Technical Guides</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-display tabular-nums">50K+</div>
                  <div className="text-xs text-neutral-400">Track & Tour Miles</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
                <ArticleImage
                  src={HOMEPAGE_HERO_IMAGE_CONFIG.image}
                  alt={HOMEPAGE_HERO_IMAGE_CONFIG.imageAlt}
                  filename={HOMEPAGE_HERO_IMAGE_CONFIG.filename}
                  category="Sports Bikes"
                  aspectRatioClass="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                  priority={true}
                  width={800}
                  height={600}
                  imageClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-neutral-800/80 bg-neutral-950/90 p-4 backdrop-blur-md">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">
                    Featured Benchmark
                  </span>
                  <div className="text-base font-bold text-white font-display mt-0.5">
                    Sports Bike Dynamics: V4 Desmosedici vs Middleweight Twins
                  </div>
                  <button
                    onClick={() => navigate('/articles/best-sports-bikes/')}
                    aria-label="Read sports bikes track review and telemetry"
                    className="mt-2 text-xs font-semibold text-neutral-300 hover:text-red-400 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read track review</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bento Grid: Core Motorcycle Domains */}
      <section className="py-16 border-b border-neutral-800 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                Core Editorial Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mt-1">
                MASTER EVERY ASPECT OF RIDING
              </h2>
            </div>
            <button
              onClick={() => navigate('/articles/')}
              className="text-xs font-semibold text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              Browse all 10 articles <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Buying & Ergonomics */}
            <div
              onClick={() => navigate('/articles/best-bikes-for-beginners/')}
              className="group cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 hover:border-neutral-700 hover:bg-neutral-900 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-red-500 mb-4">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                  01. Beginner Ergonomics & Buying
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  Seat height, standover inseam, displacement thresholds, and why 400cc twins make superior first bikes over 600cc supersports.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-red-500">
                Read Buying Guide <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Bento Card 2: Maintenance Protocol */}
            <div
              onClick={() => navigate('/articles/bike-maintenance-tips/')}
              className="group cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 hover:border-neutral-700 hover:bg-neutral-900 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-red-500 mb-4">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                  02. Essential DIY Maintenance
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  Master the MSF T-CLOCS pre-ride inspection, 300-mile chain tensioning & lube cycles, and brake fluid hygroscopic testing.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-red-500">
                Read Maintenance Tips <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Bento Card 3: Safety & Defense */}
            <div
              onClick={() => navigate('/articles/motorcycle-safety-tips/')}
              className="group cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 hover:border-neutral-700 hover:bg-neutral-900 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-red-500 mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                  03. Street Survival & Defensive Lines
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  Left-turning car avoidance, breaking motion camouflage (SMIDSY maneuver), and progressive front-end threshold braking.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-red-500">
                Read Safety Manual <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-16 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                Curated Technical Coverage
              </span>
              <h2 className="text-3xl font-extrabold text-white font-display tracking-tight mt-1">
                FEATURED MOTORCYCLE GUIDES
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={(path) => navigate(path)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Interactive Mileage Calculator Section */}
      <section className="py-16 border-b border-neutral-800 bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-red-500">
              Interactive Efficiency Tool
            </span>
            <h2 className="text-3xl font-extrabold text-white font-display tracking-tight mt-1">
              FUEL CONSUMPTION & COST CALCULATOR
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Test your current setup and find out how maintaining 36 PSI cold tire pressure and aerodynamic tucking can save hundreds annually.
            </p>
          </div>

          <MileageCalculator />
        </div>
      </section>

      {/* Remaining Guides Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-red-500">
              Gear, Performance & Touring
            </span>
            <h2 className="text-3xl font-extrabold text-white font-display tracking-tight mt-1">
              MORE EXPERT GUIDES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remainingArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={(path) => navigate(path)}
              />
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 rounded-xl border border-neutral-800 bg-neutral-900/60 p-8 text-center">
            <h3 className="text-2xl font-bold text-white font-display">
              HAVE A SPECIFIC MOTORCYCLE QUESTION?
            </h3>
            <p className="mt-2 text-xs text-neutral-400 max-w-xl mx-auto">
              Our certified MSF coaches, track instructors, and fluid dynamics engineers answer technical inquiries directly.
            </p>
            <button
              onClick={() => navigate('/contact/')}
              className="mt-5 rounded-lg bg-red-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition cursor-pointer"
            >
              Contact Our Editorial Staff
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
