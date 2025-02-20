---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.stories.js
---
import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>.vue'

const defaultProps = {}

export default {
  component: <%= h.changeCase.pascal(component_name) %>,
  title: 'Components/<%= h.changeCase.pascal(component_name) %>',
  argTypes: {
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    default: 'Test',
  },
  render: args => ({
    components: { <%= h.changeCase.pascal(component_name) %> },
    props: Object.keys(<%= h.changeCase.pascal(component_name) %>.props),
    setup() {
      return { args }
    },
    template: `
    <<%= h.changeCase.pascal(component_name) %>></<%= h.changeCase.pascal(component_name) %>>`,
  }),
}

export const Default<%= h.changeCase.pascal(component_name) %> = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<<%= h.changeCase.pascal(component_name) %>></<%= h.changeCase.pascal(component_name) %>>`,
      },
    },
  },
}
