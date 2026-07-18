'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Product } from '@/lib/types'
import { formatPrice, calculateDiscount } from '@/lib/storefront'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  showColors?: boolean
}

export function ProductCard({ product, showColors = true }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discount = product.compareAtPrice ? calculateDiscount(product.compareAtPrice, product.price) : 0

  return (
    <div className="group flex flex-col h-full">
      <Link href={`/products/${product.slug}`} className="flex-1">
        <div className="relative overflow-hidden bg-muted rounded mb-4 aspect-square">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {product.badge && (
              <Badge className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1">
                {product.badge}
              </Badge>
            )}
            {discount > 0 && (
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-1">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsWishlisted(!isWishlisted)
            }}
            className="absolute top-4 right-4 p-2.5 bg-background/95 backdrop-blur rounded-full shadow-sm hover:shadow-md transition-all"
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart
              className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-primary text-primary' : 'text-foreground'}`}
            />
          </button>

          {/* Quick Add Button - Mobile optimized */}
          <button
            onClick={(e) => {
              e.preventDefault()
              // Add to cart logic will go here
            }}
            className="absolute bottom-0 left-0 right-0 bg-primary/95 text-primary-foreground py-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 font-medium"
            aria-label="Add to bag"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm">Add to Bag</span>
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-3">
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {product.tagline && (
          <p className="text-xs text-muted-foreground line-clamp-2">{product.tagline}</p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-xs leading-none">
                {i < Math.floor(product.rating) ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Colors Preview */}
        {showColors && product.colors && product.colors.length > 0 && (
          <div className="flex gap-2">
            {product.colors.slice(0, 3).map((color) => (
              <button
                key={color.name}
                className={`w-5 h-5 rounded-full border-2 transition-transform hover:scale-110 ${
                  !color.inStock ? 'opacity-50' : ''
                }`}
                style={{ backgroundColor: color.hex, borderColor: color.hex }}
                title={color.name}
                aria-label={`Color: ${color.name}`}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-base font-semibold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
