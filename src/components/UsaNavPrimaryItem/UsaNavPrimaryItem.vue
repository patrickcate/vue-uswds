<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { inject } from 'vue'
import BaseLink from '@/components/BaseLink'

const closeAllDropdowns = inject('closeAllDropdowns')
const closeMobileMenu = inject('closeMobileMenu')

defineProps({
  href: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: '',
  },
  routerComponentName: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <li class="usa-nav__primary-item">
    <BaseLink
      v-bind="$attrs"
      class="usa-nav__link"
      :href="href"
      :to="to"
      :router-component-name="routerComponentName"
      @click="closeAllDropdowns(), closeMobileMenu()"
    >
      <span><slot></slot></span>
    </BaseLink>
  </li>
</template>
