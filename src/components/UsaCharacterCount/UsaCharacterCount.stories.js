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
  render: args => ({
    components: { UsaCharacterCount, UsaTextInput, UsaTextarea },
    props: Object.keys(UsaCharacterCount.props),
    setup() {
      return { args }
    },
    template: `<UsaCharacterCount :id="args.id" :maxlength="args.maxlength">
    <template v-if="!!args.default" #default>${args.default}</template>
    <template v-if="!!args['equal-message']" #equal-message="{ maxlength }">${args['equal-message']}</template>
    <template v-if="!!args['remaining-message']" #remaining-message="{ maxlength, charactersRemaining }">${args['remaining-message']}</template>
    <template v-if="!!args['over-message']" #over-message="{ maxlength, charactersOver }">${args['over-message']}</template>
  </UsaCharacterCount>`,
  }),
}

export const DefaultCharacterCount = {
  args: {
    ...defaultProps,
    maxlength: 25,
    default: '<div><em>UsaTextarea or UsaTextInput goes here</em></div>',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCharacterCount :maxlength="25"><div><em>UsaTextarea or UsaTextInput goes here</em></div></UsaCharacterCount>`,
      },
    },
  },
}

export const DefaultTextInputCharacterCount = {
  args: {
    ...defaultProps,
    maxlength: 25,
    default: '<UsaTextInput label="Text input"></UsaTextInput>',
  },
  name: 'Text Input',
  parameters: {
    docs: {
      source: {
        code: `<UsaCharacterCount :maxlength="25"><UsaTextInput label="Text input"></UsaTextInput></UsaCharacterCount>`,
      },
    },
  },
}

export const DefaultTextareaCharacterCount = {
  args: {
    ...defaultProps,
    maxlength: 50,
    default: '<UsaTextarea label="Textarea"></UsaTextarea>',
  },
  name: 'Textarea',
  parameters: {
    docs: {
      source: {
        code: `<UsaCharacterCount :maxlength="50"><UsaTextarea label="Textarea"></UsaTextarea></UsaCharacterCount>`,
      },
    },
  },
}

export const EqualMessageScopedSlotCharacterCount = {
  args: {
    ...defaultProps,
    maxlength: 25,
    default: '<UsaTextInput label="Text input"></UsaTextInput>',
    'equal-message': 'You can enter up to {{ maxlength }} characters',
  },
  name: 'Custom Count Message Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaCharacterCount :maxlength="25">\n\t<template #default><UsaTextInput label="Text input"></UsaTextInput></template>\n\t<template #equal-message="{maxlength}">You can enter up to {{ maxlength }} characters</template>\n</UsaCharacterCount>`,
      },
    },
  },
}

export const RemainingMessageScopedSlotCharacterCount = {
  args: {
    ...defaultProps,
    maxlength: 25,
    default: `<UsaTextInput :model-value="'some test text'" label="Text input"></UsaTextInput>`,
    'remaining-message':
      '{{ charactersRemaining }} out of {{ maxlength }} characters remaining',
  },
  name: 'Custom Remaining Message Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaCharacterCount :maxlength="25">\n\t<template #default><UsaTextInput :model-value="'some test text'" label="Text input"></UsaTextInput></template>\n\t<template #remaining-message="{charactersRemaining, maxlength}">{{ charactersRemaining }} out of {{ maxlength }} characters remaining</template>\n</UsaCharacterCount>`,
      },
    },
  },
}

export const OverMessageScopedSlotCharacterCount = {
  args: {
    ...defaultProps,
    maxlength: 20,
    default: `<UsaTextInput :model-value="'some really long test text'" label="Text input"></UsaTextInput>`,
    'over-message':
      '{{ charactersOver }} over the {{ maxlength }} character max',
  },
  name: 'Custom Over Message Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaCharacterCount :maxlength="20">\n\t<template #default><UsaTextInput :model-value="'some really long test text'" label="Text input"></UsaTextInput></template>\n\t<template #over-message="{charactersOver, maxlength}">{{ charactersOver }} over the {{ maxlength }} character max</template>\n</UsaCharacterCount>`,
      },
    },
  },
}

export const CustomIdCharacterCount = {
  args: {
    ...defaultProps,
    maxlength: 25,
    id: 'custom-id',
    default: '<UsaTextInput label="Text input"></UsaTextInput>',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaCharacterCount :maxlength="25" id="custom-id"><UsaTextInput label="Text input"></UsaTextInput></UsaCharacterCount>`,
      },
    },
  },
}
