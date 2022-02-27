import UsaButton from './UsaButton.vue'

const defaultProps = {
  variant: '',
  size: '',
  type: 'button',
  disabled: false,
}

export default {
  component: UsaButton,
  title: 'Components/UsaButton',
  argTypes: {
    variant: {
      options: [
        '',
        'secondary',
        'accent-cool',
        'accent-warm',
        'base',
        'outline',
        'inverse',
        'unstyled',
      ],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['', 'big'],
      control: {
        type: 'radio',
      },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    beforeSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    afterSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: defaultProps.variant,
    size: defaultProps.size,
    type: defaultProps.type,
    disabled: defaultProps.disabled,
    beforeSlot: '',
    defaultSlot: 'Button',
    afterSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaButton },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaButton
    :variant="variant"
    :size="size"
    :type="type"
    :disabled="disabled"
  >
    <template v-if="${!!args.beforeSlot}" #before>${args.beforeSlot}</template>
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.afterSlot}" #after>${args.afterSlot}</template>
  </UsaButton>`,
})

export const DefaultButton = DefaultTemplate.bind({})
DefaultButton.args = {
  ...defaultProps,
}
DefaultButton.storyName = 'Default'

export const SecondaryButton = DefaultTemplate.bind({})
SecondaryButton.args = {
  ...defaultProps,
  variant: 'secondary',
}
SecondaryButton.storyName = 'Secondary'

export const AccentCoolButton = DefaultTemplate.bind({})
AccentCoolButton.args = {
  ...defaultProps,
  variant: 'accent-cool',
}
AccentCoolButton.storyName = 'Accent Cool'

export const AccentWarmButton = DefaultTemplate.bind({})
AccentWarmButton.args = {
  ...defaultProps,
  variant: 'accent-warm',
}
AccentWarmButton.storyName = 'Accent Warm'

export const BaseButton = DefaultTemplate.bind({})
BaseButton.args = {
  ...defaultProps,
  variant: 'base',
}
BaseButton.storyName = 'Base'

export const OutlineButton = DefaultTemplate.bind({})
OutlineButton.args = {
  ...defaultProps,
  variant: 'outline',
}
OutlineButton.storyName = 'Outline'

export const InverseButton = DefaultTemplate.bind({})
InverseButton.args = {
  ...defaultProps,
  variant: 'inverse',
}
InverseButton.decorators = [
  () => ({
    template: '<div class="usa-dark-background"><story /></div>',
  }),
]
InverseButton.storyName = 'Inverse'

export const UnstyledButton = DefaultTemplate.bind({})
UnstyledButton.args = {
  ...defaultProps,
  variant: 'unstyled',
}
UnstyledButton.storyName = 'Unstyled'

export const BigButton = DefaultTemplate.bind({})
BigButton.args = {
  ...defaultProps,
  size: 'big',
}
BigButton.storyName = 'Big'

export const DisabledButton = DefaultTemplate.bind({})
DisabledButton.args = {
  ...defaultProps,
  disabled: true,
}
DisabledButton.storyName = 'Disabled'

export const BeforeSlotButton = DefaultTemplate.bind({})
BeforeSlotButton.args = {
  ...defaultProps,
  beforeSlot: '⨂ ',
}
BeforeSlotButton.storyName = 'Before Slot'

export const AfterSlotButton = DefaultTemplate.bind({})
AfterSlotButton.args = {
  ...defaultProps,
  afterSlot: ' ⨁',
}
AfterSlotButton.storyName = 'After Slot'
