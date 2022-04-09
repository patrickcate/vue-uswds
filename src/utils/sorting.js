import { createNewSortInstance } from 'fast-sort'

export const naturalSort = createNewSortInstance({
  comparer: new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  }).compare,
})
