import type { Metadata } from "next"
import "./globals.css"
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RouteScrollRestoration } from "@/components/layout/RouteScrollRestoration";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECOMGURU | Purposefully Designed.",
  description: "Premium products curated for professionals who value quality, functionality, and timeless design.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("font-sans", montserrat.variable)}>
      <body className="bg-background">
        <RouteScrollRestoration />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
