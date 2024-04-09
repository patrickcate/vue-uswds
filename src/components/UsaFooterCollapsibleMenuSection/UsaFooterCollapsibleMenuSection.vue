<script setup>
import { computed, inject, toRef, onBeforeUnmount } from 'vue'
import { nextId } from '@/utils/unique-id.js'
import BaseLink from '@/components/BaseLink'
import BaseHeading from '@/components/BaseHeading'

const isCollapsible = inject('footerMenuIsCollapsible')
const menuSections = inject('menuSections')
const registerMenuSection = inject('registerMenuSection')
const unregisterMenuSection = inject('unregisterMenuSection')
const toggleMenuSection = inject('toggleMenuSection')

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  headingTag: {
    type: String,
    default: 'h4',
  },
})

const menuSectionId = computed(
  () => props.item?.id || nextId('usa-footer-collapsible-menu-section'),
)

registerMenuSection(menuSectionId.value, false)

onBeforeUnmount(() => {
  unregisterMenuSection(menuSectionId.value)
})

const isOpen = toRef(menuSections, menuSectionId.value)
</script>

<template>
  <section
    :key="item?.id || item.text"
    class="usa-footer__primary-content usa-footer__primary-content--collapsible"
  >
    <button
      v-if="isCollapsible"
      type="button"
      class="usa-footer__primary-link usa-footer__primary-link--button"
      :aria-expanded="isOpen"
      :aria-controls="menuSectionId"
      @click="toggleMenuSection(menuSectionId)"
      >{{ item.text }}</button
    >
    <BaseHeading v-else :tag="headingTag" class="usa-footer__primary-link">{{
      item.text
    }}</BaseHeading>
    <ul
      v-if="item?.children?.length"
      v-show="isOpen || !isCollapsible"
      :id="menuSectionId"
      class="usa-list usa-list--unstyled"
    >
      <li
        v-for="subItem in item.children"
        :key="subItem?.id || subItem.text"
        class="usa-footer__secondary-link"
      >
        <BaseLink
          :to="subItem.to"
          :href="subItem.href"
          :router-component-name="subItem.routerComponentName"
          >{{ subItem.text }}</BaseLink
        >
      </li>
    </ul>
  </section>
</template>
