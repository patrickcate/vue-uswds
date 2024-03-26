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
  render: args => ({
    components: { UsaSignUp, UsaTextInput, UsaButton },
    props: Object.keys(UsaSignUp.props),
    setup() {
      return { args }
    },
    template: `<UsaSignUp
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :custom-classes="args.customClasses"
  >
    <template #heading v-if="!!args['slot:heading']">${args['slot:heading']}</template>
    <template #default v-if="!!args.default">${args.default}</template>
  </UsaSignUp>`,
  }),
}

const defaultContent = `<form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form>`

export const DefaultSignUp = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaSignUp></UsaSignUp>`,
      },
    },
  },
}

export const DefaultSlotSignUp = {
  args: {
    ...defaultProps,
    default: defaultContent,
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSignUp><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>`,
      },
    },
  },
}

export const CustomHeadingSignUp = {
  args: {
    ...defaultProps,
    heading: 'Custom Heading',
    default: defaultContent,
  },
  name: 'Custom Heading',
  parameters: {
    docs: {
      source: {
        code: `<UsaSignUp heading="Custom Heading"><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>`,
      },
    },
  },
}

export const CustomHeadingTagSignUp = {
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    headingTag: 'h4',
    default: defaultContent,
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaSignUp heading="Custom Heading Tag" heading-tag="h4"><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>`,
      },
    },
  },
}

export const HeadingSlotSignUp = {
  args: {
    ...defaultProps,
    'slot:heading': '<em>Custom Heading Slot</em>',
    default: defaultContent,
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSignUp><template #heading><em>Custom Heading Slot</em></template><template #default><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></template></UsaSignUp>`,
      },
    },
  },
}

export const CustomClassesSignUp = {
  args: {
    ...defaultProps,
    default: defaultContent,
    customClasses: {
      heading: ['test-heading-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaSignUp :custom-classes="{heading: ['test-heading-class']}"><form class="usa-form" @submit.prevent>
<UsaTextInput label="Your email address" type="email"></UsaTextInput>
<UsaButton type="submit">Sign up</UsaButton>
</form></UsaSignUp>`,
      },
    },
  },
}
