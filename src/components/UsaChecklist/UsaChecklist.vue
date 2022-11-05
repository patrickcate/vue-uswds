<script setup>
import UsaChecklistItem from '@/components/UsaChecklistItem'

defineProps({
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
