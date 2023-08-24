"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDarkMode, setDarkMode] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex toggle items-center justify-center rounded-lg"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* {resolvedTheme === "dark" ? (
        <SunIcon className="w-6 sm:w-7 dark:text-[#ffbf2a] hover:dark:text-[#96abd6]" />
      ) : (
        <MoonIcon className="w-6 sm:w-7 text-[#96abd6] hover:text-[#ffbf2a]" />
      )} */}
      
      <div className="dark-mode-switch-wrapper">
        <DarkModeSwitch
          style={{ transition: "none" }}
          className="toggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={28}
          moonColor="#96abd6"
          sunColor="#ffbf2a"
        />
      </div>
    </button>
  );
};

export default ThemeButton;
