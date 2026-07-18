import { Package } from "lucide-react"
import type { AccountOrder } from "@/lib/account/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type OrdersPanelProps = {
  orders: AccountOrder[]
}

function formatMoney(value: string | number, currency: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(Number(value))
}

function formatDate(value: string | null) {
  if (!value) return "Not placed yet"

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value))
}

export function OrdersPanel({ orders }: OrdersPanelProps) {
  return (
    <Card className="rounded-sm border border-border bg-card">
      <CardHeader>
        <CardTitle>Orders</CardTitle>
      </CardHeader>
      <CardContent>
        {orders.length > 0 ? (
          <div className="space-y-3">
            {orders.map((order) => (
              <div key={order.id} className="rounded-sm border border-border bg-muted p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-foreground">#{order.id.slice(0, 8)}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(order.placed_at ?? order.created_at)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 sm:justify-end">
                    <div className="text-left sm:text-right">
                      <p className="font-semibold text-foreground">
                        {formatMoney(order.grand_total, order.currency)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {order.order_items?.length ?? 0} item
                        {(order.order_items?.length ?? 0) === 1 ? "" : "s"}
                      </p>
                    </div>
                    <Badge variant={order.status === "delivered" ? "secondary" : "outline"}>
                      {order.status.replaceAll("_", " ")}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50" />
            <p className="font-medium text-foreground">No orders yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Your orders will appear here after checkout.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
