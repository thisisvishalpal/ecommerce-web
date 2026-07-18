'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ProductCard } from '@/components/product/ProductCard'
import { products, getProductBySlug, formatPrice, getRelatedProducts } from '@/lib/storefront'
import { Heart, Share2, Truck, RotateCcw, CheckCircle } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    params.then(p => {
      setSlug(p.slug)
      setMounted(true)
    })
  }, [params])

  const product = slug ? getProductBySlug(slug) : undefined
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product?.colors?.[0]?.name)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes?.[0]?.name)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!mounted) {
    return (
      <div className="py-12 bg-background">
        <Container>
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </Container>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="py-12 bg-background">
        <Container>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Link href="/products">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product.id, 3)

  return (
    <div className="py-12 bg-background">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/products" className="text-muted-foreground hover:text-foreground">
            Products
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="mb-4 bg-muted rounded-lg aspect-square flex items-center justify-center overflow-hidden">
              <Image
                src={product.image || '/products/tech-organizer-pro.png'}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[product.image, ...product.images || []].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`aspect-square rounded border-2 overflow-hidden ${
                    currentImageIndex === idx ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={img || '/products/tech-organizer-pro.png'}
                    alt={`${product.name} ${idx}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-muted-foreground text-lg">{product.description}</p>
              </div>
              <button onClick={() => setIsWishlisted(!isWishlisted)} className="p-2">
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-destructive text-destructive' : 'text-foreground'}`} />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {Array(5).fill(null).map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews?.length || 0} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">Color</label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name ? 'border-primary' : 'border-border'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">Size</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`px-4 py-2 border rounded transition-all ${
                        selectedSize === size.name
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">Quantity</label>
              <div className="flex items-center gap-3 w-fit border border-border rounded">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2">-</button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3">
              Add to Bag
            </Button>
            <Button size="lg" variant="outline" className="w-full border-border">
              Buy Now
            </Button>

            {/* Trust Indicators */}
            <div className="mt-8 space-y-3 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Free shipping on orders over ₹2,500</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">30-day hassle-free returns</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">100% premium quality guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specs */}
        {product.specs && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
            <Accordion type="single" collapsible>
              {Object.entries(product.specs).map(([key, value]) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger>{key}</AccordionTrigger>
                  <AccordionContent>{value as string}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Customer Reviews</h2>
            <div className="space-y-4">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{review.author}</h3>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {Array(review.rating).fill(null).map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
