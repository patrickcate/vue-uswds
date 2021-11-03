<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: '',
    validator(size) {
      return size === '' || size === 'big'
    },
  },
  tag: {
    type: String,
    default: 'span',
  },
})

const sizeClass = computed(() => (props.size === 'big' ? 'usa-tag--big' : null))
</script>

<template>
  <component :is="tag" class="usa-tag" :class="sizeClass"
    ><slot></slot
  ></component>
</template>
