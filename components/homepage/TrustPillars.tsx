import { Container } from '@/components/layout/Container'
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
    <section className="py-20 bg-muted">
      <Container>
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Why Choose Us</span>
          <h2 className="text-4xl font-bold mt-2 text-foreground">We Take Pride in Every Detail</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className="bg-background rounded-sm p-6 border border-border">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
