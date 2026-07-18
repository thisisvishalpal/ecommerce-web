import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { ResponsiveCarousel } from '@/components/layout/ResponsiveCarousel'
import { categories } from '@/lib/storefront'
import { ArrowRight } from 'lucide-react'

export function CategoryCards() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <Container>
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Shop by</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">Collections</h2>
        </div>

        <ResponsiveCarousel ariaLabel="Shop collections" gridClassName="md:grid-cols-3 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group block h-full overflow-hidden rounded border border-border/60 bg-card transition-all duration-300 hover:border-border hover:shadow-sm-premium"
            >
              <div className="relative overflow-hidden bg-muted aspect-[4/3]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex min-h-36 flex-col justify-between p-5 sm:p-6">
                <div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary">Collection</p>
                  <h3 className="text-lg sm:text-xl font-semibold leading-tight text-card-foreground">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">{category.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-sm font-semibold text-primary">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </ResponsiveCarousel>
      </Container>
    </section>
  )
}
