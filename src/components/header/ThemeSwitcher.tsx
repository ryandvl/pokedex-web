"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
      className="rounded-lg h-10 w-10 transition-colors flex justify-center items-center border-2 border-gray-500"
      onClick={handleThemeSwitcher}
    >
      {active ? (
        <Moon className="w-7 h-7 text-white transition-colors flex" />
      ) : (
        <Sun className="w-7 h-7 text-black transition-colors flex" />
      )}
    </button>
  );
}
