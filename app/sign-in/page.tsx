import { AuthShell } from "@/components/auth/AuthShell"
import { SignInForm } from "@/components/auth/SignInForm"

type SignInPageProps = {
  searchParams: Promise<{
    error?: string
    message?: string
  }>
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const params = await searchParams

  return (
    <AuthShell
      title="Welcome back."
      description="Sign in to manage orders, saved addresses, checkout details, and account preferences."
      switchLabel="New to ecomguru?"
      switchHref="/sign-up"
      switchText="Create an account"
    >
      <SignInForm error={params.error} message={params.message} />
    </AuthShell>
  )
}
