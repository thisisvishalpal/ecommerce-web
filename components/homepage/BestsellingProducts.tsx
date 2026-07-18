import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/lib/storefront'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function BestsellingProducts() {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 6)

  return (
    <section className="py-16 lg:py-20 bg-background">
      <Container>
        <div className="mb-12 flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Customer Favorites</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">Bestselling Products</h2>
          </div>
          <Link href="/products" className="hidden lg:block flex-shrink-0 mt-1">
            <Button variant="outline" className="gap-2 h-10 px-5">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:hidden">
          <Link href="/products" className="w-full sm:w-auto">
            <Button size="lg" className="gap-2 w-full sm:w-auto h-11 px-6">
              View All Products <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
