---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.stories.js
---
import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>.vue';

export default {
  component: <%= h.changeCase.pascal(component_name) %>,
  title: 'Components/<%= h.changeCase.pascal(component_name) %>',
};

const Template = (args, { argTypes }) => ({
  components: { <%= h.changeCase.pascal(component_name) %> },
  props: Object.keys(argTypes),
  template: '<<%= h.changeCase.pascal(component_name) %>></<%= h.changeCase.pascal(component_name) %>>',
});

export const Default = Template.bind({});
Default.args = {};
