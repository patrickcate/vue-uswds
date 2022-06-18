<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, inject } from 'vue'
import { PREFIX_SEPARATOR, GRID_NAMESPACE } from '@/utils/constants.js'

const prefixSeparator = inject('vueUswds.prefixSeparator', PREFIX_SEPARATOR)
const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)
const footerVariant = inject('footerVariant', 'medium')

const props = defineProps({
  heading: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  phoneUrl: {
    type: String,
    default: '',
  },
})

const emailHref = computed(() => {
  if (props.email) {
    return `mailto:${props.email.trim().toLowerCase()}`
  }

  return ''
})

const phoneHref = computed(() => {
  if (props.phoneUrl) {
    return `tel:${props.phoneUrl.trim()}`
  }

  return ''
})
</script>

<template>
  <p
    v-if="heading && footerVariant !== 'slim'"
    class="usa-footer__contact-heading"
    >{{ heading }}</p
  >
  <address class="usa-footer__address" v-bind="$attrs">
    <slot>
      <div
        v-if="footerVariant === 'slim'"
        :class="`${gridNamespace}row ${gridNamespace}gap`"
      >
        <div
          v-if="phoneHref"
          :class="`${gridNamespace}col-auto mobile-lg${prefixSeparator}${gridNamespace}col-12 desktop${prefixSeparator}${gridNamespace}col-auto`"
        >
          <div class="usa-footer__contact-info">
            <a :href="phoneHref">{{ phone }}</a>
          </div>
        </div>
        <div
          v-if="emailHref"
          :class="`${gridNamespace}col-auto mobile-lg${prefixSeparator}${gridNamespace}col-12 desktop${prefixSeparator}${gridNamespace}col-auto`"
        >
          <div class="usa-footer__contact-info">
            <a :href="emailHref">{{ email }}</a>
          </div>
        </div>
      </div>
      <div
        v-else
        :class="`usa-footer__contact-info ${gridNamespace}row ${gridNamespace}gap`"
      >
        <div v-if="phoneHref" :class="`${gridNamespace}col-auto`">
          <a :href="phoneHref">{{ phone }}</a>
        </div>
        <div v-if="emailHref" :class="`${gridNamespace}col-auto`">
          <a :href="emailHref">{{ email }}</a>
        </div>
      </div>
    </slot>
  </address>
</template>
