"use client";

import clsx from "clsx";
import "./globals.css";
import { Space_Mono } from "next/font/google";
import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";

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
