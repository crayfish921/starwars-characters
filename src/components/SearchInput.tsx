'use client'

import { FC, useContext } from 'react'
import { SearchContext } from '../context/SearchContextProvider'

export const SearchInput: FC = () => {
  const { searchText, handleChange } = useContext(SearchContext)

  return (
    <input
      type="text"
      placeholder="Search for a character"
      value={searchText}
      onChange={handleChange}
      className="border-gray-800 border rounded w-full p-1"
    />
  )
}
