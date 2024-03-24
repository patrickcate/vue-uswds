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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaSiteAlert },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `
    <UsaSiteAlert
      :variant="variant"
      :slim="slim"
      :no-icon="noIcon"
      :role="role"
      :heading="heading"
      :heading-tag="headingTag"
      :custom-classes="customClasses">
        <template  v-if="${!!args['slot:heading']}" #heading>${
          args['slot:heading']
        }</template>
        <template v-if="${!!args.default}" #default>${args.default}</template>
        <template v-if="${!!args.message}" #message>${args.message}</template>
    </UsaSiteAlert>`,
})

export const InfoSiteAlert = DefaultTemplate.bind({})
InfoSiteAlert.args = {
  ...defaultProps,
  variant: 'info',
  heading: 'Short alert message',
}
InfoSiteAlert.storyName = 'Info'

export const EmergencySiteAlert = DefaultTemplate.bind({})
EmergencySiteAlert.args = {
  ...defaultProps,
  heading: 'Emergency alert message',
}
EmergencySiteAlert.storyName = 'Emergency'

export const SlimSiteAlert = DefaultTemplate.bind({})
SlimSiteAlert.args = {
  ...defaultProps,
  slim: true,
  heading: 'Emergency alert message',
}
SlimSiteAlert.storyName = 'Slim'

export const NoIconSiteAlert = DefaultTemplate.bind({})
NoIconSiteAlert.args = {
  ...defaultProps,
  noIcon: true,
  heading: 'Emergency alert message',
}
NoIconSiteAlert.storyName = 'No Icon'

export const SlimAndNoIconSiteAlert = DefaultTemplate.bind({})
SlimAndNoIconSiteAlert.args = {
  ...defaultProps,
  slim: true,
  noIcon: true,
  heading: 'Emergency alert message',
}
SlimAndNoIconSiteAlert.storyName = 'Slim and No Icon'

export const CustomClassesSiteAlert = DefaultTemplate.bind({})
CustomClassesSiteAlert.args = {
  ...defaultProps,
  heading: 'Custom CSS classes',
  customClasses: {
    root: ['test-root-class'],
    body: ['test-body-class'],
    heading: ['test-heading-class'],
  },
  default: 'Uses custom CSS classes.',
}
CustomClassesSiteAlert.storyName = 'Custom Classes'

export const CustomRoleAlert = DefaultTemplate.bind({})
CustomRoleAlert.args = {
  ...defaultProps,
  role: 'alertdialog',
}
CustomRoleAlert.storyName = 'Custom Role Attribute'

export const HeadingSlotAlert = DefaultTemplate.bind({})
HeadingSlotAlert.args = {
  ...defaultProps,
  heading: 'Emergency alert message',
  'slot:heading': 'Custom Heading Slot',
}
HeadingSlotAlert.storyName = 'Heading Slot'

export const MessageSlotAlert = DefaultTemplate.bind({})
MessageSlotAlert.args = {
  ...defaultProps,
  heading: 'Emergency alert message',
  message: 'Custom message slot content.',
}
MessageSlotAlert.storyName = 'Message Slot'
