'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { ProductCard } from '@/components/product/ProductCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/storefront'
import { Search as SearchIcon, X } from 'lucide-react'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)

  const results = useMemo(() => {
    if (!query.trim()) return []

    const lowercaseQuery = query.toLowerCase()
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery) ||
        product.tagline?.toLowerCase().includes(lowercaseQuery)
    )
  }, [query])

  const clearSearch = () => setQuery('')

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container>
        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-6">Search Products</h1>

          {/* Search Input */}
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, category, or features..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-10 py-3 text-lg bg-background border-2 border-border focus:border-primary"
              autoFocus
            />
            {query && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        {query.trim() ? (
          <>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Found <span className="font-semibold text-foreground">{results.length}</span> results
                for "<span className="font-semibold text-foreground">{query}</span>"
              </p>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-foreground mb-2">No results found</h2>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or browse our categories
                </p>
                <Button onClick={clearSearch} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Enter a search term</h2>
            <p className="text-muted-foreground">
              Search for products by name, category, or features
            </p>
          </div>
        )}
      </Container>
    </div>
  )
}
