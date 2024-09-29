"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

interface CartType {
  cart: string[];
  addToCart: () => void;
}

const CartContext = createContext<CartType>({
  cart: ["kooo"],
  addToCart: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState([]);

  const context: CartType = {
    cart: ["baba", "eyval"],
    addToCart: () => {
      console.log("testttt");
    },
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
