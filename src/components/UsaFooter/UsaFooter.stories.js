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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooter },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooter
    :variant="variant"
    :jump-link-text="jumpLinkText"
    :custom-classes="customClasses"
  >
    <template v-if="${!!args['jump-link']}" #jump-link>${
    args['jump-link']
  }</template>
    <template v-if="${!!args.default}" #default>${args.default}</template>
  </UsaFooter>`,
})

export const DefaultFooter = DefaultTemplate.bind({})
DefaultFooter.args = {
  ...defaultProps,
  default: 'Footer content here',
}
DefaultFooter.storyName = 'Default (Medium)'

export const BigFooter = DefaultTemplate.bind({})
BigFooter.args = {
  ...defaultProps,
  variant: 'big',
  default: 'Footer content here',
}
BigFooter.storyName = 'Big'

export const SlimFooter = DefaultTemplate.bind({})
SlimFooter.args = {
  ...defaultProps,
  variant: 'slim',
  default: 'Footer content here',
}
SlimFooter.storyName = 'Slim'

export const JumpLinkTextFooter = DefaultTemplate.bind({})
JumpLinkTextFooter.args = {
  ...defaultProps,
  jumpLinkText: 'Custom jump link text',
  default: 'Footer content here',
}
JumpLinkTextFooter.storyName = 'Jump Link Text'

export const JumpLinkFooterSlot = DefaultTemplate.bind({})
JumpLinkFooterSlot.args = {
  ...defaultProps,
  default: 'Footer content here',
  'jump-link': '<em>Jump link slot</em>',
}
JumpLinkFooterSlot.storyName = 'Jump Link Slot'

export const CustomClassesFooter = DefaultTemplate.bind({})
CustomClassesFooter.args = {
  ...defaultProps,
  default: 'Footer content here',
  customClasses: {
    container: ['custom-container-class'],
  },
}
CustomClassesFooter.storyName = 'Custom Classes'
