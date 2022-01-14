<script setup>
import BaseLink from '@/components/BaseLink'
import UsaSidenavSublist from '@/components/UsaSidenavSublist'

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
    <UsaSidenavSublist
      v-if="item?.children?.length"
      :items="item.children"
      :custom-classes="customClasses"
    ></UsaSidenavSublist>
  </li>
</template>
