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
      <div className="grid grid-cols-1 gap-2 w-full">
        <Link className="text-cyan-700" href="/">
          Back to character list
        </Link>
        <div className="text-2xl uppercase text-center">{name}</div>
        <div className="text-center">Birth date: {birthYear}</div>
        <div className="border-gray-800 border rounded p-2 text-center max-w-[480px] justify-self-center">
          <div>Character is a part of the films:</div>
          {films.map((film, i) => (
            <div key={film.title + i}>{film.title}</div>
          ))}
        </div>
        {species && (
          <div className="border-gray-800 border rounded p-2 text-center max-w-[480px] justify-self-center">
            <div>Species information:</div>
            <div>Name: {species.name}</div>
            <div>Language: {species.language}</div>
          </div>
        )}
        <div className="border-gray-800 border rounded p-2 text-center max-w-[480px] justify-self-center">
          <div>Homeworld information:</div>
          <div>Name: {homeworld.name}</div>
          <div>Population: {homeworld.population}</div>
        </div>
      </div>
    </BaseLayout>
  )
}
