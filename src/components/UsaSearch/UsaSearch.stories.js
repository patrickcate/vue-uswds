import { ref } from 'vue'
import UsaSearch from './UsaSearch.vue'

const defaultProps = {
  variant: UsaSearch.props.variant.default,
  modelValue: UsaSearch.props.modelValue.default,
  label: UsaSearch.props.label.default,
  buttonLabel: UsaSearch.props.buttonLabel.default,
  inputAttrs: UsaSearch.props.inputAttrs.default(),
  id: UsaSearch.props.id.default,
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
    customClasses: {
      control: { type: 'object' },
    },
    iconSlot: {
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
    customClasses: defaultProps.customClasses,
    iconSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaSearch },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaSearch
    v-model="modelValue"
    :variant="variant"
    :label="label"
    :buttonLabel="buttonLabel"
    :inputAttrs="inputAttrs"
    :id="id"
    :customClasses="customClasses"
  >
    <template v-if="${!!args.iconSlot}" #icon>${args.iconSlot}</template>
  </UsaSearch>`,
})

export const DefaultSearch = DefaultTemplate.bind({})
DefaultSearch.args = {
  ...defaultProps,
}
DefaultSearch.storyName = 'Default'

export const DefaultValueSearch = DefaultTemplate.bind({})
DefaultValueSearch.args = {
  ...defaultProps,
  modelValue: 'Test search term',
}
DefaultValueSearch.storyName = 'Default Value'

export const SmallVariantSearch = DefaultTemplate.bind({})
SmallVariantSearch.args = {
  ...defaultProps,
  variant: 'small',
}
SmallVariantSearch.storyName = 'Small'

export const BigVariantSearch = DefaultTemplate.bind({})
BigVariantSearch.args = {
  ...defaultProps,
  variant: 'big',
}
BigVariantSearch.storyName = 'Big'

export const CustomLabelSearch = DefaultTemplate.bind({})
CustomLabelSearch.args = {
  ...defaultProps,
  label: 'Custom form label',
}
CustomLabelSearch.storyName = 'Custom Form Label'

export const CustomButtonLabelSearch = DefaultTemplate.bind({})
CustomButtonLabelSearch.args = {
  ...defaultProps,
  buttonLabel: 'Submit',
}
CustomButtonLabelSearch.storyName = 'Custom Button Label'

export const InputAttrsSearch = DefaultTemplate.bind({})
InputAttrsSearch.args = {
  ...defaultProps,
  inputAttrs: {
    placeholder: 'Enter search terms',
  },
}
InputAttrsSearch.storyName = 'Custom Input Attributes'

export const IconSlotSearch = DefaultTemplate.bind({})
IconSlotSearch.args = {
  ...defaultProps,
  variant: 'small',
  iconSlot: '<strong>-></strong>',
}
IconSlotSearch.storyName = 'Icon Slot'

export const CustomIdSearch = DefaultTemplate.bind({})
CustomIdSearch.args = {
  ...defaultProps,
  id: 'custom-id',
}
CustomIdSearch.storyName = 'Custom ID'

export const CustomClassesSearch = DefaultTemplate.bind({})
CustomClassesSearch.args = {
  ...defaultProps,
  customClasses: {
    label: ['test-label-class'],
    input: ['test-input-class'],
    button: ['test-button-class'],
    icon: ['test-icon-class'],
  },
}
CustomClassesSearch.storyName = 'Custom CSS Classes'
