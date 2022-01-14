<script setup>
import { computed, toRef } from 'vue'
import usePagination from '@/composables/usePagination.js'
import UsaPaginationArrow from '@/components/UsaPaginationArrow'
import UsaPaginationItem from '@/components/UsaPaginationItem'

const emit = defineEmits(['update:currentPage'])

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  unbounded: {
    type: Boolean,
    default: false,
  },
  currentPage: {
    type: Number,
    default: 1,
    validator(currentPage) {
      return currentPage > 0
    },
  },
  ariaLabel: {
    type: String,
    default: 'Pagination',
  },
  previousLinkText: {
    type: String,
    default: 'Previous',
  },
  nextLinkText: {
    type: String,
    default: 'Next',
  },
  firstPageAriaLabel: {
    type: String,
    default: 'First page, page #',
  },
  previousPageAriaLabel: {
    type: String,
    default: 'Previous page',
  },
  numberPageAriaLabel: {
    type: String,
    default: 'Page #',
  },
  nextPageAriaLabel: {
    type: String,
    default: 'Next page',
  },
  lastPageAriaLabel: {
    type: String,
    default: 'Last page, page #',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        list: [],
      }
    },
  },
})

const totalItems = computed(() => {
  return props.items.length
})

const {
  currentPage,
  totalPages,
  isFirstPage,
  isLastPage,
  isOverflowSlot,
  visiblePageRange,
  toPreviousPage,
  toNextPage,
  updateCurrentPage,
} = usePagination(
  toRef(props, 'currentPage'),
  totalItems,
  toRef(props, 'unbounded'),
  emit
)

function getAriaLabel(pageNumber) {
  if (pageNumber === 1) {
    return props.firstPageAriaLabel.replace('#', pageNumber)
  }

  if (pageNumber === totalPages.value) {
    return props.lastPageAriaLabel.replace('#', pageNumber)
  }

  return props.numberPageAriaLabel.replace('#', pageNumber)
}
</script>

<template>
  <nav :aria-label="ariaLabel" class="usa-pagination">
    <ul class="usa-pagination__list" :class="customClasses?.list">
      <slot
        name="previous"
        :isFirstPage="isFirstPage"
        :toPreviousPage="toPreviousPage"
      >
        <UsaPaginationArrow
          direction="previous"
          :class="{ 'usa-pagination__item--hidden': isFirstPage }"
          :aria-label="previousPageAriaLabel"
          :href="items?.[currentPage - 2]?.href || null"
          :to="items?.[currentPage - 2]?.to || null"
          :router-component-name="
            items?.[currentPage - 2]?.routerComponentName || null
          "
          @click="toPreviousPage()"
        >
          <template #before="{ svgSpritePath }">
            <slot name="previousIcon">
              <svg
                v-if="svgSpritePath"
                class="usa-icon"
                aria-hidden="true"
                role="img"
              >
                <use
                  v-bind="{ 'xlink:href': `${svgSpritePath}#navigate_before}` }"
                ></use>
              </svg>
            </slot>
          </template>
          <template #default>
            <slot name="previousLabel">{{ previousLinkText }}</slot>
          </template>
        </UsaPaginationArrow>
      </slot>

      <template
        v-for="(pageNumber, index) in visiblePageRange"
        :key="pageNumber"
      >
        <li
          v-if="isOverflowSlot(index)"
          class="usa-pagination__item usa-pagination__overflow"
          role="presentation"
        >
          <span>&hellip;</span>
        </li>

        <UsaPaginationItem
          v-else
          :page-number="pageNumber"
          :is-current-page="pageNumber === currentPage"
          :aria-label="getAriaLabel(pageNumber)"
          :href="items?.[index]?.href || null"
          :to="items?.[index]?.to || null"
          :router-component-name="items?.[index]?.routerComponentName || null"
          @click="updateCurrentPage(pageNumber)"
          >{{ pageNumber }}</UsaPaginationItem
        >
      </template>

      <slot name="next" :isLastPage="isLastPage" :toNextPage="toNextPage">
        <UsaPaginationArrow
          direction="next"
          :class="{ 'usa-pagination__item--hidden': isLastPage }"
          :aria-label="nextPageAriaLabel"
          :href="items?.[currentPage]?.href || null"
          :to="items?.[currentPage]?.to || null"
          :router-component-name="
            items?.[currentPage]?.routerComponentName || null
          "
          @click="toNextPage()"
        >
          <template #after="{ svgSpritePath }">
            <slot name="nextIcon">
              <svg
                v-if="svgSpritePath"
                class="usa-icon"
                aria-hidden="true"
                role="img"
              >
                <use
                  v-bind="{ 'xlink:href': `${svgSpritePath}#navigate_next}` }"
                ></use>
              </svg>
            </slot>
          </template>
          <template #default>
            <slot name="nextLabel">{{ nextLinkText }}</slot>
          </template>
        </UsaPaginationArrow>
      </slot>
    </ul>
  </nav>
</template>
// TODO: support both regular props and v-model.
<style>
.usa-pagination__item--hidden {
  visibility: hidden;
  pointer-events: none;
  z-index: -1;
}
</style>
