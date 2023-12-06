<script setup>
import { computed, inject } from 'vue'
import { SVG_SPRITE_PATH } from '@/utils/constants.js'

const svgSpritePath = inject('vueUswds.svgSpritePath', SVG_SPRITE_PATH)

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: '',
    validator(size) {
      const isValidSize = ['', '3', '4', '5', '6', '7', '8', '9'].includes(
        `${size}`
      )

      if (!isValidSize) {
        console.warn(`'${size}' is not a valid icon size`)
      }

      return isValidSize
    },
  },
  ariaHidden: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    default: 'img',
  },
  focusable: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  {
    'usa-icon--size-3': `${props.size}` === '3',
    'usa-icon--size-4': `${props.size}` === '4',
    'usa-icon--size-5': `${props.size}` === '5',
    'usa-icon--size-6': `${props.size}` === '6',
    'usa-icon--size-7': `${props.size}` === '7',
    'usa-icon--size-8': `${props.size}` === '8',
    'usa-icon--size-9': `${props.size}` === '9',
  },
])

const iconHref = computed(() => `${svgSpritePath}#${props.name}`)
</script>

<template>
  <svg
    class="usa-icon"
    :class="classes"
    :aria-hidden="ariaHidden"
    :role="role"
    :focusable="focusable"
  >
    <slot name="title"></slot>
    <use :xlink:href="iconHref"></use>
  </svg>
</template>
