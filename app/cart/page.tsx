import { products } from "@/fake-data/product.data";
import Image from "next/image";
import NumberInput from "../../components/NumberInput";

export default function Cart() {
  const productsCost = 270000;
  const shippingCost = 45000;
  const totalCost = productsCost + shippingCost;

  return (
    <div className="flex gap-3">
      <div className="bg-white flex-1">
        <div className="flex text-center font-bold border-b p-2">
          <div className="flex-none w-28 p-3">تصویر</div>
          <div className="flex-1 p-3">نام محصول</div>
          <div className="flex-none w-28 p-3">تعداد</div>
          <div className="flex-none w-36 p-3">قیمت</div>
        </div>

        {products.map((product) => (
          <div
            key={product.slug}
            className="flex items-center text-center font-bold border-b p-2"
          >
            <div className="flex-none w-28">
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className="w-full aspect-square"
              />
            </div>
            <div className="flex-1 p-3">{product.title}</div>
            <div className="flex-none w-28 p-3">
              <NumberInput max={product.quantity} />
            </div>
            <div className="flex-none w-36 p-3">
              {product.price.toLocaleString()} تومان
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white w-96 p-3 rounded-lg flex-none h-fit">
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

        <button className="bg-black text-white w-full p-4 rounded-lg hover:bg-light-black duration-150">
          پرداخت سفارش
        </button>
      </div>
    </div>
  );
}
