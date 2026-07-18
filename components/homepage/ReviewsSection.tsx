import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/card'
import { testimonials } from '@/lib/storefront'
import { CheckCircle } from 'lucide-react'

export function ReviewsSection() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Customer Love</span>
          <h2 className="text-4xl font-bold mt-2 text-foreground">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-muted border-border p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-4 flex-grow leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author Info */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-foreground text-sm">{testimonial.author}</div>
                  {testimonial.verified && (
                    <CheckCircle className="w-4 h-4 text-primary" />
                  )}
                </div>
                {testimonial.role && (
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
