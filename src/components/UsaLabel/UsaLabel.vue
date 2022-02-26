<script setup>
import { computed } from 'vue'

const props = defineProps({
  for: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [{ 'usa-label--error': props.error }])
</script>

<template>
  <label :htmlFor="props.for" class="usa-label" :class="classes">
    <slot></slot>
    <template v-if="required"
      >&nbsp;<slot name="required"
        ><abbr title="required" class="usa-hint usa-hint--required">*</abbr>
      </slot>
    </template>
  </label>
</template>
