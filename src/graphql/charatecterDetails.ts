import { gql } from '@apollo/client'

export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    person(id: $id) {
      name
      homeworld {
        name
      }
      species {
        name
      }
      filmConnection {
        films {
          title
        }
      }
    }
  }
`
