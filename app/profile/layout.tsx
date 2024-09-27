import ExitIcon from "@/components/icons/Exit";
import OrderIcon from "@/components/icons/Order";
import UserIcon from "@/components/icons/User";
import Link from "next/link";
export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex gap-3">
      <div className="bg-white w-96 p-3 rounded-lg flex-none h-fit">
        <Link
          href={"/profile/personal-info"}
          className="flex gap-5 font-bold p-5 border-b"
        >
          <UserIcon />
          <div>اطلاعات حساب کاربری</div>
        </Link>

        <Link
          href={"/profile/orders"}
          className="flex gap-5 font-bold p-5 border-b"
        >
          <OrderIcon />
          <div>سفارش‌ها</div>
        </Link>

        <button className="flex gap-5 font-bold p-5">
          <ExitIcon />
          <div>خروج</div>
        </button>
      </div>

      <div className="bg-white flex-1">{children}</div>
    </section>
  );
}
