<script setup>
import UsaAlert from '@/components/UsaAlert'
import UsaChecklist from '@/components/UsaChecklist'

defineProps({
  items: {
    type: Array,
    default: () => [],
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
    default: () => ({
      body: [],
      heading: [],
    }),
  },
})
</script>

<template>
  <UsaAlert
    variant="validation"
    :heading="heading"
    :heading-tag="headingTag"
    :custom-classes="customClasses"
  >
    <template #message>
      <UsaChecklist :items="items"></UsaChecklist>
    </template>
  </UsaAlert>
</template>
