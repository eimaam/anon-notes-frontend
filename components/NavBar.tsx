"use client";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import { HOME_MENU_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { Button, Theme } from "@radix-ui/themes";
import PrimaryButton from "./ui/button";


const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sm:!hidden w-[90%] md:w-[80%] lg:!w-[70%] !flex scroll-smooth items-center justify-between !p-3 rounded-2xl !text-base !bg-white dark:!bg-primary dark:!border dark:border-white text-white mt-8 left-0 right-0 z-50 mx-auto">
      <h1 className="md:text-lg lg:text-xl min-w-max font-extrabold text-black dark:text-white">
        anon-notes
      </h1>

      <div className="flex items-center justify-evenly gap-4 whitespace-nowrap">
        {HOME_MENU_ITEMS.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-sm text-black dark:text-white"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <PrimaryButton variant="outline" size="3">
          Login
        </PrimaryButton>
        <PrimaryButton size="3">
          Sign Up
        </PrimaryButton>
        <DarkModeSwitch
          size={18}
          onChange={toggleDarkMode}
          checked={mounted ? theme === "dark" : false}
          className="dark:text-white"
        />
      </div>
    </header>
  );
};

export default Navbar;
