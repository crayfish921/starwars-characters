export type Character = {
  name: string
  birthYear: string
  id: string
}

export type CharactersResponse = {
  allPeople: {
    people: Character[]
  }
}

type Film = {
  title: string
}

export type CharacterDetailed = {
  homeworld: {
    name: string
    population: string
  }
  species: {
    name: string
    language: string
  }
  filmConnection: {
    films: Film[]
  }
} & Omit<Character, 'id'>

export type CharacterDetailedResponse = {
  person: CharacterDetailed
}
