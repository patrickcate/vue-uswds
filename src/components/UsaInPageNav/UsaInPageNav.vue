<script setup>
import { toRef } from 'vue'
import BaseHeading from '@/components/BaseHeading'
import { useInPageNavigation } from './useInPageNavigation.js'

const emit = defineEmits(['activeHeading'])

const props = defineProps({
  title: {
    type: String,
    default: 'On this page',
  },
  mainContentSelector: {
    type: String,
    default: 'main',
  },
  headingLevel: {
    type: String,
    default: 'h4',
    validator(tag) {
      const isValidTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)

      if (!isValidTag) {
        console.warn(`'${tag}' is not a valid HTML heading element`)
      }

      return isValidTag
    },
  },
  headingElements: {
    type: Array,
    default: () => ['h2', 'h3'],
    validator(headingElements) {
      const isValid = headingElements.every(tag =>
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag),
      )

      if (!isValid) {
        console.warn(
          `'headingElements' contains an invalid HTML heading element`,
        )
      }

      return isValid
    },
  },
  minimumHeadingCount: {
    type: Number,
    default: 2,
  },
  scrollOffset: {
    type: Number,
    default: 0,
  },
  rootMargin: {
    type: String,
    default: '0px 0px 0px 0px',
  },
  threshold: {
    type: [Number, Array],
    default: 1,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        aside: [],
        nav: [],
        heading: [],
        list: [],
        item: [],
        link: [],
      }
    },
  },
})

const { headings } = useInPageNavigation(
  toRef(props, 'mainContentSelector'),
  toRef(props, 'headingElements'),
  toRef(props, 'rootMargin'),
  toRef(props, 'threshold'),
  toRef(props, 'minimumHeadingCount'),
  emit,
)

const scrollToAnchor = id => {
  const heading = document.getElementById(id)

  const calculateOffset = heading => {
    if (!heading.offsetParent) {
      return heading.offsetTop
    }

    return heading.offsetTop + calculateOffset(heading.offsetParent)
  }

  const offsetTop = calculateOffset(heading)

  const { matches: prefersReducedMotion } = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  )

  /* istanbul ignore next */
  window.scroll({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    top: offsetTop - props.scrollOffset,
  })

  if (window.location.hash.slice(1) !== id) {
    window.history.pushState(null, '', `#${id}`)
  }
}
</script>

<template>
  <div class="usa-in-page-nav-container">
    <aside
      v-if="headings && headings.size >= minimumHeadingCount"
      class="usa-in-page-nav"
      :class="customClasses?.aside"
    >
      <nav
        :aria-label="title"
        class="usa-in-page-nav__nav"
        :class="customClasses?.nav"
      >
        <BaseHeading
          :tag="headingLevel"
          class="usa-in-page-nav__heading"
          :class="customClasses?.heading"
          >{{ title }}</BaseHeading
        >
        <ul class="usa-in-page-nav__list" :class="customClasses?.list">
          <li
            v-for="heading in headings.values()"
            :key="heading.id"
            class="usa-in-page-nav__item"
            :class="[
              customClasses?.item,
              { 'usa-in-page-nav__item--primary': heading.isPrimary },
            ]"
          >
            <a
              :href="`#${heading.id}`"
              class="usa-in-page-nav__link"
              :class="[
                customClasses?.link,
                {
                  'usa-current': heading.isActive,
                },
              ]"
              @click.prevent="scrollToAnchor(heading.id)"
              @keydown.prevent.enter="scrollToAnchor(heading.id)"
              >{{ heading.text }}</a
            >
          </li>
        </ul>
      </nav>
    </aside>
    <slot></slot>
  </div>
</template>
