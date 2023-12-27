<script setup>
// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  ariaLabel: {
    type: String,
    default: 'Agency identifier',
  },
  descriptionAriaLabel: {
    type: String,
    default: 'Agency description',
  },
})
</script>

<template>
  <section
    class="usa-identifier__section usa-identifier__section--masthead"
    :aria-label="ariaLabel"
  >
    <div class="usa-identifier__container">
      <slot>
        <div v-if="$slots.logos" class="usa-identifier__logos">
          <slot name="logos"></slot>
        </div>
        <div
          v-if="$slots.domain || $slots.disclaimer"
          class="usa-identifier__identity"
          :aria-label="descriptionAriaLabel"
        >
          <p v-if="$slots.domain" class="usa-identifier__identity-domain"
            ><slot name="domain"></slot
          ></p>
          <p
            v-if="$slots.disclaimer"
            class="usa-identifier__identity-disclaimer"
            ><slot name="disclaimer"></slot
          ></p>
        </div>
      </slot>
    </div>
  </section>
</template>
