"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

interface CartType {
  cartItems: CartItem[];
  addToCart: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string, quantity: number) => void;
}

interface CartItem {
  productId: string;
  quantity: number;
}

const CartContext = createContext<CartType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productId: string, quantity: number) => {
    const exist = cartItems.find(
      (cartItem) => cartItem.productId === productId
    );

    if (exist) {
      const updatedCart = cartItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { productId, quantity }]);
    }
  };

  const removeFromCart = (productId: string, quantity: number) => {
    const updatedCart = cartItems
      .map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - quantity }
          : item
      )
      .filter((item) => item.quantity);

    setCartItems(updatedCart);
  };

  const context: CartType = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
