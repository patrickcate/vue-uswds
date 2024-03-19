<script setup>
import BaseLink from '@/components/BaseLink'

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        item: [],
        link: [],
        sublist: [],
      }
    },
  },
})
</script>

<template>
  <li class="usa-sidenav__item" :class="customClasses?.item">
    <BaseLink
      v-bind="item?.attrs"
      :href="item?.href"
      :to="item?.to"
      :router-component-name="item?.routerComponentName"
      :class="customClasses?.link"
      ><slot :item="item">{{ item?.text }}</slot></BaseLink
    >
    <ul
      v-if="item?.children?.length || $slots.sublist"
      class="usa-sidenav__sublist"
      :class="customClasses?.sublist"
    >
      <slot name="sublist" :sublist="item.children">
        <UsaSidenavItem
          v-for="subItem in item.children"
          :key="subItem?.id || subItem.text"
          :item="subItem"
          :custom-classes="customClasses"
          >{{ subItem.text }}</UsaSidenavItem
        >
      </slot>
    </ul>
  </li>
</template>
