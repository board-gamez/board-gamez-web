import { orders } from "@/fake-data/order.data";

export default function Profile() {
  return (
    <>
      <div className="flex text-center font-bold border-b p-2">
        <div className="flex-none w-32 p-3">کد سفارش</div>
        <div className="flex-1 p-3">تاریخ</div>
        <div className="flex-1 p-3">وضعیت سفارش</div>
        <div className="flex-1 p-3">مبلغ</div>
      </div>

      {orders.map((order) => (
        <div
          key={order._id}
          className="flex items-center text-center font-bold border-b p-2"
        >
          <div className="flex-none w-32 p-3">{order._id}</div>
          <div className="flex-1 p-3">
            {new Intl.DateTimeFormat("fa-IR", {
              dateStyle: "medium",
            }).format(order.createdAt)}
          </div>
          <div className="flex-1 p-3">{order.status}</div>
          <div className="flex-1 p-3">
            {order.totalPrice.toLocaleString()} تومان
          </div>
        </div>
      ))}
    </>
  );
}
