import { signUpAction } from "@/lib/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthMessage } from "@/components/auth/AuthMessage"

type SignUpFormProps = {
  error?: string
}

export function SignUpForm({ error }: SignUpFormProps) {
  return (
    <form action={signUpAction} className="space-y-5">
      <AuthMessage error={error} />

      <div>
        <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-foreground">
          Full Name
        </label>
        <Input id="full_name" name="full_name" autoComplete="name" required />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          Email
        </label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-foreground">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            minLength={8}
            autoComplete="new-password"
            required
          />
        </div>

        <div>
          <label
            htmlFor="confirm_password"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Confirm
          </label>
          <Input
            id="confirm_password"
            name="confirm_password"
            type="password"
            minLength={8}
            autoComplete="new-password"
            required
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Create Account
      </Button>
    </form>
  )
}
