import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'

// Pages
import HomePage from './Pages/HomePage'
import ShopPage from './Pages/ShopPage'
import ProductPage from './Pages/ProductPage'
import CartPage from './Pages/CartPage'
import BlogPage from './Pages/BlogPage'
import PostPage from './Pages/PostPage'
import NotFoundPage from './Pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary>
            <Layout />
          </ErrorBoundary>
        }
      >
        
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<PostPage />} />

        <Route path="*" element={<NotFoundPage />} />

      </Route>
    </Routes>
  )
}