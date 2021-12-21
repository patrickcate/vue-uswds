<script setup>
import { computed } from 'vue'
import BaseHeading from '@/components/BaseHeading'

const props = defineProps({
  cardTag: {
    type: String,
    default: 'div',
  },
  heading: {
    type: String,
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  flag: {
    type: Boolean,
    default: false,
  },
  headerFirst: {
    type: Boolean,
    default: false,
  },
  insetMedia: {
    type: Boolean,
    default: false,
  },
  mediaPosition: {
    type: String,
    default: 'left',
    validator(mediaPosition) {
      return ['left', 'right'].includes(mediaPosition)
    },
  },
  headerExdent: {
    type: Boolean,
    default: false,
  },
  mediaExdent: {
    type: Boolean,
    default: false,
  },
  bodyExdent: {
    type: Boolean,
    default: false,
  },
  footerExdent: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        container: [],
        header: [],
        heading: [],
        media: [],
        img: [],
        body: [],
        footer: [],
      }
    },
  },
})

const classes = computed(() => {
  return [
    { 'usa-card--header-first': props.headerFirst },
    {
      'usa-card--flag': props.flag,
    },
    {
      'usa-card--media-right': props.mediaPosition === 'right',
    },
  ]
})

const headerClasses = computed(() => {
  return [
    { 'usa-card__header--exdent': props.headerExdent },
    ...(props.customClasses?.header || []),
  ]
})

const mediaClasses = computed(() => {
  return [
    { 'usa-card__media--inset': props.insetMedia },
    { 'usa-card__media--exdent': props.mediaExdent },
    ...(props.customClasses?.media || []),
  ]
})

const bodyClasses = computed(() => {
  return [
    { 'usa-card__body--exdent': props.bodyExdent },
    ...(props.customClasses?.body || []),
  ]
})

const footerClasses = computed(() => {
  return [
    { 'usa-card__footer--exdent': props.footerExdent },
    ...(props.customClasses?.footer || []),
  ]
})
</script>

<template>
  <component :is="cardTag" class="usa-card" :class="classes">
    <div class="usa-card__container" :class="customClasses?.container">
      <header
        v-if="heading || $slots.heading"
        class="usa-card__header"
        :class="headerClasses"
      >
        <BaseHeading
          :tag="headingTag"
          class="usa-card__heading"
          :class="customClasses?.heading"
          ><slot name="heading">{{ heading }}</slot></BaseHeading
        >
      </header>
      <div v-if="$slots.media" class="usa-card__media" :class="mediaClasses">
        <div class="usa-card__img" :class="customClasses?.img"
          ><slot name="media"></slot
        ></div>
      </div>
      <div v-if="$slots.default" class="usa-card__body" :class="bodyClasses"
        ><slot></slot
      ></div>
      <div v-if="$slots.footer" class="usa-card__footer" :class="footerClasses"
        ><slot name="footer"></slot
      ></div>
    </div>
  </component>
</template>
