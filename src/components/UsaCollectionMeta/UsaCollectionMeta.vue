<script setup>
// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  ariaLabel: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <ul class="usa-collection__meta" :aria-label="ariaLabel"
    ><slot></slot
  ></ul>
</template>
