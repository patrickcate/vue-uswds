<script setup>
import BaseLink from '@/components/BaseLink'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  customClasses: {
    type: Object,
    default: () => ({
      gridCol: ['grid-col-auto'],
      link: [],
      icon: [],
    }),
  },
})
</script>

<template>
  <div class="usa-footer__social-links">
    <div
      v-for="item in items"
      :key="item?.id || item.name"
      :class="customClasses?.gridCol"
    >
      <BaseLink
        :to="item.to"
        :href="item.href"
        class="usa-social-link"
        :class="customClasses?.link"
        :router-component-name="item.routerComponentName"
      >
        <slot :name="item?.id || item.name.toLowerCase()" :item="item">
          <img
            class="usa-social-link__icon"
            :class="customClasses?.icon"
            :src="item.icon"
            :alt="item.name"
          />
        </slot>
      </BaseLink>
    </div>
  </div>
</template>
