'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ProductCard } from '@/components/product/ProductCard'
import { products, getProductBySlug, formatPrice, getRelatedProducts } from '@/lib/storefront'
import { Heart, Share2, Truck, RotateCcw, CheckCircle } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product?.colors?.[0]?.name)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes?.[0]?.name)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative bg-muted aspect-square overflow-hidden rounded-sm">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square rounded-sm overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Meta */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              {product.tagline && (
                <p className="text-lg text-muted-foreground">{product.tagline}</p>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-lg">
                    {i < Math.floor(product.rating) ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                {product.rating} · {product.reviewCount} reviews
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">Inclusive of all taxes</p>
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Color</p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex flex-col items-center gap-2 cursor-pointer group ${
                        !color.inStock ? 'opacity-50' : ''
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColor === color.name
                            ? 'border-foreground ring-2 ring-primary'
                            : 'border-border'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs text-muted-foreground group-hover:text-foreground">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Size</p>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      disabled={!size.inStock}
                      className={`px-4 py-2 border-2 rounded transition-colors ${
                        selectedSize === size.name
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      } ${!size.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Quantity</p>
              <div className="flex items-center gap-3 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border hover:border-primary rounded flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border hover:border-primary rounded flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base">
                Add to Bag
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart
                    className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-primary text-primary' : ''}`}
                  />
                  Wishlist
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="space-y-1">
                <Truck className="w-5 h-5 text-primary" />
                <p className="text-xs font-semibold">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders above ₹2,500</p>
              </div>
              <div className="space-y-1">
                <RotateCcw className="w-5 h-5 text-primary" />
                <p className="text-xs font-semibold">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30-day returns policy</p>
              </div>
              <div className="space-y-1">
                <CheckCircle className="w-5 h-5 text-primary" />
                <p className="text-xs font-semibold">Quality Assured</p>
                <p className="text-xs text-muted-foreground">{product.warranty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Accordion */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Product Details</h2>
          <Accordion type="single" collapsible className="border border-border rounded-sm">
            <AccordionItem value="description">
              <AccordionTrigger className="px-6 font-semibold">Description</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                {product.description}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="specifications">
              <AccordionTrigger className="px-6 font-semibold">Specifications</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2 text-muted-foreground">
                  {product.materials && (
                    <p>
                      <span className="font-semibold text-foreground">Materials: </span>
                      {product.materials.join(', ')}
                    </p>
                  )}
                  {product.dimensions && (
                    <p>
                      <span className="font-semibold text-foreground">Dimensions: </span>
                      {product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height}{' '}
                      {product.dimensions.unit}
                    </p>
                  )}
                  {product.dimensions?.weight && (
                    <p>
                      <span className="font-semibold text-foreground">Weight: </span>
                      {product.dimensions.weight} kg
                    </p>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="features">
              <AccordionTrigger className="px-6 font-semibold">Features</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <ul className="space-y-2 text-muted-foreground">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            {product.careInstructions && (
              <AccordionItem value="care">
                <AccordionTrigger className="px-6 font-semibold">Care Instructions</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {product.careInstructions}
                </AccordionContent>
              </AccordionItem>
            )}

            {product.warranty && (
              <AccordionItem value="warranty">
                <AccordionTrigger className="px-6 font-semibold">Warranty</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {product.warranty} warranty included
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>

        {/* Reviews Section */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Customer Reviews</h2>
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-border pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{review.author}</p>
                      {review.verified && (
                        <p className="text-xs text-primary flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Verified Purchase
                        </p>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                      ))}
                    </div>
                  </div>
                  <p className="font-semibold text-foreground mb-1">{review.title}</p>
                  <p className="text-muted-foreground mb-2">{review.content}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
