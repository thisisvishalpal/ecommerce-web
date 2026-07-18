'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="bg-primary rounded-sm p-12 text-center text-primary-foreground max-w-2xl mx-auto">
          <Mail className="w-8 h-8 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="mb-8 text-primary-foreground/90 leading-relaxed">
            Get exclusive offers, new product launches, design tips, and more delivered to your inbox every week.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground text-primary placeholder:text-primary/50 border-0"
              required
            />
            <Button
              type="submit"
              className="bg-background text-primary hover:bg-background/90 px-6 font-semibold whitespace-nowrap"
            >
              {isSubmitted ? 'Thank you!' : 'Subscribe'}
            </Button>
          </form>

          <p className="text-xs text-primary-foreground/70 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </section>
  )
}
