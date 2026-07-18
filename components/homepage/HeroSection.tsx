import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/Container'
import { ArrowRight, Check } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-muted via-background to-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex items-center justify-center lg:justify-start py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="mb-8 inline-block">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase px-4 py-2 bg-primary/10 rounded-full">
                Welcome to FORM & FUNCTION
              </span>
            </div>

            <h1 className="mb-6 text-foreground text-balance text-5xl lg:text-6xl font-bold leading-tight">
              Designed for work. Built for movement.
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Premium desk and travel accessories crafted for professionals who demand quality, functionality, and timeless design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Shop Collection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="#featured">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted w-full sm:w-auto"
                >
                  Explore Featured
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Free shipping on orders over ₹2,500</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">30-day hassle-free returns</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">100% premium quality guaranteed</span>
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
