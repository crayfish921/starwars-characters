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
    <div
      className="
      w-full 
      text-sm 
      md:text-base 
      grid grid-flow-row 
    border-gray-800 border rounded p-1"
    >
      <div>{character.name}</div>
      <div>Birth date: {character.birthYear}</div>
      <div>
        <Link
          className="text-cyan-700"
          href={`/characters/${encodeURIComponent(character.id)}`}
        >
          Go to character details
        </Link>
      </div>
    </div>
  )
}
