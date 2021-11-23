<script setup>
defineProps({
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
