import Image from "next/image";
import SearchIcon from "./icons/Search";
import CartIcon from "./icons/Cart";
import UserIcon from "./icons/User";

export default function Navbar() {
  return (
    <nav className="bg-red-300 container mx-auto flex">
      <div className="bg-blue-200 flex-none">
        <Image src={"/logo.svg"} width={100} height={100} alt="hello" />
      </div>
      <div className="bg-yellow-200 flex-1">2</div>
      <div className="bg-purple-200 flex-none flex items-center">
        <SearchIcon />
        <CartIcon />
        <UserIcon />
      </div>
    </nav>
  );
}
