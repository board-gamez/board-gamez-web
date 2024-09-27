import axios from "axios";
import { GetProductsOutput } from "../dto/get-products.dto";

export const getProducts = async (): Promise<GetProductsOutput> => {
  const url = new URL("/products", process.env.NEXT_PUBLIC_BASE_URL).href;

  const response = await axios.get(url);

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
};
