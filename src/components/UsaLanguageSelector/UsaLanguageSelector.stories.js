import { ref } from 'vue'
import UsaLanguageSelector from './UsaLanguageSelector.vue'

const multipleLanguages = [
  {
    to: '/ar',
    langCode: 'ar',
    text: 'Arabic',
    nativeText: 'العربية',
  },
  {
    href: '/zh',
    langCode: 'zh',
    text: 'Chinese - Simplified',
    nativeText: '简体字',
  },
  {
    to: '/en',
    langCode: 'en',
    text: 'English',
  },
  {
    href: '/es',
    langCode: 'es',
    text: 'Spanish',
    nativeText: 'Español',
  },
]

const defaultProps = {
  modelValue: '',
  open: UsaLanguageSelector.props.open.default,
  id: UsaLanguageSelector.props.id.default,
  languages: multipleLanguages,
  variant: UsaLanguageSelector.props.variant.default,
  size: UsaLanguageSelector.props.size.default,
  customClasses: UsaLanguageSelector.props.customClasses.default(),
}

export default {
  component: UsaLanguageSelector,
  title: 'Components/UsaLanguageSelector',
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    open: {
      control: { type: 'boolean' },
      description:
        'Set dropdown to be open by default on initial load. This prop only has affect when there are more than two languages',
    },
    id: {
      control: { type: 'text' },
    },
    languages: {
      control: { type: 'object' },
      description:
        'Languages with a `to` or `href` prop will be rendered as a link. Otherwise will be rendered as a button, which will probably require additional styling to look correct.',
    },
    variant: {
      options: ['', 'unstyled'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['', 'small'],
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
  },
  args: {
    modelValue: defaultProps.modelValue,
    open: defaultProps.open,
    id: defaultProps.id,
    languages: multipleLanguages,
    variant: defaultProps.variant,
    size: defaultProps.size,
    customClasses: defaultProps.customClasses,
    default: '',
  },
  render: args => ({
    components: { UsaLanguageSelector },
    props: Object.keys(UsaLanguageSelector.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <UsaLanguageSelector
        :open="args.open"
        :id="args.id"
        :languages="args.languages"
        :variant="args.variant"
        :size="args.size"
        :customClasses="args.customClasses"
        v-model="args.modelValue"
      >
        <template v-if="!!args.default" #default>${args.default}</template>
      </UsaLanguageSelector>`,
  }),
}

export const DefaultUsaLanguageSelector = {
  args: {
    ...defaultProps,
    modelValue: 'en',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaLanguageSelector :languages="languages"></UsaLanguageSelector>`,
      },
    },
  },
}

export const OpenByDefaultUsaLanguageSelector = {
  args: {
    ...defaultProps,
    modelValue: 'en',
    open: true,
  },
  name: 'Open By Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaLanguageSelector :open="true" :languages="languages"></UsaLanguageSelector>`,
      },
    },
  },
}

export const CustomDropdownTextUsaLanguageSelector = {
  args: {
    ...defaultProps,
    modelValue: 'en',
    default: 'Custom Text',
  },
  name: 'Custom Dropdown Text',
  parameters: {
    docs: {
      source: {
        code: `<UsaLanguageSelector :languages="languages">Custom Text</UsaLanguageSelector>`,
      },
    },
  },
}

export const TwoLanguagesUsaLanguageSelector = {
  args: {
    ...defaultProps,
    modelValue: 'es',
    languages: [
      {
        langCode: 'en',
        text: 'English',
      },
      {
        langCode: 'es',
        nativeText: 'Español',
      },
    ],
  },
  name: 'Two Languages',
  parameters: {
    docs: {
      source: {
        code: `<UsaLanguageSelector v-model="ref('es')" :languages="languages"></UsaLanguageSelector>`,
      },
    },
  },
}
