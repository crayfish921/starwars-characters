import { gql } from '@apollo/client'

export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    person(id: $id) {
      name
      birthYear
      homeworld {
        name
        population
      }
      species {
        name
        language
      }
      filmConnection {
        films {
          title
        }
      }
    }
  }
`
