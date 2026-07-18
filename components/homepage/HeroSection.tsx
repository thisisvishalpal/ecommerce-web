import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/Container'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2000&q=80"
          alt="Premium workspace setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <Container>
        <div className="max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Welcome to FORM & FUNCTION
            </span>
          </div>

          <h1 className="mb-6 text-white text-balance">
            Designed for work. Built for movement.
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Premium desk and travel accessories crafted for professionals who demand quality, functionality, and timeless design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
                className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              >
                Explore Featured
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/70">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">5★</div>
              <div className="text-sm text-white/70">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/70">Premium Quality</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
