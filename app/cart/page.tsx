'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, X } from 'lucide-react'

// Mock cart items for demo
const mockCartItems = [
  {
    id: 'p-001',
    name: 'Tech Organizer Pro',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=500&q=80',
    quantity: 1,
    color: 'Natural',
  },
  {
    id: 'p-002',
    name: 'Laptop Sleeve Premium',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80',
    quantity: 2,
    size: '13"',
  },
]

export default function CartPage() {
  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = Math.round(subtotal * 0.1)
  const shipping = subtotal > 2500 ? 0 : 99
  const total = subtotal + tax + shipping

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <Link href="/products" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Shopping Bag</h1>
        </div>

        {mockCartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {mockCartItems.map((item) => (
                <div
                  key={`${item.id}-${item.color}-${item.size}`}
                  className="bg-muted rounded-sm p-4 border border-border flex gap-4"
                >
                  <div className="w-24 h-24 bg-background rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                    <div className="text-xs text-muted-foreground space-y-1 mb-3">
                      {item.color && <p>Color: {item.color}</p>}
                      {item.size && <p>Size: {item.size}</p>}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-background rounded border border-border">
                        <button className="w-6 h-6 flex items-center justify-center hover:bg-muted text-xs">
                          -
                        </button>
                        <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                        <button className="w-6 h-6 flex items-center justify-center hover:bg-muted text-xs">
                          +
                        </button>
                      </div>
                      <p className="font-semibold text-foreground">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <button className="self-start p-2 hover:bg-background rounded transition-colors">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-sm p-6 border border-border sticky top-20 space-y-4">
                <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

                {/* Promo Code */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Promo Code</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      className="text-sm bg-background border-border"
                    />
                    <Button variant="outline" className="px-3">Apply</Button>
                  </div>
                </div>

                {/* Calculations */}
                <div className="space-y-2 text-sm border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span className="text-foreground">₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">
                      {shipping === 0 ? 'FREE' : `₹${shipping}`}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-border pt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-primary">₹{total.toLocaleString()}</span>
                  </div>

                  <Link href="/checkout">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <Link href="/products">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                {/* Shipping Info */}
                {shipping === 0 && (
                  <div className="bg-primary/10 border border-primary/20 rounded p-3 text-xs text-primary">
                    You qualified for free shipping!
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your bag is empty</h2>
            <p className="text-muted-foreground mb-8">
              Explore our collection and find something you love
            </p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  )
}
