'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, User, Heart, ShoppingBag, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Shop', href: '/products' },
    { label: 'Desk', href: '/products?category=desk' },
    { label: 'Travel', href: '/products?category=travel' },
    { label: 'Bundles', href: '/products?category=bundles' },
    { label: 'About', href: '#' },
  ]

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        FREE shipping on all orders over ₹2,500
      </div>

      {/* Main Header */}
      <header className="w-full bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-lg font-bold tracking-tight text-foreground">
                FORM & FUNCTION
              </div>
              <div className="text-xs text-muted-foreground">Designed for work</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* Search */}
              <button className="p-2 hover:bg-muted rounded transition-colors">
                <Search className="w-5 h-5 text-foreground" />
              </button>

              {/* Account */}
              <Link href="/account/login" className="p-2 hover:bg-muted rounded transition-colors">
                <User className="w-5 h-5 text-foreground" />
              </Link>

              {/* Wishlist */}
              <Link href="/wishlist" className="p-2 hover:bg-muted rounded transition-colors">
                <Heart className="w-5 h-5 text-foreground" />
              </Link>

              {/* Cart */}
              <Link href="/cart" className="p-2 hover:bg-muted rounded transition-colors relative">
                <ShoppingBag className="w-5 h-5 text-foreground" />
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <button className="p-2 hover:bg-muted rounded transition-colors lg:hidden">
                    <Menu className="w-5 h-5 text-foreground" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <div className="flex flex-col gap-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
