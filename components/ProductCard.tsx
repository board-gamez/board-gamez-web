import Image from "next/image";
import { Product } from "@/lib/types/product";

interface InputProps {
  product: Product;
}

export default function ProductCard({ product }: InputProps) {
  return (
    <div className="bg-primary rounded-xl overflow-hidden">
      <Image
        src={product.image}
        width={250}
        height={250}
        alt={product.title}
        className="w-full aspect-square object-cover"
      />

      <div className="px-3 py-5">
        <h1 className="text-lg font-bold mb-3">{product.title}</h1>

        <div className="text-left">{product.price.toLocaleString()} تومان</div>
      </div>

      <button className="bg-black text-white w-full p-4 rounded-lg hover:bg-light-black duration-150">
        افزودن به سبد خرید
      </button>
    </div>
  );
}
