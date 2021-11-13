<script setup>
import { provide, computed } from 'vue'

const props = defineProps({
  headingTag: {
    type: String,
    default: '',
  },
})

provide(
  'listHeadingTag',
  computed(() => props.headingTag)
)
</script>

<template>
  <ol class="usa-process-list">
    <slot></slot>
  </ol>
</template>
