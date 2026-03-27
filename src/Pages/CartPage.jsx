import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart()
  const subtotal = items.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
)

const shipping = subtotal > 50000 ? 0 : 5000
const tax = subtotal * 0.075
const total = subtotal + shipping + tax

  // Calculate total price (derived state)

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

          <h3>Subtotal: ₦{subtotal.toFixed(2)}</h3>
          <p>Shipping: ₦{shipping}</p>
          <p>Tax: ₦{tax.toFixed(2)}</p>
          <h2>Total: ₦{total.toFixed(2)}</h2>

          {shipping > 0 && (
  <p>
    Spend ₦{(50000 - subtotal).toFixed(2)} more to get FREE shipping 🚚
  </p>
          )}

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