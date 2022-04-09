import { ref, computed, readonly } from 'vue'
import { naturalSort } from '@/utils/sorting.js'
import { objectHasKey, kebabCase } from '@/utils/common.js'

export default (
  _headers = [],
  _rows = [],
  _defaultSortHeader = '',
  _defaultSortDirection = ''
) => {
  const currentSortedHeader = ref(_defaultSortHeader)
  const currentSortDirection = ref(_defaultSortDirection)

  const headers = computed(() => {
    return _headers.value.map(header => {
      if (typeof header === 'string') {
        return {
          id: kebabCase(header),
          label: header,
          sortable: false,
          headerRow: false,
        }
      }

      const headerCell = { ...header }

      if (!header?.id) {
        headerCell.id = kebabCase(header.label)
      }

      if (!objectHasKey(header, 'sortable')) {
        headerCell.sortable = false
      } else {
        headerCell.sortable = header.sortable
      }

      if (!objectHasKey(header, 'headerRow')) {
        headerCell.headerRow = false
      } else {
        headerCell.headerRow = header.headerRow
      }

      return headerCell
    })
  })

  const currentSortedHeaderLabel = computed(() => {
    if (!currentSortedHeader.value) {
      return null
    }

    const [sortedHeader] = headers.value.filter(
      header => header.id === currentSortedHeader.value
    )

    return sortedHeader.label
  })

  const hasSortableHeaders = computed(() => {
    return headers.value.some(header => header.sortable)
  })

  const normalizedRows = computed(() => {
    const rows = _rows.value.map(row => {
      return Object.entries(row).reduce((acc, [columnName, columnValue]) => {
        if (typeof columnValue !== 'object') {
          acc[columnName] = {
            displayValue: columnValue,
            sortValue: columnValue,
          }

          return acc
        }

        // Merge existing row object into new.
        acc[columnName] = { ...row[columnName] }

        if (!objectHasKey(columnValue, 'sortValue')) {
          acc[columnName].sortValue = columnValue.displayValue
        }

        return acc
      }, {})
    })

    return rows
  })

  const rows = computed(() => {
    if (currentSortDirection.value === 'ascending') {
      return naturalSort(normalizedRows.value).asc(
        row => row[currentSortedHeader.value].sortValue
      )
    } else if (currentSortDirection.value === 'descending') {
      return naturalSort(normalizedRows.value).desc(
        row => row[currentSortedHeader.value].sortValue
      )
    }

    return normalizedRows.value
  })

  const toggleSortDirection = () => {
    if (
      !currentSortDirection.value ||
      currentSortDirection.value === 'unsorted'
    ) {
      currentSortDirection.value = 'ascending'
    } else {
      currentSortDirection.value =
        currentSortDirection.value === 'ascending' ? 'descending' : 'ascending'
    }
  }

  const updateCurrentSortedHeader = headerId =>
    (currentSortedHeader.value = headerId)

  return {
    headers,
    rows: rows,
    hasSortableHeaders: readonly(hasSortableHeaders),
    currentSortedHeader: readonly(currentSortedHeader),
    currentSortedHeaderLabel: readonly(currentSortedHeaderLabel),
    currentSortDirection: readonly(currentSortDirection),
    toggleSortDirection,
    updateCurrentSortedHeader,
  }
}
