import UsaFooterNav from './UsaFooterNav.vue'

const testItems = [
  {
    href: '/test-1',
    text: 'Test Item 1',
  },
  {
    to: '/test-2',
    text: 'Test Item 2',
  },
  {
    id: 'test-3',
    href: '/test-3',
    text: 'Test Item 3',
  },
  {
    id: 'test-4',
    href: '/test-4',
    text: 'Test Item 4',
  },
]

const testCollapsibleItems = [
  {
    text: 'Test Item 1',
    children: [
      {
        href: '/test-1/test-1-1',
        text: 'Test Item 1.1',
      },
      {
        href: '/test-1/test-1-2',
        text: 'Test Item 1.2',
      },
      {
        href: '/test-1/test-1-3',
        text: 'Test Item 1.3',
      },
    ],
  },
  {
    text: 'Test Item 2',
    children: [
      {
        href: '/test-2/test-2-1',
        text: 'Test Item 2.1',
      },
      {
        href: '/test-2/test-2-2',
        text: 'Test Item 2.2',
      },
      {
        href: '/test-2/test-2-3',
        text: 'Test Item 2.3',
      },
    ],
  },
  {
    id: 'test-3',
    text: 'Test Item 3',
    children: [
      {
        href: '/test-3/test-3-1',
        text: 'Test Item 3.1',
      },
      {
        href: '/test-3/test-3-2',
        text: 'Test Item 3.2',
      },
      {
        href: '/test-3/test-3-3',
        text: 'Test Item 3.3',
      },
    ],
  },
]

const defaultProps = {
  ariaLabel: UsaFooterNav.props.ariaLabel.default,
  items: UsaFooterNav.props.items.default(),
  collapsibleHeadingTag: UsaFooterNav.props.collapsibleHeadingTag.default,
  customClasses: UsaFooterNav.props.customClasses.default(),
}

export default {
  component: UsaFooterNav,
  title: 'Components/UsaFooterNav',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    items: {
      control: { type: 'object' },
    },
    collapsibleHeadingTag: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    items: defaultProps.items,
    collapsibleHeadingTag: defaultProps.collapsibleHeadingTag,
    customClasses: defaultProps.customClasses,
    default: '',
  },
  render: args => ({
    components: { UsaFooterNav },
    props: Object.keys(UsaFooterNav.props),
    setup() {
      return { args }
    },
    template: `<UsaFooterNav
    :aria-label="args.ariaLabel"
    :items="args.items"
    :collapsible-heading-tag="args.collapsibleHeadingTag"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.default" #default="{ items }">${args.default}</template>
  </UsaFooterNav>`,
  }),
}

export const DefaultFooterNav = {
  args: {
    ...defaultProps,
    items: testItems,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterNav :items="${JSON.stringify(testItems, null, '\t')}"></UsaFooterNav>`,
      },
    },
  },
}

export const BigFooterNav = {
  args: {
    ...defaultProps,
    items: testCollapsibleItems,
  },
  decorators: [
    () => ({
      template: '<div class="usa-footer usa-footer--big"><story /></div>',
      provide: {
        footerVariant: 'big',
      },
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterNav :items="${JSON.stringify(testItems, null, '\t')}"></UsaFooterNav>`,
      },
    },
  },
}

export const MediumFooterNav = {
  args: {
    ...defaultProps,
    items: testItems,
  },
  decorators: [
    () => ({
      template: '<div class="usa-footer"><story /></div>',
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterNav :items="${JSON.stringify(testItems, null, '\t')}"></UsaFooterNav>`,
      },
    },
  },
}

export const SlimFooterNav = {
  args: {
    ...defaultProps,
    items: testItems,
  },
  decorators: [
    () => ({
      template: '<div class="usa-footer usa-footer--slim"><story /></div>',
      provide: {
        footerVariant: 'slim',
      },
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterNav :items="${JSON.stringify(testItems, null, '\t')}"></UsaFooterNav>`,
      },
    },
  },
}

export const AriaLabelFooterNav = {
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label',
    items: testItems,
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterNav aria-label="Custom aria label" :items="${JSON.stringify(testItems, null, '\t')}"></UsaFooterNav>`,
      },
    },
  },
}

export const CollapsibleHeadingTagFooterNav = {
  args: {
    ...defaultProps,
    collapsibleHeadingTag: 'h2',
    items: testCollapsibleItems,
  },
  decorators: [
    () => ({
      template: '<div class="usa-footer usa-footer--big"><story /></div>',
      provide: {
        footerVariant: 'big',
      },
    }),
  ],
  name: 'Collapsible Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterNav collapsible-heading-tag="h2" :items="${JSON.stringify(testCollapsibleItems, null, '\t')}"></UsaFooterNav>`,
      },
    },
  },
}

export const DefaultScopedSlotFooterNav = {
  args: {
    ...defaultProps,
    items: testCollapsibleItems,
    default: `<em>{{ items[0].text }}</em>`,
  },
  decorators: [
    () => ({
      template: '<div class="usa-footer"><story /></div>',
    }),
  ],
  name: 'Default Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterNav :items="${JSON.stringify(testCollapsibleItems, null, '\t')}"><template #default="{ items }"><em>{{ items[0].text }}</em></template></UsaFooterNav>`,
      },
    },
  },
}

export const CustomClassesFooterNav = {
  args: {
    ...defaultProps,
    items: testItems,
    customClasses: {
      gridRow: ['test-grid-row-class'],
      gridCol: ['test-grid-col-class'],
    },
  },
  decorators: [
    () => ({
      template: '<div class="usa-footer"><story /></div>',
    }),
  ],
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterNav :items="${JSON.stringify(testItems, null, '\t')}" :custom-classes="{ gridRow: ['test-grid-row-class'], gridCol: ['test-grid-col-class'] }"></UsaFooterNav>`,
      },
    },
  },
}
