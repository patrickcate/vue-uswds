<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, useSlots, useAttrs } from 'vue'
import { nextId } from '@/utils/unique-id.js'
import UsaFormGroup from '@/components/UsaFormGroup'
import UsaLabel from '@/components/UsaLabel'

const slots = useSlots()
const attrs = useAttrs()
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  emptyLabel: {
    type: String,
    default: '- Select -',
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
      }
    },
  },
})

const computedId = computed(() => props.id || nextId('usa-dropdown'))
const computedErrorMessageId = computed(
  () => `${computedId.value}-error-message`,
)
const computedHintId = computed(() => `${computedId.value}-hint`)

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const classes = computed(() => [{ 'usa-input--error': props.error }])

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
  () =>
    props.group || !!slots.hint || (props.error && !!slots['error-message']),
)
</script>

<template>
  <UsaFormGroup
    :group="groupElements"
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

    <select
      v-bind="$attrs"
      :id="computedId"
      v-model="selectedValue"
      class="usa-select"
      :class="classes"
      :required="required"
      :aria-describedby="ariaDescribedby"
    >
      <option v-if="options.length" value="">{{ emptyLabel }}</option>
      <slot :options="options">
        <template v-for="option in options" :key="option.value || option.group">
          <option
            v-if="!option.group"
            :value="option.value"
            :disabled="option.disabled"
            :selected="option.value === selectedValue"
            >{{ option.text || option.value }}</option
          >
          <optgroup
            v-else-if="option.group && option.options.length"
            :label="option.group"
            :disabled="option.disabled"
          >
            <option
              v-for="groupedOption in option.options"
              :key="groupedOption.value"
              :value="groupedOption.value"
              :disabled="groupedOption.disabled"
              :selected="option.value === selectedValue"
              >{{ groupedOption.text || groupedOption.value }}</option
            >
          </optgroup>
        </template>
      </slot>
    </select>
  </UsaFormGroup>
</template>
