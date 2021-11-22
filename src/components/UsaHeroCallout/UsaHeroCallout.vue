<script setup>
import BaseHeading from '@/components/BaseHeading'

defineProps({
  headingAlt: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h1',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        heading: [],
        headingAlt: [],
      }
    },
  },
})
</script>

<template>
  <div class="usa-hero__callout">
    <BaseHeading
      v-if="heading || headingAlt || $slots.heading || $slots.headingAlt"
      :tag="headingTag"
      class="usa-hero__heading"
      :class="customClasses?.heading"
    >
      <span
        v-if="headingAlt || $slots.headingAlt"
        class="usa-hero__heading--alt"
        :class="customClasses?.headingAlt"
        ><slot name="headingAlt">{{ headingAlt }}</slot></span
      >
      <slot name="heading">{{ heading }}</slot>
    </BaseHeading>
    <slot></slot>
  </div>
</template>
