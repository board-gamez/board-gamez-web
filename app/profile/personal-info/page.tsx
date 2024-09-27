import NumberInput from "@/components/NumberInput";
import { products } from "@/fake-data/product.data";
import Image from "next/image";

export default function Profile() {
  const productsCost = 270000;
  const shippingCost = 45000;
  const totalCost = productsCost + shippingCost;

  return (
    <>
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
    </>
  );
}
