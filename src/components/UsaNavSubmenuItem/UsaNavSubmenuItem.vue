<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { inject } from 'vue'
import BaseLink from '@/components/BaseLink'

const dropdownId = inject('dropdownId')
const closeDropdown = inject('closeDropdown')
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
  <li class="usa-nav__submenu-item">
    <BaseLink
      v-bind="$attrs"
      :href="href"
      :to="to"
      :router-component-name="routerComponentName"
      @click="closeDropdown(dropdownId), closeMobileMenu()"
      ><slot></slot
    ></BaseLink>
  </li>
</template>
