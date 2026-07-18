'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/types'
import { formatPrice, calculateDiscount } from '@/lib/storefront'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  showColors?: boolean
  compactMobile?: boolean
}

export function ProductCard({ product, showColors = true, compactMobile = false }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discount = product.compareAtPrice ? calculateDiscount(product.compareAtPrice, product.price) : 0

  return (
    <div
      className={cn(
        'group flex h-full flex-col',
        compactMobile && 'max-md:flex-row max-md:items-stretch max-md:gap-3 max-md:rounded max-md:border max-md:border-border/60 max-md:bg-card max-md:p-3'
      )}
    >
      <div className={cn('relative overflow-hidden bg-muted rounded mb-4 aspect-square', compactMobile && 'max-md:mb-0 max-md:h-28 max-md:w-28 max-md:flex-none')}>
        <Link href={`/products/${product.slug}`} className="absolute inset-0">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
            sizes={compactMobile ? '(max-width: 768px) 112px, (max-width: 1024px) 50vw, 25vw' : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'}
          />

          {/* Badges */}
          <div className={cn('absolute top-4 left-4 flex gap-2', compactMobile && 'max-md:top-2 max-md:left-2')}>
            {product.badge && (
              <Badge className={cn('bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1', compactMobile && 'max-md:px-2 max-md:py-0.5 max-md:text-[10px]')}>
                {product.badge}
              </Badge>
            )}
            {discount > 0 && (
              <Badge variant="secondary" className={cn('bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-1', compactMobile && 'max-md:hidden')}>
                -{discount}%
              </Badge>
            )}
          </div>
        </Link>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsWishlisted(!isWishlisted)
          }}
          className={cn(
            'absolute top-4 right-4 z-10 p-2.5 bg-background/95 backdrop-blur rounded-full shadow-sm hover:shadow-md transition-all',
            compactMobile && 'max-md:top-2 max-md:right-2 max-md:p-1.5'
          )}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={cn('w-5 h-5 transition-colors', compactMobile && 'max-md:h-4 max-md:w-4', isWishlisted ? 'fill-primary text-primary' : 'text-foreground')}
          />
        </button>

        {/* Quick Add Button - Mobile optimized */}
        <button
          onClick={(e) => {
            e.preventDefault()
            // Add to cart logic will go here
          }}
          className={cn(
            'absolute bottom-0 left-0 right-0 z-10 bg-primary/95 text-primary-foreground py-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 font-medium',
            compactMobile && 'max-md:hidden'
          )}
          aria-label="Add to bag"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm">Add to Bag</span>
        </button>
      </div>

      {/* Product Info */}
      <div className={cn('space-y-3', compactMobile && 'max-md:flex max-md:flex-1 max-md:flex-col max-md:justify-center max-md:space-y-2 max-md:pr-1')}>
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className={cn('text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2', compactMobile && 'max-md:text-[13px] max-md:leading-5')}>
            {product.name}
          </h3>
        </Link>

        {product.tagline && (
          <p className={cn('text-xs text-muted-foreground line-clamp-2', compactMobile && 'max-md:line-clamp-1')}>{product.tagline}</p>
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
        <div className={cn('flex items-baseline gap-2 pt-1', compactMobile && 'max-md:pt-0')}>
          <span className={cn('text-base font-semibold text-foreground', compactMobile && 'max-md:text-sm')}>
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
