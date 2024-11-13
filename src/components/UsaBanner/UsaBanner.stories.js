import UsaBanner from './UsaBanner.vue'

const defaultProps = {
  open: UsaBanner.props.open.default,
  id: UsaBanner.props.id.default,
  ariaLabel: UsaBanner.props.ariaLabel.default,
  headerText: UsaBanner.props.headerText.default,
  actionText: UsaBanner.props.actionText.default,
  customClasses: UsaBanner.props.customClasses.default(),
}

export default {
  component: UsaBanner,
  title: 'Components/UsaBanner',
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Set banner to be open by default on initial load.',
    },
    id: {
      control: { type: 'text' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
    headerText: {
      control: { type: 'text' },
    },
    actionText: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    flag: {
      control: { type: 'text' },
    },
    button: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    open: defaultProps.open,
    id: defaultProps.id,
    ariaLabel: defaultProps.ariaLabel,
    headerText: defaultProps.headerText,
    actionText: defaultProps.actionText,
    customClasses: defaultProps.customClasses,
    flag: '',
    button: '',
    default: '',
  },
  render: args => ({
    components: { UsaBanner },
    props: Object.keys(UsaBanner.props),
    setup() {
      return { args }
    },
    template: `
    <UsaBanner
      :id="args.id"
      :open="args.open"
      :aria-label="args.ariaLabel"
      :header-text="args.headerText"
      :action-text="args.actionText"
      :custom-classes="args.customClasses"
    >
      <template v-if="args.flag" #flag>${args.flag}</template>
      <template v-if="args.button" #button="{ isOpen, actionText }">${args.button}</template>
      <template v-if="args.default" #default>${args.default}</template>
    </UsaBanner>`,
  }),
}

export const DefaultBanner = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaBanner></UsaBanner>`,
      },
    },
  },
}

export const DefaultOpenBanner = {
  args: {
    ...defaultProps,
    open: true,
  },
  name: 'Open by Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaBanner :open="true"></UsaBanner>`,
      },
    },
  },
}

export const CustomIdBanner = {
  args: {
    ...defaultProps,
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaBanner id="custom-id"></UsaBanner>`,
      },
    },
  },
}

export const FlagSlotBanner = {
  args: {
    ...defaultProps,
    flag: 'Custom Flag Icon',
  },
  name: 'Flag Slot',
  parameters: {
    docs: {
      source: {
        code: `
          <UsaBanner>\n\t<template #flag>Custom Flag Icon</template>\n</UsaBanner>`,
      },
    },
  },
}

export const ButtonSlotBanner = {
  args: {
    ...defaultProps,
    button: 'Custom Button Text',
  },
  name: 'Button Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaBanner>\n\t<template #button>Custom Button</template>\n</UsaBanner>`,
      },
    },
  },
}

export const DefaultSlotBanner = {
  args: {
    ...defaultProps,
    open: true,
    default: 'Custom Banner Content',
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaBanner>Custom Banner Content</UsaBanner>`,
      },
    },
  },
}

export const CustomClassesBanner = {
  args: {
    ...defaultProps,
    customClasses: {
      accordion: ['custom-accordion-class'],
      bannerHeader: ['custom-banner-header-class'],
      bannerInner: ['custom-banner-inner-class'],
      button: ['custom-button-class'],
      bannerContent: ['custom-banner-content-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaBanner :custom-classes="{ accordion: ['custom-accordion-class'], bannerHeader: ['custom-banner-header-class'], bannerInner: ['custom-banner-inner-class'], button: ['custom-button-class'], bannerContent: ['custom-banner-content-class'] }">Custom Classes</UsaBanner>`,
      },
    },
  },
}

export const AriaLabelBanner = {
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label',
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaBanner aria-label="Custom aria label"></UsaBanner>`,
      },
    },
  },
}

export const HeaderTextBanner = {
  args: {
    ...defaultProps,
    headerText: 'Custom header text',
  },
  name: 'Custom Header Text',
  parameters: {
    docs: {
      source: {
        code: `<UsaBanner header-text="Custom Header Text"></UsaBanner>`,
      },
    },
  },
}

export const ActionTextBanner = {
  args: {
    ...defaultProps,
    actionText: 'Custom action text',
  },
  name: 'Custom Action Text',
  parameters: {
    docs: {
      source: {
        code: `<UsaBanner action-text="Custom action text"></UsaBanner>`,
      },
    },
  },
}
