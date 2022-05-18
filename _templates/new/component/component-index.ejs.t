---
to: src/components/index.js
inject: true
append: true
skip_if: '{ default as <%= h.changeCase.pascal(component_name) %> }'
sh: npm run lint
---
export { default as <%= h.changeCase.pascal(component_name) %> } from './<%= h.changeCase.pascal(component_name) %>'
