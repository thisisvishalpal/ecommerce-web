import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { ResponsiveCarousel } from '@/components/layout/ResponsiveCarousel'
import { buttonVariants } from '@/components/ui/button'
import { bundles, formatPrice } from '@/lib/storefront'
import { ArrowRight } from 'lucide-react'

export function BundlesSection() {
  return (
    <section id="bundles" className="py-16 lg:py-20 bg-muted/50">
      <Container>
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Save More</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">Curated Bundles</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
            Get everything you need at an unbeatable price. Our expertly curated bundles help you save while getting the perfect combination.
          </p>
        </div>

        <ResponsiveCarousel ariaLabel="Curated bundles" gridClassName="md:grid-cols-3 md:gap-6 lg:gap-8">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="bg-background rounded overflow-hidden border border-border/60 group cursor-pointer hover:border-border hover:shadow-sm-premium transition-all duration-300">
              <Link href={`/products?bundle=${bundle.id}`}>
                <div className="relative overflow-hidden bg-muted h-56 sm:h-64">
                  <Image
                    src={bundle.image}
                    alt={bundle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded text-xs sm:text-sm font-semibold">
                    Save {formatPrice(bundle.savings)}
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 line-clamp-2">{bundle.name}</h3>
                  <p className="text-muted-foreground text-sm mb-5 line-clamp-2">{bundle.description}</p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-xl sm:text-2xl font-bold text-foreground">
                      {formatPrice(bundle.bundlePrice)}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground line-through">
                      {formatPrice(bundle.originalPrice)}
                    </span>
                  </div>

                  <span className={buttonVariants({ size: 'lg', className: 'w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2' })}>
                    View Bundle <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </ResponsiveCarousel>
      </Container>
    </section>
  )
}
