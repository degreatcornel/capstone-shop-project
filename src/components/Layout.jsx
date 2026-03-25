import { Outlet, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Layout() {
  const { cartItems } = useCart()

  const totalItems = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
)

  return (
    <div style={{ background: '#222', color: 'white', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ padding: '10px', background: '#333', color: 'white' }}>
        <Link to="/" style={{ marginRight: '10px', color: 'white' }}>Home</Link>
        <Link to="/shop" style={{ marginRight: '10px', color: 'white' }}>Shop</Link>
        <Link to="/cart" style={{ marginRight: '10px', color: 'white' }}>
          Cart ({totalItems})
        </Link>
        <Link to="/blog" style={{ color: 'white' }}>Blog</Link>
      </nav>

      {/* Page Content */}
      <main style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ padding: '10px', background: '#333', color: 'white' }}>
        <p>© 2026 Capstone-Shop</p>
      </footer>
    </div>
  )
}