import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useCart } from '../context/CartContext'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function ProductPage() {
  const { id } = useParams()

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  )

  const { data: allProducts } = useFetch(
    'https://dummyjson.com/products?limit=100'
  )

  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  if (loading) return <p>Loading product...</p>
  if (error) return <p>Error loading product</p>

  const product = data

  // Related products (same category)
  const related =
    allProducts?.products?.filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    ) || []

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '300px' }}
      />

      <p>{product.description}</p>
      <p>Price: ₦{product.price}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <p>Brand: {product?.brand || 'N/A'}</p>
      <p>Stock: {product.stock}</p>

      {/* Quantity */}
      <div>
        <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button onClick={() => setQuantity((q) => q + 1)}>+</button>
      </div>

      {/* Add to cart */}
      <button
        onClick={() => addToCart(product, quantity)}
        style={{ marginTop: '10px' }}
      >
        Add to Cart

    
      </button>

      {/* Related */}
      <h2>Related Products</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {related.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}