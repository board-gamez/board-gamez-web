"use client";

import { useCart } from "@/lib/context/cart-context";
import { useEffect, useState } from "react";
import { Product } from "@/lib/types/product";
import { getMultipleProducts } from "@/lib/services/product.service";

export default function ShippingPage() {
  const { cartItems, itemQuantity } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [productsCost, setProductsCost] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const shippingCost = 45000;

  const fetchProducts = async () => {
    const productId = cartItems.map((cartItem) => cartItem.productId);
    const result = await getMultipleProducts(productId);
    setProducts(result.products);
  };

  const calcCost = () => {
    let productsCost = 0;
    for (const product of products) {
      productsCost += product.price * itemQuantity(product._id);
    }

    setProductsCost(productsCost);
    setTotalCost(productsCost + shippingCost);
  };

  useEffect(() => {
    calcCost();
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [cartItems]);

  return (
    <form className="flex gap-3 flex-col md:flex-row">
      <div className="bg-white flex-1 p-4 pb-10">
        <h3 className="font-bold text-lg border-b mb-7">
          آدرس و اطلاعات گیرنده
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-bold ml-1">نام و نام خانوادگی گیرنده</label>
            <input
              className="bg-light-gray border mt-1 rounded-lg p-4 outline-none w-full"
              type="text"
              placeholder="نام و نام خانوادگی گیرنده"
            />
          </div>

          <div>
            <label className="font-bold ml-1">شماره موبایل</label>
            <input
              className="bg-light-gray border mt-1 rounded-lg p-4 outline-none w-full"
              type="text"
              placeholder="شماره موبایل"
            />
          </div>

          <div>
            <label className="font-bold ml-1">استان</label>
            <input
              className="bg-light-gray border mt-1 rounded-lg p-4 outline-none w-full"
              type="text"
              placeholder="استان"
            />
          </div>

          <div>
            <label className="font-bold ml-1">شهر</label>
            <input
              className="bg-light-gray border mt-1 rounded-lg p-4 outline-none w-full"
              type="text"
              placeholder="شهر"
            />
          </div>

          <div>
            <label className="font-bold ml-1">آدرس</label>
            <input
              className="bg-light-gray border mt-1 rounded-lg p-4 outline-none w-full"
              type="text"
              placeholder="آدرس"
            />
          </div>

          <div>
            <label className="font-bold ml-1">کد پستی</label>
            <input
              className="bg-light-gray border mt-1 rounded-lg p-4 outline-none w-full"
              type="text"
              placeholder="کد پستی"
            />
          </div>
        </div>
      </div>

      {products.length > 0 && (
        <div className="bg-white w-full lg:w-96 p-3 rounded-lg flex-none h-fit">
          <div className="flex justify-between mb-7">
            <span>قیمت کالاها</span>
            <span>{productsCost.toLocaleString()} تومان</span>
          </div>

          <div className="flex justify-between mb-7">
            <span>هزینه ارسال</span>
            <span>{shippingCost.toLocaleString()} تومان</span>
          </div>

          <div className="flex justify-between mb-7 text-darken-gray">
            <span>مبلغ قابل پرداخت</span>
            <span>{totalCost.toLocaleString()} تومان</span>
          </div>

          <button
            type="submit"
            className="bg-black text-white w-full p-4 rounded-lg hover:bg-light-black duration-150"
          >
            پرداخت سفارش
          </button>
        </div>
      )}
    </form>
  );
}
