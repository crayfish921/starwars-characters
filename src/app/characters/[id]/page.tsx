import { GET_CHARACTER_DETAILS } from '@/src/graphql/charatecterDetails'
import { BaseLayout } from '@/src/layouts/BaseLayout'
import { query } from '@/src/lib/apolloClient'
import { CharacterDetailedResponse } from '@/src/types'
import Link from 'next/link'

export default async function Character({
  params
}: {
  params: { id: string }
}) {
  const {
    data: { person }
  } = await query<CharacterDetailedResponse>({
    query: GET_CHARACTER_DETAILS,
    variables: { id: decodeURIComponent(params.id) }
  })

  const {
    name,
    birthYear,
    filmConnection: { films },
    species,
    homeworld
  } = person

  return (
    <BaseLayout>
      <div>
        <h2>
          <Link href="/">Back to character list</Link>
        </h2>
        <div>{name}</div>
        <div>{birthYear}</div>
        <div>{JSON.stringify(films)}</div>
        <div>{JSON.stringify(species)}</div>
        <div>{JSON.stringify(homeworld)}</div>
      </div>
    </BaseLayout>
  )
}
