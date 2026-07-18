'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="w-full bg-muted text-foreground mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-10 sm:mb-16 pb-10 sm:pb-16 border-b border-border">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-sm leading-6 text-muted-foreground lg:mb-6">
              Get exclusive offers, new product launches, and design tips delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:self-start">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-10 flex-1 bg-background border-border"
            />
            <Button className="h-10 w-full bg-primary hover:bg-primary/90 text-primary-foreground sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-9 mb-10 sm:mb-12">
          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">Shop</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link href="/products" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=desk" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Desk Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=travel" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Travel Gear
                </Link>
              </li>
              <li>
                <Link href="/#bundles" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Bundles
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/corporate-gifting" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Corporate Gifting
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-1 text-sm text-muted-foreground hover:text-foreground transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo and Tagline */}
          <div>
            <h3 className="font-bold text-lg">ecomguru</h3>
            <p className="mt-1 text-sm text-muted-foreground">Smarter shopping for modern living.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground hover:text-primary transition">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground hover:text-primary transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground hover:text-primary transition">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground hover:text-primary transition">
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-xs text-muted-foreground">Accepted payments</span>
            <div className="flex gap-2">
              <div className="px-2.5 py-1.5 bg-background rounded-sm border border-border text-xs font-medium">UPI</div>
              <div className="px-2.5 py-1.5 bg-background rounded-sm border border-border text-xs font-medium">Cards</div>
              <div className="px-2.5 py-1.5 bg-background rounded-sm border border-border text-xs font-medium">COD</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6 sm:pt-8 text-left sm:text-center text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} ecomguru. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
