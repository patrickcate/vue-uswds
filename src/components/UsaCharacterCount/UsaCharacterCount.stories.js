import UsaCharacterCount from './UsaCharacterCount.vue'
import UsaTextInput from '@/components/UsaTextInput'
import UsaTextarea from '@/components/UsaTextarea'

const defaultProps = {
  maxlength: UsaCharacterCount.props.maxlength.default,
  id: UsaCharacterCount.props.id.default,
}

export default {
  component: UsaCharacterCount,
  title: 'Components/UsaCharacterCount',
  argTypes: {
    maxlength: {
      control: { type: 'number' },
    },
    id: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    equalMessageSlot: {
      control: { type: 'text' },
    },
    remainingMessageSlot: {
      control: { type: 'text' },
    },
    overMessageSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    maxlength: defaultProps.maxlength,
    id: defaultProps.id,
    defaultSlot: '',
    equalMessageSlot: '',
    remainingMessageSlot: '',
    overMessageSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCharacterCount, UsaTextInput, UsaTextarea },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCharacterCount :id="id" :maxlength="maxlength">
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.equalMessageSlot}" #equal-message="{ maxlength }">${
    args.equalMessageSlot
  }</template>
    <template v-if="${!!args.remainingMessageSlot}" #remaining-message="{ maxlength, charactersRemaining }">${
    args.remainingMessageSlot
  }</template>
    <template v-if="${!!args.overMessageSlot}" #over-message="{ maxlength, charactersOver }">${
    args.overMessageSlot
  }</template>
  </UsaCharacterCount>`,
})

export const DefaultCharacterCount = DefaultTemplate.bind({})
DefaultCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  defaultSlot: '<div><em>UsaTextarea or UsaTextInput goes here</em></div>',
}
DefaultCharacterCount.storyName = 'Default'

export const DefaultTextInputCharacterCount = DefaultTemplate.bind({})
DefaultTextInputCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  defaultSlot: '<UsaTextInput label="Text input"></UsaTextInput>',
}
DefaultTextInputCharacterCount.storyName = 'Text Input'

export const DefaultTextareaCharacterCount = DefaultTemplate.bind({})
DefaultTextareaCharacterCount.args = {
  ...defaultProps,
  maxlength: 50,
  defaultSlot: '<UsaTextarea label="Textarea"></UsaTextarea>',
}
DefaultTextareaCharacterCount.storyName = 'Textarea'

export const EqualMessageScopedSlotCharacterCount = DefaultTemplate.bind({})
EqualMessageScopedSlotCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  defaultSlot: '<UsaTextInput label="Text input"></UsaTextInput>',
  equalMessageSlot: 'You can enter up to {{ maxlength }} characters',
}
EqualMessageScopedSlotCharacterCount.storyName = 'Custom Count Message Slot'

export const RemainingMessageScopedSlotCharacterCount = DefaultTemplate.bind({})
RemainingMessageScopedSlotCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  defaultSlot: `<UsaTextInput :model-value="'some test text'" label="Text input"></UsaTextInput>`,
  remainingMessageSlot:
    '{{ charactersRemaining }} out of {{ maxlength }} characters remaining',
}
RemainingMessageScopedSlotCharacterCount.storyName =
  'Custom Remaining Message Slot'

export const OverMessageScopedSlotCharacterCount = DefaultTemplate.bind({})
OverMessageScopedSlotCharacterCount.args = {
  ...defaultProps,
  maxlength: 20,
  defaultSlot: `<UsaTextInput :model-value="'some really long test text'" label="Text input"></UsaTextInput>`,
  overMessageSlot:
    '{{ charactersOver }} over the {{ maxlength }} character max',
}
OverMessageScopedSlotCharacterCount.storyName = 'Custom Over Message Slot'

export const CustomIdCharacterCount = DefaultTemplate.bind({})
CustomIdCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  id: 'custom-id',
  defaultSlot: '<UsaTextInput label="Text input"></UsaTextInput>',
}
CustomIdCharacterCount.storyName = 'Custom ID'
