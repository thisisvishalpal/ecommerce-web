import { signInAction } from "@/lib/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthMessage } from "@/components/auth/AuthMessage"

type SignInFormProps = {
  error?: string
  message?: string
}

export function SignInForm({ error, message }: SignInFormProps) {
  return (
    <form action={signInAction} className="space-y-5">
      <AuthMessage error={error} message={message} />

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          Email
        </label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-foreground">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Sign In
      </Button>
    </form>
  )
}
