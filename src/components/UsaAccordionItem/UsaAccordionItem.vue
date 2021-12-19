<script setup>
import { computed, inject, toRef, onBeforeUnmount } from 'vue'
import { nextId } from '@/utils/unique-id.js'
import BaseHeading from '@/components/BaseHeading'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        heading: [],
        button: [],
        content: [],
      }
    },
  },
})

const accordionHeadingTag = inject('accordionHeadingTag')
const registerAccordionItem = inject('registerAccordionItem')
const unregisterAccordionItem = inject('unregisterAccordionItem')
const toggleItem = inject('toggleItem')
const accordionItems = inject('accordionItems')

const computedId = computed(() => props.id || nextId('usa-accordion-item'))
const isOpen = toRef(accordionItems, computedId.value)

registerAccordionItem(computedId.value, props.open)

onBeforeUnmount(() => {
  unregisterAccordionItem(computedId.value)
})
</script>

<template>
  <BaseHeading
    class="usa-accordion__heading"
    :class="customClasses?.heading"
    :tag="accordionHeadingTag"
    ><button
      type="button"
      class="usa-accordion__button"
      :class="customClasses?.button"
      :aria-expanded="isOpen"
      :aria-controls="computedId"
      @click="toggleItem(computedId)"
      ><slot name="label">{{ label }}</slot></button
    ></BaseHeading
  >
  <div
    :id="computedId"
    class="usa-accordion__content"
    :class="customClasses?.content"
    :hidden="!isOpen"
    ><slot></slot
  ></div>
</template>
