<script setup>
import { computed, inject } from 'vue'
import { IMAGE_PATH } from '@/utils/constants.js'
import { nextId } from '@/utils/unique-id.js'
import UsaButton from '@/components/UsaButton'
import UsaTextInput from '@/components/UsaTextInput'

const imagePath = inject('vueUswds.imagePath', IMAGE_PATH)

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  variant: {
    type: String,
    default: 'medium',
    validator(variant) {
      const isValidVariantSize = ['small', 'medium', 'big'].includes(variant)

      if (!isValidVariantSize) {
        console.warn(`'${variant}' is not a valid search variant`)
      }

      return isValidVariantSize
    },
  },
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Search',
  },
  buttonLabel: {
    type: String,
    default: 'Search',
  },
  inputAttrs: {
    type: Object,
    default: () => {},
  },
  id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: 'search',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        label: ['usa-sr-only'],
        input: [],
        button: [],
        icon: [],
      }
    },
  },
})

const computedId = computed(() => props.id || nextId('usa-search'))

const classes = computed(() => [
  {
    'usa-search--small': props.variant === 'small',
    'usa-search--medium': props.variant === 'medium',
    'usa-search--big': props.variant === 'big',
  },
])

const searchValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <form class="usa-search" role="search" :class="classes">
    <UsaTextInput
      v-bind="inputAttrs"
      :id="computedId"
      v-model="searchValue"
      type="search"
      :name="name"
      :label="label"
      :class="customClasses?.input"
      :custom-classes="customClasses"
    ></UsaTextInput>
    <UsaButton type="submit" :class="customClasses?.button">
      <span
        v-if="variant === 'medium' || variant === 'big'"
        class="usa-search__submit-text"
        >{{ buttonLabel }}</span
      >
      <slot name="icon">
        <img
          :src="`${imagePath}/usa-icons-bg/search--white.svg`"
          class="usa-search__submit-icon"
          :class="customClasses?.icon"
          :alt="buttonLabel"
        />
      </slot>
    </UsaButton>
  </form>
</template>
