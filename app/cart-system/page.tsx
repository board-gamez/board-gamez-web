"use client";

import { useCart } from "@/lib/context/cart-context";

export default function CartSystem() {
  const { cartItems, addToCart } = useCart();

  const test = () => {
    addToCart("12", 1);
    console.log("------>", cartItems);
  };

  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <div className="flex-1">
        <button
          className="bg-black text-white p-4 rounded-lg hover:bg-light-black duration-150"
          onClick={test}
        >
          افزودن به سبد خرید
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
