<script setup>
import { inject } from 'vue'
import BaseLink from '@/components/BaseLink'

const isExtendedHeader = inject('isExtendedHeader', false)

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="usa-nav__secondary">
    <ul v-if="items.length" class="usa-nav__secondary-links">
      <li
        v-for="(item, index) in items"
        :key="item.text || index"
        class="usa-nav__secondary-item"
      >
        <BaseLink
          :to="item.to"
          :href="item.href"
          :router-component-name="item.routerComponentName"
          >{{ item.text }}</BaseLink
        >
      </li>
    </ul>
    <slot v-if="isExtendedHeader" name="search"></slot>
  </div>
</template>
