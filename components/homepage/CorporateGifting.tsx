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
    <section className="py-16 lg:py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase mb-4">
              For Your Business
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Corporate Gifting Solutions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Strengthen your business relationships with premium desk and travel accessories. 
              Perfect for employee gifts, client appreciation, and brand building.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3.5 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/corporate-gifting" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </Link>
              <Link href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-muted/30 rounded p-6 lg:p-8 border border-border/60 hover:border-border hover:bg-muted/50 transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mt-16 pt-12 lg:pt-16 border-t border-border">
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">500+</p>
            <p className="text-foreground text-sm">Corporate Clients</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">50K+</p>
            <p className="text-foreground text-sm">Gifts Delivered</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">4.9★</p>
            <p className="text-foreground text-sm">Client Rating</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
