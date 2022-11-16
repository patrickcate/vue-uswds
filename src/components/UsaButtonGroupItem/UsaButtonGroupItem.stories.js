import UsaButtonGroupItem from './UsaButtonGroupItem.vue'

export default {
  component: UsaButtonGroupItem,
  title: 'Components/UsaButtonGroupItem',
  argTypes: {
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    default: 'Test',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaButtonGroupItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<ul class="usa-button-group"><UsaButtonGroupItem><button type="button" class="usa-button">${args.default}</button></UsaButtonGroupItem></ul>`,
})

export const DefaultButtonGroupItem = DefaultTemplate.bind({})
DefaultButtonGroupItem.args = {}
DefaultButtonGroupItem.storyName = 'Default'
