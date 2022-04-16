<script setup>
import { computed, toRef, inject } from 'vue'
import {
  PREFIX_SEPARATOR,
  GRID_NAMESPACE,
  IMAGE_PATH,
} from '@/utils/constants.js'
import useToggle from '@/composables/useToggle.js'
import UsaBannerContent from '@/components/UsaBannerContent'

const prefixSeparator = inject('vueUswds.prefixSeparator', PREFIX_SEPARATOR)
const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)
const imagePath = inject('vueUswds.imagePath', IMAGE_PATH)

const emit = defineEmits(['update:open'])

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    default: 'Official government website',
  },
  headerText: {
    type: String,
    default: 'An official website of the United States government',
  },
  actionText: {
    type: String,
    default: "Here's how you know",
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        accordion: [],
        bannerHeader: [],
        bannerInner: [],
        button: [],
        bannerContent: [],
      }
    },
  },
})

const { isOpen, toggleId, openContent, closeContent, toggleContent } =
  useToggle(props.id, 'usa-banner', toRef(props, 'open'), emit)

const headerClasses = computed(() => [
  { 'usa-banner__header--expanded': isOpen.value },
  ...(props.customClasses?.bannerHeader || []),
])

defineExpose({
  openContent,
  closeContent,
  toggleContent,
})
</script>

<template>
  <section class="usa-banner" :aria-label="ariaLabel">
    <div class="usa-accordion" :class="customClasses?.accordion">
      <header class="usa-banner__header" :class="headerClasses">
        <div class="usa-banner__inner" :class="customClasses?.bannerInner">
          <div :class="`${gridNamespace}col-auto`">
            <slot name="flag">
              <img
                class="usa-banner__header-flag"
                :src="`${imagePath}/us_flag_small.png`"
                alt="U.S. flag"
              />
            </slot>
          </div>
          <div
            :class="`${gridNamespace}col-fill tablet${prefixSeparator}${gridNamespace}col-auto`"
          >
            <p class="usa-banner__header-text">{{ headerText }}</p>
            <p class="usa-banner__header-action" aria-hidden="true">{{
              actionText
            }}</p>
          </div>
          <button
            class="usa-accordion__button usa-banner__button"
            :class="customClasses?.button"
            :aria-expanded="isOpen"
            :aria-controls="toggleId"
            @click="toggleContent()"
          >
            <slot name="button" :is-open="isOpen" :action-text="actionText">
              <span class="usa-banner__button-text">{{ actionText }}</span>
            </slot>
          </button>
        </div>
      </header>
      <div
        :id="toggleId"
        :hidden="!isOpen"
        class="usa-banner__content usa-accordion__content"
        :class="customClasses?.bannerContent"
      >
        <slot><UsaBannerContent></UsaBannerContent></slot>
      </div>
    </div>
  </section>
</template>
