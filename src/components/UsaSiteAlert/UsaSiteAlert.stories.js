import UsaSiteAlert from '@/components/UsaSiteAlert'

const defaultProps = {
  variant: UsaSiteAlert.props.variant.default,
  slim: UsaSiteAlert.props.slim.default,
  noIcon: UsaSiteAlert.props.noIcon.default,
  role: UsaSiteAlert.props.role.default,
  heading: UsaSiteAlert.props.heading.default,
  headingTag: UsaSiteAlert.props.headingTag.default,
  customClasses: UsaSiteAlert.props.customClasses.default(),
}

export default {
  component: UsaSiteAlert,
  title: 'Components/UsaSiteAlert',
  argTypes: {
    variant: {
      options: ['info', 'emergency'],
      control: {
        type: 'select',
      },
    },
    slim: {
      control: {
        type: 'boolean',
      },
    },
    noIcon: {
      control: {
        type: 'boolean',
      },
    },
    role: {
      control: { type: 'text' },
    },
    heading: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    'slot:heading': {
      control: { type: 'text' },
      name: 'heading',
      table: {
        category: 'slots',
      },
    },
    default: {
      control: { type: 'text' },
    },
    message: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: defaultProps.variant,
    slim: defaultProps.slim,
    noIcon: defaultProps.noIcon,
    role: defaultProps.role,
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    'slot:heading': '',
    message: '',
  },
  render: args => ({
    components: { UsaSiteAlert },
    props: Object.keys(UsaSiteAlert.props),
    setup() {
      return { args }
    },
    template: `
    <UsaSiteAlert
      :variant="args.variant"
      :slim="args.slim"
      :no-icon="args.noIcon"
      :role="args.role"
      :heading="args.heading"
      :heading-tag="args.headingTag"
      :custom-classes="args.customClasses">
        <template v-if="!!args['slot:heading']" #heading>${args['slot:heading']}</template>
        <template v-if="!!args.default" #default>${args.default}</template>
        <template v-if="!!args.message" #message>${args.message}</template>
    </UsaSiteAlert>`,
  }),
}

export const InfoSiteAlert = {
  args: {
    ...defaultProps,
    variant: 'info',
    heading: 'Short alert message',
  },
  name: 'Info',
  parameters: {
    docs: {
      source: {
        code: `<UsaSiteAlert variant="info" heading="Short alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>`,
      },
    },
  },
}

export const EmergencySiteAlert = {
  args: {
    ...defaultProps,
    heading: 'Emergency alert message',
  },
  name: 'Emergency',
  parameters: {
    docs: {
      source: {
        code: `<UsaSiteAlert heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>`,
      },
    },
  },
}

export const SlimSiteAlert = {
  args: {
    ...defaultProps,
    slim: true,
    heading: 'Emergency alert message',
  },
  name: 'Slim',
  parameters: {
    docs: {
      source: {
        code: `<UsaSiteAlert :slim="true" heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>`,
      },
    },
  },
}

export const NoIconSiteAlert = {
  args: {
    ...defaultProps,
    noIcon: true,
    heading: 'Emergency alert message',
  },
  name: 'No Icon',
  parameters: {
    docs: {
      source: {
        code: `<UsaSiteAlert :no-icon="true" heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>`,
      },
    },
  },
}

export const SlimAndNoIconSiteAlert = {
  args: {
    ...defaultProps,
    slim: true,
    noIcon: true,
    heading: 'Emergency alert message',
  },
  name: 'Slim and No Icon',
  parameters: {
    docs: {
      source: {
        code: `<UsaSiteAlert :slim="true" :no-icon="true" heading="Emergency alert message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>`,
      },
    },
  },
}

export const CustomClassesSiteAlert = {
  args: {
    ...defaultProps,
    heading: 'Custom CSS classes',
    customClasses: {
      root: ['test-root-class'],
      body: ['test-body-class'],
      heading: ['test-heading-class'],
    },
    default: 'Uses custom CSS classes.',
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaSiteAlert heading="Custom CSS classes" :custom-classes="{root: ['test-root-class'], body: ['test-body-class'], heading: ['test-heading-class']}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>`,
      },
    },
  },
}

export const CustomRoleAlert = {
  args: {
    ...defaultProps,
    role: 'alertdialog',
  },
  name: 'Custom Role Attribute',
  parameters: {
    docs: {
      source: {
        code: `<UsaSiteAlert role="alertdialog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaSiteAlert>`,
      },
    },
  },
}

export const HeadingSlotAlert = {
  args: {
    ...defaultProps,
    heading: 'Emergency alert message',
    'slot:heading': 'Custom Heading Slot',
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSiteAlert><template #heading>Custom Heading Slot</template><template #default>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</template></UsaSiteAlert>`,
      },
    },
  },
}

export const MessageSlotAlert = {
  args: {
    ...defaultProps,
    heading: 'Emergency alert message',
    message: 'Custom message slot content.',
  },
  name: 'Message Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSiteAlert heading="Emergency alert message"><template #message>Custom message slot content.</template></UsaSiteAlert>`,
      },
    },
  },
}
