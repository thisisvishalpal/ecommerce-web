import { updatePasswordAction } from "@/lib/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SecurityPanel() {
  return (
    <Card className="rounded-sm border border-border bg-card">
      <CardHeader>
        <CardTitle>Security</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={updatePasswordAction} className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-foreground">
                New Password
              </label>
              <Input id="password" name="password" type="password" minLength={8} required />
            </div>

            <div>
              <label
                htmlFor="confirm_password"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Confirm Password
              </label>
              <Input
                id="confirm_password"
                name="confirm_password"
                type="password"
                minLength={8}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-fit">
            Update Password
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
