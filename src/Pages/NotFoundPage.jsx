import { Link, useLocation } from 'react-router-dom'

export default function NotFoundPage() {
  const location = useLocation()

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '50px' }}>404 🚫</h1>

      <p>
        Page not found:
        <br />
        <strong>{location.pathname}</strong>
      </p>

      <Link to="/shop">
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Go Back to Shop
        </button>
      </Link>
    </div>
  )
}