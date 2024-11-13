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
  render: args => ({
    components: { UsaNavSubmenu },
    props: Object.keys(UsaNavSubmenu.props),
    setup() {
      return { args }
    },
    template: `<UsaNavSubmenu
    :cols="args.cols"
    :custom-classes="args.customClasses"
  >
    <template v-if="args.cols <= 1 && !!args.default" #default>${args.default}</template>
    <template v-if="args.cols > 1 && !!args.col1" #col-1>${args.col1}</template>
    <template v-if="args.cols > 1 && !!args.col2" #col-2>${args.col2}</template>
    <template v-if="args.cols > 1 && !!args.col3" #col-3>${args.col3}</template>
  </UsaNavSubmenu>`,
  }),
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

export const DefaultNavSubmenu = {
  args: {
    ...defaultProps,
    default: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavSubmenu><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></UsaNavSubmenu>`,
      },
    },
  },
}

export const MegamenuNavSubmenu = {
  args: {
    ...defaultProps,
    default: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
  },
  decorators: [
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
  ],
  name: 'Megamenu',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavSubmenu><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></UsaNavSubmenu>`,
      },
    },
  },
}

export const MultipleColsMegamenuNavSubmenu = {
  args: {
    ...defaultProps,
    cols: 3,
    col1: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
    col2: '<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',
    col3: '<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>',
  },
  decorators: [
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
  ],
  name: 'Multiple Columns Megamenu',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavSubmenu :cols="3"><template #col1><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></template><template #col2><li class="usa-nav__submenu-item"><a href="">Item 2</a></li></template><template #col3><li class="usa-nav__submenu-item"><a href="">Item 3</a></li></template></UsaNavSubmenu>`,
      },
    },
  },
}

export const CustomClassesNavSubmenu = {
  args: {
    ...defaultProps,
    cols: 3,
    customClasses: {
      gridRow: ['test-row'],
      gridCol: ['test-col'],
    },
    col1: '<li class="usa-nav__submenu-item"><a href="">Item 1</a></li>',
    col2: '<li class="usa-nav__submenu-item"><a href="">Item 2</a></li>',
    col3: '<li class="usa-nav__submenu-item"><a href="">Item 3</a></li>',
  },
  decorators: [
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
  ],
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavSubmenu :cols="3" :custom-classes="{ gridRow: ['test-row'], gridCol: ['test-col'] }"><template #col1><li class="usa-nav__submenu-item"><a href="">Item 1</a></li></template><template #col2><li class="usa-nav__submenu-item"><a href="">Item 2</a></li></template><template #col3><li class="usa-nav__submenu-item"><a href="">Item 3</a></li></template></UsaNavSubmenu>`,
      },
    },
  },
}
