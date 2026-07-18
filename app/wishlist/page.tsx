'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/storefront'
import { Heart } from 'lucide-react'

// Mock wishlist for demo
const mockWishlistIds = ['p-001', 'p-005', 'p-008']

export default function WishlistPage() {
  const wishlistProducts = products.filter((p) => mockWishlistIds.includes(p.id))

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlistProducts.length} item{wishlistProducts.length !== 1 ? 's' : ''} saved
          </p>
        </div>

        {wishlistProducts.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {wishlistProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">Ready to checkout these items?</p>
              <Link href="/cart">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Bag
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">
              Save your favorite products to view them later
            </p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  )
}
