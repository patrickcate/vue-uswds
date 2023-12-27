<script setup>
// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  ariaLabel: {
    type: String,
    default: 'U.S. government information and services',
  },
  description: {
    type: String,
    default: 'Looking for U.S. government information and services?',
  },
  linkText: {
    type: String,
    default: 'Visit USA.gov',
  },
  linkUrl: {
    type: String,
    default: 'https://www.usa.gov',
  },
})
</script>

<template>
  <section
    class="usa-identifier__section usa-identifier__section--usagov"
    :aria-label="ariaLabel"
  >
    <div class="usa-identifier__container">
      <div class="usa-identifier__usagov-description">{{ description }}</div
      >&nbsp;
      <a :href="linkUrl" class="usa-link">{{ linkText }}</a>
    </div>
  </section>
</template>
