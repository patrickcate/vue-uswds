<script setup>
import { inject } from 'vue'
import UsaFooterMenu from '@/components/UsaFooterMenu'
import UsaFooterCollapsibleMenu from '@/components/UsaFooterCollapsibleMenu'

const footerVariant = inject('footerVariant', 'medium')

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  ariaLabel: {
    type: String,
    default: 'Footer navigation',
  },
  items: {
    type: Array,
    default: () => [],
  },
  collapsibleHeadingTag: {
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
</script>

<template>
  <nav class="usa-footer__nav" :aria-label="ariaLabel">
    <slot :items="items">
      <template v-if="items.length">
        <UsaFooterCollapsibleMenu
          v-if="footerVariant === 'big'"
          :items="items"
          :heading-tag="collapsibleHeadingTag"
          :custom-classes="customClasses"
        ></UsaFooterCollapsibleMenu>
        <UsaFooterMenu
          v-else-if="footerVariant === 'medium' || footerVariant === 'slim'"
          :items="items"
          :custom-classes="customClasses"
        ></UsaFooterMenu>
      </template>
    </slot>
  </nav>
</template>
