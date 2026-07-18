import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/Container'
import { ArrowRight, Check } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex items-center justify-center lg:justify-start py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="mb-6 inline-block">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase px-3 py-1.5 bg-primary/8 rounded">
                Welcome to ecomguru
              </span>
            </div>

            <h1 className="mb-4 text-foreground text-balance text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Purposefully Designed.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Premium desk and travel accessories crafted for professionals who demand quality, functionality, and timeless design.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link href="/products" className="w-full sm:w-auto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full h-11 px-6">
                  Shop Collection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="#featured" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted w-full h-11 px-6"
                >
                  Explore Featured
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">Free shipping on orders over ₹2,500</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">30-day hassle-free returns</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">100% premium quality guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 lg:h-auto lg:min-h-screen flex items-center justify-center">
          <div className="relative w-full h-full max-w-md lg:max-w-none">
            <Image
              src="/hero-bg.png"
              alt="Premium workspace setup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-2xl lg:rounded-none"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl lg:rounded-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
