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
      table: {
        category: 'props',
      },
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
    default: {
      control: { type: 'text' },
    },
    'slot:heading': {
      control: { type: 'text' },
      name: 'heading',
      table: {
        category: 'slots',
      },
    },
  },
  args: {
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
    default: '',
    'slot:heading': '',
  },
}

const defaultContent = `<form class="usa-form" @submit.prevent>
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
    <template #heading v-if="${!!args['slot:heading']}">${
    args['slot:heading']
  }</template>
    <template #default v-if="${!!args.default}">${args.default}</template>
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
  default: defaultContent,
}
DefaultSlotSignUp.storyName = 'Default Slot'

export const CustomHeadingSignUp = DefaultTemplate.bind({})
CustomHeadingSignUp.args = {
  ...defaultProps,
  heading: 'Custom Heading',
  default: defaultContent,
}
CustomHeadingSignUp.storyName = 'Custom Heading'

export const CustomHeadingTagSignUp = DefaultTemplate.bind({})
CustomHeadingTagSignUp.args = {
  ...defaultProps,
  heading: 'Custom Heading Tag',
  headingTag: 'h4',
  default: defaultContent,
}
CustomHeadingTagSignUp.storyName = 'Custom Heading Tag'

export const HeadingSlotSignUp = DefaultTemplate.bind({})
HeadingSlotSignUp.args = {
  ...defaultProps,
  'slot:heading': '<em>Custom Heading Slot</em>',
  default: defaultContent,
}
HeadingSlotSignUp.storyName = 'Heading Slot'

export const CustomClassesSignUp = DefaultTemplate.bind({})
CustomClassesSignUp.args = {
  ...defaultProps,
  default: defaultContent,
  customClasses: {
    heading: ['test-heading-class'],
  },
}
CustomClassesSignUp.storyName = 'Custom Classes'
