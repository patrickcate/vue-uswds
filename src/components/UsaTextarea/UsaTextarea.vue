<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, inject, useSlots, onMounted } from 'vue'
import { nextId } from '@/utils/unique-id.js'
import UsaFormGroup from '@/components/UsaFormGroup'
import UsaLabel from '@/components/UsaLabel'

const slots = useSlots()

const updateCharacterCount = inject('updateCharacterCount', null)
const characterCountMaxlength = inject('characterCountMaxlength', null)
const characterCountMessageId = inject('characterCountMessageId', null)

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
    type: [String, Number],
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
  () => `${computedId.value}-error-message`,
)
const computedHintId = computed(() => `${computedId.value}-hint`)

const textareaValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)

    if (updateCharacterCount) {
      updateCharacterCount(value)
    }
  },
})

// Trigger any character counts for default textarea values.
onMounted(() => {
  if (updateCharacterCount) {
    updateCharacterCount(props.modelValue)
  }
})

const classes = computed(() => [
  {
    'usa-input--error': props.error,
    'usa-input--2xs': props.width === '2xs',
    'usa-input--xs': props.width === 'xs',
    'usa-input--sm': props.width === 'sm',
    'usa-input--small': props.width === 'small',
    'usa-input--md': props.width === 'md',
    'usa-input--medium': props.width === 'medium',
    'usa-input--lg': props.width === 'lg',
    'usa-input--xl': props.width === 'xl',
    'usa-input--2xl': props.width === '2xl',
    'usa-character-count__field': updateCharacterCount,
  },
])

const ariaDescribedby = computed(() => {
  const ids = []

  if (characterCountMessageId) {
    ids.push(characterCountMessageId.value)
  }

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
  <UsaFormGroup
    :group="!!$slots.hint || (error && !!$slots['error-message'])"
    :error="error"
    :class="props.customClasses?.component"
  >
    <UsaLabel
      v-if="label || $slots.label"
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
      :maxlength="characterCountMaxlength || $attrs.maxlength"
      :aria-describedby="ariaDescribedby"
    />
  </UsaFormGroup>
</template>
