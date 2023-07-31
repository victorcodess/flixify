"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export default function Providers({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}
