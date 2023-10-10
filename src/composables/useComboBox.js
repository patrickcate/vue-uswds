import { ref, computed, readonly, watch, nextTick } from 'vue'
import { onKeyStroke, onClickOutside, useActiveElement } from '@vueuse/core'
import { nextId } from '@/utils/unique-id.js'
import { escapeRegExp } from '@/utils/common.js'

export default (_id, _selectedOption, _options, _disabled, _readonly, emit) => {
  const id = ref(_id)
  const options = ref(_options)
  const isDisabled = ref(_disabled)
  const isReadonly = ref(_readonly)
  const selectedOption = computed({
    get() {
      return _selectedOption.value
    },
    set(newSelectedValue) {
      emit('update:modelValue', newSelectedValue)
    },
  })

  const activeElement = useActiveElement()
  const isDirty = ref(false)
  const searchTerm = ref('')
  const highlightedOption = ref('')

  const isOpen = ref(false)

  const selectedLabel = computed(() => {
    if (selectedOption.value === '') {
      return ''
    }

    const foundOption = options.value.find(
      option => option.value === selectedOption.value
    )

    return foundOption?.label || ''
  })

  watch(selectedLabel, currentLabel => {
    if (currentLabel !== '') {
      searchTerm.value = currentLabel
    }
  })

  watch(searchTerm, currentTerm => {
    if (isOpen.value && currentTerm !== '') {
      isDirty.value = true
    }
  })

  // Set the default value.
  if (selectedLabel.value) {
    searchTerm.value = selectedLabel.value
  }

  const filteredOptions = computed(() => {
    if (
      searchTerm.value === '' ||
      (!isDirty.value && searchTerm.value === selectedLabel.value)
    ) {
      return options.value
    }

    return options.value.filter(option => {
      const regex = new RegExp(escapeRegExp(searchTerm.value), 'gi')
      return regex.test(option.label)
    })
  })

  const totalFilteredOptions = computed(() => filteredOptions.value?.length)

  const computedId = computed(() => id.value || nextId('usa-combo-box'))
  const computedLabelId = computed(() => `${computedId.value}-label`)
  const computedErrorMessageId = computed(
    () => `${computedId.value}-error-message`
  )
  const computedHintId = computed(() => `${computedId.value}-hint`)
  const computedAssistiveHintId = computed(
    () => `${computedId.value}-assistive-hint`
  )
  const computedListId = computed(() => `${computedId.value}-list`)

  const getListItemIdByIndex = index =>
    `${computedListId.value}-option-${index}`

  const componentElement = ref(null)
  const inputElement = ref(null)
  const listElement = ref(null)
  const listItemElements = ref([])

  const getItemRefById = id => {
    return listItemElements.value.find(item => item.id === id)
  }

  const getItemRefByValue = value => {
    return listItemElements.value.find(item => item.dataset.value === value)
  }

  const firstOptionValue = computed(() => {
    return totalFilteredOptions.value ? filteredOptions.value[0].value : ''
  })

  const firstOptionRef = computed(() => {
    const firstItemId = totalFilteredOptions.value
      ? listItemElements.value[0].id
      : null

    return firstItemId ? getItemRefById(firstItemId) : null
  })

  const selectedOptionRef = computed(() => {
    if (selectedOption.value === '') {
      return null
    }

    const foundItemRef = listItemElements.value.find(
      itemRef => itemRef.dataset.value === selectedOption.value
    )

    return foundItemRef ? foundItemRef : null
  })

  const highlightedOptionRef = computed(() => {
    if (highlightedOption.value === '') {
      return null
    }

    const foundItemRef = listItemElements.value.find(itemRef => {
      return itemRef.dataset.value === highlightedOption.value
    })

    return foundItemRef ? foundItemRef : null
  })

  const isFirstOption = computed(() => {
    const optionIndex = filteredOptions.value.findIndex(
      item => item.value === highlightedOption.value
    )

    return optionIndex === 0
  })

  const isLastOption = computed(() => {
    const optionIndex = filteredOptions.value.findIndex(
      item => item.value === highlightedOption.value
    )

    return optionIndex === totalFilteredOptions.value - 1
  })

  const activeDescendent = computed(() => {
    const activeOptionId = activeElement.value.id

    if (activeOptionId === highlightedOptionId.value) {
      return highlightedOptionId.value
    }

    if (
      totalFilteredOptions.value &&
      selectedOption.value !== '' &&
      isOpen.value &&
      activeOptionId === computedId.value
    ) {
      return highlightedOptionId.value
    }

    return null
  })

  const scrollList = elementRef => {
    if (!elementRef || !listElement?.value) {
      return
    }

    const optionBottom = elementRef.offsetTop + elementRef.offsetHeight
    const currentBottom =
      listElement.value.scrollTop + listElement.value.offsetHeight

    if (optionBottom > currentBottom) {
      listElement.value.scrollTop =
        optionBottom - listElement.value.offsetHeight
    }

    if (elementRef.offsetTop < listElement.value.scrollTop) {
      listElement.value.scrollTop = elementRef.offsetTop
    }
  }

  const focusInput = () => {
    inputElement.value.focus()
  }

  const selectOption = optionValue => {
    selectedOption.value = optionValue

    const option = options.value.find(option => option.value === optionValue)

    searchTerm.value = option?.label || ''

    isDirty.value = false
  }

  const clearSelectedOption = () => {
    selectOption('')
  }

  const highlightOption = optionValue => {
    highlightedOption.value = optionValue
  }

  const clearHighlightedOption = () => {
    highlightedOption.value = ''
  }

  const openList = () => {
    if (!isDisabled.value && !isReadonly.value) {
      isOpen.value = true
    }
  }

  const closeList = () => {
    isOpen.value = false
    isDirty.value = false
    clearHighlightedOption()
    listElement.value.scrollTop = 0
  }

  const listItemTabIndex = optionValue => {
    return highlightedOption.value === optionValue ||
      selectedOption.value === optionValue
      ? 0
      : -1
  }

  const highlightedOptionId = computed(() => {
    if (!highlightedOption.value) {
      return null
    }

    const highlightedOptionIndex = filteredOptions.value.findIndex(
      option => option.value === highlightedOption.value
    )

    return getListItemIdByIndex(highlightedOptionIndex)
  })

  const clearButtonIsVisible = computed(
    () =>
      selectedOption.value !== '' &&
      searchTerm.value === selectedLabel.value &&
      !isDisabled.value &&
      !isReadonly.value
  )

  const handleFilterOnInput = () => {
    if (!isOpen.value) {
      openList()
    }

    if (selectedOption.value !== '') {
      highlightOption(selectedOption.value)
    } else {
      highlightOption(firstOptionValue.value)
    }
  }

  const handleEnterOnInput = () => {
    const foundItem = filteredOptions.value.find(
      item => item.label === searchTerm.value
    )

    if (searchTerm.value !== '' && foundItem.value) {
      selectOption(foundItem.value)
    }

    closeList()
  }

  const handleListToggle = () => {
    if (isOpen.value) {
      closeList()
      clearHighlightedOption()
    } else {
      openList()

      if (selectedOption.value !== '') {
        highlightOption(selectedOption.value)

        nextTick(() => {
          scrollList(selectedOptionRef.value)
        })
      } else {
        highlightOption(firstOptionValue.value)
      }
    }

    focusInput()
  }

  const handleClearInput = () => {
    clearSelectedOption()
    clearHighlightedOption()
    focusInput()
  }

  const handleHoverOnListOption = value => {
    highlightOption(value)

    if (highlightedOptionRef.value) {
      highlightedOptionRef.value.focus({ preventScroll: true })
    }
  }

  const handleSpaceOnListOption = value => {
    selectOption(value)
    closeList()
    focusInput()
  }

  const handleEnterOnListOption = value => {
    selectOption(value)
    closeList()
    focusInput()
  }

  const handleDownOnListOption = index => {
    if (!isLastOption.value) {
      highlightOption(filteredOptions.value[index + 1].value)

      const itemRef = getItemRefByValue(highlightedOption.value)

      scrollList(itemRef.value)

      if (highlightedOptionRef.value) {
        highlightedOptionRef.value.focus()
      }
    }
  }

  const handleUpOnListOption = index => {
    if (isFirstOption.value) {
      closeList()
      clearHighlightedOption()
      focusInput()
    } else {
      highlightOption(filteredOptions.value[index - 1].value)

      const itemRef = getItemRefByValue(highlightedOption.value)

      scrollList(itemRef.value)

      if (highlightedOptionRef.value) {
        highlightedOptionRef.value.focus()
      }
    }
  }

  const handleClickOutside = () => {
    if (isOpen.value) {
      selectOption(selectedOption.value)
      closeList()
      clearHighlightedOption()
    }
  }

  const handleClickOnListOption = value => {
    selectOption(value)
    closeList()
    focusInput()
  }

  const handleEscape = () => {
    selectOption(selectedOption.value)
    closeList()
    clearHighlightedOption()
    focusInput()
  }

  const handleDownOnInput = () => {
    if (!isOpen.value) {
      openList()
    }

    if (!totalFilteredOptions.value) {
      return
    }

    if (selectedOption.value) {
      highlightOption(selectedOption.value)

      nextTick(() => {
        selectedOptionRef.value.focus()

        scrollList(selectedOptionRef.value)
      })
    } else {
      highlightOption(firstOptionValue.value)

      nextTick(() => {
        highlightedOptionRef.value.focus()

        scrollList(highlightedOptionRef.value)
      })
    }
  }

  const handleClickOnInput = () => {
    if (!isOpen.value) {
      openList()
    }

    if (selectedOption.value) {
      highlightOption(selectedOption.value)

      nextTick(() => {
        scrollList(selectedOptionRef.value)
      })
    } else if (highlightedOption.value === '') {
      highlightOption(firstOptionValue.value)

      nextTick(() => {
        scrollList(firstOptionRef.value)
      })
    }
  }

  onClickOutside(componentElement, () => handleClickOutside())

  onKeyStroke('Escape', () => {
    handleEscape()
  })

  return {
    activeDescendent,
    clearButtonIsVisible,
    componentElement,
    computedAssistiveHintId,
    computedErrorMessageId,
    computedHintId,
    computedId,
    computedLabelId,
    computedListId,
    filteredOptions,
    getListItemIdByIndex,
    handleClearInput,
    handleClickOnInput,
    handleClickOnListOption,
    handleDownOnInput,
    handleDownOnListOption,
    handleEnterOnInput,
    handleEnterOnListOption,
    handleFilterOnInput,
    handleHoverOnListOption,
    handleListToggle,
    handleSpaceOnListOption,
    handleUpOnListOption,
    highlightedOption: readonly(highlightedOption),
    inputElement,
    isDisabled: readonly(isDisabled),
    isOpen: readonly(isOpen),
    isReadonly: readonly(isReadonly),
    listElement,
    listItemElements,
    listItemTabIndex,
    searchTerm,
    selectedOption,
    totalFilteredOptions,
  }
}
