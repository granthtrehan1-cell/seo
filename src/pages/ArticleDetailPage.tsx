import React from 'react';
import { Article } from '../types/article';
import { ARTICLES } from '../data/articles';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DirectAnswerBox } from '../components/DirectAnswerBox';
import { FAQAccordion } from '../components/FAQAccordion';
import { ArticleCard } from '../components/ArticleCard';
import { ArticleImage } from '../components/ArticleImage';
import { getArticleImageConfig } from '../config/articleImages';
import { Clock, Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

// Specialized interactive tools
import { MileageCalculator } from '../components/tools/MileageCalculator';
import { MaintenanceChecklist } from '../components/tools/MaintenanceChecklist';
import { HelmetSizingGuide } from '../components/tools/HelmetSizingGuide';
import { BrakingDistanceCalc } from '../components/tools/BrakingDistanceCalc';
import { TCOCalculator } from '../components/tools/TCOCalculator';
import { BeginnerErgoQuiz } from '../components/tools/BeginnerErgoQuiz';
import { ModComplianceChecker } from '../components/tools/ModComplianceChecker';
import { TouringPrepChecklist } from '../components/tools/TouringPrepChecklist';
import { SportsSpecAnalyzer } from '../components/tools/SportsSpecAnalyzer';
import { CommuterMatrixTool } from '../components/tools/CommuterMatrixTool';

interface ArticleDetailPageProps {
  article: Article;
  navigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ article, navigate }) => {
  const imageConfig = getArticleImageConfig(article.slug);
  const relatedArticles = ARTICLES.filter((a) =>
    article.relatedSlugs?.includes(a.slug)
  ).slice(0, 3);

  const renderTool = () => {
    switch (article.interactiveTool) {
      case 'mileage_calc':
        return <MileageCalculator />;
      case 'maintenance_checklist':
        return <MaintenanceChecklist />;
      case 'helmet_finder':
        return <HelmetSizingGuide />;
      case 'braking_calc':
        return <BrakingDistanceCalc />;
      case 'tco_calc':
        return <TCOCalculator />;
      case 'beginner_fit':
        return <BeginnerErgoQuiz />;
      case 'mod_checker':
        return <ModComplianceChecker />;
      case 'touring_prep':
        return <TouringPrepChecklist />;
      case 'sports_spec':
        return <SportsSpecAnalyzer />;
      case 'commuter_matrix':
        return <CommuterMatrixTool />;
      default:
        return null;
    }
  };

  return (
    <div className="py-10">
      <SEOHead
        title={article.metaTitle}
        description={article.metaDescription}
        canonicalPath={article.path}
        article={article}
        schemaType="Article"
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Articles', path: '/articles/' },
            { label: article.category, path: '/articles/' },
            { label: article.title }
          ]}
          navigate={navigate}
        />

        {/* Back Link */}
        <button
          onClick={() => navigate('/articles/')}
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all guides
        </button>

        {/* Article Header */}
        <header className="mb-8">
          {/* Clean unboxed metadata with typographic separators - NO PILLS */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
            <span className="font-bold text-red-500 uppercase tracking-wider text-[11px]">
              {article.category}
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {article.readTime}
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Updated {article.updatedDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-[1.1] text-balance">
            {article.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-300">
            {article.metaDescription}
          </p>

          {/* Author Byline */}
          <div className="mt-6 flex items-center justify-between border-y border-neutral-800 py-3 text-xs text-neutral-400">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white font-bold">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-white">{article.author.name}</div>
                <div className="text-[11px] text-neutral-500">{article.author.role}</div>
              </div>
            </div>
            <div className="text-right text-[11px] text-neutral-500">
              Reviewed by MotoGuide Editorial Board
            </div>
          </div>
        </header>

        {/* Hero Visual Asset */}
        <figure className="mb-8 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
          <ArticleImage
            src={article.heroImage}
            alt={article.imageAlt}
            filename={imageConfig?.filename}
            category={article.category}
            aspectRatioClass="aspect-[16/9]"
            priority={true}
            width={1200}
            height={675}
          />
          {article.imageCaption && (
            <figcaption className="p-3 text-[11px] text-neutral-400 bg-neutral-950 border-t border-neutral-800/80">
              {article.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Answer Engine Optimization (AEO) Callout Box */}
        <DirectAnswerBox
          question={article.directAnswer.question}
          answer={article.directAnswer.answer}
          keyTakeaways={article.keyTakeaways}
        />

        {/* Main Article Content Sections */}
        <div className="prose prose-invert max-w-none space-y-8 text-neutral-300">
          {article.sections.map((section) => (
            <section key={section.id} id={section.id} className="pt-2">
              <h2 className="text-2xl font-bold text-white font-display tracking-tight mb-4">
                {section.heading}
              </h2>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-300">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {section.bulletPoints && (
                <ul className="mt-4 list-disc pl-5 space-y-1.5 text-sm text-neutral-300">
                  {section.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx}>{bp}</li>
                  ))}
                </ul>
              )}

              {/* In-content Comparison Table */}
              {section.table && (
                <div className="my-6 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-neutral-800 bg-neutral-900/80 text-white font-display">
                        <th className="p-3 font-semibold">{section.table.headerA || 'Parameter'}</th>
                        <th className="p-3 font-semibold">{section.table.headerB || 'Technical Specification'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-900">
                      {section.table.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={row.highlight ? 'bg-red-950/20 text-white' : 'hover:bg-neutral-900/40'}
                        >
                          <td className="p-3 font-medium text-neutral-200">{row.label}</td>
                          <td className="p-3 text-neutral-400 tabular-nums">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* In-content Callout */}
              {section.callout && (
                <div
                  className={`my-6 rounded-lg p-4 border text-xs leading-relaxed ${
                    section.callout.type === 'warning'
                      ? 'border-amber-900/60 bg-amber-950/20 text-amber-200'
                      : 'border-neutral-800 bg-neutral-900/80 text-neutral-300'
                  }`}
                >
                  <strong className="block font-bold text-white mb-1 uppercase tracking-wider text-[11px]">
                    {section.callout.title}
                  </strong>
                  {section.callout.text}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Embedded Interactive Tool */}
        {renderTool()}

        {/* Author Bio Box */}
        <section className="my-10 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-red-500 font-bold text-xl">
            {article.author.name.charAt(0)}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-500">
              Author & Senior Road Tester
            </div>
            <h3 className="text-lg font-bold text-white font-display mt-0.5">
              {article.author.name}
            </h3>
            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
              {article.author.bio}
            </p>
          </div>
        </section>

        {/* Structured FAQ Section */}
        <FAQAccordion faqs={article.faqs} />

        {/* Related Articles Cross-linking */}
        {relatedArticles.length > 0 && (
          <section className="mt-12 border-t border-neutral-800 pt-8">
            <h2 className="text-2xl font-bold text-white font-display tracking-tight mb-6">
              RELATED TECHNICAL GUIDES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedArticles.map((rel) => (
                <ArticleCard
                  key={rel.id}
                  article={rel}
                  onSelect={(path) => navigate(path)}
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};
