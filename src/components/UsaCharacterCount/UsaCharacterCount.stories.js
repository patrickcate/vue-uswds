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
    default: {
      control: { type: 'text' },
    },
    'equal-message': {
      control: { type: 'text' },
    },
    'remaining-message': {
      control: { type: 'text' },
    },
    'over-message': {
      control: { type: 'text' },
    },
  },
  args: {
    maxlength: defaultProps.maxlength,
    id: defaultProps.id,
    default: '',
    'equal-message': '',
    'remaining-message': '',
    'over-message': '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCharacterCount, UsaTextInput, UsaTextarea },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCharacterCount :id="id" :maxlength="maxlength">
    <template v-if="${!!args.default}" #default>${args.default}</template>
    <template v-if="${!!args[
      'equal-message'
    ]}" #equal-message="{ maxlength }">${args['equal-message']}</template>
    <template v-if="${!!args[
      'remaining-message'
    ]}" #remaining-message="{ maxlength, charactersRemaining }">${
      args['remaining-message']
    }</template>
    <template v-if="${!!args[
      'over-message'
    ]}" #over-message="{ maxlength, charactersOver }">${
      args['over-message']
    }</template>
  </UsaCharacterCount>`,
})

export const DefaultCharacterCount = DefaultTemplate.bind({})
DefaultCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  default: '<div><em>UsaTextarea or UsaTextInput goes here</em></div>',
}
DefaultCharacterCount.storyName = 'Default'

export const DefaultTextInputCharacterCount = DefaultTemplate.bind({})
DefaultTextInputCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  default: '<UsaTextInput label="Text input"></UsaTextInput>',
}
DefaultTextInputCharacterCount.storyName = 'Text Input'

export const DefaultTextareaCharacterCount = DefaultTemplate.bind({})
DefaultTextareaCharacterCount.args = {
  ...defaultProps,
  maxlength: 50,
  default: '<UsaTextarea label="Textarea"></UsaTextarea>',
}
DefaultTextareaCharacterCount.storyName = 'Textarea'

export const EqualMessageScopedSlotCharacterCount = DefaultTemplate.bind({})
EqualMessageScopedSlotCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  default: '<UsaTextInput label="Text input"></UsaTextInput>',
  'equal-message': 'You can enter up to {{ maxlength }} characters',
}
EqualMessageScopedSlotCharacterCount.storyName = 'Custom Count Message Slot'

export const RemainingMessageScopedSlotCharacterCount = DefaultTemplate.bind({})
RemainingMessageScopedSlotCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  default: `<UsaTextInput :model-value="'some test text'" label="Text input"></UsaTextInput>`,
  'remaining-message':
    '{{ charactersRemaining }} out of {{ maxlength }} characters remaining',
}
RemainingMessageScopedSlotCharacterCount.storyName =
  'Custom Remaining Message Slot'

export const OverMessageScopedSlotCharacterCount = DefaultTemplate.bind({})
OverMessageScopedSlotCharacterCount.args = {
  ...defaultProps,
  maxlength: 20,
  default: `<UsaTextInput :model-value="'some really long test text'" label="Text input"></UsaTextInput>`,
  'over-message': '{{ charactersOver }} over the {{ maxlength }} character max',
}
OverMessageScopedSlotCharacterCount.storyName = 'Custom Over Message Slot'

export const CustomIdCharacterCount = DefaultTemplate.bind({})
CustomIdCharacterCount.args = {
  ...defaultProps,
  maxlength: 25,
  id: 'custom-id',
  default: '<UsaTextInput label="Text input"></UsaTextInput>',
}
CustomIdCharacterCount.storyName = 'Custom ID'
