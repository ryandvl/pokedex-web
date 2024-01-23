import { fetchPokemon } from "@/lib/api";
import { useEffect, useState } from "react";

export default function PokemonCard({ pokemonName }: { pokemonName: string }) {
  const [pokemon, setPokemon] = useState<{ name: string }>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchPokemon(pokemonName);
      setPokemon(data);
      setLoaded(true);
    };

    getPokemon();
  }, [pokemonName]);

  return (
    <>
      {loaded === false && <h1>Loading Pokémon...</h1>}
      {loaded === true && pokemon && <h1>Pokémon: {pokemon.name}</h1>}
    </>
  );
}
