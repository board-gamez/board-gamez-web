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
    <section className="flex gap-3 flex-col md:flex-row">
      <div className="bg-white w-full md:w-fit lg:w-96 p-3 justify-between rounded-lg flex-none h-fit flex flex-row md:flex-col">
        <Link
          href={"/profile/personal-info"}
          className="flex gap-2 md:gap-5 font-bold p-5 border-l md:border-l-0 md:border-b min-w-fit w-full justify-center md:justify-normal"
        >
          <UserIcon />
          <div>اطلاعات حساب کاربری</div>
        </Link>

        <Link
          href={"/profile/orders"}
          className="flex gap-2 md:gap-5 font-bold p-5 border-l md:border-l-0 md:border-b w-full justify-center md:justify-normal"
        >
          <OrderIcon />
          <div>سفارش‌ها</div>
        </Link>

        <button className="flex gap-2 md:gap-5 font-bold p-5 w-full justify-center md:justify-normal">
          <ExitIcon />
          <div>خروج</div>
        </button>
      </div>

      <div className="bg-white flex-1">{children}</div>
    </section>
  );
}
