import UsaMediaBlock from './UsaMediaBlock.vue'

const defaultProps = {
  customClasses: UsaMediaBlock.props.customClasses.default(),
}

export default {
  component: UsaMediaBlock,
  title: 'Components/UsaMediaBlock',
  argTypes: {
    customClasses: {
      control: { type: 'object' },
    },
    media: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    customClasses: defaultProps.customClasses,
    media: 'Media',
    default: 'Body',
  },
  render: args => ({
    components: { UsaMediaBlock },
    props: Object.keys(UsaMediaBlock.props),
    setup() {
      return { args }
    },
    template: `
  <UsaMediaBlock :custom-classes="args.customClasses">
    <template v-if="!!args.media" #media>${args.media}</template>
    <template v-if="!!args.default" #default>${args.default}</template>
  </UsaMediaBlock>`,
  }),
}

export const DefaultMediaBlock = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaMediaBlock><template #media>Media</template><template #default>Body</template></UsaMediaBlock>`,
      },
    },
  },
}

export const CustomClassesMediaBlock = {
  args: {
    ...defaultProps,
    customClasses: {
      media: ['test-media-class'],
      body: ['test-body-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaMediaBlock :custom-classes="{media: ['test-media-class'], body: ['test-body-class']}"><template #media>Media</template><template #default>Body</template></UsaMediaBlock>`,
      },
    },
  },
}
