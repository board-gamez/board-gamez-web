import { Meta } from "./meta";

export interface Product {
  _id: string;
  title: string;
  content: string;
  slug: string;
  price: number;
  quantity: number;
  meta: Meta;
  imageKey: string;
}
