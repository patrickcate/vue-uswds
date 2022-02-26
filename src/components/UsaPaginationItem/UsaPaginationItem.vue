<script setup>
import { computed } from 'vue'
import BaseLink from '@/components/BaseLink'

const props = defineProps({
  pageNumber: {
    type: Number,
    required: true,
    validator(pageNumber) {
      return pageNumber > 0
    },
  },
  isCurrentPage: {
    type: Boolean,
    default: false,
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
    type: String,
    default: undefined,
  },
})

const componentTag = computed(() =>
  props.routerComponentName || props.to || props.href ? BaseLink : 'button'
)

const ariaCurrent = computed(() => (props.isCurrentPage ? 'page' : null))

const classes = computed(() => [
  {
    'usa-current': props.isCurrentPage,
    'usa-button--unstyled': componentTag.value === 'button',
  },
])
</script>

<template>
  <li class="usa-pagination__item usa-pagination__page-no">
    <component
      :is="componentTag"
      :href="href"
      :to="to"
      :router-component-name="routerComponentName"
      :aria-label="ariaLabel"
      :aria-current="ariaCurrent"
      :class="classes"
      class="usa-pagination__button"
      ><slot>{{ pageNumber }}</slot></component
    >
  </li>
</template>
