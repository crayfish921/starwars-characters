import { FC } from 'react'
import { Character } from '../types'
import Link from 'next/link'

type CharacterOverviewProps = {
  character: Character
}

export const CharacterOverview: FC<CharacterOverviewProps> = ({
  character
}) => {
  return (
    <>
      <div>Name: {character.name}</div>
      <div>ID: {character.id}</div>
      <div>
        Link:
        <Link href={`/characters/${encodeURIComponent(character.id)}`}>
          character details
        </Link>
      </div>
    </>
  )
}
