<script setup>
import { computed } from 'vue'
import UsaBreadcrumbItem from '@/components/UsaBreadcrumbItem'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: 'Breadcrumbs',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        list: [],
        item: [],
        link: [],
        span: [],
      }
    },
  },
})

const classes = computed(() => [
  {
    'usa-breadcrumb--wrap': props.wrap,
  },
])

const hasCurrent = computed(() => props.items.some(item => item?.current))

const breadcrumbItems = computed(() => {
  if (!props.items.length) {
    return []
  }

  if (hasCurrent.value) {
    return props.items
  }

  const items = [...props.items]

  // If no breadcrumb item has the `current` prop set, automatically set the
  // last item to `current: true`.
  items[items.length - 1].current = true

  return items
})
</script>

<template>
  <nav class="usa-breadcrumb" :class="classes" :aria-label="ariaLabel">
    <ol class="usa-breadcrumb__list" :class="customClasses?.list">
      <slot :items="breadcrumbItems">
        <UsaBreadcrumbItem
          v-for="item in breadcrumbItems"
          :key="item?.id || item.text"
          :class="customClasses?.item"
          :to="item.to"
          :href="item.href"
          :router-component-name="item.routerComponentName"
          :current="item.current"
          :custom-classes="{
            link: customClasses?.link,
            span: customClasses?.span,
          }"
          >{{ item.text }}</UsaBreadcrumbItem
        >
      </slot>
    </ol>
  </nav>
</template>
