'use client'

import { useEffect, useState, useMemo } from 'react'
import { Container } from '@/components/layout/Container'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { products } from '@/lib/storefront'
import { SlidersHorizontal, X } from 'lucide-react'

type SortOption = 'featured' | 'bestselling' | 'newest' | 'price-low' | 'price-high' | 'rating'

const categoryParamMap: Record<string, string> = {
  desk: 'Desk Accessories',
  travel: 'Travel Gear',
  tech: 'Tech Accessories',
}

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get('category')

    if (!category) return

    setSelectedCategory(categoryParamMap[category] ?? category)
  }, [])

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)))
    return cats
  }, [])

  // Get unique colors
  const allColors = useMemo(() => {
    const colors = new Map<string, string>()
    products.forEach((p) => {
      p.colors?.forEach((c) => {
        if (!colors.has(c.name)) {
          colors.set(c.name, c.hex)
        }
      })
    })
    return Array.from(colors.entries())
  }, [])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // Filter by price
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Filter by color
    if (selectedColors.length > 0) {
      filtered = filtered.filter((p) =>
        p.colors?.some((c) => selectedColors.includes(c.name))
      )
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => b.id.localeCompare(a.id))
        break
      case 'bestselling':
        filtered.sort((a, b) => (b.badge === 'Bestseller' ? 1 : -1))
        break
      default:
        filtered.sort((a, b) => (b.isFeatured ? 1 : -1))
    }

    return filtered
  }, [selectedCategory, selectedColors, priceRange, sortBy])

  const toggleColor = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName) ? prev.filter((c) => c !== colorName) : [...prev, colorName]
    )
  }

  const resetFilters = () => {
    setSelectedCategory('all')
    setSelectedColors([])
    setPriceRange([0, 5000])
    setSortBy('featured')
  }

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={selectedCategory === 'all'}
              onCheckedChange={() => setSelectedCategory('all')}
            />
            <span className="text-sm">All Products</span>
          </label>
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedCategory === cat}
                onCheckedChange={() => setSelectedCategory(cat)}
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Color</h3>
        <div className="flex flex-wrap gap-3">
          {allColors.map(([name, hex]) => (
            <button
              key={name}
              onClick={() => toggleColor(name)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColors.includes(name)
                  ? 'border-foreground ring-2 ring-primary'
                  : 'border-border'
              }`}
              style={{ backgroundColor: hex }}
              title={name}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              max="5000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="w-20 px-2 py-1 border border-border rounded text-sm"
              placeholder="Min"
            />
            <span className="text-muted-foreground">-</span>
            <input
              type="number"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-20 px-2 py-1 border border-border rounded text-sm"
              placeholder="Max"
            />
          </div>
          <p className="text-xs text-muted-foreground">₹{priceRange[0]} - ₹{priceRange[1]}</p>
        </div>
      </div>

      {/* Reset Button */}
      <Button
        onClick={resetFilters}
        variant="outline"
        className="w-full"
      >
        Reset Filters
      </Button>
    </div>
  )

  return (
    <div className="py-12 bg-background">
      <Container>
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Shop All Products</h1>
          <p className="text-muted-foreground">
            Explore our complete collection of premium desk and travel accessories
          </p>
        </div>

        {/* Filters and Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block">
            <div className="bg-muted rounded-sm p-6 border border-border sticky top-20">
              <FilterPanel />
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Top Controls */}
            <div className="flex items-center justify-between gap-4 mb-8">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-foreground">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-3 py-2 border border-border rounded-sm text-sm bg-background"
                >
                  <option value="featured">Featured</option>
                  <option value="bestselling">Bestselling</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Mobile Filter Button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background hover:bg-muted transition-colors">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="sr-only">Open filters</span>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-bold text-lg">Filters</h2>
                    </div>
                    <FilterPanel />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Result Count */}
              <p className="text-sm text-muted-foreground ml-auto">
                {filteredProducts.length} products
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
                <Button onClick={resetFilters} variant="outline">
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
