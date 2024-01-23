"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    if (active) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [active]);

  const handleThemeSwitcher = () => setActive(!active);

  return (
    <button
      className="bg-gray-500 dark:bg-gray-900 rounded h-16 w-16 transition-colors"
      onClick={handleThemeSwitcher}
    />
  );
}
