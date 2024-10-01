"use client";

import { Product } from "@/lib/types/product";
import { useCart } from "@/lib/context/cart-context";

interface InputProps {
  product: Product;
}

export default function AddToCartButton({ product }: InputProps) {
  const { addToCart } = useCart();

  return (
    <button
      className="bg-black text-white w-full p-4 rounded-lg hover:bg-light-black duration-150"
      onClick={() => addToCart(product._id, 1)}
    >
      افزودن به سبد خرید
    </button>
  );
}
