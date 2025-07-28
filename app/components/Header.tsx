import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import darkModeImg from "@/public/icon-moon.svg";
import lightModeImg from "@/public/icon-sun.svg";

type Props = {
  darkMode: boolean;
  changeMode: () => void;
};

export default function Header({ darkMode, changeMode }: Props) {
  return (
    <div className="flex items-center justify-between">
      <Link
        href={"/"}
        className="rounded-xl px-3 focus:shadow-[0_0_0_2px_#fff,0_0_0_5px_#0079ff] focus:outline-0"
      >
        <h1
          className={clsx(
            `text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`,
          )}
        >
          devfinder
        </h1>
      </Link>
      <button
        className={clsx(
          `flex cursor-pointer items-center gap-3 rounded-xl px-3 uppercase ${darkMode ? "text-white focus:shadow-[0_0_0_2px_#141d2f,0_0_0_5px_#fff]" : "text-black focus:shadow-[0_0_0_2px_#fff,0_0_0_5px_#0079ff]"}`,
        )}
        onClick={changeMode}
      >
        {darkMode ? "light mode" : "dark mode"}
        <span>
          {" "}
          <Image
            src={darkMode ? lightModeImg : darkModeImg}
            width={20}
            height={20}
            alt="dark mode logo"
          />
        </span>
      </button>
    </div>
  );
}
