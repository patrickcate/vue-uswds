<script setup>
import { computed, provide, reactive, watch, toRef } from 'vue'
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
const isMultiSelectable = toRef(props, 'multiselectable')

const {
  registerAccordionItem,
  unregisterAccordionItem,
  openItem,
  closeItem,
  toggleItem,
} = useAccordion(accordionItems, isMultiSelectable)

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

const classes = computed(() => [{ 'usa-accordion--bordered': props.bordered }])

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
    :aria-multiselectable="isMultiSelectable || null"
    ><slot></slot
  ></div>
</template>
