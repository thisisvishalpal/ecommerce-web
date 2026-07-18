import { LogOut, MapPin, Package, Settings, ShieldCheck, User } from "lucide-react"
import { signOutAction } from "@/lib/auth/actions"
import type { AccountAddress, AccountOrder, AccountProfile } from "@/lib/account/types"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountNotice } from "@/components/account/AccountNotice"
import { AddressesPanel } from "@/components/account/AddressesPanel"
import { OrdersPanel } from "@/components/account/OrdersPanel"
import { PreferencesPanel } from "@/components/account/PreferencesPanel"
import { ProfilePanel } from "@/components/account/ProfilePanel"
import { SecurityPanel } from "@/components/account/SecurityPanel"

type AccountDashboardProps = {
  profile: AccountProfile
  email: string
  orders: AccountOrder[]
  addresses: AccountAddress[]
  error?: string
  message?: string
}

export function AccountDashboard({
  profile,
  email,
  orders,
  addresses,
  error,
  message,
}: AccountDashboardProps) {
  const displayName = profile.full_name || email

  return (
    <div className="min-h-screen bg-background py-12">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Customer account
              </p>
              <h1 className="text-3xl font-semibold text-foreground">Welcome, {displayName}</h1>
              <p className="mt-2 text-muted-foreground">
                Manage your profile, orders, addresses, and communication preferences.
              </p>
            </div>

            <form action={signOutAction}>
              <Button type="submit" variant="outline" className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </form>
          </div>

          <div className="mb-6">
            <AccountNotice error={error} message={message} />
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-8 grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-5">
              <TabsTrigger value="profile" className="gap-2 py-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2 py-2">
                <ShieldCheck className="h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="orders" className="gap-2 py-2">
                <Package className="h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="addresses" className="gap-2 py-2">
                <MapPin className="h-4 w-4" />
                Addresses
              </TabsTrigger>
              <TabsTrigger value="preferences" className="gap-2 py-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <ProfilePanel profile={profile} email={email} />
            </TabsContent>
            <TabsContent value="security">
              <SecurityPanel />
            </TabsContent>
            <TabsContent value="orders">
              <OrdersPanel orders={orders} />
            </TabsContent>
            <TabsContent value="addresses">
              <AddressesPanel addresses={addresses} />
            </TabsContent>
            <TabsContent value="preferences">
              <PreferencesPanel preferences={profile.preferences} />
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </div>
  )
}
