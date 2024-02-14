import Image from "next/image";
import Logo from "@/assets/logo-pokedex-web.png";

import SearchBar from "./search-bar";
import ThemeSwitcher from "./theme-switcher";
import { HorizontalSeparator } from "../separators";

import { GithubIcon, InfoIcon } from "lucide-react";

export function Header() {
  return (
    <div className="w-full h-20 flex items-center justify-between">
      <div className="h-full flex gap-5 items-center">
        <Image
          src={Logo}
          alt={`Pokédex Logo image`}
          quality={100}
          className="w-[180px] h-[54px]"
          priority
        />

        <SearchBar />
      </div>

      <div className="h-full flex items-center gap-5">
        <div className="flex justify-center items-center gap-1.5">
          <InfoIcon className="w-6 h-6 text-zinc-400 transition-colors flex" />
          <p className="text-xl text-zinc-200">About</p>
        </div>

        <HorizontalSeparator />

        <ThemeSwitcher />

        <GithubIcon className="w-8 h-8 text-zinc-500 transition-colors flex" />
      </div>
    </div>
  );
}
