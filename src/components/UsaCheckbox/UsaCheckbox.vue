<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed } from 'vue'
import { nextId } from '@/utils/unique-id.js'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  tile: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  disabled: {
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
        description: [],
      }
    },
  },
})

const computedId = computed(() => props.id || nextId('usa-checkbox'))

const checkboxValue = computed({
  get() {
    return props.modelValue
  },
  set(checked) {
    emit('update:modelValue', checked)
  },
})

const classes = computed(() => [
  {
    'usa-checkbox__input--tile': props.tile,
  },
])
</script>

<template>
  <div class="usa-checkbox" :class="customClasses?.component">
    <input
      v-bind="$attrs"
      :id="computedId"
      v-model="checkboxValue"
      :disabled="disabled"
      :aria-disabled="disabled || null"
      class="usa-checkbox__input"
      type="checkbox"
      :class="classes"
    />
    <label
      class="usa-checkbox__label"
      :class="customClasses?.label"
      :htmlFor="computedId"
      ><slot>{{ label }}</slot>
      <span
        v-if="description || $slots.description"
        class="usa-checkbox__label-description"
        :class="customClasses?.description"
        ><slot name="description">{{ description }}</slot></span
      >
    </label>
  </div>
</template>
