<script setup>
import { computed } from 'vue'
import UsaAlert from '@/components/UsaAlert'

const props = defineProps({
  variant: {
    type: String,
    default: 'emergency',
    validator(variant) {
      const isValidVariant = ['info', 'emergency'].includes(variant)

      if (!isValidVariant) {
        console.warn(`'${variant}' is not a valid site alert variant`)
      }

      return isValidVariant
    },
  },
  slim: {
    type: Boolean,
    default: false,
  },
  noIcon: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        root: [],
        body: [],
        heading: [],
      }
    },
  },
  ariaLabel: {
    type: String,
    default: 'Site alert',
  },
})

const classes = computed(() => [
  {
    'usa-site-alert--slim': props.slim,
    'usa-site-alert--no-icon': props.noIcon,
    'usa-site-alert--info': props.variant === 'info',
    'usa-site-alert--emergency': props.variant === 'emergency',
  },
])
</script>

<template>
  <section class="usa-site-alert" :class="classes" :aria-label="ariaLabel">
    <UsaAlert
      :class="customClasses?.root"
      :slim="slim"
      :role="role"
      :heading="heading"
      :heading-tag="headingTag"
      :custom-classes="customClasses"
    >
      <template v-if="$slots.heading" #heading
        ><slot name="heading">{{ heading }}</slot></template
      >
      <template v-if="$slots.message" #message>
        <slot name="message"></slot>
      </template>
      <template v-else #default><slot></slot></template>
    </UsaAlert>
  </section>
</template>
