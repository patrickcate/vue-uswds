<script setup>
import { computed, ref, watch, onBeforeUnmount, nextTick, inject, h } from 'vue'
import { IMAGE_PATH, MOBILE_MENU_BREAKPOINT } from '@/utils/constants.js'
import { onKeyStroke, onClickOutside, useMediaQuery } from '@vueuse/core'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import UsaOverlay from '@/components/UsaOverlay'

const imagePath = inject('vueUswds.imagePath', IMAGE_PATH)
const mobileMenuBreakpoint = inject(
  'vueUswds.mobileMenuBreakpoint',
  MOBILE_MENU_BREAKPOINT
)
const isExtendedHeader = inject('isExtendedHeader', ref(false))
const isMobileMenuOpen = inject('isMobileMenuOpen', ref(false))
const mobileMenuId = inject('mobileMenuId')
const closeMobileMenu = inject('closeMobileMenu')

defineProps({
  ariaLabel: {
    type: String,
    default: 'Primary navigation',
  },
  closeButtonLabel: {
    type: String,
    default: 'Close',
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

const nav = ref(null)
const { activate, deactivate } = useFocusTrap(nav)
const largeScreen = useMediaQuery(`(min-width: ${mobileMenuBreakpoint})`)

watch(isMobileMenuOpen, async isMenuOpen => {
  if (isMenuOpen) {
    await nextTick
    activate()
  } else {
    await nextTick
    deactivate()
  }
})

watch(largeScreen, isLargeScreen => {
  if (isLargeScreen) {
    closeMobileMenu()
  }
})

onBeforeUnmount(() => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
})

onKeyStroke('Escape', () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
})

onClickOutside(nav, () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
})

const classes = computed(() => [
  {
    'is-visible': isMobileMenuOpen.value,
  },
])

const UsaNavInnerComponent = {
  name: 'UsaNavInner',
  props: {
    wrap: {
      type: Boolean,
      default: false,
    },
  },
  setup({ wrap }, { slots }) {
    return () =>
      wrap
        ? h('div', { class: 'usa-nav__inner' }, slots.default())
        : slots.default()
  },
}
</script>

<template>
  <Teleport to="body" :disabled="!isMobileMenuOpen">
    <UsaOverlay :visible="isMobileMenuOpen"></UsaOverlay>
    <nav
      :id="mobileMenuId"
      ref="nav"
      :aria-label="ariaLabel"
      class="usa-nav"
      :class="classes"
    >
      <UsaNavInnerComponent :wrap="isExtendedHeader">
        <button
          type="button"
          class="usa-nav__close"
          :class="customClasses?.button"
          @click="closeMobileMenu"
        >
          <slot name="close-button" :close-button-label="closeButtonLabel"
            ><img
              :src="`${imagePath}/usa-icons/close.svg`"
              role="img"
              :alt="closeButtonLabel"
          /></slot>
        </button>
        <template v-if="largeScreen">
          <slot name="primary"></slot>
          <slot name="secondary"></slot>
        </template>
        <template v-else>
          <slot name="secondary"></slot>
          <slot name="primary"></slot>
        </template>
      </UsaNavInnerComponent>
    </nav>
  </Teleport>
</template>
