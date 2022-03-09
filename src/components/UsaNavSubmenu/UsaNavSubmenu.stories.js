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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    defaultSlot: '',
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
    <template v-if="${args.cols <= 1 && !!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${args.cols > 1 && !!args.col1Slot}" #col-1>${
    args.col1Slot
  }</template>
    <template v-if="${args.cols > 1 && !!args.col2Slot}" #col-2>${
    args.col2Slot
  }</template>
    <template v-if="${args.cols > 1 && !!args.col3Slot}" #col-3>${
    args.col3Slot
  }</template>
  </UsaNavSubmenu>`,
})

export const DefaultNavSubmenu = DefaultTemplate.bind({})
DefaultNavSubmenu.args = {
  ...defaultProps,
  defaultSlot: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
}
DefaultNavSubmenu.storyName = 'Default'

export const MegamenuNavSubmenu = DefaultTemplate.bind({})
MegamenuNavSubmenu.args = {
  ...defaultProps,
  defaultSlot: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
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
  col1Slot: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
  col2Slot: '<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',
  col3Slot: '<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>',
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
  col1Slot: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
  col2Slot: '<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',
  col3Slot: '<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>',
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
