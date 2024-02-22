<script setup>
import { watch, inject } from 'vue'

const mobileMenuId = inject('mobileMenuId')
const isMobileMenuOpen = inject('isMobileMenuOpen')
const toggleMobileMenu = inject('toggleMobileMenu')

const emit = defineEmits(['mobileMenuOpen'])

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  menuButtonLabel: {
    type: String,
    default: 'Menu',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        button: [],
      }
    },
  },
})

watch(isMobileMenuOpen, isOpen => {
  emit('mobileMenuOpen', isOpen)
})
</script>

<template>
  <div class="usa-navbar">
    <slot></slot>
    <button
      type="button"
      class="usa-menu-btn"
      :class="customClasses?.button"
      :aria-controls="mobileMenuId"
      @click="toggleMobileMenu"
      ><slot name="menu-button" :menu-button-label="menuButtonLabel">{{
        menuButtonLabel
      }}</slot></button
    >
  </div>
</template>
