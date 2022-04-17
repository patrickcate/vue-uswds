<script setup>
import { computed } from 'vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  { 'usa-checklist__item--checked': props.checked },
])
</script>

<template>
  <li class="usa-checklist__item" :class="classes" :aria-checked="checked"
    ><slot></slot
  ></li>
</template>
