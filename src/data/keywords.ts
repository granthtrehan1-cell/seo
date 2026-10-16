export interface PageKeywordMapping {
  path: string;
  pageName: string;
  primaryKeyword: string;
  secondaryKeywords: [string, string];
  searchIntent: 'Informational' | 'Commercial Investigation' | 'Navigational';
  targetAudience: string;
}

export const KEYWORD_MAPPINGS: Record<string, PageKeywordMapping> = {
  '/': {
    path: '/',
    pageName: 'Homepage',
    primaryKeyword: 'motorcycle guides',
    secondaryKeywords: ['bike buying advice', 'motorcycle tips'],
    searchIntent: 'Commercial Investigation',
    targetAudience: 'Motorcycle riders and prospective buyers seeking authoritative guides.'
  },
  '/about/': {
    path: '/about/',
    pageName: 'About Us',
    primaryKeyword: 'about motoguide',
    secondaryKeywords: ['motorcycle testing standards', 'motorcycle editorial team'],
    searchIntent: 'Navigational',
    targetAudience: 'Riders and industry partners researching editorial standards and credentials.'
  },
  '/contact/': {
    path: '/contact/',
    pageName: 'Contact Us',
    primaryKeyword: 'contact motoguide',
    secondaryKeywords: ['motorcycle technical questions', 'motorcycle rider advice'],
    searchIntent: 'Navigational',
    targetAudience: 'Riders submitting technical, maintenance, or editorial inquiries.'
  },
  '/articles/': {
    path: '/articles/',
    pageName: 'All Articles',
    primaryKeyword: 'motorcycle articles',
    secondaryKeywords: ['motorcycle reviews', 'bike guides'],
    searchIntent: 'Informational',
    targetAudience: 'Enthusiasts browsing comprehensive motorcycle buying and maintenance guides.'
  },
  '/articles/best-bikes-for-beginners/': {
    path: '/articles/best-bikes-for-beginners/',
    pageName: 'Best Bikes for Beginners',
    primaryKeyword: 'best bikes for beginners',
    secondaryKeywords: ['beginner-friendly motorcycles', 'best bikes for new riders'],
    searchIntent: 'Commercial Investigation',
    targetAudience: 'First-time riders comparing approachable engine displacements and seat heights.'
  },
  '/articles/best-sports-bikes/': {
    path: '/articles/best-sports-bikes/',
    pageName: 'Best Sports Bikes',
    primaryKeyword: 'best sports bikes',
    secondaryKeywords: ['sports motorcycles', 'best performance bikes'],
    searchIntent: 'Commercial Investigation',
    targetAudience: 'Track riders and canyon enthusiasts analyzing horsepower, IMU aids, and handling.'
  },
  '/articles/bike-mileage-guide/': {
    path: '/articles/bike-mileage-guide/',
    pageName: 'Bike Mileage Guide',
    primaryKeyword: 'bike mileage',
    secondaryKeywords: ['improve bike fuel efficiency', 'motorcycle fuel economy'],
    searchIntent: 'Informational',
    targetAudience: 'Daily commuters and tourers looking to maximize MPG/KMPL and reduce fuel costs.'
  },
  '/articles/bike-maintenance-tips/': {
    path: '/articles/bike-maintenance-tips/',
    pageName: 'Bike Maintenance Tips',
    primaryKeyword: 'bike maintenance tips',
    secondaryKeywords: ['motorcycle maintenance', 'motorcycle servicing checklist'],
    searchIntent: 'Informational',
    targetAudience: 'DIY riders performing chain adjustments, oil flushes, and pre-ride inspections.'
  },
  '/articles/motorcycle-safety-tips/': {
    path: '/articles/motorcycle-safety-tips/',
    pageName: 'Motorcycle Safety Tips',
    primaryKeyword: 'motorcycle safety tips',
    secondaryKeywords: ['safe riding techniques', 'motorcycle protective gear'],
    searchIntent: 'Informational',
    targetAudience: 'Riders seeking defensive road positioning, hazard avoidance, and progressive braking.'
  },
  '/articles/best-helmets-for-bikers/': {
    path: '/articles/best-helmets-for-bikers/',
    pageName: 'Best Helmets for Bikers',
    primaryKeyword: 'best helmets for bikers',
    secondaryKeywords: ['motorcycle helmet buying guide', 'certified motorcycle helmets'],
    searchIntent: 'Commercial Investigation',
    targetAudience: 'Motorcyclists selecting ECE 22.06 or Snell certified helmets tailored to head shapes.'
  },
  '/articles/commuter-vs-sports-bikes/': {
    path: '/articles/commuter-vs-sports-bikes/',
    pageName: 'Commuter Bikes vs Sports Bikes',
    primaryKeyword: 'commuter bikes vs sports bikes',
    secondaryKeywords: ['commuter motorcycle benefits', 'sports bike vs daily use'],
    searchIntent: 'Informational',
    targetAudience: 'Riders evaluating whether an aggressive sportbike is practical for work commutes.'
  },
  '/articles/bike-modification-guide/': {
    path: '/articles/bike-modification-guide/',
    pageName: 'Bike Modification Guide',
    primaryKeyword: 'bike modification guide',
    secondaryKeywords: ['motorcycle accessories', 'legal bike modifications'],
    searchIntent: 'Informational',
    targetAudience: 'Riders planning suspension, exhaust, ECU remap, and street-legal aftermarket upgrades.'
  },
  '/articles/long-distance-bike-riding/': {
    path: '/articles/long-distance-bike-riding/',
    pageName: 'Long-Distance Bike Riding',
    primaryKeyword: 'long-distance bike riding',
    secondaryKeywords: ['motorcycle touring tips', 'long motorcycle trips'],
    searchIntent: 'Informational',
    targetAudience: 'Adventure and sport-touring riders preparing for multi-day, 500+ mile rides.'
  },
  '/articles/electric-bikes-vs-petrol-bikes/': {
    path: '/articles/electric-bikes-vs-petrol-bikes/',
    pageName: 'Electric Bikes vs Petrol Bikes',
    primaryKeyword: 'electric bikes vs petrol bikes',
    secondaryKeywords: ['electric motorcycles', 'petrol motorcycle running costs'],
    searchIntent: 'Commercial Investigation',
    targetAudience: 'Motorcyclists comparing electric torque, highway range, and 5-year total cost of ownership.'
  }
};
