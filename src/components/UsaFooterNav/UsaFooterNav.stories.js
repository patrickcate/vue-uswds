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
    href: '/test-1',
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
    to: '/test-2',
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
    href: '/test-3',
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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    items: defaultProps.items,
    collapsibleHeadingTag: defaultProps.collapsibleHeadingTag,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterNav },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterNav
    :aria-label="ariaLabel"
    :items="items"
    :collapsible-heading-tag="collapsibleHeadingTag"
    :custom-classes="customClasses"
  >
    <template v-if="${!!args.defaultSlot}" #default="{ items }">${
    args.defaultSlot
  }</template>
  </UsaFooterNav>`,
})

export const DefaultFooterNav = DefaultTemplate.bind({})
DefaultFooterNav.args = {
  ...defaultProps,
  items: testItems,
}
DefaultFooterNav.storyName = 'Default'

export const BigFooterNav = DefaultTemplate.bind({})
BigFooterNav.args = {
  ...defaultProps,
  items: testCollapsibleItems,
}
BigFooterNav.decorators = [
  () => ({
    template: '<div class="usa-footer usa-footer--big"><story /></div>',
    provide: {
      footerVariant: 'big',
    },
  }),
]

export const MediumFooterNav = DefaultTemplate.bind({})
MediumFooterNav.args = {
  ...defaultProps,
  items: testItems,
}
MediumFooterNav.decorators = [
  () => ({
    template: '<div class="usa-footer"><story /></div>',
  }),
]

export const SlimFooterNav = DefaultTemplate.bind({})
SlimFooterNav.args = {
  ...defaultProps,
  items: testItems,
}
SlimFooterNav.decorators = [
  () => ({
    template: '<div class="usa-footer usa-footer--slim"><story /></div>',
    provide: {
      footerVariant: 'slim',
    },
  }),
]

export const AriaLabelFooterNav = DefaultTemplate.bind({})
AriaLabelFooterNav.args = {
  ...defaultProps,
  ariaLabel: 'Custom aria label',
  items: testItems,
}
AriaLabelFooterNav.storyName = 'Custom Aria Label'

export const CollapsibleHeadingTagFooterNav = DefaultTemplate.bind({})
CollapsibleHeadingTagFooterNav.args = {
  ...defaultProps,
  collapsibleHeadingTag: 'h2',
  items: testCollapsibleItems,
}
CollapsibleHeadingTagFooterNav.decorators = [
  () => ({
    template: '<div class="usa-footer usa-footer--big"><story /></div>',
    provide: {
      footerVariant: 'big',
    },
  }),
]
CollapsibleHeadingTagFooterNav.storyName = 'Collapsible Heading Tag'

export const DefaultScopedSlotFooterNav = DefaultTemplate.bind({})
DefaultScopedSlotFooterNav.args = {
  ...defaultProps,
  items: testCollapsibleItems,
  defaultSlot: `<em>{{ items[0].text }}</em>`,
}
DefaultScopedSlotFooterNav.decorators = [
  () => ({
    template: '<div class="usa-footer"><story /></div>',
  }),
]
DefaultScopedSlotFooterNav.storyName = 'Default Scoped Slot'

export const CustomClassesFooterNav = DefaultTemplate.bind({})
CustomClassesFooterNav.args = {
  ...defaultProps,
  items: testItems,
  customClasses: {
    gridRow: ['test-grid-row-class'],
    gridCol: ['test-grid-col-class'],
  },
}
CustomClassesFooterNav.decorators = [
  () => ({
    template: '<div class="usa-footer"><story /></div>',
  }),
]
CustomClassesFooterNav.storyName = 'Custom Classes'
