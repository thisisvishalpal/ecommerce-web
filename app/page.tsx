import Image from "next/image"
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Package,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Truck,
} from "lucide-react"
import { formatPrice, products } from "@/lib/storefront"

const categories = ["All", "Apparel", "Home", "Fitness", "Accessories"]
const cartItems = products.slice(0, 2)
const subtotal = cartItems.reduce((sum, product) => sum + product.price, 0)

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--ink)] text-white">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-dark)]">Commerce OS</p>
              <p className="hidden text-xs text-[var(--muted)] sm:block">Storefront and operations starter</p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-[var(--muted)] md:flex">
            <a href="#catalog">Catalog</a>
            <a href="#operations">Operations</a>
            <a href="#checkout">Checkout</a>
          </nav>
          <button className="flex h-10 items-center gap-2 rounded-lg bg-[var(--ink)] px-4 text-sm font-semibold text-white">
            Launch cart
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-12">
        <div className="flex min-h-[520px] flex-col justify-between rounded-lg bg-[var(--panel)] p-6 shadow-sm ring-1 ring-[var(--line)] sm:p-8">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1 text-sm text-[var(--muted)]">
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              Flexible starter before the niche is finalized
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              A polished commerce base for any product category.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              Start with catalog, cart, checkout readiness, inventory signals, and Supabase-backed data structure.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["Fast catalog", "Product, category, pricing, media"],
              ["Order-ready", "Cart, checkout, and status schema"],
              ["Admin lens", "Inventory and revenue signals"],
            ].map(([title, body]) => (
              <div key={title} className="rounded-lg border border-[var(--line)] bg-white p-4">
                <CheckCircle2 className="mb-3 h-5 w-5 text-[var(--accent)]" />
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-sm leading-5 text-[var(--muted)]">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-[var(--ink)]">
            <Image
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80"
              alt="Curated retail products"
              fill
              className="object-cover opacity-85"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">First viewport</p>
              <h2 className="mt-2 text-3xl font-semibold">Real storefront surface, not a landing shell.</h2>
            </div>
          </div>
          <div id="checkout" className="rounded-lg border border-[var(--line)] bg-white p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Live cart draft</h2>
              <ShoppingBag className="h-5 w-5 text-[var(--accent)]" />
            </div>
            <div className="mt-4 space-y-3">
              {cartItems.map((product) => (
                <div key={product.id} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-[var(--muted)]">{product.name}</span>
                  <span className="font-semibold">{formatPrice(product.price)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-4">
              <span className="text-sm text-[var(--muted)]">Subtotal</span>
              <span className="text-xl font-semibold">{formatPrice(subtotal)}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-dark)]">Catalog</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Starter product grid</h2>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex h-10 items-center gap-2 rounded-lg border border-[var(--line)] bg-white px-3">
              <Search className="h-4 w-4 text-[var(--muted)]" />
              <span className="text-sm text-[var(--muted)]">Search products</span>
            </div>
            <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-white px-3 text-sm font-medium">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
        <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category}
              className={`h-9 flex-none rounded-full px-4 text-sm font-medium ${
                category === "All" ? "bg-[var(--ink)] text-white" : "border border-[var(--line)] bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-lg border border-[var(--line)] bg-white">
              <div className="relative aspect-[4/3]">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
                {product.badge ? (
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold">
                    {product.badge}
                  </span>
                ) : null}
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-dark)]">
                  {product.category}
                </p>
                <h3 className="mt-2 min-h-12 text-lg font-semibold">{product.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{formatPrice(product.price)}</p>
                    {product.compareAtPrice ? (
                      <p className="text-sm text-[var(--muted)] line-through">{formatPrice(product.compareAtPrice)}</p>
                    ) : null}
                  </div>
                  <button className="h-10 rounded-lg bg-[var(--accent)] px-3 text-sm font-semibold text-white">
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="operations" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            { title: "Revenue today", value: "₹86.4K", icon: BarChart3, note: "Ready for orders table aggregation" },
            { title: "Inventory units", value: "151", icon: Package, note: "Low-stock products can surface here" },
            { title: "Fulfilment health", value: "96%", icon: Truck, note: "Shipping status pipeline included" },
          ].map((metric) => (
            <div key={metric.title} className="rounded-lg border border-[var(--line)] bg-white p-5">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-[var(--muted)]">{metric.title}</p>
                <metric.icon className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{metric.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-[var(--line)] bg-[var(--ink)] p-5 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Backend foundation is Supabase-first.</h2>
              <p className="mt-1 text-sm text-white/70">Products, categories, customers, orders, order items, inventory, profiles, and RLS.</p>
            </div>
            <ShieldCheck className="h-8 w-8 text-teal-300" />
          </div>
        </div>
      </section>
    </main>
  )
}
