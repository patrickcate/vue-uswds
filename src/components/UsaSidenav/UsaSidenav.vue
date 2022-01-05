<script setup>
import UsaSidenavItem from '@/components/UsaSidenavItem'

defineProps({
  ariaLabel: {
    type: String,
    default: 'Secondary navigation',
  },
  items: {
    type: Array,
    default: () => [],
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        list: [],
        item: [],
        link: [],
        sublist: [],
      }
    },
  },
})
</script>

<template>
  <nav :aria-label="ariaLabel">
    <slot name="before"></slot>
    <ul class="usa-sidenav" :class="customClasses?.list">
      <slot :items="items">
        <UsaSidenavItem
          v-for="item in items"
          :key="item?.id || item?.text"
          :item="item"
          :custom-classes="customClasses"
          >{{ item.text }}</UsaSidenavItem
        >
      </slot>
    </ul>
    <slot name="after"></slot>
  </nav>
</template>
