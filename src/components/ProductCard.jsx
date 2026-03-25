import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Link to={`/shop/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: '100%' }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150'
          }}
        />

        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    </Link>
  )
}

export default ProductCard