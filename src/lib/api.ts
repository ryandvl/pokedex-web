import { FetchPokemonsDataProps, PokemonProps } from "./apiSchema";

type type = string;
type id = string | number;

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
