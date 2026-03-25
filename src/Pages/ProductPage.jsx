import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function ProductPage() {
  const { id } = useParams()
  const { addToCart } = useCart()

  // ✅ Fetch single product
  const endpoint = `https://dummyjson.com/products/${id}`
  const { data: product, loading, error } = useFetch(endpoint)

  // ✅ Quantity state
  const [quantity, setQuantity] = useState(1)

  if (loading) return <p>Loading product...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '300px' }}
      />

      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Brand:</strong> {product?.brand || 'N/A'}</p>

      <p style={{ marginTop: '10px' }}>
        {product.description}
      </p>

      {/* QUANTITY SELECTOR */}
      <div style={{ marginTop: '20px' }}>
        <label>Quantity: </label>
        <input
          type="number"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      {/* ADD TO CART BUTTON */}
      <button
  style={{ marginTop: '10px', padding: '10px' }}
  onClick={() => addToCart(product, quantity)}>
        Add to Cart
      </button>
    </div>
  )
}

