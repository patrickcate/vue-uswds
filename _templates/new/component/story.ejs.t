---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.stories.js
---
import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>.vue'

const defaultProps = {}

export default {
  component: <%= h.changeCase.pascal(component_name) %>,
  title: 'Components/<%= h.changeCase.pascal(component_name) %>',
  argTypes: {
    content: {
      control: { type: 'text' },
    },
  },
  args: {
    content: 'Test',
  },
}

const Template = (args, { argTypes }) => ({
  components: { <%= h.changeCase.pascal(component_name) %> },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: '<<%= h.changeCase.pascal(component_name) %>>{{ content }}</<%= h.changeCase.pascal(component_name) %>>',
})

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
}
