import { useState } from 'react'

export const useSearch = (): {
  searchText: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
} => {
  const [searchText, setSearchText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  return { searchText, handleChange }
}
