"use client";
import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSwitcher() {
  const [active, setActive] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  useEffect(() => {
    var theme = localStorage.getItem("theme") == "dark";
    setActive(
      theme ?? window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  useEffect(() => {
    if (active) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [active]);

  const handleThemeSwitcher = () => {
    if (cooldown) return;

    setCooldown(true);

    setActive(!active);
    localStorage.setItem("theme", active ? "light" : "dark");

    setTimeout(() => {
      setCooldown(false);
    }, 1000);
  };

  return (
    <button
      className="flex justify-center items-center"
      onClick={handleThemeSwitcher}
    >
      {active ? (
        <MoonIcon className="w-8 h-8 text-zinc-500 transition-colors flex" />
      ) : (
        <SunIcon className="w-8 h-8 text-black transition-colors flex" />
      )}
    </button>
  );
}
