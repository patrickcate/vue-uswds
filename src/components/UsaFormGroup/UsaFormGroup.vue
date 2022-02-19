<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  group: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [{ 'usa-form-group--error': props.error }])
</script>

<template>
  <div v-if="group" v-bind="$attrs" class="usa-form-group" :class="classes">
    <slot></slot>
  </div>
  <template v-else>
    <slot></slot>
  </template>
</template>
