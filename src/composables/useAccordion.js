import { reactive } from 'vue'

export default (_accordionItems, multiselectable) => {
  const accordionItems = reactive(_accordionItems)

  const registerAccordionItem = (id, isOpen) => {
    if (accordionItems[id] === undefined) {
      accordionItems[id] = isOpen
    }

    if (multiselectable) {
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

  const openItem = id => {
    accordionItems[id] = true

    if (multiselectable) {
      return
    }

    for (const accordionId in accordionItems) {
      if (accordionId !== id) {
        accordionItems[accordionId] = false
      }
    }
  }

  const closeItem = id => {
    accordionItems[id] = false
  }

  const toggleItem = id => {
    if (accordionItems[id]) {
      closeItem(id)
    } else {
      openItem(id)
    }
  }

  return {
    registerAccordionItem,
    unregisterAccordionItem,
    openItem,
    closeItem,
    toggleItem,
  }
}
