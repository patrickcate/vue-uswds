<script setup>
import { ref, computed, reactive, watch, provide, inject } from 'vue'
import { MOBILE_MENU_BREAKPOINT } from '@/utils/constants.js'
import { onKeyStroke, useMediaQuery, onClickOutside } from '@vueuse/core'
import useAccordion from '@/composables/useAccordion.js'
import UsaNavPrimaryItem from '@/components/UsaNavPrimaryItem'
import UsaNavDropdown from '@/components/UsaNavDropdown'
import UsaNavDropdownButton from '@/components/UsaNavDropdownButton'
import UsaNavSubmenu from '@/components/UsaNavSubmenu'
import UsaNavSubmenuItem from '@/components/UsaNavSubmenuItem'

const mobileMenuBreakpoint = inject(
  'vueUswds.mobileMenuBreakpoint',
  MOBILE_MENU_BREAKPOINT
)
const isMegamenu = inject('isMegamenu', ref(false))

const emit = defineEmits(['update:items'])

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const nav = ref(null)
const largeScreen = useMediaQuery(`(min-width: ${mobileMenuBreakpoint})`)
const isMultiSelectable = computed(() => !largeScreen.value)
const dropdownItems = reactive({})

const {
  registerAccordionItem,
  unregisterAccordionItem,
  closeItem,
  toggleItem,
  closeAllItems,
} = useAccordion(dropdownItems, isMultiSelectable)

watch(dropdownItems, () => {
  emit('update:items', dropdownItems)
})

watch(largeScreen, () => {
  closeAllItems()
})

provide('registerDropdown', registerAccordionItem)
provide('unregisterDropdown', unregisterAccordionItem)
provide('toggleDropdown', toggleItem)
provide('closeDropdown', closeItem)
provide('closeAllDropdowns', closeAllItems)
provide('dropdownItems', dropdownItems)

onKeyStroke('Escape', () => {
  closeAllItems()
})

onClickOutside(nav, () => {
  closeAllItems()
})
</script>

<template>
  <ul ref="nav" class="usa-nav__primary usa-accordion">
    <slot :items="items">
      <template v-for="item in items">
        <UsaNavDropdown
          v-if="item?.children?.length"
          :key="item?.id || item.text"
        >
          <UsaNavDropdownButton v-bind="item?.attrs">{{
            item.text
          }}</UsaNavDropdownButton>
          <UsaNavSubmenu
            v-if="item?.cols > 1 && isMegamenu"
            :key="item.children.map(item => item?.id || item.text)"
            :cols="item.cols"
          >
            <template v-for="n in item.cols" :key="n" #[`col-${n}`]>
              <template v-for="submenuItem in item.children">
                <UsaNavSubmenuItem
                  v-if="submenuItem?.col === n"
                  v-bind="submenuItem?.attrs"
                  :key="submenuItem?.id || submenuItem.text"
                  :href="submenuItem?.href"
                  :to="submenuItem?.to"
                  :router-component-name="submenuItem?.routerComponentName"
                  >{{ submenuItem.text }}</UsaNavSubmenuItem
                >
              </template>
            </template>
          </UsaNavSubmenu>
          <template v-else>
            <UsaNavSubmenu
              :key="item.children.map(item => item?.id || item.text)"
            >
              <UsaNavSubmenuItem
                v-for="submenuItem in item.children"
                v-bind="submenuItem?.attrs"
                :key="submenuItem?.id || submenuItem.text"
                :href="submenuItem?.href"
                :to="submenuItem?.to"
                :router-component-name="submenuItem?.routerComponentName"
                >{{ submenuItem.text }}</UsaNavSubmenuItem
              >
            </UsaNavSubmenu>
          </template>
        </UsaNavDropdown>
        <template v-else>
          <UsaNavPrimaryItem
            :key="item?.id || item.text"
            v-bind="item?.attrs"
            :href="item?.href"
            :to="item?.to"
            :router-component-name="item?.routerComponentName"
            >{{ item.text }}</UsaNavPrimaryItem
          >
        </template>
      </template>
    </slot>
  </ul>
</template>
