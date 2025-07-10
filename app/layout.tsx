"use client";

import clsx from "clsx";
import "./globals.css";
import { Space_Mono } from "next/font/google";
import { createContext, useState } from "react";

type ThemeContextType = {
  darkMode: boolean;
  changeMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function changeMode() {
    setDarkMode((prevS) => !prevS);
    console.log(darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, changeMode }}>
      <html lang="en">
        <body
          className={clsx(
            spaceMono.className,
            `${darkMode ? "bg-neutral-900" : "bg-[#edf1ff]"}`,
          )}
        >
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
