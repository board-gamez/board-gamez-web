import Link from "next/link";
import InstagramIcon from "./icons/Instagram";
import TelegramIcon from "./icons/Telegram";
import YoutubeIcon from "./icons/Youtube";

export default function Footer() {
  return (
    <footer className="bg-white mt-10">
      <div className="container mx-auto flex py-5 px-3 flex-col sm:flex-row">
        <p className="flex-1 text-darken-gray text-center sm:text-right">
          کلیه حقوق فروشگاه متعلق به بردگیمز می باشد.
        </p>

        <div className="flex items-center gap-4 justify-center my-4 sm:my-0">
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
    </footer>
  );
}
