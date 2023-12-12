<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, ref, toRef, useSlots, watch } from 'vue'
import { useFileInput } from '@/composables/useFileInput.js'
import UsaFormGroup from '@/components/UsaFormGroup'
import UsaLabel from '@/components/UsaLabel'

const slots = useSlots()
const emit = defineEmits(['filesLoaded'])

const props = defineProps({
  accept: {
    type: String,
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        formGroup: [],
        component: [],
        label: [],
        input: [],
      }
    },
  },
})

const fileInputRef = ref(null)
const isOverDropzone = ref(false)

const {
  computedErrorMessageId,
  computedHintId,
  computedId,
  hasFiles,
  hasInvalidFiles,
  isDisabled,
  loadFiles,
  loadedFileNames,
  loadedFiles,
} = useFileInput(
  toRef(props, 'id'),
  ref([]),
  toRef(props, 'accept'),
  toRef(props, 'multiple'),
  toRef(props, 'disabled'),
  emit
)

watch(hasInvalidFiles, invalid => {
  if (invalid) {
    fileInputRef.value.value = ''
  }
})

const ariaDescribedby = computed(() => {
  const ids = []

  if (slots.hint) {
    ids.push(computedHintId.value)
  }

  if (props.error && slots['error-message']) {
    ids.push(computedErrorMessageId.value)
  }

  return ids.length ? ids.join(' ') : null
})

const classes = computed(() => [
  {
    'usa-file-input--disabled': isDisabled.value,
    'has-invalid-file': hasInvalidFiles.value,
  },
  ...(props.customClasses?.component || []),
])

const dropZoneClasses = computed(() => [
  { 'usa-file-input--drag': isOverDropzone.value },
])

// TODO: Support custom text for other languages.
const ariaLabel = computed(() => {
  const fileLabel = props.multiple ? 'files' : 'file'

  if (!hasFiles.value) {
    return `Drag ${fileLabel} here or choose from folder`
  }

  return `Change ${fileLabel}`
})
// TODO: Debounce screen reader only text updates.
</script>

<template>
  <UsaFormGroup
    :group="!!$slots.hint || (error && !!$slots['error-message'])"
    :error="error"
    :class="props.customClasses?.formGroup"
  >
    <UsaLabel
      v-if="label || $slots.label"
      :for="computedId"
      :required="required"
      :error="error"
      :class="customClasses?.label"
      ><slot name="label">{{ label }}</slot></UsaLabel
    >

    <span v-if="$slots.hint" :id="computedHintId" class="usa-hint"
      ><slot name="hint"></slot
    ></span>

    <span
      v-if="error && $slots['error-message']"
      :id="computedErrorMessageId"
      class="usa-error-message"
      ><slot name="error-message"></slot
    ></span>

    <div
      class="usa-file-input"
      :aria-disabled="isDisabled || null"
      :class="classes"
    >
      <div class="usa-sr-only" aria-live="polite">
        <slot
          name="status"
          :multiple="multiple"
          :loaded-files="loadedFiles"
          :has-invalid-files="hasInvalidFiles"
        >
          <template v-if="!loadedFiles.length || hasInvalidFiles">
            <template v-if="multiple">No files selected</template>
            <template v-else>No file selected</template>
          </template>
          <template v-else-if="loadedFiles.length === 1 && !hasInvalidFiles">
            You have selected the file: {{ loadedFiles[0].name }}
          </template>
          <template v-else-if="loadedFiles.length > 1 && !hasInvalidFiles">
            test You have selected {{ loadedFiles.length }} files:
            {{ loadedFileNames }}
          </template>
        </slot>
      </div>
      <div class="usa-file-input__target" :class="dropZoneClasses">
        <div class="usa-file-input__box"></div>
        <div
          v-show="hasInvalidFiles || !hasFiles"
          class="usa-file-input__instructions"
          aria-hidden="true"
          :hidden="!hasInvalidFiles && hasFiles"
          ><slot name="instructions" :multiple="multiple"
            ><span class="usa-file-input__drag-text"
              >Drag file<template v-if="multiple">s</template> here or </span
            ><span class="usa-file-input__choose"
              >choose from folder</span
            ></slot
          >
        </div>
        <template v-if="!hasInvalidFiles && hasFiles">
          <div class="usa-file-input__preview-heading">
            <slot name="preview-heading" :loaded-files="loadedFiles">
              <template v-if="loadedFiles.length === 1">Selected file</template>
              <template v-else
                >{{ loadedFiles.length }} files selected</template
              >
              <span class="usa-file-input__choose">Change file</span>
            </slot>
          </div>
          <div
            v-for="(file, index) in loadedFiles"
            :key="file.name + index"
            class="usa-file-input__preview"
            aria-hidden="true"
          >
            <img
              :src="file.src"
              alt=""
              class="usa-file-input__preview-image"
              :class="file?.iconClasses"
            />
            {{ file.name }}
          </div>
        </template>

        <div
          v-if="hasInvalidFiles"
          class="usa-file-input__accepted-files-message"
          ><slot name="invalid-files-message"
            >This is not a valid file type.</slot
          ></div
        >
        <input
          v-bind="$attrs"
          :id="computedId"
          ref="fileInputRef"
          type="file"
          :required="required"
          :disabled="isDisabled"
          :accept="accept || null"
          :multiple="multiple || null"
          class="usa-file-input__input"
          :class="customClasses?.input"
          :aria-label="ariaLabel"
          :aria-describedby="ariaDescribedby"
          @change="loadFiles($event.target.files)"
          @dragenter="isOverDropzone = true"
          @dragover="isOverDropzone = true"
          @dragleave="isOverDropzone = false"
          @drop="isOverDropzone = false"
        />
      </div>
    </div>
  </UsaFormGroup>
</template>
