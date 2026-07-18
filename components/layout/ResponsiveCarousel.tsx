'use client'

import { Children, ReactNode, useCallback, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface ResponsiveCarouselProps {
  children: ReactNode
  ariaLabel: string
  className?: string
  gridClassName?: string
  itemClassName?: string
}

export function ResponsiveCarousel({
  children,
  ariaLabel,
  className,
  gridClassName,
  itemClassName,
}: ResponsiveCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const normalizeTimerRef = useRef<number | null>(null)
  const items = Children.toArray(children)

  const getLoopWidth = useCallback(() => {
    const scroller = scrollRef.current
    if (!scroller || window.innerWidth >= 768) return 0

    return scroller.scrollWidth / 3
  }, [])

  const normalizeLoopPosition = useCallback(() => {
    const scroller = scrollRef.current
    const loopWidth = getLoopWidth()
    if (!scroller || loopWidth === 0) return

    if (scroller.scrollLeft < loopWidth * 0.35) {
      scroller.scrollLeft += loopWidth
    } else if (scroller.scrollLeft > loopWidth * 1.65) {
      scroller.scrollLeft -= loopWidth
    }
  }, [getLoopWidth])

  const scheduleLoopNormalization = useCallback(() => {
    if (normalizeTimerRef.current) {
      window.clearTimeout(normalizeTimerRef.current)
    }

    normalizeTimerRef.current = window.setTimeout(normalizeLoopPosition, 120)
  }, [normalizeLoopPosition])

  useEffect(() => {
    const scroller = scrollRef.current
    if (!scroller || items.length === 0) return

    const frame = window.requestAnimationFrame(() => {
      const loopWidth = getLoopWidth()
      if (loopWidth > 0) {
        scroller.scrollLeft = loopWidth
      }
    })

    return () => {
      window.cancelAnimationFrame(frame)
      if (normalizeTimerRef.current) {
        window.clearTimeout(normalizeTimerRef.current)
      }
    }
  }, [getLoopWidth, items.length])

  const renderItems = (group: 'before' | 'main' | 'after') =>
    items.map((child, index) => (
      <div
        key={`${group}-${index}`}
        data-carousel-item={group === 'before' && index === 0 ? true : undefined}
        className={cn(
          'min-w-[84%] snap-start sm:min-w-[46%] md:min-w-0',
          group !== 'main' && 'md:hidden',
          itemClassName
        )}
      >
        {child}
      </div>
    ))

  return (
    <div className={cn('relative', className)}>
      <div
        ref={scrollRef}
        aria-label={ariaLabel}
        onScroll={scheduleLoopNormalization}
        className={cn(
          'landing-carousel -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0',
          gridClassName
        )}
      >
        {renderItems('before')}
        {renderItems('main')}
        {renderItems('after')}
      </div>
    </div>
  )
}
