<script setup>
import { computed } from 'vue'
import BaseHeading from '../BaseHeading'

const props = defineProps({
  variant: {
    type: String,
    default: '',
    validator: variant => {
      const isValidVariant = [
        '',
        'info',
        'warning',
        'error',
        'success',
        'emergency',
        'validation',
      ].includes(variant)

      if (!isValidVariant) {
        console.warn(`'${variant}' is not a valid alert variant`)
      }

      return isValidVariant
    },
  },
  slim: {
    type: Boolean,
    default: false,
  },
  noIcon: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        body: [],
        heading: [],
      }
    },
  },
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'usa-alert--info'
    case 'warning':
      return 'usa-alert--warning'
    case 'error':
      return 'usa-alert--error'
    case 'success':
      return 'usa-alert--success'
    case 'emergency':
      // TODO: Confirm this class is needed.
      return 'usa-alert--emergency'
    case 'validation':
      return ['usa-alert--info', 'usa-alert--validation']
    default:
      return null
  }
})

const slimClass = computed(() => {
  return props.slim ? 'usa-alert--slim' : null
})

const noIconClass = computed(() => {
  return props.noIcon ? 'usa-alert--no-icon' : null
})

const ariaRole = computed(() => {
  if (props.role) {
    return props.role
  }

  if (!props.role && props.variant === 'error') {
    return 'alert'
  }

  return null
})
</script>

<template>
  <div
    class="usa-alert"
    :class="[variantClass, slimClass, noIconClass]"
    :role="ariaRole"
  >
    <div class="usa-alert__body" :class="customClasses.body">
      <BaseHeading
        v-if="heading || $slots.heading"
        :tag="headingTag"
        class="usa-alert__heading"
        :class="[{ 'usa-sr-only': slim }, customClasses.heading]"
        ><slot name="heading">{{ heading }}</slot></BaseHeading
      >
      <template v-if="$slots.message">
        <slot name="message"></slot>
      </template>
      <template v-else-if="$slots.default"
        ><p class="usa-alert__text"><slot></slot></p
      ></template>
    </div>
  </div>
</template>
