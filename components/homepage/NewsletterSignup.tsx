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
    <section className="py-16 lg:py-20 bg-background">
      <Container>
        <div className="bg-primary rounded p-8 sm:p-12 lg:p-16 text-center text-primary-foreground max-w-2xl mx-auto">
          <Mail className="w-8 h-8 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="mb-10 text-primary-foreground/95 leading-relaxed text-sm sm:text-base">
            Get exclusive offers, new product launches, design tips, and more delivered to your inbox every week.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground text-primary placeholder:text-primary/50 border-0 h-11 flex-1 rounded"
              required
            />
            <Button
              type="submit"
              className="bg-background text-primary hover:bg-background/95 px-6 font-semibold whitespace-nowrap h-11 rounded transition-colors"
            >
              {isSubmitted ? 'Thank you!' : 'Subscribe'}
            </Button>
          </form>

          <p className="text-xs text-primary-foreground/75 mt-6">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </section>
  )
}
