import useFetch from '../hooks/useFetch'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'
import SkeletonCard from '../components/SkeletonCard'

export default function ShopPage() {
  // ✅ Using DummyJSON API
  const endpoint = 'https://dummyjson.com/products?limit=100'

  const { data, loading, error } = useFetch(endpoint)

  // ✅ IMPORTANT: unwrap the API response
  const products = useMemo(() => (data?.products || []), [data])

  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') || ''
  const category = searchParams.get('cat') || ''
  const sort = searchParams.get('sort') || ''

  // ✅ Generate categories dynamically
  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))].filter(Boolean)
  }, [products])

  // ✅ Filter + Search
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

      const matchesCategory = category
        ? product.category === category
        : true

      return matchesSearch && matchesCategory
    })
  }, [products, searchQuery, category])

  // ✅ Loading & Error states
  if (loading) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Shop Page</h1>

      {/* FILTER + SEARCH */}
      <div style={{ marginBottom: '10px' }}>
        <select
  value={sort}
  onChange={(e) =>
    setSearchParams({
      q: searchQuery,
      cat: category,
      sort: e.target.value,
    })
  }
>
  <option value="">Sort</option>
  <option value="price-asc">Price: Low to High</option>
  <option value="price-desc">Price: High to Low</option>
  <option value="rating">Rating</option>
</select>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) =>
            setSearchParams({ q: e.target.value, cat: category })
          }
          style={{ padding: '5px' }}
        />
      </div>

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div
           style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
