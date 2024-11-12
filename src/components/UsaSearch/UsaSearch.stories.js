import { ref } from 'vue'
import UsaSearch from './UsaSearch.vue'

const defaultProps = {
  variant: UsaSearch.props.variant.default,
  modelValue: UsaSearch.props.modelValue.default,
  label: UsaSearch.props.label.default,
  buttonLabel: UsaSearch.props.buttonLabel.default,
  inputAttrs: UsaSearch.props.inputAttrs.default(),
  id: UsaSearch.props.id.default,
  name: UsaSearch.props.name.default,
  customClasses: UsaSearch.props.customClasses.default(),
}

export default {
  component: UsaSearch,
  title: 'Components/UsaSearch',
  argTypes: {
    variant: {
      options: ['small', 'medium', 'big'],
      control: {
        type: 'select',
      },
    },
    modelValue: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    buttonLabel: {
      control: { type: 'text' },
    },
    inputAttrs: {
      control: { type: 'object' },
    },
    id: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    icon: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: defaultProps.variant,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    buttonLabel: defaultProps.buttonLabel,
    inputAttrs: defaultProps.inputAttrs,
    id: defaultProps.id,
    name: defaultProps.name,
    customClasses: defaultProps.customClasses,
    icon: '',
  },
  render: args => ({
    components: { UsaSearch },
    props: Object.keys(UsaSearch.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaSearch
    v-model="args.modelValue"
    :variant="args.variant"
    :label="args.label"
    :buttonLabel="args.buttonLabel"
    :inputAttrs="args.inputAttrs"
    :id="args.id"
    :name="args.name"
    :customClasses="args.customClasses"
  >
    <template v-if="!!args.icon" #icon>${args.icon}</template>
  </UsaSearch>`,
  }),
}

export const DefaultSearch = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch />`,
      },
    },
  },
}

export const DefaultValueSearch = {
  args: {
    ...defaultProps,
    modelValue: 'Test search term',
  },
  name: 'Default Value',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch v-model="ref('Test search term')"></UsaSearch>`,
      },
    },
  },
}

export const SmallVariantSearch = {
  args: {
    ...defaultProps,
    variant: 'small',
  },
  name: 'Small',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch :variant="small"></UsaSearch>`,
      },
    },
  },
}

export const BigVariantSearch = {
  args: {
    ...defaultProps,
    variant: 'big',
  },
  name: 'Big',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch :variant="big"></UsaSearch>`,
      },
    },
  },
}

export const CustomLabelSearch = {
  args: {
    ...defaultProps,
    label: 'Custom form label',
  },
  name: 'Custom Form Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch label="Custom form label"></UsaSearch>`,
      },
    },
  },
}

export const CustomButtonLabelSearch = {
  args: {
    ...defaultProps,
    buttonLabel: 'Submit',
  },
  name: 'Custom Button Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch button-label="Submit"></UsaSearch>`,
      },
    },
  },
}

export const CustomNameSearch = {
  args: {
    ...defaultProps,
    name: 'custom-name-attribute',
  },
  name: 'Custom Name Attribute',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch name="custom-name-attribute"></UsaSearch>`,
      },
    },
  },
}

export const InputAttrsSearch = {
  args: {
    ...defaultProps,
    inputAttrs: {
      placeholder: 'Enter search terms',
    },
  },
  name: 'Custom Input Attributes',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch :input-attrs="{ placeholder: 'Enter search terms'} "></UsaSearch>`,
      },
    },
  },
}

export const IconSlotSearch = {
  args: {
    ...defaultProps,
    variant: 'small',
    icon: '<strong>-></strong>',
  },
  name: 'Icon Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch :variant="small"><template #icon><strong>-></strong></template></UsaSearch>`,
      },
    },
  },
}

export const CustomIdSearch = {
  args: {
    ...defaultProps,
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch id="custom-id"></UsaSearch>`,
      },
    },
  },
}

export const CustomClassesSearch = {
  args: {
    ...defaultProps,
    customClasses: {
      label: ['test-label-class'],
      input: ['test-input-class'],
      button: ['test-button-class'],
      icon: ['test-icon-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaSearch :custom-classes="{ label: ['test-label-class'], input: ['test-input-class'], button: ['test-button-class'], icon: ['test-icon-class'] }"></UsaSearch>`,
      },
    },
  },
}
