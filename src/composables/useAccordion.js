import { reactive } from 'vue'

export default (_accordionItems, multiselectable) => {
  const accordionItems = reactive(_accordionItems)

  const registerAccordionItem = (id, isOpen) => {
    if (accordionItems[id] === undefined) {
      accordionItems[id] = isOpen
    }

    if (multiselectable.value) {
      return
    }

    for (const accordionId in accordionItems) {
      if (accordionId !== id && isOpen) {
        accordionItems[accordionId] = false
      }
    }
  }

  const unregisterAccordionItem = id => {
    delete accordionItems[id]
  }

  const closeItem = id => {
    accordionItems[id] = false
  }

  const openItem = id => {
    accordionItems[id] = true

    if (multiselectable.value) {
      return
    }

    for (const accordionId in accordionItems) {
      if (accordionId !== id) {
        closeItem(accordionId)
      }
    }
  }

  const toggleItem = id => {
    if (accordionItems[id]) {
      closeItem(id)
    } else {
      openItem(id)
    }
  }

  const closeAllItems = () => {
    for (const accordionId in accordionItems) {
      closeItem(accordionId)
    }
  }

  return {
    registerAccordionItem,
    unregisterAccordionItem,
    openItem,
    closeItem,
    toggleItem,
    closeAllItems,
  }
}
