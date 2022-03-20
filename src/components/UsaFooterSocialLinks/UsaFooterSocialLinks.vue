<script setup>
import { computed, inject } from 'vue'
import { GRID_NAMESPACE } from '@/utils/constants.js'
import BaseLink from '@/components/BaseLink'

const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  customClasses: {
    type: Object,
    default: () => ({
      gridCol: [],
      link: [],
      icon: [],
    }),
  },
})

const gridColClasses = computed(() =>
  props.customClasses?.gridCol?.length
    ? props.customClasses.gridCol
    : [`${gridNamespace}col-auto`]
)
</script>

<template>
  <div class="usa-footer__social-links">
    <div
      v-for="item in items"
      :key="item?.id || item.name"
      :class="gridColClasses"
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
