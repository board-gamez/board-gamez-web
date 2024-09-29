"use client";

import { products } from "@/fake-data/product.data";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface CartType {
  cartItems: CartItem[];
  addToCart: (productId: string, quantity: number) => void;
  // addToCart: (cartItem: CartItem) => void;
}

interface CartItem {
  productId: string;
  quantity: number;
}

const CartContext = createContext<CartType>({
  cartItems: [],
  addToCart: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      productId: "12",
      quantity: 1,
    },
  ]);

  const addToCart = (productId: string, quantity: number) => {
    // const existingItem = cartItems.find(
    //   (cartItem) => cartItem.productId === productId
    // );

    // if (existingItem) {
    //   console.log("bebe");

    //   existingItem.quantity += quantity;
    // } else {
    //   console.log("hoooy");

    //   // cartItems.push({ productId, quantity });
    // }

    // setCartItems(cartItems);

    setCartItems((val) => [...val, { productId, quantity }]);
    // console.log(cartItems);

    // setCartItems((val) => {
    //   val.map();
    //   return [...val, { productId, quantity }];
    // });
  };

  const context: CartType = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
