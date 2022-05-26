import UsaFooterCollapsibleMenuSection from './UsaFooterCollapsibleMenuSection.vue'

const testItem = {
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
}

const defaultProps = {
  item: UsaFooterCollapsibleMenuSection.props.item.default(),
  headingTag: UsaFooterCollapsibleMenuSection.props.headingTag.default,
}

export default {
  component: UsaFooterCollapsibleMenuSection,
  title: 'Components/UsaFooterCollapsibleMenuSection',
  argTypes: {
    item: {
      control: { type: 'object' },
    },
    headingTag: {
      control: { type: 'text' },
    },
  },
  args: {
    item: defaultProps.item,
    headingTag: defaultProps.headingTag,
  },
  decorators: [
    () => ({
      template:
        '<div class="usa-footer usa-footer--big"><div class="usa-footer__nav"><story /></div></div>',
      provide: {
        footerMenuIsCollapsible: false,
        menuSections: {},
        registerMenuSection: () => {},
        unregisterMenuSection: () => {},
        toggleMenuSection: () => {},
      },
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterCollapsibleMenuSection },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterCollapsibleMenuSection
    :item="item"
    :heading-tag="headingTag"
  ></UsaFooterCollapsibleMenuSection>`,
})

export const DefaultFooterCollapsibleMenuItem = DefaultTemplate.bind({})
DefaultFooterCollapsibleMenuItem.args = {
  ...defaultProps,
  item: testItem,
}
DefaultFooterCollapsibleMenuItem.storyName = 'Default'

export const HeadingTagFooterCollapsibleMenuItem = DefaultTemplate.bind({})
HeadingTagFooterCollapsibleMenuItem.args = {
  ...defaultProps,
  item: testItem,
  headingTag: 'h3',
}
HeadingTagFooterCollapsibleMenuItem.storyName = 'Custom Heading Tag'
