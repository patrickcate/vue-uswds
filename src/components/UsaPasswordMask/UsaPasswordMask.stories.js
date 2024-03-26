import { ref } from 'vue'
import UsaPasswordMask from './UsaPasswordMask.vue'
import UsaTextInput from '@/components/UsaTextInput'

const defaultProps = {
  showText: UsaPasswordMask.props.showText.default,
  hideText: UsaPasswordMask.props.hideText.default,
}

export default {
  component: UsaPasswordMask,
  title: 'Components/UsaPasswordMask',
  argTypes: {
    showText: {
      control: { type: 'text' },
    },
    hideText: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    default: '',
  },
  decorators: [
    () => ({
      template: '<form class="usa-form usa-form--large"><story /></form>',
    }),
  ],
  render: args => ({
    components: { UsaPasswordMask, UsaTextInput },
    props: Object.keys(UsaPasswordMask.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaPasswordMask
      :show-text="args.showText"
      :hide-text="args.hideText"
      v-slot="{ type }"
    >${args.default}</UsaPasswordMask>`,
  }),
}

export const DefaultPasswordMask = {
  args: {
    ...defaultProps,
    default:
      '<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaPasswordMask><UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput></UsaPasswordMask>`,
      },
    },
  },
}

export const CustomShowHideTextPasswordMask = {
  args: {
    ...defaultProps,
    showText: 'Show typing',
    hideText: 'Hide typing',
    default:
      '<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>',
  },
  name: 'Custom Show/Hide Text',
  parameters: {
    docs: {
      source: {
        code: `<UsaPasswordMask :show-text="showText" :hide-text="hideText"><UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput></UsaPasswordMask>`,
      },
    },
  },
}
