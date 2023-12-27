<script setup>
import { provide } from 'vue'
import { useMobileMenu } from '@/composables/useMobileMenu.js'

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

const {
  isMobileMenuOpen,
  mobileMenuId,
  closeMobileMenu,
  openMobileMenu,
  toggleMobileMenu,
} = useMobileMenu(emit)

provide('isMobileMenuOpen', isMobileMenuOpen)
provide('mobileMenuId', mobileMenuId)
provide('closeMobileMenu', closeMobileMenu)
provide('openMobileMenu', openMobileMenu)
provide('toggleMobileMenu', toggleMobileMenu)
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
