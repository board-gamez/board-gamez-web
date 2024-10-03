import axios from "axios";
import { GetProductsOutput } from "../dto/get-products.dto";
import { GetMultipleProductsOutput } from "../dto/get-multiple-products.dto";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export async function getProducts(): Promise<GetProductsOutput> {
  const url = `${baseUrl}/products`;

  const response = await axios.get(url);

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
}

export async function getMultipleProducts(
  productId: string[]
): Promise<GetMultipleProductsOutput> {
  const url = `${baseUrl}/products/multiple`;

  const response = await axios.get(url, {
    params: {
      _products: productId,
    },
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
}
