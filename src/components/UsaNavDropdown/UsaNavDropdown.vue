<script setup>
import { computed, inject, provide, onBeforeUnmount } from 'vue'
import { nextId } from '@/utils/unique-id.js'

const registerDropdown = inject('registerDropdown')
const unregisterDropdown = inject('unregisterDropdown')

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
})

const dropdownId = computed(() => props.id || nextId('usa-nav-dropdown'))

registerDropdown(dropdownId.value, props.open)

provide('dropdownId', dropdownId)

onBeforeUnmount(() => {
  unregisterDropdown(dropdownId.value)
})
</script>

<template>
  <li class="usa-nav__primary-item">
    <slot></slot>
  </li>
</template>
