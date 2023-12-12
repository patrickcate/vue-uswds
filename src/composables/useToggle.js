import { ref, computed, readonly, watch } from 'vue'
import { nextId } from '@/utils/unique-id.js'

export function useToggle(_id, idPrefix = '', defaultOpen = false, emit) {
  const propValue = ref(defaultOpen)
  const isOpen = ref(propValue.value)

  const toggleId = computed(() => _id || nextId(idPrefix))

  const closeContent = () => {
    isOpen.value = false
  }

  const openContent = () => {
    isOpen.value = true
  }

  const toggleContent = () => {
    if (isOpen.value) {
      closeContent()
    } else {
      openContent()
    }
  }

  watch(isOpen, newValue => {
    if (emit) {
      emit('update:open', newValue)
    }
  })

  watch(propValue, newValue => {
    if (propValue.value !== newValue) {
      toggleContent()
    }
  })

  return {
    isOpen: readonly(isOpen),
    toggleId: readonly(toggleId),
    closeContent,
    openContent,
    toggleContent,
  }
}
