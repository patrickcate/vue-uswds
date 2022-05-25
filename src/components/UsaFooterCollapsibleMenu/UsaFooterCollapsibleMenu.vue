<script setup>
import { computed, inject, reactive, watch, provide } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import {
  PREFIX_SEPARATOR,
  GRID_NAMESPACE,
  FOOTER_NAV_COLLAPSIBLE_BREAKPOINT,
} from '@/utils/constants.js'
import useAccordion from '@/composables/useAccordion.js'
import UsaFooterCollapsibleMenuSection from '@/components/UsaFooterCollapsibleMenuSection'

const prefixSeparator = inject('vueUswds.prefixSeparator', PREFIX_SEPARATOR)
const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)
const footerNavBigBreakpoint = inject(
  'vueUswds.footerNavBigBreakpoint',
  FOOTER_NAV_COLLAPSIBLE_BREAKPOINT
)

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  headingTag: {
    type: String,
    default: 'h4',
  },
  customClasses: {
    type: Object,
    default: () => ({
      gridRow: [],
      gridCol: [],
    }),
  },
})

const isCollapsible = useMediaQuery(`(max-width: ${footerNavBigBreakpoint})`)
const menuSections = reactive({})

const {
  registerAccordionItem,
  unregisterAccordionItem,
  closeItem,
  toggleItem,
  closeAllItems,
} = useAccordion(menuSections)

watch(isCollapsible, closeAllItems)

const gridRowClasses = computed(() => {
  if (props.customClasses?.gridRow?.length) {
    return props.customClasses.gridRow
  }

  return [`${gridNamespace}row`, `${gridNamespace}gap-4`]
})

const gridColClasses = computed(() => {
  if (props.customClasses?.gridCol?.length) {
    return props.customClasses.gridCol
  }

  return [
    `mobile-lg${prefixSeparator}${gridNamespace}col-6`,
    `desktop${prefixSeparator}${gridNamespace}col-3`,
  ]
})

provide('registerMenuSection', registerAccordionItem)
provide('unregisterMenuSection', unregisterAccordionItem)
provide('toggleMenuSection', toggleItem)
provide('closeMenuSection', closeItem)
provide('closeAllMenuSections', closeAllItems)
provide('menuSections', menuSections)
provide('footerMenuIsCollapsible', isCollapsible)
</script>

<template>
  <div :class="gridRowClasses">
    <div :class="gridColClasses">
      <UsaFooterCollapsibleMenuSection
        v-for="item in items"
        :key="item?.id || item.text"
        :item="item"
        :heading-tag="headingTag"
      ></UsaFooterCollapsibleMenuSection>
    </div>
  </div>
</template>
