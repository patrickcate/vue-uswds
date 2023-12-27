<script setup>
import BaseLink from '@/components/BaseLink'

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
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
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  customClasses: {
    type: Object,
    default: () => ({
      image: [],
    }),
  },
})
</script>

<template>
  <BaseLink
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
    class="usa-identifier__logo"
  >
    <slot>
      <img
        v-if="src"
        class="usa-identifier__logo-img"
        :class="customClasses?.image"
        :src="src"
        :alt="alt"
        role="img"
      />
    </slot>
  </BaseLink>
</template>
