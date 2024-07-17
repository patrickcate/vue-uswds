<script setup>
import { computed, watch, ref, useSlots, onMounted, onBeforeUnmount } from 'vue'
import { onKeyStroke, onClickOutside } from '@vueuse/core'
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'
import { nextId } from '@/utils/unique-id.js'
import BaseHeading from '@/components/BaseHeading'
import UsaModalCloseButton from '@/components/UsaModalCloseButton'

const slots = useSlots()

if (slots?.closeButton) {
  console.warn(
    `The 'closeButton' slot is deprecated, use 'close-button' instead.`,
  )
}

const emit = defineEmits(['update:visible'])

const props = defineProps({
  size: {
    type: String,
    default: '',
    validator(size) {
      const isValidSize = ['', 'lg'].includes(size)

      if (!isValidSize) {
        console.warn(`'${size}' is not a valid modal size`)
      }

      return isValidSize
    },
  },
  id: {
    type: String,
    default: '',
  },
  visible: {
    type: Boolean,
    default: false,
  },
  forceAction: {
    type: Boolean,
    default: false,
  },
  closeButtonLabel: {
    type: String,
    default: 'Close this window',
  },
  heading: {
    type: String,
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        focusTrap: [],
        modal: [],
        overlay: [],
        content: [],
        main: [],
        heading: [],
        description: [],
        footer: [],
      }
    },
  },
})

const modal = ref(null)
const isMounted = ref(false)

const isVisible = computed({
  get: () => isMounted.value && props.visible,
  set: currentlyVisibility => emit('update:visible', currentlyVisibility),
})
const classes = computed(() => {
  return [{ 'is-visible': isVisible.value }]
})
const modalClasses = computed(() => {
  return [{ 'usa-modal--lg': props.size === 'lg' }, props.customClasses?.modal]
})
const computedId = computed(() => props.id || nextId('usa-modal'))
const headingId = `${computedId.value}-heading`
const descriptionId = `${computedId.value}-description`

const modalBodyClass = 'usa-js-modal--active'
const noClickBodyClass = 'usa-js-no-click'
const focusTrapClass = 'js-focus-trap-wrapper'

watch(
  () => isVisible,
  currentlyVisible => {
    if (!isMounted.value) {
      return
    }

    if (currentlyVisible.value) {
      document.body.classList.add(modalBodyClass)

      document
        .querySelectorAll(`body > :not(.${focusTrapClass})`)
        .forEach(element => element.setAttribute('aria-hidden', true))

      if (props.forceAction) {
        document.body.classList.add(noClickBodyClass)
      }
    } else {
      document.body.classList.remove(modalBodyClass)

      document
        .querySelectorAll(`body > :not(${focusTrapClass})`)
        .forEach(element => element.removeAttribute('aria-hidden', true))

      if (props.forceAction) {
        document.body.classList.remove(noClickBodyClass)
      }
    }
  },
  {
    immediate: true,
    deep: true,
  },
)

onMounted(() => {
  isMounted.value = true
})

onBeforeUnmount(() => {
  document.body.classList.remove(modalBodyClass)

  document
    .querySelectorAll(`body > :not(.${focusTrapClass})`)
    .forEach(element => element.removeAttribute('aria-hidden', true))

  if (props.forceAction) {
    document.body.classList.remove(noClickBodyClass)
  }
})

onKeyStroke('Escape', () => {
  if (isVisible.value && !props.forceAction) {
    isVisible.value = false
  }
})

onClickOutside(modal, () => {
  if (isVisible.value && !props.forceAction) {
    isVisible.value = false
  }
})
</script>

<template>
  <Teleport to="body" :disabled="!isVisible">
    <UseFocusTrap
      v-if="isVisible"
      :class="[`${focusTrapClass}`, customClasses?.focusTrap]"
    >
      <div
        v-bind="$attrs"
        :id="`${computedId}-modal`"
        class="usa-modal-wrapper"
        :class="classes"
        role="dialog"
        :aria-labelledby="$slots.heading || heading ? headingId : null"
        :aria-describedby="$slots.default ? descriptionId : null"
      >
        <div class="usa-modal-overlay" :class="customClasses?.overlay">
          <div
            ref="modal"
            class="usa-modal"
            :class="modalClasses"
            tabindex="-1"
          >
            <div class="usa-modal__content" :class="customClasses?.content">
              <div class="usa-modal__main" :class="customClasses?.main">
                <BaseHeading
                  v-if="$slots.heading || heading"
                  :id="headingId"
                  :tag="headingTag"
                  class="usa-modal__heading"
                  :class="customClasses?.heading"
                >
                  <slot name="heading">{{ heading }}</slot>
                </BaseHeading>
                <div
                  v-if="$slots.default"
                  :id="descriptionId"
                  :class="customClasses?.description"
                  ><slot></slot
                ></div>
                <div
                  v-if="$slots.footer"
                  class="usa-modal__footer"
                  :class="customClasses?.footer"
                >
                  <slot name="footer"></slot>
                </div>
              </div>
              <slot v-if="$slots['close-button']" name="close-button"></slot>
              <!--
              	@slot closeButton
            		@deprecated Use the `close-button` slot instead.
            	-->
              <slot v-else-if="$slots.closeButton" name="closeButton"></slot>
              <template v-else>
                <UsaModalCloseButton
                  v-if="!forceAction"
                  :aria-label="closeButtonLabel"
                  @click="isVisible = false"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </UseFocusTrap>
  </Teleport>
</template>
