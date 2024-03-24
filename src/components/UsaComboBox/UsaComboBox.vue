<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { computed, useSlots, toRef } from 'vue'
import { useComboBox } from '@/composables/useComboBox'
import UsaFormGroup from '@/components/UsaFormGroup'
import UsaLabel from '@/components/UsaLabel'

const slots = useSlots()
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: [String, Number],
    default: '',
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
  readonly: {
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
  clearButtonAriaLabel: {
    type: String,
    default: 'Clear the select contents',
  },
  toggleButtonAriaLabel: {
    type: String,
    default: 'Toggle the dropdown list',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        formGroup: [],
        component: [],
        label: [],
        input: [],
        list: [],
      }
    },
  },
})

const {
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
  highlightedOption,
  inputElement,
  isOpen,
  isDisabled,
  isReadonly,
  listElement,
  listItemElements,
  listItemTabIndex,
  searchTerm,
  selectedOption,
  totalFilteredOptions,
} = useComboBox(
  toRef(props, 'id'),
  toRef(props, 'modelValue'),
  toRef(props, 'options'),
  toRef(props, 'disabled'),
  toRef(props, 'readonly'),
  emit,
)

const ariaDescribedby = computed(() => {
  const ids = [computedAssistiveHintId.value]

  if (slots.hint) {
    ids.push(computedHintId.value)
  }

  if (props.error && slots['error-message']) {
    ids.push(computedErrorMessageId.value)
  }

  return ids.join(' ')
})

const classes = computed(() => [
  { 'usa-combo-box--pristine': selectedOption.value !== '' },
  ...(props.customClasses?.component || []),
])
</script>

<template>
  <UsaFormGroup
    :group="!!$slots.hint || (error && !!$slots['error-message'])"
    :error="error"
    :class="props.customClasses?.formGroup"
  >
    <UsaLabel
      v-if="label || $slots.label"
      :id="computedLabelId"
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
      ref="componentElement"
      class="usa-combo-box"
      :class="classes"
      data-enhanced="true"
    >
      <input
        v-bind="$attrs"
        :id="computedId"
        ref="inputElement"
        v-model="searchTerm"
        :required="required"
        :disabled="isDisabled"
        :readonly="isReadonly"
        :aria-owns="computedListId"
        :aria-controls="computedListId"
        :aria-describedby="ariaDescribedby"
        :aria-expanded="isOpen"
        :aria-activedescendant="activeDescendent"
        aria-autocomplete="list"
        autocapitalize="off"
        autocomplete="off"
        class="usa-combo-box__input"
        :class="props.customClasses?.input"
        type="text"
        role="combobox"
        @click="handleClickOnInput"
        @input="handleFilterOnInput"
        @keydown.prevent.enter="handleEnterOnInput"
        @keydown.prevent.down="handleDownOnInput"
      />
      <span class="usa-combo-box__clear-input__wrapper" tabindex="-1">
        <button
          v-show="clearButtonIsVisible"
          type="button"
          class="usa-combo-box__clear-input"
          :aria-label="clearButtonAriaLabel"
          :disabled="isDisabled || isReadonly"
          @click="handleClearInput"
          >&nbsp;</button
        >
      </span>
      <span class="usa-combo-box__input-button-separator">&nbsp;</span>
      <span class="usa-combo-box__toggle-list__wrapper" tabindex="-1">
        <button
          type="button"
          tabindex="-1"
          class="usa-combo-box__toggle-list"
          :aria-label="toggleButtonAriaLabel"
          :disabled="isDisabled || isReadonly"
          @click="handleListToggle"
          >&nbsp;</button
        >
      </span>
      <ul
        :id="computedListId"
        ref="listElement"
        tabindex="-1"
        class="usa-combo-box__list"
        :class="props.customClasses?.list"
        role="listbox"
        :aria-labelledby="computedLabelId"
        :hidden="!isOpen"
      >
        <template v-if="filteredOptions.length">
          <li
            v-for="(option, index) in filteredOptions"
            :id="getListItemIdByIndex(index)"
            ref="listItemElements"
            :key="option.value"
            :aria-setsize="totalFilteredOptions"
            :aria-posinset="index + 1"
            :aria-selected="selectedOption === option.value"
            class="usa-combo-box__list-option"
            :class="[
              {
                'usa-combo-box__list-option--selected':
                  selectedOption === option.value,
                'usa-combo-box__list-option--focused':
                  highlightedOption === option.value,
              },
            ]"
            :tabindex="listItemTabIndex(option.value)"
            role="option"
            :data-value="option.value"
            @click="handleClickOnListOption(option.value)"
            @keydown.prevent.up="handleUpOnListOption(index)"
            @keydown.prevent.down="handleDownOnListOption(index)"
            @keydown.prevent.enter="handleEnterOnListOption(option.value)"
            @keydown.prevent.space="handleSpaceOnListOption(option.value)"
            @mouseover="handleHoverOnListOption(option.value)"
            >{{ option.label }}</li
          >
        </template>
        <li v-else class="usa-combo-box__list-option--no-results"
          ><slot name="no-results">No results found</slot></li
        >
      </ul>
      <div class="usa-combo-box__status usa-sr-only" role="status">
        <slot v-if="isOpen" name="status" :filtered-options="filteredOptions">
          <template v-if="filteredOptions.length"
            >{{ filteredOptions.length }}
            {{ filteredOptions.length > 1 ? 'results' : 'result' }}
            available.</template
          >
          <template v-else>No results.</template>
        </slot>
      </div>
      <span :id="computedAssistiveHintId" class="usa-sr-only"
        ><slot name="assistive-hint"
          >When autocomplete results are available use up and down arrows to
          review and enter to select. Touch device users, explore by touch or
          with swipe gestures.</slot
        >
      </span>
    </div>
  </UsaFormGroup>
</template>
