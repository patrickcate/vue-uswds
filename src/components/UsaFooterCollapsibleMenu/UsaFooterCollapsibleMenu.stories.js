import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import UsaFooterCollapsibleMenu from './UsaFooterCollapsibleMenu.vue'

const testItems = [
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
        to: '/test-2/test-2-1',
        text: 'Test Item 2.1',
      },
      {
        to: '/test-2/test-2-2',
        routerComponentName: 'nuxt-link',
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
  items: UsaFooterCollapsibleMenu.props.items.default(),
  headingTag: UsaFooterCollapsibleMenu.props.headingTag.default,
  customClasses: UsaFooterCollapsibleMenu.props.customClasses.default(),
}

export default {
  component: UsaFooterCollapsibleMenu,
  title: 'Components/UsaFooterCollapsibleMenu',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    headingTag: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
  },
  args: {
    items: defaultProps.items,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    () => ({
      template:
        '<div class="usa-footer"><div class="usa-footer__nav"><story /></div></div>',
    }),
  ],
  render: args => ({
    components: { UsaFooterCollapsibleMenu },
    props: Object.keys(UsaFooterCollapsibleMenu.props),
    setup() {
      return { args }
    },
    template: `<UsaFooterCollapsibleMenu
      :items="args.items"
      :heading-tag="args.headingTag"
      :custom-classes="args.customClasses"
    ></UsaFooterCollapsibleMenu>`,
  }),
}

export const DefaultFooterCollapsibleMenu = {
  args: {
    ...defaultProps,
    items: testItems,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterCollapsibleMenu :items="${JSON.stringify(testItems, null, '\t')}"></UsaFooterCollapsibleMenu>`,
      },
    },
  },
}

export const HeadingTagFooterCollapsibleMenu = {
  args: {
    ...defaultProps,
    items: testItems,
    headingTag: 'h3',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterCollapsibleMenu :items="${JSON.stringify(testItems, null, '\t')}" heading-tag="h3"></UsaFooterCollapsibleMenu>`,
      },
    },
  },
}

export const MobileCollapsibleMenu = {
  args: {
    ...defaultProps,
    items: testItems,
  },
  name: 'Mobile Collapsible',
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
    docs: {
      source: {
        code: `<UsaFooterCollapsibleMenu :items="${JSON.stringify(testItems, null, '\t')}"></UsaFooterCollapsibleMenu>`,
      },
    },
  },
}

export const CustomClassesFooterCollapsibleMenu = {
  args: {
    ...defaultProps,
    items: testItems,
    customClasses: {
      gridRow: ['test-grid-row-class'],
      gridCol: ['test-grid-col-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterCollapsibleMenu :items="${JSON.stringify(testItems, null, '\t')}" :custom-classes="{ gridRow: ['test-grid-row-class'], gridCol: ['test-grid-col-class'] }"></UsaFooterCollapsibleMenu>`,
      },
    },
  },
}
