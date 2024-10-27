import { Order } from "../types/order";

export interface GetOrdersOutput {
  message: string;
  orders: Order[];
}
