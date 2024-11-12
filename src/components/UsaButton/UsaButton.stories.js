import UsaButton from './UsaButton.vue'

const defaultProps = {
  variant: UsaButton.props.variant.default,
  size: UsaButton.props.size.default,
  type: UsaButton.props.type.default,
  disabled: UsaButton.props.disabled.default,
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
    before: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    after: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: defaultProps.variant,
    size: defaultProps.size,
    type: defaultProps.type,
    disabled: defaultProps.disabled,
    before: '',
    default: 'Button',
    after: '',
  },
  render: args => ({
    components: { UsaButton },
    props: Object.keys(UsaButton.props),
    setup() {
      return { args }
    },
    template: `<UsaButton
    :variant="args.variant"
    :size="args.size"
    :type="args.type"
    :disabled="args.disabled"
  >
    <template v-if="!!args.before" #before>${args.before}</template>
    <template v-if="!!args.default" #default>${args.default}</template>
    <template v-if="!!args.after" #after>${args.after}</template>
  </UsaButton>`,
  }),
}

export const DefaultButton = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton>Button</UsaButton>`,
      },
    },
  },
}

export const SecondaryButton = {
  args: {
    ...defaultProps,
    variant: 'secondary',
  },
  name: 'Secondary',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton variant="secondary">Button</UsaButton>`,
      },
    },
  },
}

export const AccentCoolButton = {
  args: {
    ...defaultProps,
    variant: 'accent-cool',
  },
  name: 'Accent Cool',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton variant="accent-cool">Button</UsaButton>`,
      },
    },
  },
}

export const AccentWarmButton = {
  args: {
    ...defaultProps,
    variant: 'accent-warm',
  },
  name: 'Accent Warm',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton variant="accent-warm">Button</UsaButton>`,
      },
    },
  },
}

export const BaseButton = {
  args: {
    ...defaultProps,
    variant: 'base',
  },
  name: 'Base',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton variant="base">Button</UsaButton>`,
      },
    },
  },
}

export const OutlineButton = {
  args: {
    ...defaultProps,
    variant: 'outline',
  },
  name: 'Outline',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton variant="outline">Button</UsaButton>`,
      },
    },
  },
}

export const InverseButton = {
  args: {
    ...defaultProps,
    variant: 'inverse',
  },
  decorators: [
    () => ({
      template: '<div class="usa-dark-background"><story /></div>',
    }),
  ],
  name: 'Inverse',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton variant="inverse">Button</UsaButton>`,
      },
    },
  },
}

export const UnstyledButton = {
  args: {
    ...defaultProps,
    variant: 'unstyled',
  },
  name: 'Unstyled',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton variant="unstyled">Button</UsaButton>`,
      },
    },
  },
}

export const BigButton = {
  args: {
    ...defaultProps,
    size: 'big',
  },
  name: 'Big',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton size="big">Button</UsaButton>`,
      },
    },
  },
}

export const DisabledButton = {
  args: {
    ...defaultProps,
    disabled: true,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton :disabled="true">Button</UsaButton>`,
      },
    },
  },
}

export const BeforeSlotButton = {
  args: {
    ...defaultProps,
    before: '⨂ ',
  },
  name: 'Before Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton><template #before>⨂ </template><template #default>Button</template></UsaButton>`,
      },
    },
  },
}

export const AfterSlotButton = {
  args: {
    ...defaultProps,
    after: ' ⨁',
  },
  name: 'After Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaButton><template #default>Button</template><template #after> ⨁</template></UsaButton>`,
      },
    },
  },
}
