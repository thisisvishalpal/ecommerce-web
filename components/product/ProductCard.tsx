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
    <div className="group">
      <Link href={`/products/${product.slug}`}>
        <div className="relative overflow-hidden bg-muted rounded-sm mb-4 aspect-square">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {product.badge && (
              <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
                {product.badge}
              </Badge>
            )}
            {discount > 0 && (
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs font-semibold">
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
            className="absolute top-3 right-3 p-2 bg-background rounded-full shadow-sm hover:shadow-md transition-all"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-primary text-primary' : 'text-foreground'}`}
            />
          </button>

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              // Add to cart logic will go here
            }}
            className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm font-medium">Add to Bag</span>
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-2">
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {product.tagline && (
          <p className="text-xs text-muted-foreground">{product.tagline}</p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-xs">
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
                className={`w-4 h-4 rounded-full border-2 transition-transform hover:scale-125 ${
                  !color.inStock ? 'opacity-50' : ''
                }`}
                style={{ backgroundColor: color.hex, borderColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 pt-2">
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
