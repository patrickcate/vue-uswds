<script setup>
import { inject } from 'vue'
import { SVG_SPRITE_PATH } from '@/utils/constants.js'

const svgSpritePath = inject('vueUswds.svgSpritePath', SVG_SPRITE_PATH)

const emit = defineEmits(['closeModal'])

defineProps({
  ariaLabel: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button
    class="usa-button usa-modal__close"
    :aria-label="ariaLabel"
    @click="emit('closeModal')"
  >
    <slot :svgSpritePath="svgSpritePath">
      <svg
        v-if="svgSpritePath"
        class="usa-icon"
        aria-hidden="true"
        focusable="false"
        role="img"
      >
        <use v-bind="{ 'xlink:href': `${svgSpritePath}#close}` }"></use>
      </svg>
    </slot>
  </button>
</template>
