<script setup>
import { computed, ref, provide } from 'vue'
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

const charactersRemaining = ref(props.maxlength)
const charactersOver = computed(() =>
  charactersRemaining.value < 0 ? charactersRemaining.value * -1 : 0
)

const countStatus = computed(() => {
  if (charactersRemaining.value === props.maxlength) {
    return 'equal'
  } else if (
    charactersRemaining.value < props.maxlength &&
    charactersRemaining.value >= 0
  ) {
    return 'under'
  }

  return 'over'
})

const computedId = computed(() => props.id || nextId('usa-character-count'))

const messageClasses = computed(() => [
  { 'usa-character-count__message--invalid': countStatus.value === 'over' },
])

const updateCharacterCount = inputValue => {
  charactersRemaining.value = props.maxlength - `${inputValue}`.length
}

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
    <span
      :id="computedId"
      class="usa-hint usa-character-count__message"
      :class="messageClasses"
      aria-live="polite"
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
    </span>
  </div>
</template>
