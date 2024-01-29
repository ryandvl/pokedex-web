"use client";
import FilterPanel from "@/components/FilterPanel";
import Header from "@/components/header/Header";
import LeftPanel from "@/components/LeftPanel";
import PokemonCard from "@/components/PokemonCard";
import { fetchPokemons } from "@/lib/api";
import { PokemonsDataProps } from "@/lib/ApiSchema";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonsDataProps[]>([]);

  const getPokemons = async () => {
    let data = await fetchPokemons(30, 0);

    const tercias: PokemonsDataProps[] = [];

    for (let i = 0; i < data.results.length; i += 3) {
      tercias.push(data.results.slice(i, i + 3)[0]);
    }

    setPokemons(tercias);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="flex">
      <LeftPanel />
      <div className="box-border">
        <Header />
        <div className="fixed flex h-full w-full">
          <FilterPanel />
          <div className="h-full w-full overflow-auto">
            <div className="dark:bg-[#141414] flex flex-wrap my-20 mx-[3rem] justify-center align-middle rounded-lg">
              {pokemons.length === 0 && <p>Loading List...</p>}
              {pokemons.length > 0 &&
                pokemons.map((pokemon, index) => (
                  <PokemonCard key={index} pokemonName={pokemon.name} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
