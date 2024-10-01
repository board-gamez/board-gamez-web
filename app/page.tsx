import Product from "@/components/ProductCard";
import { getProducts } from "@/lib/services/product.service";

export default async function Root() {
  const resp = await getProducts();

  return (
    <main>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {resp.products.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
