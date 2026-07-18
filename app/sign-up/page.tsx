import { AuthShell } from "@/components/auth/AuthShell"
import { SignUpForm } from "@/components/auth/SignUpForm"

type SignUpPageProps = {
  searchParams: Promise<{
    error?: string
  }>
}

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
  const params = await searchParams

  return (
    <AuthShell
      title="Create your ecomguru account."
      description="Keep purchases, addresses, and customer preferences connected to one secure profile."
      switchLabel="Already have an account?"
      switchHref="/sign-in"
      switchText="Sign in"
    >
      <SignUpForm error={params.error} />
    </AuthShell>
  )
}
