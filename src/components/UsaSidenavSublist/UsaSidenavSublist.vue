<script setup>
import { defineAsyncComponent } from 'vue'

// We need to import `UsaSidenavItem` as an async component because it is a
// circular dependency with the `UsaSidenavSublist` component.
const UsaSidenavItem = defineAsyncComponent(() =>
  import('@/components/UsaSidenavItem')
)

defineProps({
  items: {
    type: Array,
    required: true,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        item: [],
        link: [],
        sublist: [],
      }
    },
  },
})
</script>

<template>
  <ul class="usa-sidenav__sublist" :class="customClasses?.sublist">
    <slot :items="items">
      <UsaSidenavItem
        v-for="item in items"
        :key="item?.id || item.text"
        :item="item"
        :custom-classes="customClasses"
        >{{ item.text }}</UsaSidenavItem
      >
    </slot>
  </ul>
</template>
