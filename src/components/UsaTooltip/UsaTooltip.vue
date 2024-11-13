<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import {
  computePosition,
  autoUpdate,
  offset,
  flip,
  inline,
} from '@floating-ui/dom'
import { onKeyStroke } from '@vueuse/core'
import { nextId } from '@/utils/unique-id.js'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  wrapperTag: {
    type: String,
    default: 'span',
  },
  tag: {
    type: String,
    default: 'span',
  },
  position: {
    type: String,
    default: 'top',
    validator(position) {
      const isValidPosition = ['top', 'bottom', 'left', 'right'].includes(
        position,
      )

      if (!isValidPosition) {
        console.warn(`'${position}' is not a valid tooltip position`)
      }

      return isValidPosition
    },
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        component: [],
        label: [],
      }
    },
  },
})

const wrapperElement = ref(null)
const referenceElement = ref(null)
const floatingElement = ref(null)
const isSet = ref(false)
const isVisible = ref(isSet.value)
const currentPosition = ref(props.position)
const currentCoordinates = ref({ left: 0, top: 0, opacity: 0 })
const computedId = computed(() => props.id || nextId('usa-tooltip'))

const labelClasses = computed(() => [
  {
    'usa-tooltip__body--top': currentPosition.value === 'top',
    'usa-tooltip__body--bottom': currentPosition.value === 'bottom',
    'usa-tooltip__body--left': currentPosition.value === 'left',
    'usa-tooltip__body--right': currentPosition.value === 'right',
    'is-set': isSet.value,
    'is-visible': isVisible.value,
  },
  ...(props.customClasses?.label || []),
])

onKeyStroke('Escape', () => {
  isSet.value = false
})

let cleanupFloatingUi

const updatePosition = () => {
  computePosition(referenceElement.value, floatingElement.value, {
    placement: props.position,
    middleware: [
      offset(5),
      inline(),
      flip({
        flipAlignment: false,
        fallbackPlacements: ['top', 'bottom', 'left', 'right'],
      }),
    ],
  }).then(({ x, y, placement }) => {
    currentPosition.value = placement
    currentCoordinates.value.left = `${x}px`
    currentCoordinates.value.top = `${y}px`
  })
}

watch(isSet, currentlySet => {
  nextTick(() => {
    requestAnimationFrame(() => {
      isVisible.value = currentlySet
      // May be able to be removed once:
      // https://github.com/uswds/uswds/issues/4458 is fixed.
      // @deprecated if issue is fixed.
      currentCoordinates.value.opacity = currentlySet ? 1 : 0
    })
  })
})

onMounted(() => {
  // `isSet` needs to be `true` until floating UI has initialized and has
  // calculated it's initial position.
  // May be able to be removed once:
  // https://github.com/uswds/uswds/issues/4458 is fixed.
  // @deprecated if issue is fixed.
  isSet.value = true

  cleanupFloatingUi = autoUpdate(
    referenceElement.value,
    floatingElement.value,
    updatePosition,
  )

  nextTick(() => {
    requestAnimationFrame(() => {
      isSet.value = false
    })
  })
})

onBeforeUnmount(() => {
  cleanupFloatingUi()
})
</script>

<template>
  <component
    :is="wrapperTag"
    ref="wrapperElement"
    class="usa-tooltip"
    :class="customClasses?.component"
    @mouseenter="isSet = true"
    @mouseover="isSet = true"
    @mouseout="isSet = false"
  >
    <component
      :is="tag"
      ref="referenceElement"
      v-bind="$attrs"
      class="usa-tooltip__trigger"
      tabindex="0"
      :aria-describedby="computedId"
      @focus="isSet = true"
      @blur="isSet = false"
      ><slot></slot
    ></component>
    <span
      :id="computedId"
      ref="floatingElement"
      role="tooltip"
      class="usa-tooltip__body"
      :class="labelClasses"
      :aria-hidden="!isVisible"
      :style="currentCoordinates"
      ><slot name="label">{{ label }}</slot></span
    >
  </component>
</template>
