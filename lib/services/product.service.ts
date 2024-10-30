import axios from "axios";
import { GetProductsInput, GetProductsOutput } from "../dto/get-products.dto";
import { GetMultipleProductsOutput } from "../dto/get-multiple-products.dto";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export async function getProducts(
  input: GetProductsInput
): Promise<GetProductsOutput> {
  let url = `${baseUrl}/products`;
  const params: string[] = [];

  for (const [key, val] of Object.entries(input)) {
    if (!val) continue;

    params.push(`${key}=${val}`);
  }

  if (params.length > 0) {
    url += "?" + params.join("&");
  }

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
