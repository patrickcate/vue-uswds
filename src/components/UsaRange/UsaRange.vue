<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, useSlots } from 'vue'
import { nextId } from '@/utils/unique-id.js'
import UsaLabel from '@/components/UsaLabel'

const slots = useSlots()
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  modelValue: {
    type: undefined,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        component: [],
        label: [],
      }
    },
  },
})

const computedId = computed(() => props.id || nextId('usa-dropdown'))
const computedErrorMessageId = computed(
  () => `${computedId.value}-error-message`
)
const computedHintId = computed(() => `${computedId.value}-hint`)

const rangeValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const classes = computed(() => [{ 'usa-input--error': props.error }])

const formGroupClasses = computed(() => [
  { 'usa-form-group--error': props.error },
  ...(props.customClasses?.component || []),
])

const ariaDescribedby = computed(() => {
  const ids = []

  if (slots.hint) {
    ids.push(computedHintId.value)
  }

  if (props.error && slots['error-message']) {
    ids.push(computedErrorMessageId.value)
  }

  return ids.length ? ids.join(' ') : null
})
</script>

<template>
  <div class="usa-form-group" :class="formGroupClasses">
    <UsaLabel
      :for="computedId"
      :required="required"
      :error="error"
      :class="customClasses?.label"
      ><slot name="label">{{ label }}</slot></UsaLabel
    >

    <span v-if="$slots.hint" :id="computedHintId" class="usa-hint"
      ><slot name="hint"></slot
    ></span>

    <span
      v-if="error && $slots['error-message']"
      :id="computedErrorMessageId"
      class="usa-error-message"
      ><slot name="error-message"></slot
    ></span>

    <input
      :id="computedId"
      v-model="rangeValue"
      class="usa-range"
      :class="classes"
      type="range"
      role="slider"
      :min="min"
      :max="max"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="rangeValue"
      :required="required"
      :aria-describedby="ariaDescribedby"
      v-bind="$attrs"
    />
  </div>
</template>
