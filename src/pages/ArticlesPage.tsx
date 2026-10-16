import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ArticlesPageProps {
  navigate: (path: string) => void;
  initialQuery?: string;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ navigate, initialQuery = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [sortBy, setSortBy] = useState<'latest' | 'readTime' | 'title'>('latest');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.metaDescription.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.keyTakeaways.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'readTime') {
        const timeA = parseInt(a.readTime, 10);
        const timeB = parseInt(b.readTime, 10);
        return timeA - timeB;
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return parseInt(a.id, 10) - parseInt(b.id, 10);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="py-10">
      <SEOHead
        title="Motorcycle Articles & In-Depth Technical Reviews | MotoGuide"
        description="Browse all 10 authoritative motorcycle articles and buyer guides. Filter by maintenance, performance, safety, touring, and electric motorcycle categories."
        canonicalPath="/articles/"
        schemaType="CollectionPage"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Articles' }]}
          navigate={navigate}
        />

        {/* Page Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500">
            MotoGuide Technical Library
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-1">
            ALL MOTORCYCLE GUIDES & REVIEWS
          </h1>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
            Explore all 10 in-depth articles written by certified MSF instructors and test engineers.
          </p>
        </div>

        {/* Search, Filter Tabs & Sort Controls */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
              <input
                type="text"
                placeholder="Search across all 10 articles (e.g. helmets, ABS, torque, tires, chain)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-950 py-2 pl-9 pr-4 text-xs text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 shrink-0">
              <SlidersHorizontal className="h-4 w-4 text-neutral-500" />
              <span className="font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-lg border border-neutral-800 bg-neutral-950 px-2.5 py-1.5 text-xs text-white focus:border-red-600 focus:outline-none"
              >
                <option value="latest">Curated Order</option>
                <option value="readTime">Read Time (Short to Long)</option>
                <option value="title">Alphabetical (A - Z)</option>
              </select>
            </div>
          </div>

          {/* Category Tabs (Allowed interactive filter controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white font-semibold'
                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800/80 pb-3">
          <span>
            Showing <strong className="text-white">{filteredArticles.length}</strong> of{' '}
            <strong className="text-white">{ARTICLES.length}</strong> main guides
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-red-500 hover:underline cursor-pointer"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={(path) => navigate(path)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-12 text-center">
            <p className="text-base text-neutral-300">
              No articles found matching &quot;{searchQuery}&quot;.
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Try searching for &quot;beginner&quot;, &quot;chain&quot;, &quot;helmet&quot;, or &quot;mileage&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
