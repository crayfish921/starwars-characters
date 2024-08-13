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
  }
  species: {
    name: string
  }
  filmConnection: {
    films: Film[]
  }
} & Omit<Character, 'id'>

export type CharacterDetailedResponse = {
  person: CharacterDetailed
}
