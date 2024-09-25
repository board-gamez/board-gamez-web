import Image from "next/image";
import SearchIcon from "./icons/Search";
import CartIcon from "./icons/Cart";
import UserIcon from "./icons/User";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex items-center py-2">
      <Link href={"/"} className="p-2">
        <Image src={"/logo.svg"} width={80} height={80} alt="" />
      </Link>

      <div className="flex-1">
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
        <Link
          href={"/cart"}
          className="rounded-full p-2 ml-2 hover:bg-light-gray duration-150"
        >
          <CartIcon />
        </Link>

        <Link
          href={"/account"}
          className="rounded-full p-2 ml-2 hover:bg-light-gray duration-150"
        >
          <UserIcon />
        </Link>
      </div>
    </nav>
  );
}
