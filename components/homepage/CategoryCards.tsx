import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.slug}`}>
              <div className="group relative overflow-hidden rounded bg-muted aspect-square cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500" />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">{category.name}</h3>
                  <p className="text-sm text-white/85 mb-6 line-clamp-2">{category.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
