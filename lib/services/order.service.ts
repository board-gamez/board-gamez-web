import axios from "axios";
import { GetOrdersOutput } from "../dto/get-orders.dto";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export async function getOrders(token: string): Promise<GetOrdersOutput> {
  const url = `${baseUrl}/orders`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
}
