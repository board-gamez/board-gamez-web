"use client";

import Link from "next/link";
import InstagramIcon from "./icons/Instagram";
import TelegramIcon from "./icons/Telegram";
import YoutubeIcon from "./icons/Youtube";
import Image from "next/image";
import CartIcon from "./icons/Cart";
import { useCart } from "@/lib/context/cart-context";
import { useSession } from "next-auth/react";
import UserIcon from "./icons/User";

export default function Topbar() {
  const { cartItemsCount } = useCart();
  const { data: session } = useSession();

  return (
    <div className="container mx-auto flex justify-between sm:px-2 py-1 sm:py-3">
      <div className="w-full flex sm:hidden justify-between">
        <Link href={"/"} className="p-2">
          <Image src={"/logo.svg"} width={80} height={80} alt="" />
        </Link>

        <div className="flex">
          <Link
            href={"/cart"}
            className="rounded-full p-2 ml-3 sm:ml-2 hover:bg-light-gray duration-150 relative"
          >
            <CartIcon />
            {cartItemsCount() > 0 && (
              <span className="absolute text-xs bg-black aspect-square w-5 text-white flex items-center justify-center bottom-0 right-0 rounded-md">
                {cartItemsCount()}
              </span>
            )}
          </Link>

          {session?.user.name ? (
            <Link
              href={"/profile/personal-info"}
              className="rounded-full p-2 ml-1 sm:ml-2 hover:bg-light-gray duration-150"
            >
              <UserIcon />
            </Link>
          ) : (
            <Link
              href={"/auth"}
              className="rounded-lg py-3 px-6 mx-2 duration-150 bg-black hover:bg-light-black text-center text-white"
            >
              ورود / ثبت نام
            </Link>
          )}
        </div>
      </div>

      <div className="flex-1 text-right hidden sm:block">
        شماره پشتیبانی و مشاوره: 09386199599
      </div>

      <div className="hidden sm:flex items-center gap-4">
        <Link href={"https://t.me/board_gamez"}>
          <TelegramIcon className="text-darken-gray hover:text-dark-black duration-150" />
        </Link>

        <Link href={"https://www.instagram.com/board_gamez_shop"}>
          <InstagramIcon className="text-darken-gray hover:text-dark-black duration-150" />
        </Link>

        <Link href={"https://www.youtube.com/@board_gamez"}>
          <YoutubeIcon className="text-darken-gray hover:text-dark-black duration-150" />
        </Link>
      </div>
    </div>
  );
}
