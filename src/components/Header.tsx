import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="bg-red-500 dark:bg-red-600 shadow-lightBorderY dark:shadow-darkBorderY h-28 flex w-screen transition-colors">
      <ThemeSwitcher />
    </header>
  );
}
