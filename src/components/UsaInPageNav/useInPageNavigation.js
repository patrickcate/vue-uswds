import {
  ref,
  shallowRef,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import { useMutationObserver, useIntersectionObserver } from '@vueuse/core'
import { kebabCase } from '@/utils/common.js'

export const useInPageNavigation = (
  _mainContentSelector,
  _headingElements,
  _rootMargin,
  _threshold,
  _minimumHeadingCount,
  emit,
) => {
  const mainContentSelector = ref(_mainContentSelector)
  const headingElements = ref(
    _headingElements.value.map(heading => heading.toLowerCase()).toSorted(),
  )
  const rootMargin = ref(_rootMargin)
  const threshold = ref(_threshold)
  const minimumHeadingCount = ref(_minimumHeadingCount)
  const mainElement = shallowRef(null)
  const headings = ref(new Map())

  const activeHeading = computed(() => {
    let currentActiveHeading
    const currentHeadings = Array.from(headings.value.values())

    for (const heading of currentHeadings) {
      if (heading.isActive) {
        currentActiveHeading = heading.id
        break
      }
    }

    return currentActiveHeading
  })

  watch(
    activeHeading,
    newActiveHeading => {
      if (newActiveHeading) {
        emit('activeHeading', newActiveHeading)
      }
    },
    {
      immediate: true,
    },
  )

  const topLevelHeading = computed(() => headingElements.value[0])

  const headingSelector = computed(
    () =>
      `.usa-in-page-nav-container ${mainContentSelector.value} :is(${headingElements.value.join(',')})`,
  )

  const domHeadingExists = id => {
    const foundHeading = document.getElementById(id)

    return (
      foundHeading &&
      (!foundHeading.classList.contains('usa-anchor') || headings.value.has(id))
    )
  }

  const getHeadingId = heading => {
    let headingId = CSS.escape(kebabCase(heading.textContent))

    let id
    let suffix = 0
    do {
      id = headingId

      // To avoid conflicts with existing IDs on the page, loop and append an
      // incremented suffix until a unique ID is found.
      suffix += 1
      if (suffix > 1) {
        id += `-${suffix}`
      }
    } while (domHeadingExists(id))

    return id
  }

  const addHeadingAnchor = (heading, headingId) => {
    const hasAnchor = heading.querySelector('* > a.usa-anchor')

    if (!hasAnchor) {
      const anchor = document.createElement('a')
      anchor.setAttribute('id', headingId)
      anchor.classList.add('usa-anchor')
      heading.insertAdjacentElement('afterbegin', anchor)
    }
  }

  const removeHeadingAnchor = headingId => {
    document.getElementById(headingId)?.remove()
  }

  const isVisibleHeading = heading => {
    if (!heading.textContent.trim()) {
      return false
    }

    const headingStyle = window.getComputedStyle(heading)

    return (
      headingStyle.getPropertyValue('display') !== 'none' &&
      headingStyle.getPropertyValue('visibility') !== 'hidden'
    )
  }

  const findDomHeadings = () => {
    return Array.from(document.querySelectorAll(headingSelector.value)).filter(
      isVisibleHeading,
    )
  }

  const buildMenu = () => {
    const domHeadings = findDomHeadings()

    if (headings.value.size) {
      headings.value.forEach(heading => heading?.stop())
      headings.value.clear()
    }

    if (domHeadings.length < minimumHeadingCount.value) {
      return
    }

    domHeadings.forEach(heading => {
      const headingId = getHeadingId(heading)
      const headingTag = heading.tagName.toLowerCase()

      addHeadingAnchor(heading, headingId)

      const { stop } = useIntersectionObserver(heading, setActiveLink, {
        rootMargin: rootMargin.value,
        threshold: threshold.value,
      })

      headings.value.set(headingId, {
        id: headingId,
        text: heading.textContent,
        isPrimary: headingTag === topLevelHeading.value,
        isActive: false,
        stop,
      })
    })
  }

  function setActiveLink(entries) {
    entries.forEach(({ isIntersecting, target, intersectionRatio }) => {
      if (isIntersecting && intersectionRatio === 1) {
        const anchor = target.querySelector('a.usa-anchor')
        const headingId = anchor.id

        if (headings.value.has(headingId)) {
          headings.value.forEach(heading => {
            const isActive = heading.id === headingId

            headings.value.set(heading.id, {
              ...heading,
              isActive: isActive,
            })
          })
        }
      }
    })
  }

  const { stop: stopMutationObserver } = useMutationObserver(
    mainElement,
    mutations => {
      const headingsHaveChanges = mutations.reduce((acc, mutation) => {
        const addedHeadings = Array.from(mutation.addedNodes).filter(node =>
          headingElements.value.includes(node?.tagName?.toLowerCase()),
        )

        const removedHeadings = Array.from(mutation.removedNodes).filter(node =>
          headingElements.value.includes(node?.tagName?.toLowerCase()),
        )

        const targetHeadings = headingElements.value.includes(
          mutation.target?.tagName?.toLowerCase(),
        )
          ? [mutation.target]
          : []

        const totalChanges =
          addedHeadings.length + removedHeadings.length + targetHeadings.length

        acc += totalChanges

        return acc
      }, 0)

      if (headingsHaveChanges) {
        buildMenu()
      }
    },
    { subtree: true, childList: true, characterData: true },
  )

  onMounted(() => {
    mainElement.value = document.querySelector(mainContentSelector.value)

    buildMenu()
  })

  onBeforeUnmount(() => {
    stopMutationObserver()
    headings.value.forEach(heading => {
      heading.stop()
      removeHeadingAnchor(heading.id)
    })
  })

  return {
    headings,
  }
}
