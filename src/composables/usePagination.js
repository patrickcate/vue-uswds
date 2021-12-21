import { ref, computed, readonly } from 'vue'

export default (_currentPage, totalPages, _unbounded, emit) => {
  const currentPage = ref(_currentPage)
  const unbounded = ref(_unbounded)

  // create from items?s
  const pageRange = computed(() => {
    const range = []

    for (let i = 1; i <= totalPages.value; i++) {
      range.push(i)
    }

    return range
  })

  const visiblePageRange = computed(() => {
    // If there are less that seven pages we can just show all of them.
    if (totalPages.value <= 7) {
      return pageRange.value
    }

    // If the current page is <= 5, show all the starting pages.
    if (currentPage.value - 3 <= 1) {
      const range = pageRange.value.slice(0, 7)

      // Always set the last slot to show the last page.
      range[range.length - 1] = totalPages.value

      return range
    }

    // If the current page is <= (totalPages - 3), show all the ending pages.
    if (currentPage.value + 3 >= totalPages.value) {
      const range = pageRange.value.slice(
        totalPages.value - 7,
        totalPages.value
      )

      // Always set the first slot to show the first page.
      range[0] = 1

      return range
    }

    // If we aren't at the start or end, show the pages surrounding
    // the current page.
    const range = pageRange.value.slice(
      currentPage.value - 4,
      currentPage.value + 3
    )

    // If in bounded mode, always set the last slot to show the last page.
    if (!unbounded.value) {
      range[range.length - 1] = totalPages.value
    }

    // Always set the first slot to show the first page.
    range[0] = 1

    return range
  })

  const isFirstPage = computed(() => {
    return currentPage.value === 1
  })

  const isLastPage = computed(() => {
    return currentPage.value === totalPages.value
  })

  const isOverflowSlot = index => {
    if (totalPages.value <= 7) {
      return false
    }

    if (
      (index === 1 && currentPage.value > 4) ||
      (!unbounded.value &&
        index === 5 &&
        totalPages.value - currentPage.value > 3) ||
      (unbounded.value && index === 6 && currentPage.value !== totalPages.value)
    ) {
      return true
    }
  }

  const updateCurrentPage = number => {
    emit('update:currentPage', number)
  }

  const toFirstPage = () => {
    updateCurrentPage(1)
  }

  const toPreviousPage = () => {
    updateCurrentPage(currentPage.value - 1)
  }

  const toNextPage = () => {
    updateCurrentPage(currentPage.value + 1)
  }

  const toLastPage = () => {
    updateCurrentPage(totalPages.value)
  }

  return {
    currentPage: readonly(currentPage),
    unbounded: readonly(unbounded),
    totalPages,
    isFirstPage,
    isLastPage,
    isOverflowSlot,
    toFirstPage,
    toLastPage,
    toNextPage,
    toPreviousPage,
    updateCurrentPage,
    visiblePageRange,
  }
}
