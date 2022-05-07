import UsaButtonGroup from './UsaButtonGroup.vue'
import UsaButtonGroupItem from '@/components/UsaButtonGroupItem'

const defaultProps = {
  segmented: UsaButtonGroup.props.segmented.default,
}

export default {
  component: UsaButtonGroup,
  title: 'Components/UsaButtonGroup',
  argTypes: {
    segmented: {
      control: { type: 'boolean' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    segmented: defaultProps.segmented,
    defaultSlot: `<UsaButtonGroupItem>
      <button class="usa-button">Test button 1</button>
    </UsaButtonGroupItem>
    <UsaButtonGroupItem>
      <button class="usa-button usa-button--outline">Test button 2</button>
    </UsaButtonGroupItem>
    <UsaButtonGroupItem>
      <button class="usa-button usa-button--outline">Test button 3</button>
    </UsaButtonGroupItem>`,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaButtonGroup, UsaButtonGroupItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaButtonGroup :segmented="segmented">${args.defaultSlot}</UsaButtonGroup>`,
})

export const DefaultButtonGroup = DefaultTemplate.bind({})
DefaultButtonGroup.args = {
  ...defaultProps,
}
DefaultButtonGroup.storyName = 'Default'

export const SegmentedButtonGroup = DefaultTemplate.bind({})
SegmentedButtonGroup.args = {
  ...defaultProps,
  segmented: true,
}
SegmentedButtonGroup.storyName = 'Segmented'
