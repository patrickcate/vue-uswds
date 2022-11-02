<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, ref, provide } from 'vue'

const props = defineProps({
  showText: {
    type: String,
    default: 'Show password',
  },
  hideText: {
    type: String,
    default: 'Hide password',
  },
})

const isVisible = ref(false)
const inputIds = ref({})

const currentInputType = computed(() => {
  return isVisible.value ? 'text' : 'password'
})

const currentLabel = computed(() => {
  return isVisible.value ? props.hideText : props.showText
})

const ariaControls = computed(() => {
  if (Object.keys(inputIds.value).length) {
    return Object.keys(inputIds.value).join(' ')
  }

  return ''
})

const registerInput = id => {
  if (!inputIds.value[id]) {
    inputIds.value[id] = true
  }
}

const unregisterInput = id => {
  if (inputIds.value[id]) {
    delete inputIds.value[id]
  }
}

provide('registerInput', registerInput)
provide('unregisterInput', unregisterInput)
</script>

<template>
  <slot :type="currentInputType"></slot>
  <button
    v-bind="$attrs"
    type="button"
    class="usa-show-password usa-button usa-button--unstyled"
    :aria-controls="ariaControls"
    :aria-pressed="isVisible"
    @click="isVisible = !isVisible"
    >{{ currentLabel }}</button
  >
</template>
