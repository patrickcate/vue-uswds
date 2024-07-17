<script setup>
import BaseHeading from '@/components/BaseHeading'
import UsaIcon from '@/components/UsaIcon'

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  titleTag: {
    type: String,
    default: 'h2',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        icon: [],
        content: [],
        title: [],
      }
    },
  },
})
</script>

<template>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon" :class="customClasses?.icon">
      <slot name="icon"><UsaIcon :name="icon" /></slot>
    </div>
    <div class="usa-icon-list__content" :class="customClasses?.content">
      <BaseHeading
        v-if="title || $slots.title"
        :tag="titleTag"
        class="usa-icon-list__title"
        :class="customClasses?.title"
        ><slot name="title">{{ title }}</slot></BaseHeading
      >
      <slot></slot>
    </div>
  </li>
</template>
