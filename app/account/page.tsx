'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { User, Package, MapPin, LogOut, ChevronRight } from 'lucide-react'

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
  }

  // Mock orders
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-07-15',
      total: 6397,
      status: 'Delivered',
      items: 3,
    },
    {
      id: 'ORD-002',
      date: '2024-07-08',
      total: 2499,
      status: 'Processing',
      items: 1,
    },
    {
      id: 'ORD-003',
      date: '2024-06-30',
      total: 5998,
      status: 'Delivered',
      items: 2,
    },
  ]

  // Mock addresses
  const addresses = [
    {
      id: 1,
      label: 'Home',
      address: '123 Main St, Mumbai, Maharashtra 400001',
      isDefault: true,
    },
    {
      id: 2,
      label: 'Office',
      address: '456 Business Ave, Mumbai, Maharashtra 400002',
      isDefault: false,
    },
  ]

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Account</h1>
              <p className="text-muted-foreground">Manage your profile and orders</p>
            </div>
            <Button variant="outline" className="gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="profile" className="gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="gap-2">
                <Package className="w-4 h-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="addresses" className="gap-2">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Addresses</span>
              </TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div className="bg-muted rounded-sm p-6 border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-4">Personal Information</h2>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                      <Input
                        defaultValue={user.name}
                        className="bg-background border-border"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input
                        type="email"
                        defaultValue={user.email}
                        className="bg-background border-border"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                      <Input
                        defaultValue={user.phone}
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => setIsEditing(false)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Save Changes
                      </Button>
                      <Button
                        onClick={() => setIsEditing(false)}
                        variant="outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                        Full Name
                      </p>
                      <p className="text-foreground">{user.name}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                        Email
                      </p>
                      <p className="text-foreground">{user.email}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                        Phone
                      </p>
                      <p className="text-foreground">{user.phone}</p>
                    </div>

                    <Button
                      onClick={() => setIsEditing(true)}
                      variant="outline"
                      className="mt-4"
                    >
                      Edit Profile
                    </Button>
                  </div>
                )}
              </div>

              {/* Change Password */}
              <div className="bg-muted rounded-sm p-6 border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-4">Security</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Current Password
                    </label>
                    <Input
                      type="password"
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      New Password
                    </label>
                    <Input
                      type="password"
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      className="bg-background border-border"
                    />
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Update Password
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-4">
              {orders.length > 0 ? (
                <div className="space-y-3">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-muted rounded-sm p-4 border border-border hover:border-primary transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{order.id}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-foreground">
                            ₹{order.total.toLocaleString()}
                          </p>
                          <Badge
                            className={`mt-1 ${
                              order.status === 'Delivered'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {order.status}
                          </Badge>
                        </div>

                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {order.items} item{order.items > 1 ? 's' : ''}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground">No orders yet</p>
                </div>
              )}
            </TabsContent>

            {/* Addresses Tab */}
            <TabsContent value="addresses" className="space-y-4">
              {addresses.length > 0 ? (
                <>
                  <div className="space-y-3 mb-6">
                    {addresses.map((addr) => (
                      <div
                        key={addr.id}
                        className="bg-muted rounded-sm p-4 border border-border"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-foreground">{addr.label}</p>
                              {addr.isDefault && (
                                <Badge variant="outline">Default</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">{addr.address}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    Add New Address
                  </Button>
                </>
              ) : (
                <div className="text-center py-12">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-4">No addresses saved</p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Add Address
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-4">
              <div className="bg-muted rounded-sm p-6 border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-4">Notification Preferences</h2>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <div>
                      <p className="font-medium text-foreground">Order Updates</p>
                      <p className="text-xs text-muted-foreground">
                        Get notified about your order status
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <div>
                      <p className="font-medium text-foreground">Promotional Emails</p>
                      <p className="text-xs text-muted-foreground">
                        Receive special offers and updates
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <div>
                      <p className="font-medium text-foreground">Product Reviews</p>
                      <p className="text-xs text-muted-foreground">
                        Be asked to review products you&apos;ve purchased
                      </p>
                    </div>
                  </label>
                </div>

                <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Save Preferences
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </div>
  )
}
