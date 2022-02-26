<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: '',
    validator(variant) {
      return [
        '',
        'secondary',
        'accent-cool',
        'accent-warm',
        'base',
        'outline',
        'inverse',
        'unstyled',
      ].includes(variant)
    },
  },
  size: {
    type: String,
    default: '',
    validator(size) {
      return ['', 'big'].includes(size)
    },
  },
  type: {
    type: String,
    default: 'button',
    validator(type) {
      return ['button', 'submit', 'reset'].includes(type)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  {
    'usa-button--secondary': props.variant === 'secondary',
    'usa-button--accent-cool': props.variant === 'accent-cool',
    'usa-button--accent-warm': props.variant === 'accent-warm',
    'usa-button--base': props.variant === 'base',
    'usa-button--outline':
      props.variant === 'outline' || props.variant === 'inverse',
    'usa-button--inverse': props.variant === 'inverse',
    'usa-button--unstyled': props.variant === 'unstyled',
    'usa-button--big': props.size === 'big',
  },
])
</script>

<template>
  <button
    v-bind="$attrs"
    class="usa-button"
    :class="classes"
    :type="type"
    :disabled="disabled"
  >
    <slot name="before"></slot>
    <slot></slot>
    <slot name="after"></slot>
  </button>
</template>
