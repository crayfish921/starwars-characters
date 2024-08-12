export type Character = {
  name: string
  id: string
}

export type CharactersResponse = {
  allPeople: {
    people: Character[]
  }
}
