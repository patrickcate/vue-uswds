<script setup>
import { computed, inject } from 'vue'
import { PREFIX_SEPARATOR } from '@/utils/constants.js'

const prefixSeparator = inject('vueUswds.prefixSeparator', PREFIX_SEPARATOR)

const props = defineProps({
  color: {
    type: String,
    default: '',
  },
  size: {
    type: [String, Object],
    default: '',
    validator(size) {
      let isValidSize = false
      const validSizes = ['', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']

      if (typeof size === 'string') {
        isValidSize = validSizes.includes(size)
      }

      if (typeof size === 'object') {
        isValidSize = Object.values(size).some(breakpointSize =>
          validSizes.includes(breakpointSize)
        )
      }

      if (!isValidSize) {
        console.warn(`'${size}' is not a valid icon list size`)
      }

      return isValidSize
    },
  },
})

const sizeClasses = computed(() => {
  if (!!props.size && typeof props.size === 'string') {
    return [`usa-icon-list--size-${props.size}`]
  }

  if (typeof props.size === 'object' && Object.keys(props.size).length) {
    return Object.keys(props.size).reduce((acc, breakpoint) => {
      acc.push(
        `${breakpoint}${prefixSeparator}usa-icon-list--size-${props.size[breakpoint]}`
      )

      return acc
    }, [])
  }

  return []
})

const classes = computed(() => [
  { [`usa-icon-list--${props.color}`]: props.color },
  ...sizeClasses.value,
])
</script>

<template>
  <ul class="usa-icon-list" :class="classes"
    ><slot></slot
  ></ul>
</template>
