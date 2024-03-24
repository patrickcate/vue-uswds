<script setup>
import { inject, computed } from 'vue'
import { PREFIX_SEPARATOR, GRID_NAMESPACE } from '@/utils/constants.js'

const prefixSeparator = inject('vueUswds.prefixSeparator', PREFIX_SEPARATOR)
const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: '',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        logoGridCol: [],
        headingGridCol: [],
      }
    },
  },
})

const logoGridClasses = computed(() =>
  props.customClasses?.logoGridCol?.length
    ? props.customClasses.logoGridCol
    : [`mobile-lg${prefixSeparator}${gridNamespace}col-auto`],
)
const headingGridClasses = computed(() =>
  props.customClasses?.headingGridCol?.length
    ? props.customClasses.headingGridCol
    : [`mobile-lg${prefixSeparator}${gridNamespace}col-auto`],
)
</script>

<template>
  <div class="usa-footer__logo">
    <div :class="logoGridClasses">
      <slot name="logo">
        <img v-if="src" class="usa-footer__logo-img" :src="src" :alt="alt" />
      </slot>
    </div>
    <div :class="headingGridClasses">
      <p class="usa-footer__logo-heading">
        <slot name="heading">{{ heading }}</slot>
      </p>
    </div>
  </div>
</template>
