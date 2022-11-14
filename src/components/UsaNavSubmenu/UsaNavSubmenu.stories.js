import UsaNavSubmenu from './UsaNavSubmenu.vue'
import { ref, reactive } from 'vue'

const defaultProps = {
  cols: UsaNavSubmenu.props.cols.default,
  customClasses: UsaNavSubmenu.props.customClasses.default(),
}

export default {
  component: UsaNavSubmenu,
  title: 'Components/UsaNavSubmenu',
  argTypes: {
    cols: {
      control: { type: 'number' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    cols: defaultProps.cols,
    customClasses: defaultProps.customClasses,
    default: '',
  },
  decorators: [
    () => ({
      template: '<ul class="usa-dark-background"><story /></ul>',
      provide: {
        dropdownId: ref('sb-dropdown-id'),
        dropdownItems: reactive({
          'sb-dropdown-id': true,
        }),
      },
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaNavSubmenu },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaNavSubmenu
    :cols="cols"
    :custom-classes="customClasses"
  >
    <template v-if="${args.cols <= 1 && !!args.default}" #default>${
    args.default
  }</template>
    <template v-if="${args.cols > 1 && !!args.col1}" #col-1>${
    args.col1
  }</template>
    <template v-if="${args.cols > 1 && !!args.col2}" #col-2>${
    args.col2
  }</template>
    <template v-if="${args.cols > 1 && !!args.col3}" #col-3>${
    args.col3
  }</template>
  </UsaNavSubmenu>`,
})

export const DefaultNavSubmenu = DefaultTemplate.bind({})
DefaultNavSubmenu.args = {
  ...defaultProps,
  default: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
}
DefaultNavSubmenu.storyName = 'Default'

export const MegamenuNavSubmenu = DefaultTemplate.bind({})
MegamenuNavSubmenu.args = {
  ...defaultProps,
  default: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
}
MegamenuNavSubmenu.decorators = [
  () => ({
    template: '<story />',
    provide: {
      dropdownId: ref('sb-dropdown-id'),
      dropdownItems: reactive({
        'sb-dropdown-id': true,
      }),
      isMegamenu: true,
    },
  }),
]
MegamenuNavSubmenu.storyName = 'Megamenu'

export const MultipleColsMegamenuNavSubmenu = DefaultTemplate.bind({})
MultipleColsMegamenuNavSubmenu.args = {
  ...defaultProps,
  cols: 3,
  col1: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
  col2: '<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',
  col3: '<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>',
}
MultipleColsMegamenuNavSubmenu.decorators = [
  () => ({
    template: '<story />',
    provide: {
      dropdownId: ref('sb-dropdown-id'),
      dropdownItems: reactive({
        'sb-dropdown-id': true,
      }),
      isMegamenu: true,
    },
  }),
]
MultipleColsMegamenuNavSubmenu.storyName = 'Multiple Columns Megamenu'

export const CustomClassesNavSubmenu = DefaultTemplate.bind({})
CustomClassesNavSubmenu.args = {
  ...defaultProps,
  cols: 3,
  customClasses: {
    gridRow: ['test-row'],
    gridCol: ['test-col'],
  },
  col1: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
  col2: '<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',
  col3: '<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>',
}
CustomClassesNavSubmenu.decorators = [
  () => ({
    template: '<story />',
    provide: {
      dropdownId: ref('sb-dropdown-id'),
      dropdownItems: reactive({
        'sb-dropdown-id': true,
      }),
      isMegamenu: true,
    },
  }),
]
CustomClassesNavSubmenu.storyName = 'Custom Classes'
