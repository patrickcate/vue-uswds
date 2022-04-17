<script setup>
import { computed } from 'vue'
import BaseHeading from '@/components/BaseHeading'

const props = defineProps({
  variant: {
    type: String,
    default: '',
    validator(variant) {
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

const classes = computed(() => {
  return {
    'usa-alert--no-icon': props.noIcon,
    'usa-alert--slim': props.slim,
    'usa-alert--info':
      props.variant === 'info' || props.variant === 'validation',
    'usa-alert--warning': props.variant === 'warning',
    'usa-alert--error': props.variant === 'error',
    'usa-alert--success': props.variant === 'success',
    'usa-alert--emergency': props.variant === 'emergency',
    'usa-alert--validation': props.variant === 'validation',
  }
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
  <div class="usa-alert" :class="classes" :role="ariaRole">
    <div class="usa-alert__body" :class="customClasses?.body">
      <BaseHeading
        v-if="heading || $slots.heading"
        :tag="headingTag"
        class="usa-alert__heading"
        :class="[{ 'usa-sr-only': slim }, customClasses?.heading]"
        ><slot name="heading">{{ heading }}</slot></BaseHeading
      >
      <slot name="message">
        <p class="usa-alert__text"><slot></slot></p>
      </slot>
    </div>
  </div>
</template>
