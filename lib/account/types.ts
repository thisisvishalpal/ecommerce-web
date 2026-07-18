export type AccountProfile = {
  id: string
  email: string | null
  full_name: string | null
  phone: string | null
  role: string
  preferences: {
    order_updates?: boolean
    promotional_emails?: boolean
    product_reviews?: boolean
  } | null
  created_at: string
}

export type AccountAddress = {
  id: string
  full_name: string
  phone: string | null
  line1: string
  line2: string | null
  city: string
  state: string
  postal_code: string
  country: string
  is_default: boolean
}

export type AccountOrder = {
  id: string
  status: string
  payment_status: string
  grand_total: number | string
  currency: string
  placed_at: string | null
  created_at: string
  order_items: { id: string }[] | null
}
