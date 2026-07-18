import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { categories } from '@/lib/storefront'
import { ArrowRight } from 'lucide-react'

export function CategoryCards() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Shop by</span>
          <h2 className="text-4xl font-bold mt-2 text-foreground">Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.slug}`}>
              <div className="group relative overflow-hidden rounded-sm bg-muted aspect-square cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-white/80 mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform">
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
