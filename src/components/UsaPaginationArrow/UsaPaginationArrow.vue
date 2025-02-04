<script setup>
import { computed, inject } from 'vue'
import { SVG_SPRITE_PATH } from '@/utils/constants.js'
import BaseLink from '@/components/BaseLink'

const svgSpritePath = inject('vueUswds.svgSpritePath', SVG_SPRITE_PATH)

const props = defineProps({
  direction: {
    type: String,
    default: 'previous',
    validator(direction) {
      return ['previous', 'next'].includes(direction)
    },
  },
  label: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: undefined,
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  routerComponentName: {
    type: [String, Object],
    default: undefined,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        link: [],
        text: [],
      }
    },
  },
})

const componentTag = computed(() =>
  props.routerComponentName || props.to || props.href ? BaseLink : 'button',
)

const classes = computed(() => [
  {
    'usa-pagination__previous-page': props.direction === 'previous',
    'usa-pagination__next-page': props.direction === 'next',
    'usa-button--unstyled': componentTag.value === 'button',
  },
  props.customClasses.link,
])
</script>

<template>
  <li class="usa-pagination__item usa-pagination__arrow">
    <component
      :is="componentTag"
      :href="href"
      :to="to"
      :router-component-name="routerComponentName"
      :aria-label="ariaLabel"
      :class="classes"
      class="usa-pagination__link"
    >
      <slot
        v-if="direction === 'previous'"
        name="before"
        :svg-sprite-path="svgSpritePath"
      >
        <svg
          v-if="svgSpritePath"
          class="usa-icon"
          aria-hidden="true"
          role="img"
        >
          <use :href="`${svgSpritePath}#navigate_before`"></use>
        </svg>
      </slot>
      <span class="usa-pagination__link-text" :class="customClasses?.text"
        ><slot>{{ label }}</slot></span
      >
      <slot
        v-if="direction === 'next'"
        name="after"
        :svg-sprite-path="svgSpritePath"
      >
        <svg
          v-if="svgSpritePath"
          class="usa-icon"
          aria-hidden="true"
          role="img"
        >
          <use :href="`${svgSpritePath}#navigate_next`"></use>
        </svg>
      </slot>
    </component>
  </li>
</template>
