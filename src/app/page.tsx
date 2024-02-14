"use client";
import { Header } from "@/components/header/header";
import { fetchPokemons } from "../lib/api";
import { PokemonsDataProps } from "@/types/api-schema";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonsDataProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<any[][]>([]);

  const getPokemons = async () => {
    let data = await fetchPokemons(30, 0);

    const tercias: PokemonsDataProps[] = [];

    for (let i = 0; i < data.results.length; i += 3) {
      tercias.push(data.results.slice(i, i + 3)[0]);
    }

    setPokemons(tercias);
  };

  const changePage = () => {};

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Header />
    // <div className="flex">
    //   <LeftPanel />
    //   <div className="box-border">
    //     <Header />
    //     <div className="fixed flex h-full w-full">
    //       <FilterPanel />
    //       <div className="h-full w-full flex m-[1rem] overflow-auto">
    //         <div className="flex mt-[4.5rem] m-[2rem]">
    //           <div className="h-[40rem] flex justify-center items-center">
    //             {page > 1 ? (
    //               <ChevronLeft className="w-[3rem] h-[3rem] text-[#303030] dark:text-[#aaaaaa] flex transition-colors" />
    //             ) : (
    //               <ChevronLeft className="w-[3rem] h-[3rem] text-[#151515] dark:text-[#555555] flex transition-colors" />
    //             )}
    //           </div>

    //           <div className="flex m-2 flex-wrap justify-center items-center gap-[4rem] h-max">
    //             {pokemons.length === 0 && <p>Loading List...</p>}
    //             {pokemons.length > 0 &&
    //               pokemons.map((pokemon, index) => (
    //                 <PokemonCard key={index} pokemonName={pokemon.name} />
    //               ))}
    //           </div>

    //           <div className="h-[40rem] flex justify-center items-center">
    //             {page > 1 ? (
    //               <ChevronRight className="w-[3rem] h-[3rem] text-[#303030] dark:text-[#aaaaaa] flex transition-colors" />
    //             ) : (
    //               <ChevronRight className="w-[3rem] h-[3rem] text-[#151515] dark:text-[#555555] flex transition-colors" />
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
