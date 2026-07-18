import { updateProfileAction } from "@/lib/auth/actions"
import type { AccountProfile } from "@/lib/account/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ProfilePanelProps = {
  profile: AccountProfile
  email: string
}

export function ProfilePanel({ profile, email }: ProfilePanelProps) {
  return (
    <Card className="rounded-sm border border-border bg-card">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={updateProfileAction} className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-foreground">
                Full Name
              </label>
              <Input
                id="full_name"
                name="full_name"
                defaultValue={profile.full_name ?? ""}
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                Phone
              </label>
              <Input id="phone" name="phone" defaultValue={profile.phone ?? ""} autoComplete="tel" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              Email
            </label>
            <Input id="email" value={email} disabled />
            <p className="mt-2 text-xs text-muted-foreground">
              Email changes are handled through account security.
            </p>
          </div>

          <Button type="submit" className="w-fit">
            Save Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
