import { updatePreferencesAction } from "@/lib/auth/actions"
import type { AccountProfile } from "@/lib/account/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type PreferencesPanelProps = {
  preferences: AccountProfile["preferences"]
}

export function PreferencesPanel({ preferences }: PreferencesPanelProps) {
  return (
    <Card className="rounded-sm border border-border bg-card">
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={updatePreferencesAction} className="space-y-4">
          {[
            {
              name: "order_updates",
              label: "Order Updates",
              text: "Get notified about order status and shipping changes.",
              defaultChecked: preferences?.order_updates ?? true,
            },
            {
              name: "promotional_emails",
              label: "Promotional Emails",
              text: "Receive launches, offers, and curated recommendations.",
              defaultChecked: preferences?.promotional_emails ?? true,
            },
            {
              name: "product_reviews",
              label: "Product Reviews",
              text: "Receive review reminders after purchase.",
              defaultChecked: preferences?.product_reviews ?? false,
            },
          ].map((item) => (
            <label key={item.name} className="flex cursor-pointer gap-3 rounded-sm border border-border bg-muted p-4">
              <input
                type="checkbox"
                name={item.name}
                defaultChecked={item.defaultChecked}
                className="mt-1 h-4 w-4 accent-primary"
              />
              <span>
                <span className="block font-medium text-foreground">{item.label}</span>
                <span className="mt-1 block text-sm leading-6 text-muted-foreground">{item.text}</span>
              </span>
            </label>
          ))}

          <Button type="submit">Save Preferences</Button>
        </form>
      </CardContent>
    </Card>
  )
}
