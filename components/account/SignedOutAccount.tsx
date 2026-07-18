import Link from "next/link"
import { LockKeyhole, Package, ShieldCheck } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SignedOutAccount() {
  return (
    <div className="min-h-screen bg-background py-12">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Customer account
            </p>
            <h1 className="mb-3 text-3xl font-semibold text-foreground lg:text-4xl">
              Sign in to manage your ecomguru profile.
            </h1>
            <p className="text-muted-foreground">
              Your account keeps orders, saved addresses, checkout details, and preferences in one secure place.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <Card className="rounded-sm border border-border bg-card p-6">
              <CardContent className="px-0">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <LockKeyhole className="h-6 w-6" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-foreground">Access your account</h2>
                <p className="mb-6 text-sm leading-6 text-muted-foreground">
                  Sign in if you already have an account, or create one to start tracking purchases and preferences.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/sign-in">
                    <Button size="lg" className="w-full sm:w-auto">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Create Account
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {[
                {
                  icon: Package,
                  title: "Order history",
                  text: "Review current and past ecommerce orders.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure profile",
                  text: "Update personal details and password safely.",
                },
              ].map((item) => (
                <Card key={item.title} className="rounded-sm border border-border bg-muted p-5">
                  <CardContent className="flex gap-4 px-0">
                    <item.icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
