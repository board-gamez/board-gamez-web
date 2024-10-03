import { Product } from "../types/product";

export interface GetMultipleProductsOutput {
  message: string;
  products: Product[];
}
