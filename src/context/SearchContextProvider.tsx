'use client'

import { useSearch } from '@/src/hooks/useSearch'
import { FC, PropsWithChildren, createContext } from 'react'

export const SearchContext = createContext({
  searchText: '',
  handleChange: (_: React.ChangeEvent<HTMLInputElement>) => {}
})

export const SearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { searchText, handleChange } = useSearch()

  return (
    <SearchContext.Provider value={{ searchText, handleChange }}>
      {children}
    </SearchContext.Provider>
  )
}
