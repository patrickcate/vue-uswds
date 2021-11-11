<script setup>
defineProps({
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
