import UsaSignUp from './UsaSignUp.vue'
import UsaTextInput from '@/components/UsaTextInput'
import UsaButton from '@/components/UsaButton'

const defaultProps = {
  heading: UsaSignUp.props.heading.default,
  headingTag: UsaSignUp.props.headingTag.default,
  customClasses: UsaSignUp.props.customClasses.default(),
}

export default {
  component: UsaSignUp,
  title: 'Components/UsaSignUp',
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
    customClasses: {
      control: { type: 'object' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    headingSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
    headingSlot: '',
  },
}

const defaultSlotContent = `<form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form>`

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaSignUp, UsaTextInput, UsaButton },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaSignUp
    :heading="heading"
    :heading-tag="headingTag"
    :custom-classes="customClasses"
  >
    <template #heading v-if="${!!args.headingSlot}">${
    args.headingSlot
  }</template>
    <template #default v-if="${!!args.defaultSlot}">${
    args.defaultSlot
  }</template>
  </UsaSignUp>`,
})

export const DefaultSignUp = DefaultTemplate.bind({})
DefaultSignUp.args = {
  ...defaultProps,
}
DefaultSignUp.storyName = 'Default'

export const DefaultSlotSignUp = DefaultTemplate.bind({})
DefaultSlotSignUp.args = {
  ...defaultProps,
  defaultSlot: defaultSlotContent,
}
DefaultSlotSignUp.storyName = 'Default Slot'

export const CustomHeadingSignUp = DefaultTemplate.bind({})
CustomHeadingSignUp.args = {
  ...defaultProps,
  heading: 'Custom Heading',
  defaultSlot: defaultSlotContent,
}
CustomHeadingSignUp.storyName = 'Custom Heading'

export const CustomHeadingTagSignUp = DefaultTemplate.bind({})
CustomHeadingTagSignUp.args = {
  ...defaultProps,
  heading: 'Custom Heading Tag',
  headingTag: 'h4',
  defaultSlot: defaultSlotContent,
}
CustomHeadingTagSignUp.storyName = 'Custom Heading Tag'

export const HeadingSlotSignUp = DefaultTemplate.bind({})
HeadingSlotSignUp.args = {
  ...defaultProps,
  headingSlot: '<em>Custom Heading Slot</em>',
  defaultSlot: defaultSlotContent,
}
HeadingSlotSignUp.storyName = 'Heading Slot'

export const CustomClassesSignUp = DefaultTemplate.bind({})
CustomClassesSignUp.args = {
  ...defaultProps,
  defaultSlot: defaultSlotContent,
  customClasses: {
    heading: ['test-heading-class'],
  },
}
CustomClassesSignUp.storyName = 'Custom Classes'
