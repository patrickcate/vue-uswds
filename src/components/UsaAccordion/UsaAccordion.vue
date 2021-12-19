<script setup>
import { computed, provide, reactive, watch } from 'vue'
import useAccordion from '@/composables/useAccordion.js'

const emit = defineEmits(['update:accordionItems'])

const props = defineProps({
  bordered: {
    type: Boolean,
    default: false,
  },
  multiselectable: {
    type: Boolean,
    default: false,
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
})

const accordionItems = reactive({})

const {
  registerAccordionItem,
  unregisterAccordionItem,
  openItem,
  closeItem,
  toggleItem,
} = useAccordion(accordionItems, props.multiselectable)

watch(accordionItems, () => {
  emit('update:accordionItems', accordionItems)
})

provide(
  'accordionHeadingTag',
  computed(() => props.headingTag)
)
provide('registerAccordionItem', registerAccordionItem)
provide('unregisterAccordionItem', unregisterAccordionItem)
provide('toggleItem', toggleItem)
provide('accordionItems', accordionItems)

const classes = computed(() => {
  return { 'usa-accordion--bordered': props.bordered }
})

defineExpose({
  openItem,
  closeItem,
  toggleItem,
})
</script>

<template>
  <div
    class="usa-accordion"
    :class="classes"
    :aria-multiselectable="multiselectable || null"
    ><slot></slot
  ></div>
</template>
