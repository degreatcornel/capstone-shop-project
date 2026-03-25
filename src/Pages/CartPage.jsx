import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart()

  // Calculate total price (derived state)
  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  if (items.length === 0) {
    return <h2>Your cart is empty 🛒</h2>
  }

  return (
    <div>
      <h1>Your Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
           style={{
           display: 'flex',
           gap: '15px',
           border: '1px solid #eee',
           borderRadius: '10px',
          padding: '10px',
           alignItems: 'center',
  }}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{ width: '100px' }}
          />

          <h3>{item.title}</h3>
          <p>₦{item.price}</p>

          {/* Quantity control */}
          <div>
            <button
              onClick={() =>
                updateQuantity(item.id, item.quantity - 1)
              }
            >
              -
            </button>

            <span style={{ margin: '0 10px' }}>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                updateQuantity(item.id, item.quantity + 1)
              }
            >
              +
            </button>
          </div>

          {/* Remove button */}
          <button
            onClick={() => removeItem(item.id)}
            style={{ marginTop: '5px' }}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₦{total.toFixed(2)}</h2>
    </div>
  )
}