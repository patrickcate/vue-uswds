<script>
export default {
  name: 'UsaTable',
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, ref, h, toRef, useSlots, provide } from 'vue'
import useTableSort from '@/composables/useTableSort'
import UsaTableHeaderCell from '@/components/UsaTableHeaderCell'

const slots = useSlots()
const captionRef = ref(null)

const props = defineProps({
  caption: {
    type: String,
    default: '',
  },
  borderless: {
    type: Boolean,
    default: false,
  },
  striped: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  scrollable: {
    type: Boolean,
    default: false,
  },
  stacked: {
    type: Boolean,
    default: false,
  },
  stackedHeader: {
    type: Boolean,
    default: false,
  },
  headers: {
    type: Array,
    default: () => [],
  },
  rows: {
    type: Array,
    default: () => [],
  },
  defaultSortDirection: {
    type: String,
    default: '',
  },
  defaultSortHeader: {
    type: String,
    default: '',
  },
})

const {
  headers,
  rows,
  hasSortableHeaders,
  currentSortedHeader,
  currentSortedHeaderLabel,
  currentSortDirection,
  toggleSortDirection,
  updateCurrentSortedHeader,
} = useTableSort(
  toRef(props, 'headers'),
  toRef(props, 'rows'),
  props.defaultSortHeader,
  props.defaultSortDirection
)

const classes = computed(() => [
  {
    'usa-table--borderless': props.borderless,
    'usa-table--striped': props.striped,
    'usa-table--compact': props.compact,
    'usa-table--stacked': props.stacked,
    'usa-table--stacked-header': props.stackedHeader,
  },
])

const tableIsSortable = computed(
  () => hasSortableHeaders.value && !slots?.default && !slots?.headers
)

const tableCaption = computed(() => {
  if (props.caption) {
    return props.caption
  }

  if (captionRef.value) {
    return captionRef.value.textContent
  }

  return null
})

const UsaTableContainerComponent = {
  name: 'UsaTableContainer',
  props: {
    isScrollable: {
      type: Boolean,
      default: false,
    },
  },
  setup({ isScrollable }, { slots }) {
    return () =>
      isScrollable
        ? h(
            'div',
            { class: 'usa-table-container--scrollable', tabindex: 0 },
            slots.default()
          )
        : slots.default()
  },
}

provide('toggleSortDirection', toggleSortDirection)
provide('updateCurrentSortedHeader', updateCurrentSortedHeader)
</script>

<template>
  <UsaTableContainerComponent :is-scrollable="scrollable">
    <table v-bind="$attrs" class="usa-table" :class="classes">
      <caption v-if="caption || $slots.caption" ref="captionRef"
        ><slot name="caption">{{ caption }}</slot></caption
      >
      <thead>
        <slot v-if="$slots.headers" name="headers"></slot>
        <slot v-else-if="headers.length" name="headers" :headers="headers">
          <tr>
            <UsaTableHeaderCell
              v-for="header in headers"
              :id="header.id"
              :key="header.id"
              :label="header.label"
              :sortable="tableIsSortable && header.sortable"
              :current-sorted-header="currentSortedHeader"
              :current-sort-direction="
                currentSortedHeader === header.id ? currentSortDirection : ''
              "
              ><slot :name="`header-${header.id}`" :header="header"
                >{{ header.label }}
              </slot></UsaTableHeaderCell
            >
          </tr>
        </slot>
      </thead>
      <tbody>
        <slot v-if="$slots.default"></slot>
        <slot v-else-if="rows.length" :rows="rows">
          <tr v-for="(row, index) in rows" :key="index">
            <component
              :is="header.headerRow ? 'th' : 'td'"
              v-for="header in headers"
              :key="`${header.id}-${index}`"
              :scope="header.headerRow ? 'row' : null"
              :role="header.headerRow ? 'rowheader' : null"
              :data-label="header.label"
              :data-sort-active="
                currentSortedHeader === header.id ? true : null
              "
              :data-sort-value="row[header.id].sortValue"
            >
              <slot
                :name="`cell-${header.id}`"
                :header="header"
                :row="row"
                :cell="row[header.id]"
                >{{ row[header.id].displayValue }}
              </slot></component
            >
          </tr>
        </slot>
      </tbody>
    </table>
    <div
      v-if="tableIsSortable"
      class="usa-sr-only usa-table__announcement-region"
      aria-live="polite"
      ><slot
        name="table-announcement"
        :current-sorted-header="currentSortedHeader"
        :current-sort-direction="currentSortDirection"
        :current-sorted-header-label="currentSortedHeaderLabel"
        :table-caption="tableCaption"
        ><template v-if="currentSortedHeader"
          >The table
          <template v-if="tableCaption">named "{{ tableCaption }}"</template> is
          now sorted by "{{ currentSortedHeaderLabel }}" in
          {{ currentSortDirection }} order.</template
        ></slot
      ></div
    >
  </UsaTableContainerComponent>
</template>
