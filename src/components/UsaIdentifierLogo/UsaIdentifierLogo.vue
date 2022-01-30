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
    default: () => {
      return {
        image: [],
      }
    },
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
