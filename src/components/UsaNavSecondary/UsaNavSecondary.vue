<script setup>
import { inject } from 'vue'
import BaseLink from '@/components/BaseLink'

const isExtendedHeader = inject('isExtendedHeader', false)

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div v-if="isExtendedHeader" class="usa-nav__secondary">
    <ul class="usa-nav__secondary-links">
      <slot :items="items">
        <li
          v-for="item in items"
          :key="item?.id || item.text"
          class="usa-nav__secondary-item"
        >
          <BaseLink
            :to="item.to"
            :href="item.href"
            :router-component-name="item.routerComponentName"
            >{{ item.text }}</BaseLink
          >
        </li>
      </slot>
    </ul>
    <slot name="search"></slot>
  </div>
  <slot v-else name="search"></slot>
</template>
