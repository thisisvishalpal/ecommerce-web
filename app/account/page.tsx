import { AccountDashboard } from "@/components/account/AccountDashboard"
import { SignedOutAccount } from "@/components/account/SignedOutAccount"
import type { AccountAddress, AccountOrder, AccountProfile } from "@/lib/account/types"
import { createClient } from "@/lib/supabase/server"

type AccountPageProps = {
  searchParams: Promise<{
    error?: string
    message?: string
  }>
}

function createFallbackProfile(userId: string, email: string | null): AccountProfile {
  return {
    id: userId,
    email,
    full_name: null,
    phone: null,
    role: "customer",
    preferences: {
      order_updates: true,
      promotional_emails: true,
      product_reviews: false,
    },
    created_at: new Date().toISOString(),
  }
}

export default async function AccountPage({ searchParams }: AccountPageProps) {
  const params = await searchParams
  const supabase = await createClient()

  if (!supabase) {
    return <SignedOutAccount />
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return <SignedOutAccount />
  }

  const [{ data: profileData }, { data: addressData }, { data: orderData }] = await Promise.all([
    supabase
      .from("profiles")
      .select("id,email,full_name,phone,role,preferences,created_at")
      .eq("id", user.id)
      .maybeSingle(),
    supabase
      .from("customer_addresses")
      .select("id,full_name,phone,line1,line2,city,state,postal_code,country,is_default")
      .eq("user_id", user.id)
      .order("is_default", { ascending: false })
      .order("created_at", { ascending: false }),
    supabase
      .from("orders")
      .select("id,status,payment_status,grand_total,currency,placed_at,created_at,order_items(id)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false }),
  ])

  const profile =
    (profileData as AccountProfile | null) ??
    createFallbackProfile(user.id, user.email ?? null)

  return (
    <AccountDashboard
      profile={profile}
      email={user.email ?? profile.email ?? ""}
      addresses={(addressData ?? []) as AccountAddress[]}
      orders={(orderData ?? []) as AccountOrder[]}
      error={params.error}
      message={params.message}
    />
  )
}
