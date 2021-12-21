import { ref, computed, readonly, watch } from 'vue'
import { nextId } from '@/utils/unique-id.js'

export default (_id, idPrefix = '', defaultOpen = false, emit) => {
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

  watch(isOpen, () => {
    if (emit) {
      emit('update:open', isOpen.value)
    }
  })

  watch(propValue, () => {
    if (propValue.value !== isOpen.value) {
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
