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
  width: {
    type: String,
    default: '',
    validator(width) {
      const isValidWidth = [
        '',
        '2xs',
        'xs',
        'sm',
        'small',
        'md',
        'medium',
        'lg',
        'xl',
        '2xl',
      ].includes(width)

      if (!isValidWidth) {
        console.warn(`'${width}' is not a valid textarea width`)
      }

      return isValidWidth
    },
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

const computedId = computed(() => props.id || nextId('usa-textarea'))
const computedErrorMessageId = computed(
  () => `${computedId.value}-error-message`
)
const computedHintId = computed(() => `${computedId.value}-hint`)

const textareaValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const classes = computed(() => [
  { 'usa-input--error': props.error },
  { 'usa-input--2xs': props.width === '2xs' },
  { 'usa-input--xs': props.width === 'xs' },
  { 'usa-input--sm': props.width === 'sm' },
  { 'usa-input--small': props.width === 'small' },
  { 'usa-input--md': props.width === 'md' },
  { 'usa-input--medium': props.width === 'medium' },
  { 'usa-input--lg': props.width === 'lg' },
  { 'usa-input--xl': props.width === 'xl' },
  { 'usa-input--2xl': props.width === '2xl' },
])

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

    <textarea
      v-bind="$attrs"
      :id="computedId"
      v-model="textareaValue"
      class="usa-textarea"
      :class="classes"
      :required="required"
      :aria-describedby="ariaDescribedby"
    />
  </div>
</template>
