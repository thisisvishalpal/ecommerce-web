export type Product = {
  id: string
  name: string
  slug: string
  tagline?: string
  category: string
  subcategory?: string
  price: number
  compareAtPrice?: number
  inventory: number
  rating: number
  reviewCount: number
  images: string[]
  colors?: ProductColor[]
  sizes?: ProductSize[]
  materials?: string[]
  dimensions?: {
    length?: number
    width?: number
    height?: number
    weight?: number
    unit?: string
  }
  features: string[]
  description: string
  longDescription?: string
  careInstructions?: string
  warranty?: string
  badge?: string
  isFeatured?: boolean
  relatedProducts?: string[]
  frequentlyBoughtTogether?: string[]
  reviews?: Review[]
  inStock: boolean
}

export type ProductColor = {
  name: string
  hex: string
  inStock: boolean
}

export type ProductSize = {
  name: string
  inStock: boolean
}

export type Review = {
  id: string
  author: string
  rating: number
  title: string
  content: string
  date: string
  verified: boolean
  helpful: number
}

export type CartItem = {
  productId: string
  quantity: number
  color?: string
  size?: string
}

export type Order = {
  id: string
  date: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  items: CartItem[]
  trackingNumber?: string
}

export type Category = {
  id: string
  name: string
  slug: string
  description: string
  image: string
  featured: boolean
}

export type Bundle = {
  id: string
  name: string
  description: string
  products: string[]
  originalPrice: number
  bundlePrice: number
  savings: number
  image: string
}

export type Testimonial = {
  id: string
  author: string
  role?: string
  content: string
  rating: number
  image?: string
  verified: boolean
}
