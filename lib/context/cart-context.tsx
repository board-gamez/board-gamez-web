"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem } from "../types/cart-item";
import {
  getStorageCart,
  setStorageCart,
  storageName,
} from "../storage/cart-storage";

interface CartType {
  cartItems: CartItem[];
  cartItemsCount: () => number;
  addToCart: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string, quantity: number) => void;
  itemQuantity: (productId: string) => number;
}

const CartContext = createContext<CartType>({
  cartItems: [],
  cartItemsCount: () => 0,
  addToCart: () => {},
  removeFromCart: () => {},
  itemQuantity: () => 0,
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getStorageCart());

  // Load initial cart items from localStorage
  useEffect(() => {
    setCartItems(getStorageCart());
  }, []);

  // Sync cart items to localStorage whenever they change
  useEffect(() => {
    setStorageCart(cartItems);
  }, [cartItems]);

  // Handle syncing between tabs using the storage event
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === storageName) {
        const newCart = e.newValue ? JSON.parse(e.newValue) : [];
        setCartItems(newCart);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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

  const cartItemsCount = (): number => {
    let count = 0;

    for (const cartItem of cartItems) {
      count += cartItem.quantity;
    }

    return count;
  };

  const itemQuantity = (productId: string): number => {
    const founded = cartItems.find((item) => item.productId === productId);

    return founded ? founded.quantity : 0;
  };

  const removeFromCart = (productId: string, quantity: number) => {
    const updatedCart = cartItems
      .map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - quantity }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  const context: CartType = {
    cartItems,
    cartItemsCount,
    addToCart,
    removeFromCart,
    itemQuantity,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
