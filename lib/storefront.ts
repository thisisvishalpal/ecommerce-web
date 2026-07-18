export type Product = {
  id: string
  name: string
  category: string
  price: number
  compareAtPrice?: number
  inventory: number
  rating: number
  image: string
  badge?: string
}

export const products: Product[] = [
  {
    id: "p-001",
    name: "Everyday Linen Shirt",
    category: "Apparel",
    price: 1899,
    compareAtPrice: 2499,
    inventory: 42,
    rating: 4.7,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p-002",
    name: "Ceramic Desk Organizer",
    category: "Home",
    price: 1299,
    inventory: 18,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p-003",
    name: "Trail Runner Bottle",
    category: "Fitness",
    price: 899,
    compareAtPrice: 1199,
    inventory: 64,
    rating: 4.8,
    badge: "New",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p-004",
    name: "Minimal Leather Wallet",
    category: "Accessories",
    price: 2199,
    inventory: 27,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
  },
]

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}
