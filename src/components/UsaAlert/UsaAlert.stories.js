import UsaAlert from './UsaAlert.vue'

const defaultProps = {
  variant: UsaAlert.props.variant.default,
  slim: UsaAlert.props.slim.default,
  noIcon: UsaAlert.props.noIcon.default,
  role: UsaAlert.props.role.default,
  heading: UsaAlert.props.heading.default,
  headingTag: UsaAlert.props.headingTag.default,
  customClasses: UsaAlert.props.customClasses.default(),
}

export default {
  component: UsaAlert,
  title: 'Components/UsaAlert',
  argTypes: {
    variant: {
      options: ['', 'info', 'warning', 'error', 'success'],
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
    default: {
      control: { type: 'text' },
    },
    'slot:heading': {
      control: { type: 'text' },
      name: 'heading',
      table: {
        category: 'slots',
      },
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
    components: { UsaAlert },
    props: Object.keys(UsaAlert.props),
    setup() {
      return { args }
    },
    template: `
    <UsaAlert
      :variant="args.variant"
      :slim="args.slim"
      :no-icon="args.noIcon"
      :role="args.role"
      :heading="args.heading"
      :heading-tag="args.headingTag"
      :custom-classes="args.customClasses"
    >
      <template v-if="!!args['slot:heading']" #heading>${args['slot:heading']}</template>
      <template v-if="!!args.default" #default>${args.default}</template>
      <template v-if="!!args.message" #message>${args.message}</template>
    </UsaAlert>`,
  }),
}

export const InfoAlert = {
  args: {
    variant: 'info',
    heading: 'Informative status',
  },
  name: 'Info',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>`,
      },
    },
  },
}

export const WarningAlert = {
  args: {
    variant: 'warning',
    heading: 'Warning status',
  },
  name: 'Warning',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert variant="warning" heading="Warning status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>`,
      },
    },
  },
}

export const ErrorAlert = {
  args: {
    ...defaultProps,
    variant: 'error',
    heading: 'Error status',
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert variant="error" heading="Error status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>`,
      },
    },
  },
}

export const SuccessAlert = {
  args: {
    ...defaultProps,
    variant: 'success',
    heading: 'Success status',
  },
  name: 'Success',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert variant="success" heading="Success status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>`,
      },
    },
  },
}

export const SlimAlert = {
  args: {
    ...defaultProps,
    variant: 'info',
    slim: true,
    heading: 'Informative status',
  },
  name: 'Slim',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert :slim="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>`,
      },
    },
  },
}

export const NoIconAlert = {
  args: {
    ...defaultProps,
    variant: 'info',
    noIcon: true,
    heading: 'Informative status',
  },
  name: 'No Icon',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert :no-icon="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>`,
      },
    },
  },
}

export const SlimAndNoIconAlert = {
  args: {
    ...defaultProps,
    variant: 'info',
    slim: true,
    noIcon: true,
    heading: 'Informative status',
  },
  name: 'Slim and No Icon',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert :no-icon="true" :slim="true" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>`,
      },
    },
  },
}

export const CustomClassesAlert = {
  args: {
    ...defaultProps,
    variant: 'info',
    heading: 'Custom CSS classes',
    customClasses: {
      body: ['test-body-class'],
      heading: ['test-heading-class'],
    },
    default: 'Uses custom CSS classes.',
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert :custom-classes="{ body: ['test-body-class'], heading: ['test-heading-class'] }" variant="info" heading="Custom CSS classes">Uses custom CSS classes.</UsaAlert>`,
      },
    },
  },
}

export const CustomRoleAlert = {
  args: {
    ...defaultProps,
    variant: 'info',
    role: 'alertdialog',
  },
  name: 'Custom Role Attribute',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert :role="alertdialog" variant="info" heading="Informative status">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>`,
      },
    },
  },
}

export const HeadingTagAlert = {
  args: {
    ...defaultProps,
    variant: 'info',
    heading: 'Custom Heading Tag',
    headingTag: 'h4',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert heading-tag="h4" variant="info" heading="Custom Heading Tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</UsaAlert>`,
      },
    },
  },
}

export const HeadingSlotAlert = {
  args: {
    ...defaultProps,
    variant: 'info',
    'slot:heading': 'Custom Heading Slot',
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert variant="info">\n\t<template #heading>Custom Heading Slot</template>\n\t<template #default>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</template>\n</UsaAlert>`,
      },
    },
  },
}

export const MessageSlotAlert = {
  args: {
    ...defaultProps,
    variant: 'info',
    heading: 'Informative status',
    message: 'Custom message slot content.',
  },
  name: 'Message Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaAlert variant="info" heading="Informative status">\n\t<template #message>Custom message slot content.</template>\n</UsaAlert>`,
      },
    },
  },
}
