import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Link
      to={`/shop/${product.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        style={{
    border: '1px solid #eee',
    borderRadius: '10px',
    padding: '15px',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: '0.2s',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.03)'
    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)'
    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
  }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />

        <h3 style={{ margin: '10px 0' }}>
          {product.title}
        </h3>

        <p style={{ fontWeight: 'bold' }}>
          ₦{product.price}
        </p>

        <p style={{ color: '#666' }}>
          {product.category}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard