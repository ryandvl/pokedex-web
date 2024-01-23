"use client";
import FilterPanel from "@/components/FilterPanel";
import Header from "@/components/Header";
import LeftPanel from "@/components/LeftPanel";
import PokemonCard from "@/components/PokemonCard";
import { fetchPokemon, fetchPokemons } from "@/lib/api";
import { useEffect, useState } from "react";

type PokemonProps = { name: string };

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const getPokemons = async () => {
    let data = await fetchPokemons(10, 0);
    setPokemons(data.results);
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
          <div className="h-full w-full">
            {pokemons.length === 0 && <p>Loading List...</p>}
            {pokemons.length > 0 &&
              pokemons.map((pokemon, index) => (
                <PokemonCard key={index} pokemonName={pokemon.name} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
