export interface Author {
  name: string;
  role: string;
  avatarUrl?: string;
  bio: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonTableRow {
  parameter: string;
  valueA: string;
  valueB: string;
  notes?: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  content: string[]; // Paragraphs
  bulletPoints?: string[];
  callout?: {
    title: string;
    text: string;
    type?: 'tip' | 'warning' | 'spec';
  };
  table?: {
    headerA?: string;
    headerB?: string;
    rows: { label: string; detail: string; highlight?: boolean }[];
  };
}

export interface Article {
  id: string;
  slug: string;
  path: string; // e.g. "/articles/best-bikes-for-beginners/"
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Buying Guide' | 'Sports Bikes' | 'Maintenance' | 'Safety' | 'Efficiency' | 'Gear' | 'Comparison' | 'Customization' | 'Touring' | 'Electric';
  primaryKeyword: string;
  secondaryKeywords: [string, string];
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  author: Author;
  heroImage: string;
  imageAlt: string;
  imageCaption: string;
  directAnswer: {
    question: string;
    answer: string;
  };
  keyTakeaways: string[];
  sections: ArticleSection[];
  faqs: FAQItem[];
  interactiveTool?: 'beginner_fit' | 'mileage_calc' | 'maintenance_checklist' | 'helmet_finder' | 'braking_calc' | 'tco_calc' | 'touring_prep' | 'sports_spec' | 'mod_checker' | 'commuter_matrix';
  relatedSlugs: string[];
}
