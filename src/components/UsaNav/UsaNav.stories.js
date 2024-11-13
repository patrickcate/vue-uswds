import UsaNav from './UsaNav.vue'
import UsaNavbar from '@/components/UsaNavbar'

const defaultProps = {
  ariaLabel: UsaNav.props.ariaLabel.default,
  closeButtonLabel: UsaNav.props.closeButtonLabel.default,
  customClasses: UsaNav.props.customClasses.default(),
}

export default {
  component: UsaNav,
  title: 'Components/UsaNav',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    closeButtonLabel: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    primary: {
      control: { type: 'text' },
    },
    secondary: {
      control: { type: 'text' },
    },
    'close-button': {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    closeButtonLabel: defaultProps.closeButtonLabel,
    customClasses: defaultProps.customClasses,
    primary: '<div>Primary nav here</div>',
    secondary: '<div>Secondary nav here</div>',
    'close-button': '',
  },
  decorators: [
    () => ({
      components: { UsaNavbar },
      template: '<UsaNavbar><story /></UsaNavbar>',
    }),
  ],
  render: args => ({
    components: { UsaNav },
    props: Object.keys(UsaNav.props),
    setup() {
      return { args }
    },
    template: `<UsaNav
    :aria-label="args.ariaLabel"
    :close-button-label="args.closeButtonLabel"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.primary" #primary>${args.primary}</template>
    <template v-if="!!args.secondary" #secondary>${args.secondary}</template>
    <template v-if="!!args['close-button']" #close-button="{closeButtonLabel}">${args['close-button']}</template>
  </UsaNav>`,
  }),
}

export const DefaultNav = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNav><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>`,
      },
    },
  },
}

export const AriaLabelNav = {
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label',
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaNav aria-label="Custom aria label"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>`,
      },
    },
  },
}

export const CloseButtonLabelNav = {
  args: {
    ...defaultProps,
    closeButtonLabel: 'Custom aria label',
  },
  name: 'Close Button Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaNav close-button-label="Custom aria label"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>`,
      },
    },
  },
}

export const CloseButtonSlotNav = {
  args: {
    ...defaultProps,
    'close-button': '<em>Close Me</em>',
  },
  name: 'Close Button Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaNav><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template><template #close-button="><em>Close Me</em></template></UsaNav>`,
      },
    },
  },
}

export const CustomClassesNav = {
  args: {
    ...defaultProps,
    customClasses: {
      button: ['custom-button-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaNav :custom-classes="{ button: ['custom-button-class'] }"><template #primary>Primary nav here</template><template #secondary>Secondary nav here</template></UsaNav>`,
      },
    },
  },
}
