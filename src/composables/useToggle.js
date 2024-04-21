import { ref, computed, readonly, watch } from 'vue'
import { nextId } from '@/utils/unique-id.js'

export function useToggle(_id, idPrefix = '', defaultOpen = false, emit) {
  const isOpen = ref(defaultOpen)

  const toggleId = computed(() => _id || nextId(idPrefix))

  const closeContent = () => {
    isOpen.value = false

    if (emit) {
      emit('update:open', isOpen.value)
    }
  }

  const openContent = () => {
    isOpen.value = true

    if (emit) {
      emit('update:open', isOpen.value)
    }
  }

  const toggleContent = () => {
    if (isOpen.value) {
      closeContent()
    } else {
      openContent()
    }
  }

  watch(isOpen, newValue => {
    if (isOpen.value !== newValue) {
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
