'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const heroSlides = [
  {
    title: 'Purposefully Designed.',
    image: '/hero-bg.png',
    imageAlt: 'Premium workspace setup',
    primaryCta: 'Shop Collection',
    primaryHref: '/products',
  },
  {
    title: 'Build a Better Workday.',
    image: '/categories/desk-accessories.png',
    imageAlt: 'Curated desk accessories',
    primaryCta: 'Shop Desk',
    primaryHref: '/products?category=desk',
  },
  {
    title: 'Carry Work Anywhere.',
    image: '/products/traveler-backpack.png',
    imageAlt: 'Travel-ready work gear',
    primaryCta: 'Shop Travel',
    primaryHref: '/products?category=travel',
  },
]

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]

  const goToPrevious = () => {
    setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveSlide((current) => (current === heroSlides.length - 1 ? 0 : current + 1))
  }

  useEffect(() => {
    const interval = window.setInterval(goToNext, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-foreground text-white">
      <div className="relative min-h-[82svh] lg:min-h-[88svh]">
        {heroSlides.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover transition-opacity duration-500 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/16" />

        <div className="relative z-10 flex min-h-[82svh] items-center px-4 pb-16 pt-28 sm:px-6 sm:py-14 lg:min-h-[88svh] lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <h1 className="mb-6 max-w-2xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>

              <div className="flex items-center justify-center">
                <Link href={slide.primaryHref}>
                  <Button size="sm" className="h-9 bg-primary px-4 text-xs text-primary-foreground hover:bg-primary/90 sm:h-11 sm:px-6 sm:text-sm">
                    {slide.primaryCta}
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-4 right-4 z-20 hidden sm:block sm:left-6 sm:right-6 lg:left-8 lg:right-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {heroSlides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-white' : 'w-3 bg-white/42 hover:bg-white/70'}`}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/28 bg-black/20 text-white backdrop-blur transition hover:bg-white/14"
                aria-label="Previous hero slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/28 bg-black/20 text-white backdrop-blur transition hover:bg-white/14"
                aria-label="Next hero slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
