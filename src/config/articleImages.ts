export interface ArticleImageEntry {
  slug: string;
  title: string;
  image: string;
  filename: string;
  imageAlt: string;
  aspectRatio: string;
}

export const ARTICLE_IMAGE_CONFIGS: Record<string, ArticleImageEntry> = {
  'best-bikes-for-beginners': {
    slug: 'best-bikes-for-beginners',
    title: 'Best Bikes for Beginners',
    image: '/images/best-bikes-for-beginners.webp',
    filename: 'best-bikes-for-beginners.webp',
    imageAlt: 'Beginner-friendly lightweight twin-cylinder motorcycle with approachable seat height',
    aspectRatio: '16/10'
  },
  'best-sports-bikes': {
    slug: 'best-sports-bikes',
    title: 'Best Sports Bikes',
    image: '/images/best-sports-bikes.webp',
    filename: 'best-sports-bikes.webp',
    imageAlt: 'High-performance aerodynamic superbike on track tarmac with carbon winglets',
    aspectRatio: '16/10'
  },
  'bike-mileage-guide': {
    slug: 'bike-mileage-guide',
    title: 'Bike Mileage Guide',
    image: '/images/bike-mileage-guide.webp',
    filename: 'bike-mileage-guide.webp',
    imageAlt: 'Motorcycle cockpit instrument display showing fuel consumption economy readings',
    aspectRatio: '16/10'
  },
  'bike-maintenance-tips': {
    slug: 'bike-maintenance-tips',
    title: 'Bike Maintenance Tips',
    image: '/images/bike-maintenance-tips.webp',
    filename: 'bike-maintenance-tips.webp',
    imageAlt: 'Motorcycle technician cleaning and lubricating gold O-ring drive chain in workshop',
    aspectRatio: '16/10'
  },
  'motorcycle-safety-tips': {
    slug: 'motorcycle-safety-tips',
    title: 'Motorcycle Safety Tips',
    image: '/images/motorcycle-safety-tips.webp',
    filename: 'motorcycle-safety-tips.webp',
    imageAlt: 'Motorcycle rider wearing high-visibility armored safety jacket executing defensive lane position',
    aspectRatio: '16/10'
  },
  'best-helmets-for-bikers': {
    slug: 'best-helmets-for-bikers',
    title: 'Best Helmets for Bikers',
    image: '/images/best-helmets-for-bikers.webp',
    filename: 'best-helmets-for-bikers.webp',
    imageAlt: 'ECE 22.06 certified carbon fiber full-face motorcycle helmet with tinted shield',
    aspectRatio: '16/10'
  },
  'commuter-vs-sports-bikes': {
    slug: 'commuter-vs-sports-bikes',
    title: 'Commuter Bikes vs Sports Bikes',
    image: '/images/commuter-vs-sports-bikes.webp',
    filename: 'commuter-vs-sports-bikes.webp',
    imageAlt: 'Side-by-side comparison of upright commuter roadster and aggressive track sportbike',
    aspectRatio: '16/10'
  },
  'bike-modification-guide': {
    slug: 'bike-modification-guide',
    title: 'Bike Modification Guide',
    image: '/images/bike-modification-guide.webp',
    filename: 'bike-modification-guide.webp',
    imageAlt: 'Upgraded motorcycle inverted suspension forks and radial brake caliper setup',
    aspectRatio: '16/10'
  },
  'long-distance-bike-riding': {
    slug: 'long-distance-bike-riding',
    title: 'Long-Distance Bike Riding',
    image: '/images/long-distance-bike-riding.webp',
    filename: 'long-distance-bike-riding.webp',
    imageAlt: 'Adventure touring motorcycle equipped with aluminum luggage overlooking mountain pass',
    aspectRatio: '16/10'
  },
  'electric-bikes-vs-petrol-bikes': {
    slug: 'electric-bikes-vs-petrol-bikes',
    title: 'Electric Bikes vs Petrol Bikes',
    image: '/images/electric-bikes-vs-petrol-bikes.webp',
    filename: 'electric-bikes-vs-petrol-bikes.webp',
    imageAlt: 'Futuristic electric motorcycle parked at modern fast-charging station',
    aspectRatio: '16/10'
  }
};

export const HOMEPAGE_HERO_IMAGE_CONFIG = {
  image: '/images/motoguide-motorcycle-hero.webp',
  filename: 'motoguide-motorcycle-hero.webp',
  imageAlt: 'High-performance red sports motorcycle parked on mountain canyon overlook at sunset',
  aspectRatio: '4/3'
};

/**
 * Helper to retrieve image config for any article by slug
 */
export function getArticleImageConfig(slug: string): ArticleImageEntry | undefined {
  return ARTICLE_IMAGE_CONFIGS[slug];
}
