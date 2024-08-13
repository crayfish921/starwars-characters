import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query GetAllCharacters {
    allPeople {
      people {
        name
        birthYear
        id
      }
    }
  }
`
