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
  render: args => ({
    components: { UsaPaginationArrow },
    props: Object.keys(UsaPaginationArrow.props),
    setup() {
      return { args }
    },
    template: `<UsaPaginationArrow
    :direction="args.direction"
    :label="args.label"
    :aria-label="args.ariaLabel"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.before" #before>${args.before}</template>
    <template v-if="!!args.default" #default>${args.default}</template>
    <template v-if="!!args.after" #after>${args.after}</template>
  </UsaPaginationArrow>`,
  }),
}

export const PreviousPaginationArrow = {
  args: {
    ...defaultProps,
    label: 'Previous',
  },
  name: 'Previous',
  parameters: {
    docs: {
      source: {
        code: `<UsaPaginationArrow label="Previous"></UsaPaginationArrow>`,
      },
    },
  },
}

export const NextPaginationArrow = {
  args: {
    ...defaultProps,
    direction: 'next',
    label: 'Next',
    ariaLabel: 'Next page',
    default: 'Next',
  },
  name: 'Next',
  parameters: {
    docs: {
      source: {
        code: `<UsaPaginationArrow direction="next" aria-label="Next page" label="Next">Next</UsaPaginationArrow>`,
      },
    },
  },
}

export const BeforeSlotPaginationArrow = {
  args: {
    ...defaultProps,
    direction: 'previous',
    label: 'Previous',
    ariaLabel: 'Previous page',
    default: 'Previous',
    before: '&lt;&nbsp;',
  },
  name: 'Before Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaPaginationArrow direction="previous" aria-label="Previous page" label="Previous"><template #before>&lt;&nbsp;</template><template #default>Previous</template></UsaPaginationArrow>`,
      },
    },
  },
}

export const AfterSlotPaginationArrow = {
  args: {
    ...defaultProps,
    direction: 'next',
    label: 'Next',
    ariaLabel: 'Next page',
    default: 'Next',
    after: '&nbsp;&gt;',
  },
  name: 'After Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaPaginationArrow direction="next" aria-label="Next page" label="Next"><template #default>Next</template><template #after>&nbsp;&gt;</template></UsaPaginationArrow>`,
      },
    },
  },
}

export const CustomClassesPaginationArrow = {
  args: {
    ...defaultProps,
    customClasses: {
      link: ['test-link-class'],
      text: ['test-text-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaPaginationArrow :custom-classes="{ link: ['test-link-class'], text: ['test-text-class'] }"></UsaPaginationArrow>`,
      },
    },
  },
}
