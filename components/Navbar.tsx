import Image from "next/image";
import SearchIcon from "./icons/Search";
import CartIcon from "./icons/Cart";
import UserIcon from "./icons/User";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    {
      id: 1,
      name: "تماس با ما",
      link: "/contact-us",
    },
    {
      id: 2,
      name: "درباره با ما",
      link: "/about-us",
    },
  ];

  return (
    <nav className="bg-red-300 container mx-auto flex items-center">
      <Link href={"/"} className="bg-blue-200 p-2">
        <Image src={"/logo.svg"} width={80} height={80} alt="" />
      </Link>

      <div className="bg-yellow-200 flex-1">
        {navItems.map((navItem) => (
          <Link
            key={navItem.id}
            href={navItem.link}
            className="inline-block px-3 p-2"
          >
            {navItem.name}
          </Link>
        ))}
      </div>

      <div className="bg-purple-200 flex">
        <SearchIcon />
        <CartIcon />
        <UserIcon />
      </div>
    </nav>
  );
}
