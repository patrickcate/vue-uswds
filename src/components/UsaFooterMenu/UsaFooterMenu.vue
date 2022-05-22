<script setup>
import { computed, inject } from 'vue'
import { PREFIX_SEPARATOR, GRID_NAMESPACE } from '@/utils/constants.js'
import BaseLink from '@/components/BaseLink'

const prefixSeparator = inject('vueUswds.prefixSeparator', PREFIX_SEPARATOR)
const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  customClasses: {
    type: Object,
    default: () => ({
      gridRow: [],
      gridCol: [],
    }),
  },
})

const gridRowClasses = computed(() => {
  if (props.customClasses?.gridRow?.length) {
    return props.customClasses.gridRow
  }

  return [`${gridNamespace}row`, `${gridNamespace}gap`]
})

const griColClasses = computed(() => {
  if (props.customClasses?.gridCol?.length) {
    return props.customClasses.gridCol
  }

  return [
    `mobile-lg${prefixSeparator}${gridNamespace}col-6`,
    `desktop${prefixSeparator}${gridNamespace}col-auto`,
  ]
})
</script>

<template>
  <ul :class="gridRowClasses">
    <li
      v-for="item in items"
      :key="item?.id || item.text"
      class="usa-footer__primary-content"
      :class="griColClasses"
    >
      <BaseLink
        :to="item.to"
        :href="item.href"
        class="usa-footer__primary-link"
        :router-component-name="item.routerComponentName"
        >{{ item.text }}</BaseLink
      >
    </li>
  </ul>
</template>
