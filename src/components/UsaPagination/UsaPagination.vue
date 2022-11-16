<script setup>
import { computed, toRef, useSlots } from 'vue'
import usePagination from '@/composables/usePagination.js'
import UsaPaginationArrow from '@/components/UsaPaginationArrow'
import UsaPaginationItem from '@/components/UsaPaginationItem'

const slots = useSlots()

if (slots?.previousIcon) {
  console.warn(
    `The 'previousIcon' slot' is deprecated, use 'previous-icon' instead.`
  )
}

if (slots?.previousLabel) {
  console.warn(
    `The 'previousLabel' slot' is deprecated, use 'previous-label' instead.`
  )
}

if (slots?.nextIcon) {
  console.warn(`The 'nextIcon' slot' is deprecated, use 'next-icon' instead.`)
}

if (slots?.nextLabel) {
  console.warn(`The 'nextLabel' slot' is deprecated, use 'next-label' instead.`)
}

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
    default: 'First page, page %s',
  },
  previousPageAriaLabel: {
    type: String,
    default: 'Previous page',
  },
  numberPageAriaLabel: {
    type: String,
    default: 'Page %s',
  },
  nextPageAriaLabel: {
    type: String,
    default: 'Next page',
  },
  lastPageAriaLabel: {
    type: String,
    default: 'Last page, page %s',
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
    if (props.firstPageAriaLabel.includes('#')) {
      console.warn(`The '#' placeholder is deprecated, use '%s' instead.`)
      return props.firstPageAriaLabel.replaceAll('#', pageNumber)
    }
    return props.firstPageAriaLabel.replaceAll('%s', pageNumber)
  }

  if (pageNumber === totalPages.value) {
    if (props.lastPageAriaLabel.includes('#')) {
      console.warn(`The '#' placeholder is deprecated, use '%s' instead.`)
      return props.lastPageAriaLabel.replaceAll('#', pageNumber)
    }
    return props.lastPageAriaLabel.replaceAll('%s', pageNumber)
  }

  if (props.numberPageAriaLabel.includes('#')) {
    console.warn(`The '#' placeholder is deprecated, use '%s' instead.`)
    return props.numberPageAriaLabel.replaceAll('#', pageNumber)
  }
  return props.numberPageAriaLabel.replaceAll('%s', pageNumber)
}
</script>

<template>
  <nav :aria-label="ariaLabel" class="usa-pagination">
    <ul class="usa-pagination__list" :class="customClasses?.list">
      <slot
        name="previous"
        :is-first-page="isFirstPage"
        :to-previous-page="toPreviousPage"
      >
        <UsaPaginationArrow
          v-show="!isFirstPage"
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
            <slot v-if="$slots['previous-icon']" name="previous-icon"></slot>
            <!--
            	@slot previousIcon
          		@deprecated Use the `previous-icon` slot instead.
          	-->
            <slot v-else-if="$slots.previousIcon" name="previousIcon"></slot>
            <template v-else>
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
            </template>
          </template>
          <template #default>
            <slot v-if="$slots['previous-label']" name="previous-label"></slot>
            <!--
            	@slot previousLabel
          		@deprecated Use the `previous-label` slot instead.
          	-->
            <slot v-else-if="$slots.previousLabel" name="previousLabel"></slot>
            <template v-else>{{ previousLinkText }}</template>
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

      <slot name="next" :is-last-page="isLastPage" :to-next-page="toNextPage">
        <UsaPaginationArrow
          v-show="!isLastPage"
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
            <slot v-if="$slots['next-icon']" name="next-icon"></slot>
            <!--
            	@slot nextIcon
          		@deprecated Use the `next-icon` slot instead.
          	-->
            <slot v-else-if="$slots.nextIcon" name="nextIcon"></slot>
            <template v-else>
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
            </template>
          </template>
          <template #default>
            <slot v-if="$slots['next-label']" name="next-label"></slot>
            <!--
            	@slot nextLabel
          		@deprecated Use the `next-label` slot instead.
          	-->
            <slot v-else-if="$slots.nextLabel" name="nextLabel"></slot>
            <template v-else>{{ nextLinkText }}</template>
          </template>
        </UsaPaginationArrow>
      </slot>
    </ul>
  </nav>
</template>
