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
    defaultSlot: {
      control: { type: 'text' },
    },
    beforeSlot: {
      control: { type: 'text' },
    },
    afterSlot: {
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
    defaultSlot: defaultProps.label,
    beforeSlot: '',
    afterSlot: '',
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
    <template v-if="${!!args.beforeSlot}" #before>${args.beforeSlot}</template>
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.afterSlot}" #after>${args.afterSlot}</template>
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
  defaultSlot: 'Next',
}
NextPaginationArrow.storyName = 'Next'

export const BeforeSlotPaginationArrow = DefaultTemplate.bind({})
BeforeSlotPaginationArrow.args = {
  ...defaultProps,
  direction: 'previous',
  label: 'Previous',
  ariaLabel: 'Previous page',
  defaultSlot: 'Previous',
  beforeSlot: '&lt;&nbsp;',
}
BeforeSlotPaginationArrow.storyName = 'Before Slot'

export const AfterSlotPaginationArrow = DefaultTemplate.bind({})
AfterSlotPaginationArrow.args = {
  ...defaultProps,
  direction: 'next',
  label: 'Next',
  ariaLabel: 'Next page',
  defaultSlot: 'Next',
  afterSlot: '&nbsp;&gt;',
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
