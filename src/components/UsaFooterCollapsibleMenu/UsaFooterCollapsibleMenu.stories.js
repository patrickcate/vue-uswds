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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterCollapsibleMenu },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterCollapsibleMenu
    :items="items"
    :heading-tag="headingTag"
    :custom-classes="customClasses"
  ></UsaFooterCollapsibleMenu>`,
})

export const DefaultFooterCollapsibleMenu = DefaultTemplate.bind({})
DefaultFooterCollapsibleMenu.args = {
  ...defaultProps,
  items: testItems,
}
DefaultFooterCollapsibleMenu.storyName = 'Default'

export const HeadingTagFooterCollapsibleMenu = DefaultTemplate.bind({})
HeadingTagFooterCollapsibleMenu.args = {
  ...defaultProps,
  items: testItems,
  headingTag: 'h3',
}
HeadingTagFooterCollapsibleMenu.storyName = 'Custom Heading Tag'

export const MobileCollapsibleMenu = DefaultTemplate.bind({})
MobileCollapsibleMenu.args = {
  ...defaultProps,
  items: testItems,
}
MobileCollapsibleMenu.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
}
MobileCollapsibleMenu.storyName = 'Mobile Collapsible'

export const CustomClassesFooterCollapsibleMenu = DefaultTemplate.bind({})
CustomClassesFooterCollapsibleMenu.args = {
  ...defaultProps,
  items: testItems,
  customClasses: {
    gridRow: ['test-grid-row-class'],
    gridCol: ['test-grid-col-class'],
  },
}
CustomClassesFooterCollapsibleMenu.storyName = 'Custom CSS Classes'
