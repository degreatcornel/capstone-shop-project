import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  // ✅ Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cartItems.length === 0) {
    return <p>Your cart is empty 🛒</p>
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            borderBottom: '1px solid #ccc',
            marginBottom: '10px',
            paddingBottom: '10px',
          }}
        >
          <h3>{item.title}</h3>
          <p>${item.price}</p>

          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              updateQuantity(item.id, Number(e.target.value))
            }
          />

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  )
}