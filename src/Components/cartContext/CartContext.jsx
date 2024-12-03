import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  console.log("***********************")
  console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          count: (updatedItems[existingItemIndex].count || 1) + 1
        };
        return updatedItems;
      }
      
      return [...prevItems, { ...product, count: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  }

  function isProductInCart(productId) {
    return cartItems.some((item) => item.id === productId);
  }

  function updateItemCount(productId, newCount) {
    setCartItems((prevItems) => 
      prevItems.map((item) => 
        item.id === productId 
          ? { ...item, count: Math.max(0, newCount) }
          : item
      ).filter(item => item.count > 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        removeFromCart,
        addToCart,
        setCartItems,
        isProductInCart,
        updateItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;