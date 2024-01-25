import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import PokedexLogo from "../../public/images/PokedexLogo.png";

export default function Header() {
  return (
    <header className="bg-red-500 dark:bg-red-600 shadow-lightBorderY dark:shadow-darkBorderY h-28 flex w-screen transition-colors align-middle box-border">
      <div className="w-[20rem] h-full flex box-border justify-center">
        <Image
          src={PokedexLogo}
          alt={`Pokedex Logo image`}
          quality={100}
          className="w-[16rem] h-full flex"
          priority
        />
      </div>

      <ThemeSwitcher />
    </header>
  );
}
