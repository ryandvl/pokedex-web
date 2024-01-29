import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import PokedexLogo from "../../../public/images/PokedexLogo.png";
import Search from "./SearchBar";

export default function Header() {
  return (
    <header className="shadow-lightBorderY dark:shadow-darkBorderY h-20 flex w-screen transition-colors items-center box-border">
      <div className="flex h-full gap-x-16">
        <div className="w-[20rem] h-full flex box-border justify-center">
          <Image
            src={PokedexLogo}
            alt={`Pokedex Logo image`}
            quality={100}
            className="w-[12rem] h-full flex"
            priority
          />
        </div>

        <div className="h-full items-center flex my-auto">
          <Search />
        </div>
      </div>

      <ThemeSwitcher />
    </header>
  );
}
