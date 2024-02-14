export interface PokemonProps {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }[];
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      version_group: {
        name: string;
        url: string;
      };
      move_learn_method: {
        name: string;
        url: string;
      };
    }[];
  }[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
      showdown: {
        back_default: string;
        back_female: string | null;
        back_shiny: string;
        back_shiny_female: string | null;
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string;
          back_gray: string;
          front_default: string;
          front_gray: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          front_default: string;
          front_gray: string;
        };
      };
      "generation-ii": {
        crystal: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      "generation-iii": {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        "firered-leafgreen": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        "ruby-sapphire": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      "generation-iv": {
        "diamond-pearl": {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        "heartgold-soulsilver": {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        platinum: {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-v": {
        "black-white": {
          animated: {
            back_default: string;
            back_female: string | null;
            back_shiny: string;
            back_shiny_female: string | null;
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        "x-y": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-vii": {
        icons: {
          front_default: string;
          front_female: string | null;
        };
        "ultra-sun-ultra-moon": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-viii": {
        icons: {
          front_default: string;
          front_female: string | null;
        };
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: 1;
    type: {
      name: string;
      url: string;
    };
  }[];
  past_types: {
    generation: {
      name: string;
      url: string;
    };
    types: [
      {
        slot: 1;
        type: {
          name: string;
          url: string;
        };
      }
    ];
  }[];
}

export interface FetchPokemonsDataProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonsDataProps[];
}

export interface PokemonsDataProps {
  name: string;
  url: string;
}
