<script setup>
const emit = defineEmits(['toggleMenu'])

defineProps({
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

function toggleMenu() {
  emit('toggleMenu')
}
</script>

<template>
  <div class="usa-navbar">
    <slot></slot>
    <button
      class="usa-menu-btn"
      :class="customClasses?.button"
      @click="toggleMenu"
      ><slot name="menu-button" :menuButtonLabel="menuButtonLabel">{{
        menuButtonLabel
      }}</slot></button
    >
  </div>
</template>
