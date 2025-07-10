"use client";

import Image from "next/image";
import Link from "next/link";
import darkModeImg from "@/public/icon-moon.svg";
import lightModeImg from "@/public/icon-sun.svg";
import FormFill from "./components/FormFill";
import Profile from "./components/Profile";
import { useContext } from "react";
import { ThemeContext } from "./layout";

export default function Page() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("ThemeContext not found");
  const { darkMode, changeMode } = theme;

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[900px] flex-col gap-8 p-3 pt-8">
        <div className="flex items-center justify-between">
          <Link
            href={"/"}
            className="rounded-xl px-3 focus:shadow-[0_0_0_2px_#fff,0_0_0_5px_#0079ff] focus:outline-0"
          >
            <h1 className="text-2xl font-bold">devfinder</h1>
          </Link>
          <button
            className="flex cursor-pointer items-center gap-3 rounded-xl px-3 uppercase focus:shadow-[0_0_0_2px_#fff,0_0_0_5px_#0079ff]"
            onClick={changeMode}
          >
            dark{" "}
            <span>
              {" "}
              <Image
                src={darkModeImg}
                width={20}
                height={20}
                alt="dark mode logo"
              />
            </span>
          </button>
        </div>
        <FormFill />
        <Profile />
      </div>
    </div>
  );
}
