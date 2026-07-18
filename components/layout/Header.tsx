'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Menu, Search, User, Heart, ShoppingBag } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const mobileNavLinks = [
    { label: 'Shop', href: '/products' },
    { label: 'Account', href: '/account' },
    { label: 'Wishlist', href: '/wishlist' },
    { label: 'Cart', href: '/cart' },
    { label: 'About', href: '#' },
  ]

  const shopMenuItems = [
    {
      label: 'Desk',
      href: '/products?category=desk',
      image: '/categories/desk-accessories.png',
      description: 'Focused workspace essentials',
    },
    {
      label: 'Travel',
      href: '/products?category=travel',
      image: '/products/traveler-backpack.png',
      description: 'Carry-ready work gear',
    },
    {
      label: 'Bundles',
      href: '/#bundles',
      image: '/products/bundle-workspace.png',
      description: 'Curated business kits',
    },
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
              <div className="font-heading text-lg font-semibold text-foreground">
                ecomguru
              </div>
              <div className="text-xs text-muted-foreground">Smarter shopping</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="group relative">
                <Link
                  href="/products"
                  className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  Shop
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-5 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-sm border border-border bg-card p-4 shadow-lg">
                    <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">Shop Collections</p>
                        <p className="text-xs text-muted-foreground">Browse by workflow, travel, or ready-made kits.</p>
                      </div>
                      <Link href="/products" className="text-xs font-semibold text-primary hover:underline">
                        View all
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {shopMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/item overflow-hidden rounded-sm border border-border bg-background transition-colors hover:border-primary"
                        >
                          <div className="relative h-28 bg-muted">
                            <Image
                              src={item.image}
                              alt={item.label}
                              fill
                              sizes="220px"
                              className="object-cover transition-transform duration-200 group-hover/item:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                          </div>
                          <div className="p-3">
                            <p className="text-sm font-semibold text-foreground">{item.label}</p>
                            <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* Search */}
              <button className="p-2 hover:bg-muted rounded transition-colors">
                <Search className="w-5 h-5 text-foreground" />
              </button>

              {/* Account */}
              <Link href="/account" className="p-2 hover:bg-muted rounded transition-colors">
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
                <SheetTrigger className="lg:hidden p-2 hover:bg-muted rounded transition-colors">
                  <Menu className="w-5 h-5 text-foreground" />
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <div className="flex flex-col gap-6 mt-8">
                    {mobileNavLinks.map((link) => (
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
