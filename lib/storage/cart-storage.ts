"use client";

import { CartItem } from "../types/cart-item";

export const storageName = "cart";

export const getStorageCart = (): CartItem[] => {
  const cart = localStorage.getItem(storageName);

  if (!cart) return [];

  return JSON.parse(cart) as CartItem[];
};

export const setStorageCart = (cartItems: CartItem[]): void => {
  return localStorage.setItem(storageName, JSON.stringify(cartItems));
};
