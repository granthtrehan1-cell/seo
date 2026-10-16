import React, { useState, useEffect } from 'react';
import { ARTICLES } from './data/articles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SEOHead } from './components/SEOHead';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [currentSearch, setCurrentSearch] = useState<string>(() => {
    return window.location.search || '';
  });

  // Listen to browser forward/backward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setCurrentSearch(window.location.search || '');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (pathWithSearch: string) => {
    const [path, search] = pathWithSearch.split('?');
    // Normalize path to have trailing slash if not root
    const normalizedPath = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
    const fullUrl = search ? `${normalizedPath}?${search}` : normalizedPath;

    window.history.pushState({}, '', fullUrl);
    setCurrentPath(normalizedPath);
    setCurrentSearch(search ? `?${search}` : '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Normalize current path for matching
  const normalizedPath = currentPath === '/' ? '/' : currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

  // Check if current route matches one of the 10 articles
  const matchedArticle = ARTICLES.find((a) => a.path === normalizedPath);

  // Render appropriate page view
  const renderContent = () => {
    if (normalizedPath === '/') {
      return <HomePage navigate={navigate} />;
    }

    if (normalizedPath === '/about/') {
      return <AboutPage navigate={navigate} />;
    }

    if (normalizedPath === '/contact/') {
      return <ContactPage navigate={navigate} />;
    }

    if (normalizedPath === '/articles/') {
      const urlParams = new URLSearchParams(currentSearch);
      const q = urlParams.get('q') || '';
      return <ArticlesPage navigate={navigate} initialQuery={q} />;
    }

    if (matchedArticle) {
      return <ArticleDetailPage article={matchedArticle} navigate={navigate} />;
    }

    // 404 Fallback
    return (
      <div className="py-24 text-center">
        <SEOHead
          title="Page Not Found | MotoGuide"
          description="The requested motorcycle guide or page could not be located."
          canonicalPath="/404"
        />
        <div className="mx-auto max-w-md px-4">
          <div className="text-6xl font-black text-red-600 font-display">404</div>
          <h1 className="mt-2 text-2xl font-bold text-white font-display">
            TRACK OFF-COURSE / PAGE NOT FOUND
          </h1>
          <p className="mt-2 text-xs text-neutral-400">
            The guide or link you followed is not in our technical directory.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="rounded-lg bg-red-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition cursor-pointer"
            >
              Return Home
            </button>
            <button
              onClick={() => navigate('/articles/')}
              className="rounded-lg border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-xs font-medium text-neutral-300 hover:text-white transition cursor-pointer"
            >
              View All 10 Guides
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100 font-sans selection:bg-red-600 selection:text-white">
      <Header currentPath={normalizedPath} navigate={navigate} />
      <main className="flex-1">{renderContent()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
