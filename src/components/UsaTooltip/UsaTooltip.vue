<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import {
  computePosition,
  autoUpdate,
  offset,
  flip,
  inline,
} from '@floating-ui/dom'
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
        position
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

const referenceElement = ref(null)
const floatingElement = ref(null)
const isSet = ref(false)
const isVisible = ref(isSet.value)
const currentPosition = ref(props.position)
const currentCoordinates = ref({})
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
    currentCoordinates.value = {
      left: `${x}px`,
      top: `${y}px`,
    }
  })
}

watch(isSet, currentlySet => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      isVisible.value = currentlySet
    })
  })
})

onMounted(() => {
  cleanupFloatingUi = autoUpdate(
    referenceElement.value,
    floatingElement.value,
    updatePosition
  )
})

onBeforeUnmount(() => {
  cleanupFloatingUi()
})
</script>

<template>
  <component
    :is="wrapperTag"
    class="usa-tooltip"
    :class="customClasses?.component"
  >
    <component
      :is="tag"
      ref="referenceElement"
      v-bind="$attrs"
      class="usa-tooltip__trigger"
      tabindex="0"
      :aria-describedby="computedId"
      @mouseover="isSet = true"
      @mouseout="isSet = false"
      @focus="isSet = true"
      @blur="isSet = false"
      @keyup.esc="isSet = false"
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
