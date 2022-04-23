<script setup>
import BaseLink from '@/components/BaseLink'

defineProps({
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
      :href="item?.href"
      :to="item?.to"
      :router-component-name="item?.routerComponentName"
      :class="customClasses?.link"
      v-bind="item?.attrs"
      ><slot :item="item">{{ item?.text }}</slot></BaseLink
    >
    <ul
      v-if="item?.children?.length"
      class="usa-sidenav__sublist"
      :class="customClasses?.sublist"
    >
      <UsaSidenavItem
        v-for="subItem in item.children"
        :key="subItem?.id || subItem.text"
        :item="subItem"
        :custom-classes="customClasses"
        >{{ subItem.text }}</UsaSidenavItem
      >
    </ul>
  </li>
</template>
