"use client";

import { useCart } from "@/lib/context/cart-context";

export default function CartSystem() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <div className="flex-1">
        <button
          className="bg-black text-white p-4 rounded-lg hover:bg-light-black duration-150"
          onClick={() => addToCart("12", 1)}
        >
          افزودن 12
        </button>

        <button
          className="bg-black text-white p-4 rounded-lg hover:bg-light-black duration-150"
          onClick={() => addToCart("20", 1)}
        >
          افزودن 20
        </button>

        <button
          className="bg-black text-white p-4 rounded-lg hover:bg-light-black duration-150"
          onClick={() => removeFromCart("12", 1)}
        >
          حذف 12
        </button>
        
        <button
          className="bg-black text-white p-4 rounded-lg hover:bg-light-black duration-150"
          onClick={() => removeFromCart("20", 1)}
        >
          حذف 20
        </button>

        <div className="mb-5 text-center">
          {cartItems.map((item, index) => (
            <div key={index}>
              <span className="font-bold ml-5">Prodcut {item.productId}</span>
              <span>Quantity: {item.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
