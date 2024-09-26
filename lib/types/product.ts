import { Meta } from "./meta";

export interface Product {
  title: string;
  content: string;
  slug: string;
  price: number;
  quantity: number;
  meta: Meta;
  image: string;
}
