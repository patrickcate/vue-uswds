<script setup>
import BaseLink from '@/components/BaseLink'

defineProps({
  href: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: '',
  },
  routerComponentName: {
    type: String,
    default: '',
  },
  current: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        link: [],
        span: [],
      }
    },
  },
})
</script>

<template>
  <li class="usa-breadcrumb__list-item" :aria-current="current ? 'page' : null">
    <BaseLink
      v-if="!current"
      :href="href"
      :to="to"
      :router-component-name="routerComponentName"
      class="usa-breadcrumb__link"
      :class="customClasses?.link"
      ><span :class="customClasses?.span"><slot></slot></span
    ></BaseLink>
    <span v-else :class="customClasses?.span"><slot></slot></span>
  </li>
</template>
