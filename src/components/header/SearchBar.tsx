"use client";

import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <form id="search_form" className="w-[30rem] h-16 relative">
      <div className="relative w-full h-full">
        <input
          autoComplete="off"
          autoCorrect="off"
          id="search"
          name="pokemon_search"
          placeholder="Search Pokémon..."
          type="text"
          className="w-full h-full p-4 bg-[#eeeeee] dark:bg-[#202020] text-lightMode dark:text-darkMode place-content-center rounded-2xl transition-colors"
        />
        <button className="absolute right-0 top-1 p-4">
          <SearchIcon className="w-6 h-6flex transition-colors text-lightMode dark:text-darkMode" />
        </button>
      </div>
    </form>
  );
}
