<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, ref, useSlots, useAttrs } from 'vue'
import { useFocus } from '@vueuse/core'
import { nextId } from '@/utils/unique-id.js'
import UsaFormGroup from '@/components/UsaFormGroup'
import UsaLabel from '@/components/UsaLabel'

const inputElement = ref(null)
const { focused } = useFocus({ target: inputElement })
const slots = useSlots()
const attrs = useAttrs()
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
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
        console.warn(`'${width}' is not a valid text input width`)
      }

      return isValidWidth
    },
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  group: {
    type: Boolean,
    default: false,
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
        inputGroup: [],
        inputPrefix: [],
        inputSuffix: [],
      }
    },
  },
})

const computedId = computed(() => props.id || nextId('usa-text-input'))
const computedErrorMessageId = computed(
  () => `${computedId.value}-error-message`
)
const computedHintId = computed(() => `${computedId.value}-hint`)

const textInputValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const classes = computed(() => {
  if (slots['input-prefix'] || slots['input-suffix']) {
    return []
  }

  return [
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
  ]
})

const inputGroupClasses = computed(() => {
  if (!slots['input-prefix'] && !slots['input-suffix']) {
    return []
  }

  return [
    { 'usa-input-group--error': props.error },
    { 'usa-input-group--2xs': props.width === '2xs' },
    { 'usa-input-group--xs': props.width === 'xs' },
    { 'usa-input-group--sm': props.width === 'sm' },
    { 'usa-input-group--small': props.width === 'small' },
    { 'usa-input-group--md': props.width === 'md' },
    { 'usa-input-group--medium': props.width === 'medium' },
    { 'usa-input-group--lg': props.width === 'lg' },
    { 'usa-input-group--xl': props.width === 'xl' },
    { 'usa-input-group--2xl': props.width === '2xl' },
    { 'is-focused': focused.value === true },
    ...(props.customClasses?.inputGroup || []),
  ]
})

const ariaDescribedby = computed(() => {
  const ids = []

  if (attrs['aria-describedby']) {
    ids.push(attrs['aria-describedby'])
  }

  if (slots.hint) {
    ids.push(computedHintId.value)
  }

  if (props.error && slots['error-message']) {
    ids.push(computedErrorMessageId.value)
  }

  return ids.length ? ids.join(' ') : null
})

const groupElements = computed(
  () => props.group || !!slots.hint || (props.error && !!slots['error-message'])
)
</script>

<template>
  <UsaFormGroup
    :group="groupElements"
    :error="error"
    :class="customClasses?.component"
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

    <div
      v-if="$slots['input-prefix'] || $slots['input-suffix']"
      class="usa-input-group"
      :class="inputGroupClasses"
    >
      <div
        v-if="$slots['input-prefix']"
        class="usa-input-prefix"
        :class="customClasses?.inputPrefix"
        aria-hidden="true"
        ><slot name="input-prefix"></slot
      ></div>
      <input
        v-bind="$attrs"
        :id="computedId"
        ref="inputElement"
        v-model="textInputValue"
        :type="type"
        class="usa-input"
        :class="classes"
        :required="required"
        :aria-describedby="ariaDescribedby"
      />
      <div
        v-if="$slots['input-suffix']"
        class="usa-input-suffix"
        :class="customClasses?.inputSuffix"
        aria-hidden="true"
        ><slot name="input-suffix"></slot
      ></div>
    </div>

    <input
      v-else
      v-bind="$attrs"
      :id="computedId"
      ref="inputElement"
      v-model="textInputValue"
      :type="type"
      class="usa-input"
      :class="classes"
      :required="required"
      :aria-describedby="ariaDescribedby"
    />
  </UsaFormGroup>
</template>
