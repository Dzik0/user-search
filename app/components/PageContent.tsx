"use client";

import FormFill from "./FormFill";
import Profile from "./Profile";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Header from "./Header";
import NoUser from "./NoUser";
import { useSearchParams } from "next/navigation";

export default function PageContent() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("ThemeContext not found");
  const { darkMode, changeMode } = theme;
  const params = useSearchParams().get("user");

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[900px] flex-col gap-8 p-3 pt-8">
        <Header darkMode={darkMode} changeMode={changeMode} />
        <FormFill darkMode={darkMode} />
        {params ? (
          <Profile darkMode={darkMode} />
        ) : (
          <NoUser darkMode={darkMode} />
        )}
      </div>
    </div>
  );
}
