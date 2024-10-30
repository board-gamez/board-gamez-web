"use client";

import Image from "next/image";
import SearchIcon from "./icons/Search";
import CartIcon from "./icons/Cart";
import UserIcon from "./icons/User";
import Link from "next/link";
import { useCart } from "@/lib/context/cart-context";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Redirect from "@/lib/utils/Redirect";

type SearchInputs = {
  search: string;
};

export default function Navbar() {
  const { cartItemsCount } = useCart();
  const { data: session } = useSession();

  const { register, handleSubmit } = useForm<SearchInputs>();

  const submitSearch = ({ search }: SearchInputs) => {
    const encodedSearch = encodeURIComponent(search);
    Redirect(`/?search=${encodedSearch}`);
  };

  return (
    <nav className="container mx-auto flex items-center py-2 mb-3 justify-between">
      <Link href={"/"} className="p-2 flex-none hidden sm:block">
        <Image src={"/logo.svg"} width={80} height={80} alt="" />
      </Link>

      <div className="flex-1">
        <form
          onSubmit={handleSubmit(submitSearch)}
          className="flex justify-center bg-light-gray w-full sm:w-fit mx-auto rounded-full overflow-hidden"
        >
          <input
            type="text"
            placeholder="جستجو در بردگیمز"
            className="bg-inherit py-2 px-4 w-full sm:w-72 md:w-96 outline-none"
            {...register("search")}
          />

          <button
            type="submit"
            className="bg-inherit p-2 hover:bg-dark-gray rounded-full"
          >
            <SearchIcon />
          </button>
        </form>
      </div>

      <div className="hidden sm:flex">
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
    </nav>
  );
}
