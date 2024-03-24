<script setup>
import { computed, inject } from 'vue'
import UsaTableSortButton from '@/components/UsaTableSortButton'

const updateCurrentSortedHeader = inject('updateCurrentSortedHeader')
const toggleSortDirection = inject('toggleSortDirection')

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  sortable: {
    type: Boolean,
    default: false,
  },
  currentSortedHeader: {
    type: String,
    default: '',
  },
  currentSortDirection: {
    type: String,
    default: '',
  },
})

const ariaLabel = computed(() =>
  !props.sortable
    ? null
    : `${props.label}, sortable column, currently ${
        props.currentSortDirection
          ? `sorted ${props.currentSortDirection}`
          : 'unsorted'
      }`,
)

const ariaSort = computed(() => {
  if (props.currentSortedHeader !== props.id) {
    return null
  }

  if (
    props.currentSortDirection === 'ascending' ||
    props.currentSortDirection === 'descending'
  ) {
    return props.currentSortDirection
  }

  return null
})

const toggleTableSort = headerId => {
  updateCurrentSortedHeader(headerId)
  toggleSortDirection()
}
</script>

<template>
  <th
    scope="col"
    :data-sortable="sortable ? true : null"
    :role="sortable ? 'columnheader' : null"
    :aria-label="ariaLabel"
    :aria-sort="ariaSort"
  >
    <slot>{{ label }}</slot>
    <UsaTableSortButton
      v-if="sortable"
      :current-sort-direction="currentSortDirection"
      :header-id="id"
      :header-label="label"
      @update:table-sort="toggleTableSort"
    ></UsaTableSortButton>
  </th>
</template>
