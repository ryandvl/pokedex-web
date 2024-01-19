import { fetchPokemon } from "@/lib/api";
import { firstUpperCase } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { useState } from "react";

type PageProps = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  var pokemon = await fetchPokemon(params.id);

  if (!pokemon)
    return {
      title: "Not Found • Pokédex",
      description: "Not Found",
    };

  return {
    title: `${firstUpperCase(pokemon.name)} • Pokédex`,
    description: "a",
  };
}

export default async function Page({ params }: PageProps) {
  var pokemon = await fetchPokemon(params.id);

  if (!pokemon) return notFound();

  return <h1>Pokemon</h1>;
}
