import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      {/* Navigation */}
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/shop" style={{ marginRight: '10px' }}>Shop</Link>
        <Link to="/cart" style={{ marginRight: '10px' }}>Cart</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      {/* Page Content */}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ padding: '10px', background: '#eee' }}>
        <p>© 2026 Capstone-Shop</p>
      </footer>
    </div>
  )
}