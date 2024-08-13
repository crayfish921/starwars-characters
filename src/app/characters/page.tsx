import { CharactersOverviewContainer } from '@/src/components/CharacterOverviewContainer'
import { SearchInput } from '@/src/components/SearchInput'
import { GET_CHARACTERS } from '@/src/graphql/characters'
import { BaseLayout } from '@/src/layouts/BaseLayout'
import { query } from '@/src/lib/apolloClient'
import { CharactersResponse } from '@/src/types'
import { SearchContextProvider } from '../../context/SearchContextProvider'

export default async function Characters() {
  const { data } = await query<CharactersResponse>({ query: GET_CHARACTERS })

  return (
    <BaseLayout>
      <SearchContextProvider>
        <SearchInput />
        <CharactersOverviewContainer characters={data.allPeople.people} />
      </SearchContextProvider>
    </BaseLayout>
  )
}
