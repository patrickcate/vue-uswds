<script setup>
import { useSlots } from 'vue'
import BaseHeading from '@/components/BaseHeading'

const slots = useSlots()

if (slots?.headingAlt) {
  console.warn(
    `The 'headingAlt' slot is deprecated, use 'heading-alt' instead.`
  )
}

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
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
      v-if="
        heading ||
        headingAlt ||
        $slots.heading ||
        $slots.headingAlt ||
        $slots['heading-alt']
      "
      :tag="headingTag"
      class="usa-hero__heading"
      :class="customClasses?.heading"
    >
      <span
        v-if="headingAlt || $slots.headingAlt || $slots['heading-alt']"
        class="usa-hero__heading--alt"
        :class="customClasses?.headingAlt"
      >
        <slot v-if="$slots['heading-alt']" name="heading-alt"></slot>
        <!--
        	@slot headingAlt
      		@deprecated Use the `heading-alt` slot instead.
      	-->
        <slot v-else-if="$slots.headingAlt" name="headingAlt"></slot>
        <template v-else>{{ headingAlt }}</template>
      </span>
      <slot name="heading">{{ heading }}</slot>
    </BaseHeading>
    <slot></slot>
  </div>
</template>
