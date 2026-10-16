import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Article } from '../types/article';
import { ArticleImage } from './ArticleImage';
import { getArticleImageConfig } from '../config/articleImages';

interface ArticleCardProps {
  article: Article;
  onSelect: (path: string) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  featured = false
}) => {
  const imageConfig = getArticleImageConfig(article.slug);

  return (
    <article
      onClick={() => onSelect(article.path)}
      className={`group cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/90 flex flex-col justify-between ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div>
        {/* Image Frame with fallback */}
        <div className="relative mb-4 overflow-hidden rounded-lg bg-neutral-950">
          <ArticleImage
            src={article.heroImage}
            alt={article.imageAlt}
            filename={imageConfig?.filename}
            category={article.category}
            aspectRatioClass="aspect-[16/10]"
            width={400}
            height={250}
            imageClassName="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Clean unboxed metadata with typographic separators - NO PILLS */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
          <span className="font-semibold text-red-500 uppercase tracking-wider text-[11px]">
            {article.category}
          </span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>{article.readTime}</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>{article.publishedDate}</span>
        </div>

        {/* Balanced Headline */}
        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors font-display tracking-tight leading-snug">
          {article.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs leading-relaxed text-neutral-400 line-clamp-2">
          {article.metaDescription}
        </p>
      </div>

      {/* Footer of Card with descriptive affordance */}
      <div className="mt-4 flex items-center justify-between border-t border-neutral-800/80 pt-3 text-xs text-neutral-400">
        <span>By {article.author.name}</span>
        <span
          className="flex items-center gap-1 font-semibold text-red-500 group-hover:translate-x-0.5 transition-transform"
          aria-label={`Read complete guide: ${article.title}`}
        >
          <span>Read {article.category}</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </article>
  );
};
