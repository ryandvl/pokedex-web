"use client";

import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <button className="w-80 h-full bg-zinc-900 flex gap-3 px-5 py-3 rounded-xl items-center">
      <SearchIcon className="w-5 h-5 text-zinc-600 transition-colors" />

      <p className="text-zinc-600 text-sm">Search Pokémon...</p>
    </button>
  );
}
