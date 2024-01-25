import { fetchPokemon, getPokemonColor } from "@/lib/api";
import { PokemonProps } from "@/lib/ApiSchema";
import { firstUpperCase } from "@/lib/utils";
import Image from "next/image";
import { createElement, useEffect, useState } from "react";

export default function PokemonCard({ pokemonName }: { pokemonName: string }) {
  const [pokemon, setPokemon] = useState<PokemonProps>();
  const [loaded, setLoaded] = useState(false);
  const [pokemonColor, setPokemonColor] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonData = await fetchPokemon(pokemonName);
      setPokemon(pokemonData);
      setPokemonColor(getPokemonColor(pokemonData));
      setLoaded(true);
    };

    getPokemon();
  }, [pokemonName]);

  const imageLoader = ({}) => {
    return `${pokemon?.sprites.other["official-artwork"].front_default}`;
  };

  return (
    <>
      {loaded === false && (
        <div className="bg-gray-950 dark:bg-gray-800 w-56 h-80"></div>
      )}
      {loaded === true && pokemon && (
        <div className="w-[12rem] h-[15rem] box-border m-10 rounded-2xl transition-colors block">
          <div className="w-full h-full justify-center block p-5">
            <div className="w-full h-16 flex justify-center rounded transition-colors">
              <Image
                loader={imageLoader}
                src={`${pokemon.name}_default_artwork.png`}
                alt={`${pokemon.name} image`}
                width={100}
                height={100}
                quality={100}
                className="w-32 h-32"
                priority
              />
            </div>

            <p className="text-black dark:text-white font-mono">
              {firstUpperCase(pokemon.name)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
