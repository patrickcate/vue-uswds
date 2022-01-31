import UsaButtonGroupItem from './UsaButtonGroupItem.vue'

export default {
  component: UsaButtonGroupItem,
  title: 'Components/UsaButtonGroupItem',
  argTypes: {
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    defaultSlot: 'Test',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaButtonGroupItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<ul class="usa-button-group"><UsaButtonGroupItem><button class="usa-button">${args.defaultSlot}</button></UsaButtonGroupItem></ul>`,
})

export const DefaultButtonGroupItem = DefaultTemplate.bind({})
DefaultButtonGroupItem.args = {}
DefaultButtonGroupItem.storyName = 'Default'
