<script setup>
import BaseLink from '@/components/BaseLink'

defineProps({
  ariaLabel: {
    type: String,
    default: 'Important links',
  },
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <nav
    class="usa-identifier__section usa-identifier__section--required-links"
    :aria-label="ariaLabel"
  >
    <div class="usa-identifier__container">
      <ul v-if="items.length" class="usa-identifier__required-links-list">
        <li
          v-for="(item, index) in items"
          :key="item.text || index"
          class="usa-identifier__required-links-item"
        >
          <BaseLink
            :to="item.to"
            :href="item.href"
            :router-component-name="item.routerComponentName"
            class="usa-identifier__required-link usa-link"
            >{{ item.text }}</BaseLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
