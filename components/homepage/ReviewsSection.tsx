import { Container } from '@/components/layout/Container'
import { ResponsiveCarousel } from '@/components/layout/ResponsiveCarousel'
import { Card } from '@/components/ui/card'
import { testimonials } from '@/lib/storefront'
import { CheckCircle } from 'lucide-react'

export function ReviewsSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <Container>
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Customer Love</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">What Our Customers Say</h2>
        </div>

        <ResponsiveCarousel
          ariaLabel="Customer reviews"
          gridClassName="md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8"
          itemClassName="min-w-[78%] sm:min-w-[44%]"
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-muted/40 border border-border/60 p-6 lg:p-8 flex flex-col hover:border-border/80 transition-colors">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-primary text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 flex-grow leading-relaxed text-sm">{testimonial.content}</p>

              {/* Author Info */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-foreground text-sm">{testimonial.author}</div>
                  {testimonial.verified && (
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  )}
                </div>
                {testimonial.role && (
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.role}</div>
                )}
              </div>
            </Card>
          ))}
        </ResponsiveCarousel>
      </Container>
    </section>
  )
}
