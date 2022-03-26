<script setup>
import BaseHeading from '@/components/BaseHeading'
import BaseLink from '@/components/BaseLink'

defineProps({
  ...BaseLink.props,
  headingTag: BaseHeading.props.tag,
  heading: {
    type: String,
    default: '',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        link: [],
      }
    },
  },
})
</script>

<template>
  <BaseHeading :tag="headingTag" class="usa-collection__heading"
    ><BaseLink
      :href="href"
      :to="to"
      :router-component-name="routerComponentName"
      class="usa-link"
      :class="customClasses?.link"
      ><slot>{{ heading }}</slot></BaseLink
    ></BaseHeading
  >
</template>
