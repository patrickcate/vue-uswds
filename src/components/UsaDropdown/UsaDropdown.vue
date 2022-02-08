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
  options: {
    type: Array,
    default: () => [],
  },
  emptyLabel: {
    type: String,
    default: '- Select -',
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

const selectedValue = computed({
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
  if (props.error && slots['error-message']) {
    return computedErrorMessageId.value
  } else if (slots.hint) {
    return computedHintId.value
  }

  return null
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

    <span
      v-if="error && $slots['error-message']"
      :id="computedErrorMessageId"
      class="usa-error-message"
      ><slot name="error-message"></slot
    ></span>

    <span v-else-if="$slots.hint" :id="computedHintId" class="usa-hint"
      ><slot name="hint"></slot
    ></span>

    <select
      :id="computedId"
      v-model="selectedValue"
      class="usa-select"
      :class="classes"
      :required="required"
      :aria-describedby="ariaDescribedby"
      v-bind="$attrs"
    >
      <option v-if="options.length" value="">{{ emptyLabel }}</option>
      <slot :options="options">
        <template v-for="option in options" :key="option.value || option.group">
          <option
            v-if="!option.group"
            :value="option.value"
            :disabled="option.disabled"
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
              >{{ groupedOption.text || groupedOption.value }}</option
            >
          </optgroup>
        </template>
      </slot>
    </select>
  </div>
</template>
