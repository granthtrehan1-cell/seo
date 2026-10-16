export interface ArticleImageEntry {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  caption?: string;
}

export const HERO_IMAGE = {
  path: '/images/motoguide-motorcycle-hero.webp',
  imageAlt: 'High-performance red sports motorcycle parked along scenic mountain canyon at sunset',
  caption: 'Modern superbikes combine 200+ horsepower performance with aerospace-grade aerodynamics and multi-axis IMU rider aids.'
};

export const ARTICLE_IMAGE_CONFIG: Record<string, ArticleImageEntry> = {
  'best-bikes-for-beginners': {
    slug: 'best-bikes-for-beginners',
    title: 'Best Bikes for Beginners',
    image: '/images/best-bikes-for-beginners.webp',
    imageAlt: 'Approachable lightweight twin-cylinder starter motorcycle with low seat height and standard ABS',
    caption: 'Modern sub-500cc motorcycles offer accessible standover heights, light clutches, and linear throttle response.'
  },
  'best-sports-bikes': {
    slug: 'best-sports-bikes',
    title: 'Best Sports Bikes',
    image: '/images/best-sports-bikes.webp',
    imageAlt: 'Track-ready aerodynamic superbike in crimson red with biplane downforce winglets',
    caption: 'Flagship liter-class and middleweight sportbikes tested across Laguna Seca and open canyon switchbacks.'
  },
  'bike-mileage-guide': {
    slug: 'bike-mileage-guide',
    title: 'Bike Mileage Guide',
    image: '/images/bike-mileage-guide.webp',
    imageAlt: 'Motorcycle cockpit instrument console showing fuel efficiency metrics and aerodynamic windscreen',
    caption: 'Proper tire pressure, clean chain alignment, and smooth throttle inputs maximize highway miles per gallon.'
  },
  'bike-maintenance-tips': {
    slug: 'bike-maintenance-tips',
    title: 'Bike Maintenance Tips',
    image: '/images/bike-maintenance-tips.webp',
    imageAlt: 'Technician servicing and lubricating an O-ring drive chain with precision garage tools',
    caption: 'Regular 400-mile chain tensioning, fresh synthetic oil, and fluid flushes guarantee machine reliability.'
  },
  'motorcycle-safety-tips': {
    slug: 'motorcycle-safety-tips',
    title: 'Motorcycle Safety Tips',
    image: '/images/motorcycle-safety-tips.webp',
    imageAlt: 'Motorcyclist practicing defensive lane positioning and progressive front-end threshold braking',
    caption: 'Defensive riding strategies, motion camouflage evasion, and CE Level 2 armor protect against road hazards.'
  },
  'best-helmets-for-bikers': {
    slug: 'best-helmets-for-bikers',
    title: 'Best Helmets for Bikers',
    image: '/images/best-helmets-for-bikers.webp',
    imageAlt: 'Aerodynamic carbon fiber full-face motorcycle helmet with ECE 22.06 certification badge',
    caption: 'ECE 22.06 certified helmets undergo rigorous rotational oblique impact tests to minimize brain shear.'
  },
  'commuter-vs-sports-bikes': {
    slug: 'commuter-vs-sports-bikes',
    title: 'Commuter Bikes vs Sports Bikes',
    image: '/images/commuter-vs-sports-bikes.webp',
    imageAlt: 'Upright standard commuter roadster compared side-by-side with aggressive clip-on superbike',
    caption: 'Relaxed ergonomics and lower insurance rates make commuter bikes far more practical for daily riding.'
  },
  'bike-modification-guide': {
    slug: 'bike-modification-guide',
    title: 'Bike Modification Guide',
    image: '/images/bike-modification-guide.webp',
    imageAlt: 'Custom motorcycle chassis with upgraded suspension cartridges and street-legal exhaust system',
    caption: 'Prioritize suspension valving and braided brake lines over noisy exhausts for maximum performance ROI.'
  },
  'long-distance-bike-riding': {
    slug: 'long-distance-bike-riding',
    title: 'Long-Distance Bike Riding',
    image: '/images/long-distance-bike-riding.webp',
    imageAlt: 'Adventure touring motorcycle loaded with balanced low-center-of-gravity aluminum panniers',
    caption: 'Proper luggage weight distribution, acoustic earplugs, and continuous hydration enable 600-mile days.'
  },
  'electric-bikes-vs-petrol-bikes': {
    slug: 'electric-bikes-vs-petrol-bikes',
    title: 'Electric Bikes vs Petrol Bikes',
    image: '/images/electric-bikes-vs-petrol-bikes.webp',
    imageAlt: 'Futuristic electric motorcycle charging beside internal combustion petrol roadster',
    caption: 'Instant zero-RPM torque and low per-mile electricity costs balance against initial battery purchase price.'
  }
};

export const getArticleImageConfig = (slug: string): ArticleImageEntry => {
  return ARTICLE_IMAGE_CONFIG[slug] || {
    slug,
    title: 'Motorcycle Guide',
    image: `/images/${slug}.webp`,
    imageAlt: 'Motorcycle technical guide'
  };
};
