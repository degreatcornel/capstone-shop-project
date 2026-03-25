function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      {/* ✅ Use thumbnail directly */}
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '100%' }}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150'
        }}
      />

      {/* ✅ Updated fields */}
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <p>Stock: {product.stock}</p>
    </div>
  )
}

export default ProductCard