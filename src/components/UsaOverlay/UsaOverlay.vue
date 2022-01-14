<script setup>
import { computed } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  {
    'is-visible': props.visible,
  },
])
</script>

<template>
  <div class="usa-overlay" :class="classes"></div>
</template>
