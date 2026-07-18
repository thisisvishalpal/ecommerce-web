import { MapPin } from "lucide-react"
import type { AccountAddress } from "@/lib/account/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type AddressesPanelProps = {
  addresses: AccountAddress[]
}

export function AddressesPanel({ addresses }: AddressesPanelProps) {
  return (
    <Card className="rounded-sm border border-border bg-card">
      <CardHeader>
        <CardTitle>Saved Addresses</CardTitle>
      </CardHeader>
      <CardContent>
        {addresses.length > 0 ? (
          <div className="grid gap-3">
            {addresses.map((address) => (
              <div key={address.id} className="rounded-sm border border-border bg-muted p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-foreground">{address.full_name}</p>
                  {address.is_default && <Badge variant="secondary">Default</Badge>}
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {address.line1}
                  {address.line2 ? `, ${address.line2}` : ""}
                  <br />
                  {address.city}, {address.state} {address.postal_code}
                  <br />
                  {address.country}
                </p>
                {address.phone && (
                  <p className="mt-2 text-sm text-muted-foreground">Phone: {address.phone}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50" />
            <p className="font-medium text-foreground">No saved addresses</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Checkout addresses will be saved here when available.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
