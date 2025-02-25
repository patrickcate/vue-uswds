<script setup>
import { ref, computed } from 'vue'
import { onKeyStroke, onClickOutside } from '@vueuse/core'
import { useToggle } from '@/composables/useToggle.js'
import BaseLink from '@/components/BaseLink'
import UsaButton from '@/components/UsaButton'

const emit = defineEmits(['update:modelValue', 'update:open'])

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
  languages: {
    type: Array,
    required: true,
    validator(languages) {
      let isValid = true

      if (languages.length === 1) {
        isValid = false
        console.warn('A least two languages must be provided')
      }

      if (languages.some(language => !language.langCode)) {
        isValid = false
        console.warn('A `lang` property is required for each language')
      }

      if (!languages.every(language => language.text || language.nativeText)) {
        isValid = false
        console.warn(
          'A `text` and/or `nativeText` property is required for each language',
        )
      }

      return isValid
    },
  },
  variant: {
    type: String,
    default: '',
    validator(variant) {
      let isValidVariant = ['', 'unstyled'].includes(variant)

      if (!isValidVariant) {
        console.warn(`'${variant}' is not a valid language selector variant`)
      }

      return isValidVariant
    },
  },
  size: {
    type: String,
    default: '',
    validator(size) {
      let isValidSize = ['', 'small'].includes(size)

      if (!isValidSize) {
        console.warn(`'${size}' is not a valid language selector size`)
      }

      return isValidSize
    },
  },
  customClasses: {
    type: Object,
    default: () => ({
      primary: [],
      primaryItem: [],
      button: [],
      submenu: [],
      submenuItem: [],
      link: [],
    }),
  },
})

const languageSelectorRef = ref(null)

const { isOpen, toggleId, openContent, closeContent, toggleContent } =
  useToggle(props.id, 'usa-language-selector', props.open, emit)

const useDropdown = computed(() => props.languages.length > 2)

const currentLangCode = computed({
  get() {
    return props.modelValue
  },
  set(newLangCode) {
    emit('update:modelValue', newLangCode)

    if (useDropdown.value) {
      closeContent()
    }
  },
})

const currentLanguage = computed(() => {
  return props.languages.find(
    ({ langCode }) => langCode === currentLangCode.value,
  )
})

const toggleLanguage = () => {
  const { langCode } = props.languages.find(
    ({ langCode }) => langCode !== currentLangCode.value,
  )

  currentLangCode.value = langCode
}

onKeyStroke('Escape', () => {
  if (useDropdown.value) {
    closeContent()
  }
})

onClickOutside(languageSelectorRef, () => {
  if (useDropdown.value) {
    closeContent()
  }
})

defineExpose({
  openContent,
  closeContent,
  toggleContent,
})
</script>

<template>
  <div
    ref="languageSelectorRef"
    class="usa-language-container"
    :class="[
      {
        'usa-language--small': size === 'small',
      },
    ]"
  >
    <template v-if="languages.length > 2">
      <ul
        class="usa-language__primary usa-accordion"
        :class="customClasses?.primary"
      >
        <li
          class="usa-language__primary-item"
          :class="customClasses?.primaryItem"
        >
          <UsaButton
            class="usa-language__link"
            :aria-expanded="isOpen"
            :aria-controls="toggleId"
            :class="customClasses?.button"
            :variant="variant === 'unstyled' ? 'unstyled' : ''"
            @click="toggleContent"
            ><slot>Languages</slot></UsaButton
          >
          <ul
            :id="toggleId"
            :hidden="!isOpen"
            class="usa-language__submenu"
            :class="customClasses?.submenu"
          >
            <li
              v-for="{
                langCode,
                to,
                href,
                nativeText,
                text,
                routerComponentName,
              } in languages"
              :key="langCode"
              class="usa-language__submenu-item"
              :class="customClasses?.submenuItem"
            >
              <BaseLink
                v-if="to || href"
                :to="to"
                :href="href"
                :class="customClasses?.link"
                :router-component-name="routerComponentName"
                @click="currentLangCode = langCode"
                ><span :lang="langCode"
                  ><strong>{{ nativeText || text }}</strong
                  ><template v-if="text && nativeText">
                    ({{ text }})</template
                  ></span
                ></BaseLink
              >
              <UsaButton
                v-else
                variant="unstyled"
                :class="customClasses?.link"
                @click="currentLangCode = langCode"
              >
                <span :lang="langCode"
                  ><strong>{{ nativeText || text }}</strong
                  ><template v-if="text && nativeText">
                    ({{ text }})</template
                  ></span
                >
              </UsaButton>
            </li>
          </ul>
        </li>
      </ul>
    </template>
    <template v-else-if="currentLanguage">
      <UsaButton :class="customClasses?.button" @click="toggleLanguage()"
        ><span :lang="currentLanguage.langCode">{{
          currentLanguage.nativeText || currentLanguage.text
        }}</span></UsaButton
      >
    </template>
  </div>
</template>
