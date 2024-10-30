import Product from "@/components/ProductCard";
import { getProducts } from "@/lib/services/product.service";

interface InputProps {
  searchParams: {
    search?: string;
  };
}

export default async function Root({ searchParams }: InputProps) {
  const resp = await getProducts({
    q: searchParams.search,
  });

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
