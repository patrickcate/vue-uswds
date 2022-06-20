import UsaPasswordMask from './UsaPasswordMask.vue'
import { ref } from 'vue'
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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    defaultSlot: '',
  },
  decorators: [
    () => ({
      template: '<form class="usa-form usa-form--large"><story /></form>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaPasswordMask, UsaTextInput },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaPasswordMask
    :show-text="showText"
    :hide-text="hideText"
    v-slot="{ type }"
  >${args.defaultSlot}</UsaPasswordMask>`,
})

export const DefaultPasswordMask = DefaultTemplate.bind({})
DefaultPasswordMask.args = {
  ...defaultProps,
  defaultSlot:
    '<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>',
}
DefaultPasswordMask.storyName = 'Default'

export const CustomShowHideTextPasswordMask = DefaultTemplate.bind({})
CustomShowHideTextPasswordMask.args = {
  ...defaultProps,
  showText: 'Show typing',
  hideText: 'Hide typing',
  defaultSlot:
    '<UsaTextInput v-model="modelValue" label="Password" :type="type"></UsaTextInput>',
}
CustomShowHideTextPasswordMask.storyName = 'Custom Show/Hide Text'
