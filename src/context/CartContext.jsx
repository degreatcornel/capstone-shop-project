import { createContext, useContext, useState } from 'react'

// 1. Create Context
const CartContext = createContext()

// 2. Provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // ✅ Add item to cart
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      )

      if (existingItem) {
        // If already in cart → update quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      // If new item → add to cart
      return [...prevItems, { ...product, quantity }]
    })
  }

  // ✅ Remove item
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  // ✅ Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 3. Custom Hook
export function useCart() {
  return useContext(CartContext)
}