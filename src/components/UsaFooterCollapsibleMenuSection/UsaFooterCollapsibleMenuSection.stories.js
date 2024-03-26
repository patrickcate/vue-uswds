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
  render: args => ({
    components: { UsaFooterCollapsibleMenuSection },
    props: Object.keys(UsaFooterCollapsibleMenuSection.props),
    setup() {
      return { args }
    },
    template: `<UsaFooterCollapsibleMenuSection
    :item="args.item"
    :heading-tag="args.headingTag"
  ></UsaFooterCollapsibleMenuSection>`,
  }),
}

export const DefaultFooterCollapsibleMenuItem = {
  args: {
    ...defaultProps,
    item: testItem,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterCollapsibleMenuSection :item="${JSON.stringify(testItem, null, '\t')}"></UsaFooterCollapsibleMenuSection>`,
      },
    },
  },
}

export const HeadingTagFooterCollapsibleMenuItem = {
  args: {
    ...defaultProps,
    item: testItem,
    headingTag: 'h3',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterCollapsibleMenuSection :item="${JSON.stringify(testItem, null, '\t')}" heading-tag="h3"></UsaFooterCollapsibleMenuSection>`,
      },
    },
  },
}
