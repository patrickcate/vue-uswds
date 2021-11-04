<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: '',
    validator: size => {
      const isValidSize = size === '' || size === 'big'

      if (!isValidSize) {
        console.warn(`'${size}' is not a valid tag size`)
      }

      return isValidSize
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
