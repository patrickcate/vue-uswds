---
to: src/components/index.js
inject: true
before: '}'
skip_if: '<%= h.changeCase.pascal(component_name) %>,'
---
  <%= h.changeCase.pascal(component_name) %>
