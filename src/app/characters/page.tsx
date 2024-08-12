import { CharacterOverview } from '@/src/components/CharacterOverview'
import { GET_CHARACTERS } from '@/src/graphql/characters'
import { BaseLayout } from '@/src/layouts/BaseLayout'
import { query } from '@/src/lib/apolloClient'
import { CharactersResponse } from '@/src/types'

export default async function Characters() {
  const { data } = await query<CharactersResponse>({ query: GET_CHARACTERS })

  return (
    <BaseLayout>
      {data.allPeople.people.map((character) => (
        <CharacterOverview
          key={character.id}
          character={character}
        ></CharacterOverview>
      ))}
    </BaseLayout>
  )
}
