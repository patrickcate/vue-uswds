import UsaFooterMenu from './UsaFooterMenu.vue'

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

const defaultProps = {
  items: UsaFooterMenu.props.items.default(),
  customClasses: UsaFooterMenu.props.customClasses.default(),
}

export default {
  component: UsaFooterMenu,
  title: 'Components/UsaFooterMenu',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    customClasses: {
      control: { type: 'object' },
    },
  },
  args: {
    items: defaultProps.items,
    customClasses: defaultProps.customClasses,
  },
  decorators: [
    () => ({
      template:
        '<div class="usa-footer"><div class="usa-footer__nav"><story /></div></div>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterMenu },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterMenu
    :items="items"
    :custom-classes="customClasses"
  ></UsaFooterMenu>`,
})

export const DefaultFooterMenu = DefaultTemplate.bind({})
DefaultFooterMenu.args = {
  ...defaultProps,
  items: testItems,
}
DefaultFooterMenu.storyName = 'Default'

export const CustomClassesFooterMenu = DefaultTemplate.bind({})
CustomClassesFooterMenu.args = {
  ...defaultProps,
  items: testItems,
  customClasses: {
    gridRow: ['test-grid-row-class'],
    gridCol: ['test-grid-col-class'],
  },
}
CustomClassesFooterMenu.storyName = 'Custom Classes'
