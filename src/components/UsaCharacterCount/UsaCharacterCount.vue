<script setup>
import { computed, ref, provide } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { nextId } from '@/utils/unique-id.js'

const props = defineProps({
  maxlength: {
    type: Number,
    required: true,
    validator(maxLength) {
      const isValidMaxLength = maxLength > 0

      if (!isValidMaxLength) {
        console.warn(`${maxLength} is not a valid maxlength`)
      }

      return isValidMaxLength
    },
  },
  id: {
    type: String,
    default: '',
  },
})

const statusMessageRef = ref('')
const srOnlyStatusMessage = ref('')

const charactersRemaining = ref(props.maxlength)
const charactersOver = computed(() =>
  charactersRemaining.value < 0 ? charactersRemaining.value * -1 : 0
)
const countStatus = computed(() => {
  if (charactersRemaining.value === props.maxlength) {
    return 'equal'
  } else if (charactersOver.value > 0) {
    return 'over'
  }

  return 'under'
})

const computedId = computed(() => props.id || nextId('usa-character-count'))

const messageClasses = computed(() => [
  { 'usa-character-count__message--invalid': countStatus.value === 'over' },
])

const updateCharacterCount = inputValue =>
  (charactersRemaining.value = props.maxlength - `${inputValue}`.length)

watchDebounced(
  charactersRemaining,
  () => {
    srOnlyStatusMessage.value = statusMessageRef.value?.textContent
  },
  { debounce: 1000, immediate: true }
)

provide('updateCharacterCount', updateCharacterCount)
provide(
  'characterCountMaxlength',
  computed(() => props.maxlength)
)
provide(
  'characterCountMessageId',
  computed(() => computedId.value)
)
</script>

<template>
  <div class="usa-character-count">
    <slot></slot>
    <span :id="computedId" class="usa-character-count__message usa-sr-only">
      <slot name="default-message"
        >You can enter up to {{ maxlength }} characters</slot
      >
    </span>
    <div
      ref="statusMessageRef"
      class="usa-character-count__status usa-hint"
      :class="messageClasses"
      aria-hidden="true"
    >
      <slot
        v-if="countStatus === 'equal'"
        name="equal-message"
        :maxlength="maxlength"
        >{{ maxlength }} character<template v-if="maxlength !== 1">s</template>
        allowed</slot
      >
      <slot
        v-else-if="countStatus === 'under'"
        name="remaining-message"
        :characters-remaining="charactersRemaining"
        :maxlength="maxlength"
        >{{ charactersRemaining }} character<template
          v-if="charactersRemaining !== 1"
          >s</template
        >
        left</slot
      >
      <slot
        v-else-if="countStatus === 'over'"
        name="over-message"
        :characters-over="charactersOver"
        :maxlength="maxlength"
        >{{ charactersOver }} character<template v-if="charactersOver !== 1"
          >s</template
        >
        over limit</slot
      >
    </div>
    <div
      class="usa-character-count__sr-status usa-sr-only"
      aria-live="polite"
      >{{ srOnlyStatusMessage }}</div
    >
  </div>
</template>
