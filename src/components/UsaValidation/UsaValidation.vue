<script setup>
import { computed, watch } from 'vue'
import { refDebounced } from '@vueuse/core'
import { objectHasKey } from '@/utils/common.js'
import { nextId } from '@/utils/unique-id.js'
import UsaAlert from '@/components/UsaAlert'
import UsaChecklist from '@/components/UsaChecklist'

const emit = defineEmits(['update:validationId', 'update:statusMessageId'])

const props = defineProps({
  validations: {
    type: Array,
    default: () => [],
  },
  validationValue: {
    type: [String, Number],
    default: '',
  },
  heading: {
    type: String,
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  validLabel: {
    type: String,
    default: '%s status complete',
  },
  invalidLabel: {
    type: String,
    default: '%s status incomplete',
  },
  id: {
    type: String,
    default: '',
  },
  customClasses: {
    type: Object,
    default: () => ({
      body: [],
      heading: [],
      checklist: [],
    }),
  },
})

const computedId = computed(() => props.id || nextId('usa-validation'))
const computedStatusMessageId = computed(
  () => `${computedId.value}-status-message`,
)

const validatedItems = computed(() =>
  props.validations.reduce((acc, item) => {
    const validatedItem = {
      id: item?.id && !!`${item.id}` ? item.id : item.text,
      text: item.text,
    }

    if (objectHasKey(item, 'checked')) {
      validatedItem.checked = item.checked
    } else if (typeof item?.validator === 'string') {
      const regex = new RegExp(item.validator, 'g')

      validatedItem.checked = regex.test(`${props.validationValue}`)
    } else if (
      typeof item?.validator === 'object' &&
      item.validator instanceof RegExp
    ) {
      validatedItem.checked = item.validator.test(`${props.validationValue}`)
    } else if (typeof item?.validator === 'function') {
      validatedItem.checked = item.validator(props.validationValue) === true
    } else {
      validatedItem.checked = false
    }

    validatedItem.ariaLabel =
      validatedItem.checked === true
        ? props.validLabel.replaceAll('%s', validatedItem.text)
        : props.invalidLabel.replaceAll('%s', validatedItem.text)

    acc.push(validatedItem)

    return acc
  }, []),
)

const statusMessage = refDebounced(
  computed(() =>
    validatedItems.value.map(item => `${item.ariaLabel}.`).join(' '),
  ),
  1000,
)

watch(computedId, () => emit('update:validationId', computedId), {
  immediate: true,
})
watch(
  computedStatusMessageId,
  () => emit('update:statusMessageId', computedStatusMessageId),
  { immediate: true },
)
</script>

<template>
  <UsaAlert
    v-bind="$attrs"
    variant="validation"
    :heading="heading"
    :heading-tag="headingTag"
    :custom-classes="customClasses"
  >
    <template #message>
      <UsaChecklist
        v-if="validatedItems?.length"
        :id="computedId"
        :items="validatedItems"
        :class="customClasses?.checklist"
      />
    </template>
  </UsaAlert>
  <span
    :id="computedStatusMessageId"
    data-validation-status
    class="usa-sr-only"
    aria-live="polite"
    aria-atomic="true"
    >{{ statusMessage }}</span
  >
</template>
