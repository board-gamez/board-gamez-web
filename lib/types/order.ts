import { OrderStatus } from "../enums/order-status.enum";
import { OrderReceiver } from "./order-receiver";

export interface Order {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  receiver: OrderReceiver;
  status: OrderStatus;
  totalPrice: number;
}
