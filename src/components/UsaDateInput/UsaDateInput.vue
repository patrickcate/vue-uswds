<script setup>
import { computed, useSlots } from 'vue'
import { nextId } from '@/utils/unique-id.js'
import UsaTextInput from '@/components/UsaTextInput'
import UsaSelect from '@/components/UsaSelect'

const slots = useSlots()
const emit = defineEmits(['update:month', 'update:day', 'update:year'])

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  day: {
    type: [String, Number],
    default: '',
  },
  month: {
    type: [String, Number],
    default: '',
  },
  year: {
    type: [String, Number],
    default: '',
  },
  dateOrder: {
    type: Array,
    default: () => ['month', 'day', 'year'],
  },
  dateLabels: {
    type: Object,
    default: () => ({ month: 'Month', day: 'Day', year: 'Year' }),
  },
  /**
   * @deprecated
   */
  monthAsSelect: {
    type: Boolean,
    default: false,
  },
  monthEmptyLabel: {
    type: String,
    default: undefined,
  },
  monthOptions: {
    type: Array,
    default: () => [
      {
        value: 1,
        text: '01 - January',
      },
      {
        value: 2,
        text: '02 - February',
      },
      {
        value: 3,
        text: '03 - March',
      },
      {
        value: 4,
        text: '04 - April',
      },
      {
        value: 5,
        text: '05 - May',
      },
      {
        value: 6,
        text: '06 - June',
      },
      {
        value: 7,
        text: '07 - July',
      },
      {
        value: 8,
        text: '08 - August',
      },
      {
        value: 9,
        text: '09 - September',
      },
      {
        value: 10,
        text: '10 - October',
      },
      {
        value: 11,
        text: '11 - November',
      },
      {
        value: 12,
        text: '12 - December',
      },
    ],
  },
  name: {
    type: String,
    default: 'date',
  },
  required: {
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
})

if (!props.monthAsSelect) {
  console.warn(
    `The 'monthAsSelect' prop is deprecated. Starting with vue-uswds 2.0 the month will always use a select form element. You can set the 'monthAsSelect' prop value to true to minimize changes.`,
  )
}

const computedId = computed(() => props.id || nextId('usa-date-input'))
const computedErrorMessageId = computed(
  () => `${computedId.value}-error-message`,
)
const computedHintId = computed(() => `${computedId.value}-hint`)

const monthValue = computed({
  get: () => props.month,
  set: month => emit('update:month', month),
})
const dayValue = computed({
  get: () => props.day,
  set: day => emit('update:day', day),
})
const yearValue = computed({
  get: () => props.year,
  set: year => emit('update:year', year),
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
</script>

<template>
  <fieldset class="usa-fieldset">
    <legend v-if="label || $slots.label" class="usa-legend"
      ><slot name="label">{{ label }}</slot></legend
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

    <div class="usa-memorable-date">
      <template v-for="date in dateOrder" :key="date">
        <template v-if="date === 'month'">
          <UsaSelect
            v-if="monthAsSelect"
            :id="`${computedId}-${name}-month`"
            v-model="monthValue"
            :options="monthOptions"
            :empty-label="monthEmptyLabel"
            :label="dateLabels[date]"
            :group="true"
            :name="`${name}_month`"
            :required="required"
            :aria-describedby="ariaDescribedby"
            :custom-classes="{ component: ['usa-form-group--month'] }"
          />
          <UsaTextInput
            v-else
            :id="`${computedId}-${name}-month`"
            v-model="monthValue"
            :label="dateLabels[date]"
            :group="true"
            :name="`${name}_month`"
            :maxlength="2"
            :required="required"
            pattern="[0-9]*"
            inputmode="numeric"
            :aria-describedby="ariaDescribedby"
            :custom-classes="{ component: ['usa-form-group--month'] }"
          />
        </template>
        <UsaTextInput
          v-else-if="date === 'day'"
          :id="`${computedId}-${name}-day`"
          v-model="dayValue"
          :label="dateLabels[date]"
          :group="true"
          :name="`${name}_day`"
          :maxlength="2"
          :required="required"
          pattern="[0-9]*"
          inputmode="numeric"
          :aria-describedby="ariaDescribedby"
          :custom-classes="{ component: ['usa-form-group--day'] }"
        />
        <UsaTextInput
          v-else-if="date === 'year'"
          :id="`${computedId}-${name}-year`"
          v-model="yearValue"
          :label="dateLabels[date]"
          :group="true"
          :name="`${name}_year`"
          :minlength="4"
          :maxlength="4"
          :required="required"
          pattern="[0-9]*"
          inputmode="numeric"
          :aria-describedby="ariaDescribedby"
          :custom-classes="{ component: ['usa-form-group--year'] }"
        />
      </template>
    </div>
  </fieldset>
</template>
