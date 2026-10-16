import React, { useEffect } from 'react';
import { Article } from '../types/article';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  article?: Article;
  schemaType?: 'WebSite' | 'Article' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  article,
  schemaType = 'WebSite'
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', window.location.origin + canonicalPath, true);
    const resolvedImageUrl = window.location.origin + (article?.heroImage || '/images/motoguide-motorcycle-hero.webp');
    setMeta('og:image', resolvedImageUrl, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', resolvedImageUrl);

    // 3. Set Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + canonicalPath);

    // 4. Inject Dynamic Schema.org JSON-LD
    const scriptId = 'motoguide-dynamic-ldjson';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    if (article) {
      // Build Article + Breadcrumb + FAQPage Graph
      const jsonLdGraph = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            '@id': `${window.location.origin}${article.path}#article`,
            isPartOf: {
              '@type': 'WebSite',
              '@id': `${window.location.origin}/#website`,
              name: 'MotoGuide',
              url: window.location.origin
            },
            headline: article.title,
            description: article.metaDescription,
            image: [resolvedImageUrl],
            datePublished: '2026-10-01T08:00:00+00:00',
            dateModified: '2026-10-14T10:00:00+00:00',
            author: {
              '@type': 'Person',
              name: article.author.name,
              jobTitle: article.author.role
            },
            publisher: {
              '@type': 'Organization',
              name: 'MotoGuide',
              url: window.location.origin
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${window.location.origin}${article.path}`
            }
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${window.location.origin}/`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Articles',
                item: `${window.location.origin}/articles/`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: `${window.location.origin}${article.path}`
              }
            ]
          },
          ...(article.faqs && article.faqs.length > 0
            ? [
                {
                  '@type': 'FAQPage',
                  mainEntity: article.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.answer
                    }
                  }))
                }
              ]
            : [])
        ]
      };
      script.textContent = JSON.stringify(jsonLdGraph);
    } else {
      // Collection / General Schema
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        name: title,
        description: description,
        url: window.location.origin + canonicalPath
      };
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      // clean up if necessary
    };
  }, [title, description, canonicalPath, article, schemaType]);

  return null;
};
