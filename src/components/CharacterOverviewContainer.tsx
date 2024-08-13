'use client'

import { ChangeEvent, FC, useContext, useState } from 'react'
import { Character } from '../types'
import { CharacterOverview } from './CharacterOverview'
import { SearchContext } from '../context/SearchContextProvider'
import { SortOrderInput } from './SortOrderInput'
import { SORT_TYPE } from '../values/enums'

type CharacterOverviewContainerProps = {
  characters: Character[]
}

export const CharactersOverviewContainer: FC<
  CharacterOverviewContainerProps
> = ({ characters }) => {
  const { searchText } = useContext(SearchContext)
  const [sortType, setSortType] = useState<SORT_TYPE>(SORT_TYPE.NO_SORT)
  const handleSortSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value as SORT_TYPE)
  }

  return (
    <div className="grid grid-cols-[1fr_0fr] gap-2 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {characters
          .filter((character) => {
            return character.name
              .toLowerCase()
              .includes(searchText.toLowerCase())
              ? character
              : null
          })
          .sort((characterA, characterB) => {
            switch (sortType) {
              case SORT_TYPE.ASCENDING: {
                return characterA.name.toLowerCase() <
                  characterB.name.toLowerCase()
                  ? 1
                  : -1
              }
              case SORT_TYPE.DESCENDING: {
                return characterA.name.toLowerCase() >
                  characterB.name.toLowerCase()
                  ? 1
                  : -1
              }
              default:
                return 0
            }
          })
          .map((character) => (
            <CharacterOverview key={character.id} character={character} />
          ))}
      </div>
      <div className="text-xs text-center md:text-base grid place-content-start">
        <SortOrderInput sortSelected={handleSortSelect} />
      </div>
    </div>
  )
}
