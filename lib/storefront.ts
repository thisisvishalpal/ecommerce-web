import type { Product, Category, Bundle, Testimonial } from './types'

export const products: Product[] = [
  {
    id: 'p-001',
    name: 'Tech Organizer Pro',
    slug: 'tech-organizer-pro',
    tagline: 'Everything in its place',
    category: 'Desk Accessories',
    subcategory: 'Organisers',
    price: 2499,
    compareAtPrice: 3299,
    inventory: 45,
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    badge: 'Bestseller',
    isFeatured: true,
    images: [
      '/products/tech-organizer-pro.png',
      '/products/tech-organizer-pro.png',
      '/products/tech-organizer-pro.png',
    ],
    colors: [
      { name: 'Natural', hex: '#c4946c', inStock: true },
      { name: 'Charcoal', hex: '#1f1f1f', inStock: true },
      { name: 'Sage', hex: '#5a7a4a', inStock: false },
    ],
    sizes: [
      { name: 'Small', inStock: true },
      { name: 'Large', inStock: true },
    ],
    materials: ['Premium Leather', 'Canvas'],
    dimensions: {
      length: 30,
      width: 20,
      height: 15,
      weight: 0.8,
      unit: 'cm',
    },
    features: [
      '12 dedicated compartments',
      'Premium leather construction',
      'Water-resistant materials',
      'Reinforced stitching',
      'Anti-slip base',
    ],
    description: 'The ultimate desk organizer for professionals who value order and style.',
    longDescription: 'Keep your desk organized with this premium tech organizer. Featuring 12 dedicated compartments for cables, chargers, pens, and more. Made from premium leather with reinforced stitching.',
    careInstructions: 'Wipe with soft cloth. Avoid water exposure.',
    warranty: '2 years',
    relatedProducts: ['p-002', 'p-003', 'p-004'],
    frequentlyBoughtTogether: ['p-005', 'p-006'],
    reviews: [
      {
        id: 'r-1',
        author: 'Sarah M.',
        rating: 5,
        title: 'Perfect desk companion',
        content: 'Exactly what I needed for my desk. Quality is outstanding.',
        date: '2024-01-15',
        verified: true,
        helpful: 45,
      },
      {
        id: 'r-2',
        author: 'John D.',
        rating: 4,
        title: 'Great build quality',
        content: 'Very well made. The leather feels premium.',
        date: '2024-01-10',
        verified: true,
        helpful: 32,
      },
    ],
  },
  {
    id: 'p-002',
    name: 'Laptop Sleeve Premium',
    slug: 'laptop-sleeve-premium',
    tagline: 'Protection meets style',
    category: 'Travel Gear',
    subcategory: 'Laptop Accessories',
    price: 1899,
    compareAtPrice: 2499,
    inventory: 32,
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    badge: 'New',
    isFeatured: true,
    images: [
      '/products/laptop-sleeve.png',
      '/products/laptop-sleeve.png',
    ],
    colors: [
      { name: 'Navy', hex: '#1a3a4a', inStock: true },
      { name: 'Natural', hex: '#c4946c', inStock: true },
    ],
    sizes: [
      { name: '13"', inStock: true },
      { name: '15"', inStock: true },
      { name: '16"', inStock: true },
    ],
    materials: ['Premium Canvas', 'Soft Padding'],
    dimensions: {
      length: 35,
      width: 25,
      height: 2,
      weight: 0.4,
      unit: 'cm',
    },
    features: [
      'Ultra-soft lining',
      'Shock-absorbing padding',
      'Water-resistant canvas',
      'Slim profile',
      'Multiple sizes available',
    ],
    description: 'Protect your laptop in style with our premium sleeve.',
    warranty: '1 year',
    relatedProducts: ['p-001', 'p-003'],
    frequentlyBoughtTogether: ['p-007'],
    reviews: [],
  },
  {
    id: 'p-003',
    name: 'Cable Organizer Set',
    slug: 'cable-organizer-set',
    category: 'Desk Accessories',
    price: 799,
    inventory: 120,
    rating: 4.6,
    reviewCount: 201,
    inStock: true,
    badge: 'Bestseller',
    images: [
      '/products/cable-organizer.png',
    ],
    colors: [
      { name: 'Black', hex: '#1f1f1f', inStock: true },
      { name: 'White', hex: '#ffffff', inStock: true },
    ],
    features: [
      '5 different sizes',
      'Silicone material',
      'Self-adhesive',
      'Reusable',
      'Works on any surface',
    ],
    description: 'Keep your cables organized and tidy.',
    warranty: '6 months',
    reviews: [],
  },
  {
    id: 'p-004',
    name: 'Desk Pad Premium',
    slug: 'desk-pad-premium',
    tagline: 'Your workspace, perfected',
    category: 'Desk Accessories',
    price: 3499,
    inventory: 25,
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    badge: 'Bestseller',
    isFeatured: true,
    images: [
      '/products/desk-pad.png',
    ],
    colors: [
      { name: 'Natural Leather', hex: '#c4946c', inStock: true },
      { name: 'Charcoal', hex: '#1f1f1f', inStock: true },
    ],
    materials: ['Premium Leather', 'Cork Base'],
    features: [
      'Extra-large surface',
      'Genuine leather construction',
      'Non-slip cork base',
      'Precision edge stitching',
      'Lifetime warranty',
    ],
    description: 'Premium desk pad that protects and beautifies your workspace.',
    warranty: 'Lifetime',
    relatedProducts: ['p-001', 'p-005'],
    reviews: [],
  },
  {
    id: 'p-005',
    name: 'Pen Holder Minimalist',
    slug: 'pen-holder-minimalist',
    category: 'Desk Accessories',
    price: 599,
    inventory: 89,
    rating: 4.5,
    reviewCount: 67,
    inStock: true,
    images: [
      '/products/cable-organizer.png',
    ],
    colors: [
      { name: 'Natural Wood', hex: '#d4a574', inStock: true },
      { name: 'Matte Black', hex: '#1a1a1a', inStock: true },
    ],
    materials: ['Sustainable Wood', 'Metal Ring'],
    features: [
      'Minimalist design',
      'Eco-friendly wood',
      'Perfect for any desk',
      'Lightweight',
    ],
    description: 'Simple, elegant pen holder for the minimalist workspace.',
    warranty: '1 year',
    reviews: [],
  },
  {
    id: 'p-006',
    name: 'Laptop Stand Adjustable',
    slug: 'laptop-stand-adjustable',
    tagline: 'Ergonomics meets design',
    category: 'Desk Accessories',
    price: 1299,
    compareAtPrice: 1699,
    inventory: 56,
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    badge: 'Bestseller',
    images: [
      '/products/monitor-arm.png',
    ],
    colors: [
      { name: 'Aluminum Silver', hex: '#a9a9a9', inStock: true },
      { name: 'Matte Black', hex: '#1a1a1a', inStock: true },
    ],
    materials: ['Aluminum Alloy', 'Rubber Pads'],
    features: [
      '6-level height adjustment',
      'Supports up to 17 inches',
      'Non-slip pads',
      'Lightweight yet sturdy',
      'Folds for portability',
    ],
    description: 'Adjustable laptop stand for better ergonomics.',
    warranty: '2 years',
    relatedProducts: ['p-002', 'p-004'],
    frequentlyBoughtTogether: ['p-007'],
    reviews: [],
  },
  {
    id: 'p-007',
    name: 'USB Hub Pro',
    slug: 'usb-hub-pro',
    category: 'Tech Accessories',
    price: 1799,
    inventory: 42,
    rating: 4.6,
    reviewCount: 98,
    inStock: true,
    badge: 'Bestseller',
    images: [
      '/products/wireless-charger.png',
    ],
    colors: [
      { name: 'Space Gray', hex: '#56564f', inStock: true },
      { name: 'Silver', hex: '#d0d0d0', inStock: true },
    ],
    materials: ['Aluminum', 'Plastic'],
    features: [
      '7-port USB hub',
      'Fast charging support',
      'Aluminum construction',
      'Individual switches',
      'LED indicators',
    ],
    description: 'Powerful USB hub with 7 ports for all your devices.',
    warranty: '2 years',
    reviews: [],
  },
]

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Desk Accessories',
    slug: 'desk-accessories',
    description: 'Organize your workspace in style',
    image: '/categories/desk-accessories.png',
    featured: true,
  },
  {
    id: 'cat-2',
    name: 'Travel Gear',
    slug: 'travel-gear',
    description: 'Adventure-ready accessories',
    image: '/products/traveler-backpack.png',
    featured: true,
  },
  {
    id: 'cat-3',
    name: 'Tech Accessories',
    slug: 'tech-accessories',
    description: 'Stay connected and charged',
    image: '/products/wireless-charger.png',
    featured: true,
  },
]

export const bundles: Bundle[] = [
  {
    id: 'bundle-1',
    name: 'Perfect Workspace Bundle',
    description: 'Everything you need for an organized desk',
    products: ['p-001', 'p-004', 'p-006'],
    originalPrice: 7297,
    bundlePrice: 5999,
    savings: 1298,
    image: '/products/bundle-workspace.png',
  },
  {
    id: 'bundle-2',
    name: 'Digital Nomad Kit',
    description: 'Travel with everything you need',
    products: ['p-002', 'p-007', 'p-003'],
    originalPrice: 4398,
    bundlePrice: 3499,
    savings: 899,
    image: '/products/bundle-travel-essentials.png',
  },
  {
    id: 'bundle-3',
    name: 'Starter Essentials',
    description: 'Begin your organization journey',
    products: ['p-005', 'p-003', 'p-006'],
    originalPrice: 2697,
    bundlePrice: 1999,
    savings: 698,
    image: '/products/bundle-tech-accessories.png',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    author: 'Priya Singh',
    role: 'Product Designer',
    content: 'ecomguru products have completely transformed my workspace. The quality and design are unmatched.',
    rating: 5,
    verified: true,
  },
  {
    id: 't-2',
    author: 'Rahul Verma',
    role: 'Startup Founder',
    content: 'Invested in their travel gear and desk accessories. Best decision for my remote setup.',
    rating: 5,
    verified: true,
  },
  {
    id: 't-3',
    author: 'Anjali Patel',
    role: 'Marketing Manager',
    content: 'The attention to detail is incredible. Every product feels premium and lasts forever.',
    rating: 4,
    verified: true,
  },
  {
    id: 't-4',
    author: 'Arjun Khanna',
    role: 'Software Engineer',
    content: 'Finally found products that match my aesthetic and actually work perfectly.',
    rating: 5,
    verified: true,
  },
]

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function generateProductSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
}

export function getRelatedProducts(productId: string, limit: number = 3): Product[] {
  const product = products.find((p) => p.id === productId)
  if (!product || !product.relatedProducts) return []
  return product.relatedProducts
    .slice(0, limit)
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[]
}

export function calculateDiscount(originalPrice: number, currentPrice: number): number {
  if (!originalPrice || originalPrice <= currentPrice) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}
