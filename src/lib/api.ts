import { FetchPokemonsDataProps, PokemonProps } from "./ApiSchema";

type type = string;
type id = string | number;

interface PokemonTypesProps {
  [key: string]: {
    color: string;
    id: number;
  };
}

export const PokemonTypes: PokemonTypesProps = {
  normal: {
    color: "#BBBCAE",
    id: 1,
  },
  fighting: {
    color: "#A25843",
    id: 2,
  },
  flying: {
    color: "#79A4FF",
    id: 3,
  },
  poison: {
    color: "#A95EA1",
    id: 4,
  },
  ground: {
    color: "#EECB57",
    id: 5,
  },
  rock: {
    color: "#CFBD73",
    id: 6,
  },
  bug: {
    color: "#C4D321",
    id: 7,
  },
  ghost: {
    color: "#7975D6",
    id: 8,
  },
  steel: {
    color: "#C3C2D8",
    id: 9,
  },
  fire: {
    color: "#F95542",
    id: 10,
  },
  water: {
    color: "#55AEFE",
    id: 11,
  },
  grass: {
    color: "#8CD852",
    id: 12,
  },
  electric: {
    color: "#FCE53D",
    id: 13,
  },
  psychic: {
    color: "#FF61B3",
    id: 14,
  },
  ice: {
    color: "#95F1FE",
    id: 15,
  },
  dragon: {
    color: "#8975FD",
    id: 16,
  },
  dark: {
    color: "#8D6A56",
    id: 17,
  },
  fairy: {
    color: "#FAACFF",
    id: 18,
  },
  unknown: {
    color: "#ccc",
    id: 10001,
  },
  shadow: {
    color: "black",
    id: 10002,
  },
};

// Regex a-Z and 0-9
async function verifyRegex(string: string | number) {
  const pattern = /^[a-zA-Z0-9]+$/;

  return pattern.test(string.toString());
}

/**
 * Fetch Data from PokeAPI
 * @param type Endpoint type
 * @param id Id to find in type or endpoint
 * @param isRoute Is route endpoint
 * @returns
 */
async function fetchData(type: type, id: id, isRoute: boolean = true) {
  if (!verifyRegex(type) || (!isRoute && !verifyRegex(id))) return undefined;
  try {
    let endpoint = `${type}`;
    if (isRoute) endpoint += `/${id}`;
    else endpoint += `${id}`;

    const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(`Error: ${type}, ${id}, ${isRoute}`);
    return undefined;
  }
}

export async function fetchPokemon(id: id): Promise<PokemonProps> {
  return fetchData("pokemon", id);
}

export async function fetchPokemons(
  limit: number = 1000000,
  offset: number = 0
): Promise<FetchPokemonsDataProps> {
  return fetchData("pokemon", `?limit=${limit}&offset=${offset}`, false);
}

export function getPokemonColor(pokemon: PokemonProps) {
  var pokemonTypes = pokemon.types;
  if (!pokemonTypes.length) return PokemonTypes.unknown.color;

  var pokemonType = PokemonTypes[pokemon.types[0].type.name];

  console.log(pokemonType);
  return pokemonType.color;
}
