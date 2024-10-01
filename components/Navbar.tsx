"use client";

import Image from "next/image";
import SearchIcon from "./icons/Search";
import CartIcon from "./icons/Cart";
import UserIcon from "./icons/User";
import Link from "next/link";
import { useCart } from "@/lib/context/cart-context";

export default function Navbar() {
  const { cartItemsCount } = useCart();

  return (
    <nav className="container mx-auto flex items-center py-2 mb-3 justify-between">
      <Link href={"/"} className="p-2">
        <Image src={"/logo.svg"} width={80} height={80} alt="" />
      </Link>

      <div className="flex-1 hidden sm:block">
        <form className="flex justify-center bg-light-gray w-fit mx-auto rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="جستجو"
            className="bg-inherit py-2 px-4 w-96 outline-none"
          />

          <button className="bg-inherit p-2 hover:bg-dark-gray rounded-full">
            <SearchIcon />
          </button>
        </form>
      </div>

      <div className="flex">
        <button className="rounded-full p-2 ml-2 hover:bg-light-gray duration-150 block sm:hidden">
          <SearchIcon />
        </button>

        <Link
          href={"/cart"}
          className="rounded-full p-2 ml-2 hover:bg-light-gray duration-150 relative"
        >
          <CartIcon />
          {cartItemsCount() > 0 && (
            <span className="absolute text-xs bg-black aspect-square w-5 text-white flex items-center justify-center bottom-0 right-0 rounded-md">
              {cartItemsCount()}
            </span>
          )}
        </Link>

        <Link
          href={"/profile/personal-info"}
          className="rounded-full p-2 ml-2 hover:bg-light-gray duration-150"
        >
          <UserIcon />
        </Link>
      </div>
    </nav>
  );
}
