type type = string;
type id = string | number;

// Regex a-Z and 0-9
async function verifyRegex(string: string | number) {
  const pattern = /^[a-zA-Z0-9]+$/;

  return pattern.test(string.toString());
}

// Fetch data from PokeAPI
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
    console.log("Error");
    return undefined;
  }
}

export async function fetchPokemon(id: id) {
  return fetchData("pokemon", id);
}

export async function fetchPokemons(
  limit: number = 1000000,
  offset: number = 0
) {
  return fetchData("pokemon", `?limit=${limit}&offset=${offset}`, false);
}
