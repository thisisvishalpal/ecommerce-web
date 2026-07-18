'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight, Package, Users, Zap, Truck, Award, Lightbulb } from 'lucide-react'

export default function CorporateGiftingPage() {
  const [formStep, setFormStep] = useState(1)

  const giftingTiers = [
    {
      name: 'Starter',
      quantity: '50-100 units',
      discount: '15%',
      description: 'Perfect for small teams and events',
      features: ['Bulk discount', 'Standard delivery', 'Email support', 'Invoice payment'],
    },
    {
      name: 'Professional',
      quantity: '101-500 units',
      discount: '20%',
      description: 'Ideal for medium-scale gifting',
      features: [
        'Priority discount',
        'Express delivery',
        'Dedicated manager',
        'Flexible payment terms',
        'Custom packaging',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      quantity: '500+ units',
      discount: '30%',
      description: 'Custom solutions for large organizations',
      features: [
        'Maximum discount',
        'White-glove service',
        'Dedicated account manager',
        'Custom branding',
        'Multi-location delivery',
        'Extended credit terms',
      ],
    },
  ]

  const useCases = [
    {
      icon: Users,
      title: 'Employee Recognition',
      description: 'Motivate your team with premium gifts for milestones and achievements',
    },
    {
      icon: Package,
      title: 'Client Appreciation',
      description: 'Strengthen relationships with thoughtful, quality gifts',
    },
    {
      icon: Award,
      title: 'Event Giveaways',
      description: 'Create memorable impressions at trade shows and conferences',
    },
    {
      icon: Zap,
      title: 'Seasonal Gifting',
      description: 'Year-end gifting and festive season client appreciation',
    },
    {
      icon: Lightbulb,
      title: 'Brand Building',
      description: 'Promote your brand through customized corporate gifts',
    },
    {
      icon: Truck,
      title: 'Bulk Distribution',
      description: 'Efficient delivery to multiple locations and recipients',
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              Bulk Solutions
            </p>
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Corporate Gifting Done Right
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Premium desk and travel accessories for your business needs. From employee recognition 
              to client appreciation, we&apos;ve got the perfect gifts for every occasion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setFormStep(1)}
              >
                Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Catalog
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div key={index} className="p-6 border border-border rounded-sm hover:border-primary transition-colors">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">The more you order, the more you save</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-8 rounded-sm border-2 transition-all ${
                  tier.popular ? 'border-primary bg-primary/5 relative' : 'border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.quantity}</p>

                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary">{tier.discount}</p>
                  <p className="text-sm text-muted-foreground">bulk discount</p>
                </div>

                <p className="text-foreground text-sm mb-6">{tier.description}</p>

                <Button
                  className={`w-full mb-6 ${
                    tier.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : ''
                  }`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>

                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '1',
                title: 'Request Quote',
                description: 'Tell us your quantity, budget, and preferences',
              },
              {
                number: '2',
                title: 'Browse Catalog',
                description: 'Choose from our curated collection of premium products',
              },
              {
                number: '3',
                title: 'Place Order',
                description: 'Confirm your selection and delivery preferences',
              },
              {
                number: '4',
                title: 'Delivery',
                description: 'We handle logistics and deliver on schedule',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-full">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-muted">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Get Your Quote</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input placeholder="John Doe" className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company
                  </label>
                  <Input placeholder="Your Company" className="bg-background border-border" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="john@company.com" className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone
                  </label>
                  <Input type="tel" placeholder="+91 98765 43210" className="bg-background border-border" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Required Quantity
                  </label>
                  <Input placeholder="e.g., 250" className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Budget (Optional)
                  </label>
                  <Input placeholder="₹" className="bg-background border-border" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Gifting Purpose
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground">
                  <option>Select...</option>
                  <option>Employee Recognition</option>
                  <option>Client Appreciation</option>
                  <option>Event Giveaways</option>
                  <option>Seasonal Gifting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                Submit Quote Request
              </Button>
            </form>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What is the minimum order quantity?',
                a: 'We accept orders starting from 50 units. Special custom projects may have different minimums.',
              },
              {
                q: 'Can we customize the products with our logo?',
                a: 'Yes! We offer custom branding options for orders above 250 units. Contact our team for details.',
              },
              {
                q: 'What is the typical delivery timeline?',
                a: 'Standard delivery is 7-10 business days. Express options available for rush orders.',
              },
              {
                q: 'Do you offer payment terms for corporate orders?',
                a: 'Yes! We offer flexible payment terms for qualified corporate clients.',
              },
            ].map((faq, index) => (
              <div key={index} className="border border-border rounded-sm p-6">
                <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
