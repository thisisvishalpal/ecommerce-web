import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Check, Gift, Zap, Users, Sparkles } from 'lucide-react'

export function CorporateGifting() {
  const features = [
    {
      icon: Gift,
      title: 'Bulk Ordering',
      description: 'Order in large quantities with special corporate pricing',
    },
    {
      icon: Zap,
      title: 'Quick Delivery',
      description: 'Fast turnaround times for corporate orders',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal account manager for your corporate needs',
    },
    {
      icon: Sparkles,
      title: 'Custom Branding',
      description: 'Option to customize products with your brand',
    },
  ]

  const benefits = [
    'Employee recognition and motivation',
    'Client and partner appreciation gifts',
    'Trade show and event giveaways',
    'Year-end seasonal gifting',
    'Team building initiatives',
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              For Your Business
            </p>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Corporate Gifting Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Strengthen your business relationships with premium desk and travel accessories. 
              Perfect for employee gifts, client appreciation, and brand building.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/corporate-gifting">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-background rounded-sm p-6 border border-border hover:border-primary transition-colors group"
                >
                  <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">500+</p>
            <p className="text-foreground">Corporate Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">50K+</p>
            <p className="text-foreground">Gifts Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">4.9★</p>
            <p className="text-foreground">Client Rating</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
