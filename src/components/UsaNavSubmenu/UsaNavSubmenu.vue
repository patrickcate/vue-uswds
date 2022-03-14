<script setup>
import { computed, ref, inject, toRef } from 'vue'
import { GRID_NAMESPACE } from '@/utils/constants.js'

const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)
const isMegamenu = inject('isMegamenu', ref(false))
const dropdownId = inject('dropdownId')
const dropdownItems = inject('dropdownItems')

const props = defineProps({
  cols: {
    type: Number,
    default: 1,
    validator(columnCount) {
      const isValidColumnCount = columnCount >= 1

      if (!isValidColumnCount) {
        console.warn('Column count must be greater than or equal to 1')
      }

      return isValidColumnCount
    },
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        gridRow: [],
        gridCol: [],
      }
    },
  },
})

const classes = computed(() => [{ 'usa-megamenu': isMegamenu.value }])

const gridClasses = computed(() => [
  `${gridNamespace}row`,
  `${gridNamespace}gap-4`,
  ...(props.customClasses?.gridRow || []),
])

const isOpen = toRef(dropdownItems, dropdownId.value)
</script>

<template>
  <div
    v-if="isMegamenu"
    :id="dropdownId"
    class="usa-nav__submenu"
    :class="classes"
    :hidden="!isOpen"
  >
    <div :class="gridClasses">
      <template v-if="cols > 1">
        <div
          v-for="col in cols"
          :key="col"
          class="usa-col"
          :class="customClasses?.gridCol"
        >
          <ul class="usa-nav__submenu-list">
            <slot :name="`col-${col}`"></slot>
          </ul>
        </div>
      </template>
      <div v-else class="usa-col" :class="customClasses?.gridCol">
        <ul class="usa-nav__submenu-list">
          <slot></slot>
        </ul>
      </div>
    </div>
  </div>
  <ul
    v-else
    :id="dropdownId"
    class="usa-nav__submenu"
    :class="classes"
    :hidden="!isOpen"
  >
    <slot></slot>
  </ul>
</template>
