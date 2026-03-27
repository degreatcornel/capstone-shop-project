import { Outlet, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Layout() {
  const { cartItems } = useCart()

  const totalItems = cartItems?.reduce((sum, item) => sum + item.quantity, 0) ?? 0

  const linkStyle = ({ isActive }) => ({
    marginRight: '10px',
    color: isActive ? '#61dafb' : 'white',
  })

  return (
    <div style={{ background: '#222', color: 'white', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ padding: '10px', background: '#333', color: 'white' }}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/shop" style={linkStyle}>Shop</NavLink>
        <NavLink to="/cart" style={linkStyle}>Cart ({totalItems})</NavLink>
        <NavLink to="/blog" style={linkStyle}>Blog</NavLink>
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