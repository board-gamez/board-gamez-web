import Link from "next/link";
import InstagramIcon from "./icons/Instagram";
import TelegramIcon from "./icons/Telegram";
import YoutubeIcon from "./icons/Youtube";

export default function Topbar() {
  return (
    <div className="container mx-auto flex justify-between px-2 py-3">
      <div className="flex-1 text-center sm:text-right">
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
