import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/lib/storefront'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function BestsellingProducts() {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 6)

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="mb-12 flex items-start justify-between">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Customer Favorites</span>
            <h2 className="text-4xl font-bold mt-2 text-foreground">Bestselling Products</h2>
          </div>
          <Link href="/products" className="hidden lg:block">
            <Button variant="outline" className="gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:hidden">
          <Link href="/products">
            <Button size="lg" className="gap-2">
              View All Products <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
