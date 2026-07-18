import { Container } from '@/components/layout/Container'
import { ResponsiveCarousel } from '@/components/layout/ResponsiveCarousel'
import { Truck, RotateCcw, Lock, Award } from 'lucide-react'

const trustPillars = [
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Free shipping on orders above ₹2,500 across India',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Hassle-free returns within 30 days of purchase',
  },
  {
    icon: Lock,
    title: 'Secure Checkout',
    description: 'Your payments and data are completely secure',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Every product is crafted with meticulous attention to detail',
  },
]

export function TrustPillars() {
  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <Container>
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">We Take Pride in Every Detail</h2>
        </div>

        <ResponsiveCarousel
          ariaLabel="Why choose us"
          gridClassName="md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8"
          itemClassName="min-w-[78%] sm:min-w-[44%]"
        >
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className="bg-background rounded p-6 lg:p-8 border border-border/60 hover:border-border transition-colors">
                <Icon className="w-8 h-8 text-primary mb-5" />
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </ResponsiveCarousel>
      </Container>
    </section>
  )
}
