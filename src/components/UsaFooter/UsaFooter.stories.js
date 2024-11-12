import UsaFooter from './UsaFooter.vue'

const defaultProps = {
  variant: UsaFooter.props.variant.default,
  jumpLinkText: UsaFooter.props.jumpLinkText.default,
  customClasses: UsaFooter.props.customClasses.default(),
}

export default {
  component: UsaFooter,
  title: 'Components/UsaFooter',
  argTypes: {
    variant: {
      options: ['big', 'medium', 'slim'],
      control: {
        type: 'select',
      },
    },
    jumpLinkText: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
    'jump-link': {
      control: { type: 'text' },
    },
  },
  args: {
    variant: defaultProps.variant,
    jumpLinkText: defaultProps.jumpLinkText,
    customClasses: defaultProps.customClasses,
    default: '',
    'jump-link': '',
  },
  render: args => ({
    components: { UsaFooter },
    props: Object.keys(UsaFooter.props),
    setup() {
      return { args }
    },
    template: `<UsaFooter
    :variant="args.variant"
    :jump-link-text="args.jumpLinkText"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args['jump-link']" #jump-link>${args['jump-link']}</template>
    <template v-if="!!args.default" #default>${args.default}</template>
  </UsaFooter>`,
  }),
}

export const DefaultFooter = {
  args: {
    ...defaultProps,
    default: 'Footer content here',
  },
  name: 'Default (Medium)',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooter>Footer content here</UsaFooter>`,
      },
    },
  },
}

export const BigFooter = {
  args: {
    ...defaultProps,
    variant: 'big',
    default: 'Footer content here',
  },
  name: 'Big',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooter variant="big">Footer content here</UsaFooter>`,
      },
    },
  },
}

export const SlimFooter = {
  args: {
    ...defaultProps,
    variant: 'slim',
    default: 'Footer content here',
  },
  name: 'Slim',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooter variant="slim">Footer content here</UsaFooter>`,
      },
    },
  },
}

export const JumpLinkTextFooter = {
  args: {
    ...defaultProps,
    jumpLinkText: 'Custom jump link text',
    default: 'Footer content here',
  },
  name: 'Jump Link Text',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooter jump-link-text="Custom jump link text">Footer content here</UsaFooter>`,
      },
    },
  },
}

export const JumpLinkFooterSlot = {
  args: {
    ...defaultProps,
    default: 'Footer content here',
    'jump-link': '<em>Jump link slot</em>',
  },
  name: 'Jump Link Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooter><template #jump-link><em>Jump link slot</em></template><template #default>Footer content here</template></UsaFooter>`,
      },
    },
  },
}

export const CustomClassesFooter = {
  args: {
    ...defaultProps,
    default: 'Footer content here',
    customClasses: {
      container: ['custom-container-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooter :custom-classes="{ container: ['custom-container-class'] }">Footer content here</UsaFooter>`,
      },
    },
  },
}
