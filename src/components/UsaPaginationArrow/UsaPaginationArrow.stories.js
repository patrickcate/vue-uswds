import UsaPaginationArrow from './UsaPaginationArrow.vue'

const defaultProps = {
  direction: UsaPaginationArrow.props.direction.default,
  label: UsaPaginationArrow.props.label.default,
  ariaLabel: 'Previous page',
  customClasses: UsaPaginationArrow.props.customClasses.default(),
}

export default {
  component: UsaPaginationArrow,
  title: 'Components/UsaPaginationArrow',
  argTypes: {
    direction: {
      options: ['previous', 'next'],
      control: {
        type: 'radio',
      },
    },
    label: {
      control: { type: 'text' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    to: {
      control: { type: 'text' },
    },
    routerComponentName: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
    before: {
      control: { type: 'text' },
    },
    after: {
      control: { type: 'text' },
    },
  },
  args: {
    direction: defaultProps.direction,
    label: defaultProps.label,
    ariaLabel: defaultProps.ariaLabel,
    customClasses: defaultProps.customClasses,
    href: '/test-page',
    to: '',
    routerComponentName: '',
    default: defaultProps.label,
    before: '',
    after: '',
  },
  decorators: [
    () => ({
      template: '<ul class="usa-pagination__list"><story /></ul>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaPaginationArrow },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaPaginationArrow
    :direction="direction"
    :label="label"
    :aria-label="ariaLabel"
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
    :custom-classes="customClasses"
  >
    <template v-if="${!!args.before}" #before>${args.before}</template>
    <template v-if="${!!args.default}" #default>${args.default}</template>
    <template v-if="${!!args.after}" #after>${args.after}</template>
  </UsaPaginationArrow>`,
})

export const PreviousPaginationArrow = DefaultTemplate.bind({})
PreviousPaginationArrow.args = {
  ...defaultProps,
  label: 'Previous',
}
PreviousPaginationArrow.storyName = 'Previous'

export const NextPaginationArrow = DefaultTemplate.bind({})
NextPaginationArrow.args = {
  ...defaultProps,
  direction: 'next',
  label: 'Next',
  ariaLabel: 'Next page',
  default: 'Next',
}
NextPaginationArrow.storyName = 'Next'

export const BeforeSlotPaginationArrow = DefaultTemplate.bind({})
BeforeSlotPaginationArrow.args = {
  ...defaultProps,
  direction: 'previous',
  label: 'Previous',
  ariaLabel: 'Previous page',
  default: 'Previous',
  before: '&lt;&nbsp;',
}
BeforeSlotPaginationArrow.storyName = 'Before Slot'

export const AfterSlotPaginationArrow = DefaultTemplate.bind({})
AfterSlotPaginationArrow.args = {
  ...defaultProps,
  direction: 'next',
  label: 'Next',
  ariaLabel: 'Next page',
  default: 'Next',
  after: '&nbsp;&gt;',
}
AfterSlotPaginationArrow.storyName = 'After Slot'

export const CustomClassesPaginationArrow = DefaultTemplate.bind({})
CustomClassesPaginationArrow.args = {
  ...defaultProps,
  customClasses: {
    link: ['test-link-class'],
    text: ['test-text-class'],
  },
}
CustomClassesPaginationArrow.storyName = 'Custom Classes'
