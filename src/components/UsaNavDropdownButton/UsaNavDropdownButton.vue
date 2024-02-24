<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, inject, toRef } from 'vue'
import { ROUTER_COMPONENT_NAME } from '@/utils/constants.js'

const globalRouterComponentName = inject(
  'vueUswds.routerComponentName',
  ROUTER_COMPONENT_NAME
)
const dropdownId = inject('dropdownId')
const toggleDropdown = inject('toggleDropdown')
const dropdownItems = inject('dropdownItems')

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: '',
  },
  routerComponentName: {
    type: [String, Object],
    default: '',
  },
})

const isOpen = toRef(dropdownItems, dropdownId.value)

const localRouterComponentName = computed(
  () => props.routerComponentName || globalRouterComponentName
)

const routeLocation = computed(() => props.to || props.href)
</script>

<template>
  <component
    :is="localRouterComponentName"
    v-if="localRouterComponentName"
    v-slot="slotProps"
    :to="routeLocation"
    custom
  >
    <button
      v-bind="$attrs"
      type="button"
      class="usa-accordion__button usa-nav__link"
      :class="[
        { 'usa-current': slotProps?.isActive || slotProps?.isExactActive },
      ]"
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
