<script setup>
import { computed } from 'vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: '',
  },
})

const classes = computed(() => [
  { 'usa-checklist__item--checked': props.checked },
])
</script>

<template>
  <li class="usa-checklist__item" :aria-label="ariaLabel" :class="classes"
    ><slot></slot
  ></li>
</template>
