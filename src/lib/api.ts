type type = string;
type id = string | number;

// Regex a-Z and 0-9
async function verifyRegex(string: string | number) {
  const pattern = /^[a-zA-Z0-9]+$/;

  return pattern.test(string.toString());
}

// Fetch data from PokeAPI
async function fetchData(type: type, id: id) {
  if(!verifyRegex(type) || !verifyRegex(id)) return undefined
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/${type}/${id}`);

    const data = await response.json();

    return data;
  } catch (error) {
    return undefined;
  }
}

export async function fetchPokemon(id: id) {
  return fetchData('pokemon', id);
}