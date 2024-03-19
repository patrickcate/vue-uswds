<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:tableSort'])

const props = defineProps({
  headerId: {
    type: [String, Number],
    required: true,
  },
  headerLabel: {
    type: String,
    required: true,
  },
  currentSortDirection: {
    type: String,
    default: '',
  },
})

const reverseSortDirection = computed(() => {
  const reverseDirections = {
    ascending: 'descending',
    descending: 'ascending',
  }

  return reverseDirections[props.currentSortDirection] || 'ascending'
})

const title = computed(
  () =>
    `Click to sort by ${props.headerLabel} in ${reverseSortDirection.value} order.`,
)
</script>

<template>
  <button
    type="button"
    tabindex="0"
    class="usa-table__header__button"
    :title="title"
    @click="emit('update:tableSort', headerId)"
  >
    <slot>
      <svg
        class="usa-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g class="descending" fill="transparent">
          <path
            d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"
          ></path>
        </g>
        <g class="ascending" fill="transparent">
          <path
            transform="rotate(180, 12, 12)"
            d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z"
          ></path>
        </g>
        <g class="unsorted" fill="transparent">
          <polygon
            points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"
          ></polygon>
        </g>
      </svg>
    </slot>
  </button>
</template>
