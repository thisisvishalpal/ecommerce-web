import type { Metadata } from "next"
import "./globals.css"
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "FORM & FUNCTION | Designed for work. Built for movement.",
  description: "Premium desk and travel accessories designed for professionals who value quality and functionality.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-background">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
