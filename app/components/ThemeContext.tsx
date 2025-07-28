// lib/ThemeContext.tsx
"use client";

import { createContext } from "react";

type ThemeContextType = {
  darkMode: boolean;
  changeMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
