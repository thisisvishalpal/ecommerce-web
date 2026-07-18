'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { CreditCard, Smartphone, Banknote, Wallet, Truck } from 'lucide-react'

const paymentMethods = [
  { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Google Pay, PhonePe, Paytm' },
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Amex' },
  { id: 'netbanking', name: 'Net Banking', icon: Banknote, description: 'All major banks' },
  { id: 'wallet', name: 'Digital Wallet', icon: Wallet, description: 'Amazon Pay, etc' },
  { id: 'cod', name: 'Cash on Delivery', icon: Truck, description: 'Pay when you receive' },
]

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [selectedPayment, setSelectedPayment] = useState('upi')

  const subtotal = 6397
  const tax = 640
  const shipping = 0
  const total = subtotal + tax + shipping

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-foreground mb-2">Checkout</h1>
            <p className="text-muted-foreground">Complete your purchase securely</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="contact" onClick={() => setStep(1)}>
                    Contact
                  </TabsTrigger>
                  <TabsTrigger value="shipping" onClick={() => setStep(2)}>
                    Shipping
                  </TabsTrigger>
                  <TabsTrigger value="payment" onClick={() => setStep(3)}>
                    Payment
                  </TabsTrigger>
                </TabsList>

                {/* Contact Info */}
                <TabsContent value="contact" className="space-y-4">
                  <div className="bg-muted rounded-sm p-6 border border-border">
                    <h2 className="text-lg font-semibold text-foreground mb-4">Contact Information</h2>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          className="bg-background border-border"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="bg-background border-border"
                        />
                      </div>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span className="text-sm text-muted-foreground">
                          Email me with news and special offers
                        </span>
                      </label>

                      <Button
                        onClick={() => setStep(2)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                      >
                        Continue to Shipping
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Shipping Address */}
                <TabsContent value="shipping" className="space-y-4">
                  <div className="bg-muted rounded-sm p-6 border border-border">
                    <h2 className="text-lg font-semibold text-foreground mb-4">Shipping Address</h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            First Name
                          </label>
                          <Input placeholder="John" className="bg-background border-border" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Last Name
                          </label>
                          <Input placeholder="Doe" className="bg-background border-border" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Address
                        </label>
                        <Input
                          placeholder="123 Main St"
                          className="bg-background border-border"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            City
                          </label>
                          <Input placeholder="Mumbai" className="bg-background border-border" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Pincode
                          </label>
                          <Input
                            placeholder="400001"
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">State</label>
                        <select className="w-full px-3 py-2 border border-border rounded-sm bg-background text-foreground">
                          <option>Maharashtra</option>
                          <option>Delhi</option>
                          <option>Karnataka</option>
                        </select>
                      </div>

                      <Button
                        onClick={() => setStep(3)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Payment Method */}
                <TabsContent value="payment" className="space-y-4">
                  <div className="bg-muted rounded-sm p-6 border border-border">
                    <h2 className="text-lg font-semibold text-foreground mb-6">Select Payment Method</h2>

                    <div className="space-y-3 mb-8">
                      {paymentMethods.map((method) => {
                        const Icon = method.icon
                        return (
                          <label
                            key={method.id}
                            className="block cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="payment"
                              value={method.id}
                              checked={selectedPayment === method.id}
                              onChange={() => setSelectedPayment(method.id)}
                              className="sr-only"
                            />
                            <div
                              className={`p-4 border-2 rounded-sm transition-colors ${
                                selectedPayment === method.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Icon className="w-6 h-6 text-primary" />
                                <div>
                                  <p className="font-semibold text-foreground">{method.name}</p>
                                  <p className="text-xs text-muted-foreground">{method.description}</p>
                                </div>
                              </div>
                            </div>
                          </label>
                        )
                      })}
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                    >
                      Complete Purchase
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Your payment information is secure and encrypted
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-sm p-6 border border-border sticky top-20">
                <h2 className="text-lg font-bold text-foreground mb-4">Order Summary</h2>

                {/* Items */}
                <div className="space-y-3 mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tech Organizer Pro</span>
                    <span className="text-foreground font-medium">₹2,499</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Laptop Sleeve Premium x2</span>
                    <span className="text-foreground font-medium">₹3,798</span>
                  </div>
                </div>

                {/* Calculations */}
                <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
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
                    <span className="text-primary font-medium">FREE</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary">₹{total.toLocaleString()}</span>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-4 border-t border-border space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    Secure SSL encrypted
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    30-day returns
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    Expert support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
