import { OrderStatus } from "../enums/order-status.enum";
import { OrderItem } from "./order-item";
import { OrderReceiver } from "./order-receiver";

export interface Order {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  items: OrderItem[];
  receiver: OrderReceiver;
  status: OrderStatus;
  totalPrice: number;
}
