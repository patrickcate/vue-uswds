<script setup>
import { computed } from 'vue'
import BaseLink from '@/components/BaseLink'

const props = defineProps({
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
    default: () => ({
      link: [],
      span: [],
    }),
  },
})

const ariaCurrent = computed(() => (props.current ? 'page' : null))
</script>

<template>
  <li class="usa-breadcrumb__list-item" :aria-current="ariaCurrent">
    <span v-if="current" :class="customClasses?.span">
      <slot></slot>
    </span>
    <BaseLink
      v-else
      :href="href"
      :to="to"
      :router-component-name="routerComponentName"
      class="usa-breadcrumb__link"
      :class="customClasses?.link"
    >
      <span :class="customClasses?.span">
        <slot></slot>
      </span>
    </BaseLink>
  </li>
</template>
