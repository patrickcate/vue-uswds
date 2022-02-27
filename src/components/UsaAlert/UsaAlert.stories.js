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
      options: [
        '',
        'info',
        'warning',
        'error',
        'success',
        'emergency',
        'validation',
      ],
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
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    headingSlot: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    messageSlot: {
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
    defaultSlot:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaAlert },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `
    <UsaAlert
      :variant="variant"
      :slim="slim"
      :no-icon="noIcon"
      :role="role"
      :heading="heading"
      :heading-tag="headingTag"
      :custom-classes="customClasses"
    >
      <template v-if="${!!args.headingSlot}" #heading>${
    args.headingSlot
  }</template>
      <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
      <template v-if="${!!args.messageSlot}" #message>${
    args.messageSlot
  }</template>
    </UsaAlert>`,
})

export const InfoAlert = DefaultTemplate.bind({})
InfoAlert.args = {
  ...defaultProps,
  variant: 'info',
  heading: 'Informative status',
}
InfoAlert.storyName = 'Info'

export const WarningAlert = DefaultTemplate.bind({})
WarningAlert.args = {
  ...defaultProps,
  variant: 'warning',
  heading: 'Warning status',
}
WarningAlert.storyName = 'Warning'

export const ErrorAlert = DefaultTemplate.bind({})
ErrorAlert.args = {
  ...defaultProps,
  variant: 'error',
  heading: 'Error status',
}
ErrorAlert.storyName = 'Error'

export const SuccessAlert = DefaultTemplate.bind({})
SuccessAlert.args = {
  ...defaultProps,
  variant: 'success',
  heading: 'Success status',
}
SuccessAlert.storyName = 'Success'

export const EmergencyAlert = DefaultTemplate.bind({})
EmergencyAlert.args = {
  ...defaultProps,
  variant: 'emergency',
  heading: 'Emergency alert message',
  defaultSlot: 'I should only be used with the SiteAlert component.',
}
EmergencyAlert.storyName = 'Emergency'

export const ValidationAlert = DefaultTemplate.bind({})
ValidationAlert.args = {
  ...defaultProps,
  variant: 'validation',
  heading: 'Short alert message',
  defaultSlot: 'I should only be used with the Validation component.',
}
ValidationAlert.storyName = 'Validation'

export const SlimAlert = DefaultTemplate.bind({})
SlimAlert.args = {
  ...defaultProps,
  variant: 'info',
  slim: true,
  heading: 'Informative status',
}
SlimAlert.storyName = 'Slim'

export const NoIconAlert = DefaultTemplate.bind({})
NoIconAlert.args = {
  ...defaultProps,
  variant: 'info',
  noIcon: true,
  heading: 'Informative status',
}
NoIconAlert.storyName = 'No Icon'

export const SlimAndNoIconAlert = DefaultTemplate.bind({})
SlimAndNoIconAlert.args = {
  ...defaultProps,
  variant: 'info',
  slim: true,
  noIcon: true,
  heading: 'Informative status',
}
SlimAndNoIconAlert.storyName = 'Slim and No Icon'

export const CustomClassesAlert = DefaultTemplate.bind({})
CustomClassesAlert.args = {
  ...defaultProps,
  variant: 'info',
  heading: 'Custom CSS classes',
  customClasses: {
    body: ['test-body-class'],
    heading: ['test-heading-class'],
  },
  defaultSlot: 'Uses custom CSS classes.',
}
CustomClassesAlert.storyName = 'Custom Classes'

export const CustomRoleAlert = DefaultTemplate.bind({})
CustomRoleAlert.args = {
  ...defaultProps,
  variant: 'info',
  role: 'alertdialog',
}
CustomRoleAlert.storyName = 'Custom Role Attribute'

export const HeadingTagAlert = DefaultTemplate.bind({})
HeadingTagAlert.args = {
  ...defaultProps,
  variant: 'info',
  heading: 'Custom Heading Tag',
  headingTag: 'h4',
}
HeadingTagAlert.storyName = 'Custom Heading Tag'

export const HeadingSlotAlert = DefaultTemplate.bind({})
HeadingSlotAlert.args = {
  ...defaultProps,
  variant: 'info',
  headingSlot: 'Custom Heading Slot',
}
HeadingSlotAlert.storyName = 'Heading Slot'

export const MessageSlotAlert = DefaultTemplate.bind({})
MessageSlotAlert.args = {
  ...defaultProps,
  variant: 'info',
  heading: 'Informative status',
  messageSlot: 'Custom message slot content.',
}
MessageSlotAlert.storyName = 'Message Slot'
