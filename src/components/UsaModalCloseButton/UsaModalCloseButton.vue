<script setup>
import { inject } from 'vue'
import { SVG_SPRITE_PATH } from '@/utils/constants.js'

const svgSpritePath = inject('vueUswds.svgSpritePath', SVG_SPRITE_PATH)

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  ariaLabel: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button
    type="button"
    class="usa-button usa-modal__close"
    :aria-label="ariaLabel"
  >
    <slot :svg-sprite-path="svgSpritePath">
      <svg
        v-if="svgSpritePath"
        class="usa-icon"
        aria-hidden="true"
        focusable="false"
        role="img"
      >
        <use :href="`${svgSpritePath}#close`"></use>
      </svg>
    </slot>
  </button>
</template>
