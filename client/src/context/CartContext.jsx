import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem('orchestyle_mock_cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save to local storage whenever cart updates
  useEffect(() => {
    localStorage.setItem('orchestyle_mock_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, size = null) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.size === size) 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity, size }];
    });
  };

  const removeFromCart = (id, size) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setCartItems(prev => prev.map(item => 
      (item.id === id && item.size === size) 
        ? { ...item, quantity } 
        : item
    ));
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};
