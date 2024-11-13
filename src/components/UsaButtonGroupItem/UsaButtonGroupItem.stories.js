import UsaButtonGroupItem from './UsaButtonGroupItem.vue'
import UsaButtonGroup from '../UsaButtonGroup/UsaButtonGroup.vue'

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
  render: args => ({
    components: { UsaButtonGroupItem, UsaButtonGroup },
    props: [],
    setup() {
      return { args }
    },
    template: `<UsaButtonGroup><UsaButtonGroupItem><button type="button" class="usa-button">${args.default}</button></UsaButtonGroupItem></UsaButtonGroup>`,
  }),
}

export const DefaultButtonGroupItem = {
  args: {},
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaButtonGroup>\n\t<UsaButtonGroupItem>\n\t\t<button type="button" class="usa-button">Test</button>\n\t</UsaButtonGroupItem>\n</UsaButtonGroup>`,
      },
    },
  },
}
