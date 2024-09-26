import Product from "@/components/ProductCard";
import { products } from "@/fake-data/product.data";

export default function Root() {
  return (
    <main>
      <div className="container mx-auto grid grid-cols-4 gap-3">
        {products.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
