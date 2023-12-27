<script setup>
// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  tag: {
    type: String,
    default: 'h2',
    validator(tag) {
      const isValidTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)

      if (!isValidTag) {
        console.warn(`'${tag}' is not a valid HTML heading element`)
      }

      return isValidTag
    },
  },
})
</script>

<template>
  <component :is="tag"><slot></slot></component>
</template>
