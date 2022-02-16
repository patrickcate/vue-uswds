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
    defaultSlot: {
      control: { type: 'text' },
    },
    jumpLinkSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: defaultProps.variant,
    jumpLinkText: defaultProps.jumpLinkText,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
    jumpLinkSlot: '',
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
    <template v-if="${!!args.jumpLinkSlot}" #jump-link>${
    args.jumpLinkSlot
  }</template>
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
  </UsaFooter>`,
})

export const DefaultFooter = DefaultTemplate.bind({})
DefaultFooter.args = {
  ...defaultProps,
  defaultSlot: 'Footer content here',
}
DefaultFooter.storyName = 'Default (Medium)'

export const BigFooter = DefaultTemplate.bind({})
BigFooter.args = {
  ...defaultProps,
  variant: 'big',
  defaultSlot: 'Footer content here',
}
BigFooter.storyName = 'Big'

export const SlimFooter = DefaultTemplate.bind({})
SlimFooter.args = {
  ...defaultProps,
  variant: 'slim',
  defaultSlot: 'Footer content here',
}
SlimFooter.storyName = 'Slim'

export const JumpLinkTextFooter = DefaultTemplate.bind({})
JumpLinkTextFooter.args = {
  ...defaultProps,
  jumpLinkText: 'Custom jump link text',
  defaultSlot: 'Footer content here',
}
JumpLinkTextFooter.storyName = 'Jump Link Text'

export const JumpLinkSlotFooter = DefaultTemplate.bind({})
JumpLinkSlotFooter.args = {
  ...defaultProps,
  defaultSlot: 'Footer content here',
  jumpLinkSlot: 'Jump link slot',
}
JumpLinkSlotFooter.storyName = 'Jump Link Slot'

export const CustomClassesFooter = DefaultTemplate.bind({})
CustomClassesFooter.args = {
  ...defaultProps,
  defaultSlot: 'Footer content here',
  customClasses: {
    container: ['custom-container-class'],
  },
}
CustomClassesFooter.storyName = 'Custom Classes'
