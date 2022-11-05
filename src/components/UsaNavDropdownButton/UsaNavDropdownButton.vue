<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { inject, toRef } from 'vue'
import { ROUTER_COMPONENT_NAME } from '@/utils/constants.js'

const routerComponentName = inject(
  'vueUswds.routerComponentName',
  ROUTER_COMPONENT_NAME
)

const dropdownId = inject('dropdownId')
const toggleDropdown = inject('toggleDropdown')
const dropdownItems = inject('dropdownItems')
const isOpen = toRef(dropdownItems, dropdownId.value)
</script>

<template>
  <component
    :is="routerComponentName"
    v-if="routerComponentName"
    v-slot="{ isActive, isExactActive }"
    custom
  >
    <button
      v-bind="$attrs"
      type="button"
      class="usa-accordion__button usa-nav__link"
      :class="[{ 'usa-current': isActive || isExactActive }]"
      :aria-expanded="isOpen"
      :aria-controls="dropdownId"
      @click="toggleDropdown(dropdownId)"
    >
      <span><slot></slot></span>
    </button>
  </component>
  <button
    v-else
    v-bind="$attrs"
    type="button"
    class="usa-accordion__button usa-nav__link"
    :aria-expanded="isOpen"
    :aria-controls="dropdownId"
    @click="toggleDropdown(dropdownId)"
  >
    <span><slot></slot></span>
  </button>
</template>
