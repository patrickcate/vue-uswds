---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.stories.js
---
import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>.vue'

const defaultProps = {}

export default {
  component: <%= h.changeCase.pascal(component_name) %>,
  title: 'Components/<%= h.changeCase.pascal(component_name) %>',
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
  components: { <%= h.changeCase.pascal(component_name) %> },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<<%= h.changeCase.pascal(component_name) %>>{{ defaultSlot }}</<%= h.changeCase.pascal(component_name) %>>`,
})

export const Default<%= h.changeCase.pascal(component_name).replace('Usa', '') %> = DefaultTemplate.bind({})
Default<%= h.changeCase.pascal(component_name).replace('Usa', '') %>.args = {
  ...defaultProps,
}
Default<%= h.changeCase.pascal(component_name).replace('Usa', '') %>.storyName = 'Default'
