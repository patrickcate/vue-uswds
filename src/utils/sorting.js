import { createNewSortInstance } from 'fast-sort'

export function createNaturalSort() {
  const naturalSort = createNewSortInstance({
    comparer: new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
    }).compare,
    inPlaceSorting: false,
  })

  return naturalSort
}
