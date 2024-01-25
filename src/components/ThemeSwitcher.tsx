"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [active, setActive] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  useEffect(() => {
    setActive(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    if (active) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [active]);

  const handleThemeSwitcher = () => {
    if (cooldown) return;

    setCooldown(true);

    setActive(!active);

    setTimeout(() => {
      setCooldown(false);
    }, 1000);
  };

  return (
    <button
      className="dark:bg-[#2b2b2b] rounded-full h-16 w-16 transition-colors flex justify-center align-middle"
      onClick={handleThemeSwitcher}
    >
      {active ? (
        <Moon className="w-6 h-6 text-white transition-colors flex" />
      ) : (
        <Sun className="w-6 h-6 text-black transition-colors flex" />
      )}
    </button>
  );
}
