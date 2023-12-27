<script setup>
// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  customClasses: {
    type: Object,
    default: () => {
      return {
        media: [],
        body: [],
      }
    },
  },
})
</script>

<template>
  <div class="usa-media-block">
    <div class="usa-media-block__img" :class="customClasses?.media"
      ><slot name="media"></slot
    ></div>
    <div class="usa-media-block__body" :class="customClasses?.body"
      ><slot></slot
    ></div>
  </div>
</template>
