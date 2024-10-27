import { Product } from "./product";

export interface OrderItem {
  _product: Product;
  quantity: number;
}
