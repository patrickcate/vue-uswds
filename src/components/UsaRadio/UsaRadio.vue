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
    type: undefined,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
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

const computedId = computed(() => props.id || nextId('usa-radio'))

const radioValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const classes = computed(() => [
  {
    'usa-radio__input--tile': props.tile,
  },
])
</script>

<template>
  <div class="usa-radio" :class="customClasses?.component">
    <input
      v-bind="$attrs"
      :id="computedId"
      v-model="radioValue"
      class="usa-radio__input"
      type="radio"
      :class="classes"
    />
    <label
      :htmlFor="computedId"
      class="usa-radio__label"
      :class="customClasses?.label"
      ><slot>{{ label }}</slot>
      <span
        v-if="description || $slots.description"
        class="usa-radio__label-description"
        :class="customClasses?.description"
        ><slot name="description">{{ description }}</slot></span
      >
    </label>
  </div>
</template>
