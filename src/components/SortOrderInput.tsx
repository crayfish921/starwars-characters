'use client'
import { ChangeEvent, FC, useState } from 'react'
import { SORT_TYPE } from '../values/enums'

type SortOrderInputProps = {
  sortSelected: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const SortOrderInput: FC<SortOrderInputProps> = ({ sortSelected }) => {
  return (
    <select
      className="bg-slate-200 rounded p-1"
      defaultValue={SORT_TYPE.NO_SORT}
      onChange={sortSelected}
    >
      <option value={SORT_TYPE.ASCENDING}>ascending</option>
      <option value={SORT_TYPE.DESCENDING}>descending</option>
      <option value={SORT_TYPE.NO_SORT}>no sort</option>
    </select>
  )
}
