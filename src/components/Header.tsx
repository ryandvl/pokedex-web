import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="shadow-lightBorderY dark:shadow-darkBorderY h-28 flex w-screen transition-colors">
      <ThemeSwitcher />
    </header>
  );
}
