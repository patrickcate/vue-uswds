<script setup>
import UsaCollectionHeading from '@/components/UsaCollectionHeading'

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  heading: {
    type: String,
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  href: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: '',
  },
  routerComponentName: {
    type: String,
    default: '',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        media: [],
        heading: [],
        link: [],
        description: [],
      }
    },
  },
})
</script>

<template>
  <li class="usa-collection__item">
    <div
      v-if="$slots.media"
      class="usa-collection__img"
      :class="customClasses?.media"
      ><slot name="media"></slot
    ></div>
    <slot v-else name="calendar"></slot>
    <div class="usa-collection__body">
      <slot name="heading"
        ><UsaCollectionHeading
          :heading="heading"
          :heading-tag="headingTag"
          :href="href"
          :to="to"
          :class="customClasses?.heading"
          :router-component-name="routerComponentName"
          :custom-classes="{ link: customClasses?.link || [] }"
          >{{ heading }}</UsaCollectionHeading
        ></slot
      >
      <slot name="description">
        <p
          v-if="$slots.default"
          class="usa-collection__description"
          :class="customClasses?.description"
        >
          <slot></slot>
        </p>
      </slot>
      <slot name="meta"></slot>
    </div>
  </li>
</template>
