import UsaTooltip from './UsaTooltip.vue'

const defaultProps = {
  label: UsaTooltip.props.label.default,
  id: UsaTooltip.props.id.default,
  wrapperTag: UsaTooltip.props.wrapperTag.default,
  tag: UsaTooltip.props.tag.default,
  position: UsaTooltip.props.position.default,
  customClasses: UsaTooltip.props.customClasses.default(),
}

export default {
  component: UsaTooltip,
  title: 'Components/UsaTooltip',
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    id: {
      control: { type: 'text' },
    },
    wrapperTag: {
      control: { type: 'text' },
    },
    tag: {
      control: { type: 'text' },
    },
    position: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'select',
      },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
    'slot:label': {
      control: { type: 'text' },
      name: 'label',
      table: {
        category: 'slots',
      },
    },
  },
  args: {
    label: defaultProps.label,
    id: defaultProps.id,
    wrapperTag: defaultProps.wrapperTag,
    tag: defaultProps.tag,
    position: defaultProps.position,
    customClasses: defaultProps.customClasses,
    default: '',
    'slot:label': '',
  },
  decorators: [
    () => ({
      template:
        '<div style="display: flex; align-items: center; justify-content: center; height: 100vh;"><div style="margin: auto"><story /></div></div>',
    }),
  ],
  render: args => ({
    components: { UsaTooltip },
    props: Object.keys(UsaTooltip.props),
    setup() {
      return { args }
    },
    template: `<UsaTooltip
      :label="args.label"
      :id="args.id"
      :wrapperTag="args.wrapperTag"
      :tag="args.tag"
      :position="args.position"
      :customClasses="args.customClasses"
    >
      <template v-if="!!args.default" #default>${args.default}</template>
      <template v-if="!!args['slot:label']" #label>${args['slot:label']}</template>
    </UsaTooltip>`,
  }),
}

export const DefaultTooltip = {
  args: {
    ...defaultProps,
    label: 'Test tooltip',
    default: 'Tooltip trigger element',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaTooltip label="Test tooltip">Tooltip trigger element</UsaTooltip>`,
      },
    },
  },
}

export const TopPositionTooltip = {
  args: {
    ...defaultProps,
    label: 'Test tooltip',
    position: 'top',
    default: 'Top tooltip',
  },
  name: 'Top Position',
  parameters: {
    docs: {
      source: {
        code: `<UsaTooltip label="Test tooltip" position="top">Top tooltip</UsaTooltip>`,
      },
    },
  },
}

export const BottomPositionTooltip = {
  args: {
    ...defaultProps,
    label: 'Test tooltip',
    position: 'bottom',
    default: 'Bottom tooltip',
  },
  name: 'Bottom Position',
  parameters: {
    docs: {
      source: {
        code: `<UsaTooltip label="Test tooltip" position="bottom">Bottom tooltip</UsaTooltip>`,
      },
    },
  },
}

export const LeftPositionTooltip = {
  args: {
    ...defaultProps,
    label: 'Test tooltip',
    position: 'left',
    default: 'Left tooltip',
  },
  name: 'Left Position',
  parameters: {
    docs: {
      source: {
        code: `<UsaTooltip label="Test tooltip" position="left">Left tooltip</UsaTooltip>`,
      },
    },
  },
}

export const RightPositionTooltip = {
  args: {
    ...defaultProps,
    label: 'Test tooltip',
    position: 'right',
    default: 'Right tooltip',
  },
  name: 'Right Position',
  parameters: {
    docs: {
      source: {
        code: `<UsaTooltip label="Test tooltip" position="right">Right tooltip</UsaTooltip>`,
      },
    },
  },
}

export const CustomIdTooltip = {
  args: {
    ...defaultProps,
    label: 'Test tooltip',
    id: 'test-custom-id',
    default: 'Tooltip using custom ID',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaTooltip label="Test tooltip" id="test-custom-id">Tooltip using custom ID</UsaTooltip>`,
      },
    },
  },
}

export const CustomWrapperComponentTagsTooltip = {
  args: {
    ...defaultProps,
    label: 'Test tooltip',
    wrapperTag: 'div',
    tag: 'abbr',
    default: 'Custom tags tooltip',
  },
  name: 'Custom Wrapper and Component tags',
  parameters: {
    docs: {
      source: {
        code: `<UsaTooltip label="Test tooltip" wrapper-tag="div" tag="abbr">Custom tags tooltip</UsaTooltip>`,
      },
    },
  },
}

export const LabelSlotTooltip = {
  args: {
    ...defaultProps,
    'slot:label': '<em>Label w/ HTML</em>',
    default: 'Tooltip using label slot',
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTooltip label="Test tooltip"><template #label><em>Label w/ HTML</em></template><template #default>Tooltip using label slot</template></UsaTooltip>`,
      },
    },
  },
}

export const CustomClassesTooltip = {
  args: {
    ...defaultProps,
    label: 'Test tooltip',
    default: 'Uses custom CSS classes',
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaTooltip label="Test tooltip" :custom-classes="{ component: ['test-component-class'], label: ['test-label-class'] }">Uses custom CSS classes</UsaTooltip>`,
      },
    },
  },
}
