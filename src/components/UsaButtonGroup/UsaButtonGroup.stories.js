import UsaButtonGroup from './UsaButtonGroup.vue'
import UsaButtonGroupItem from '@/components/UsaButtonGroupItem'

const defaultProps = {
  segmented: UsaButtonGroup.props.segmented.default,
}

const defaultButtonGroupCodeSnippet = `\n\t<UsaButtonGroupItem>\n\t\t<button type="button" class="usa-button">Test button 1</button>\n\t</UsaButtonGroupItem>\n\t<UsaButtonGroupItem>\n\t\t<button type="button" class="usa-button usa-button--outline">Test button 2</button>\n\t</UsaButtonGroupItem>\n\t<UsaButtonGroupItem>\n\t\t<button type="button" class="usa-button usa-button--outline">Test button 3</button>\n\t</UsaButtonGroupItem>\n`

export default {
  component: UsaButtonGroup,
  subcomponents: { UsaButtonGroupItem },
  title: 'Components/UsaButtonGroup',
  argTypes: {
    segmented: {
      control: { type: 'boolean' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    segmented: defaultProps.segmented,
    default: defaultButtonGroupCodeSnippet,
  },
  render: args => ({
    components: { UsaButtonGroup, UsaButtonGroupItem },
    props: Object.keys(UsaButtonGroup.props),
    setup() {
      return { args }
    },
    template: `<UsaButtonGroup :segmented="args.segmented">${args.default}</UsaButtonGroup>`,
  }),
}

export const DefaultButtonGroup = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaButtonGroup>${defaultButtonGroupCodeSnippet}</UsaButtonGroup>`,
      },
    },
  },
}

export const SegmentedButtonGroup = {
  args: {
    ...defaultProps,
    segmented: true,
  },
  name: 'Segmented',
  parameters: {
    docs: {
      source: {
        code: `<UsaButtonGroup :segmented="true">${defaultButtonGroupCodeSnippet}</UsaButtonGroup>`,
      },
    },
  },
}
