<script setup>
import UsaChecklistItem from '@/components/UsaChecklistItem'

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
  <ul class="usa-checklist">
    <slot>
      <UsaChecklistItem
        v-for="item in items"
        :key="item?.id || item.text"
        :checked="item.checked"
        :aria-label="item.ariaLabel"
        >{{ item.text }}</UsaChecklistItem
      >
    </slot>
  </ul>
</template>
