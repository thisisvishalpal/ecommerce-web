import Link from "next/link"
import { Container } from "@/components/layout/Container"

type AuthShellProps = {
  title: string
  description: string
  switchLabel: string
  switchHref: string
  switchText: string
  children: React.ReactNode
}

export function AuthShell({
  title,
  description,
  switchLabel,
  switchHref,
  switchText,
  children,
}: AuthShellProps) {
  return (
    <div className="min-h-screen bg-background py-12">
      <Container>
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-sm border border-border bg-card shadow-subtle lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-primary px-8 py-10 text-primary-foreground sm:px-10 lg:py-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/75">
              ecomguru account
            </p>
            <h1 className="mb-4 text-3xl font-semibold leading-tight text-primary-foreground lg:text-4xl">
              {title}
            </h1>
            <p className="max-w-sm text-sm leading-6 text-primary-foreground/80">
              {description}
            </p>
          </div>

          <div className="px-6 py-8 sm:px-10">
            {children}

            <p className="mt-6 text-center text-sm text-muted-foreground">
              {switchLabel}{" "}
              <Link href={switchHref} className="font-semibold text-primary hover:underline">
                {switchText}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
