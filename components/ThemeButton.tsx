"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useSession, signOut } from "next-auth/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { data: session } = useSession();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => setTheme("dark"), [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg"
      // onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      onClick={() => signOut()}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="w-7 dark:text-[#ffbf2a] hover:dark:text-[#96abd6]" />
      ) : (
        <MoonIcon className="w-7 text-[#96abd6] hover:text-[#ffbf2a]" />
      )}
    </button>
  );
};

export default ThemeButton;
