---
to: src/components/<%= h.changeCase.pascal(component_name) %>/index.js
---
import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>.vue'

export { <%= h.changeCase.pascal(component_name) %> }
export default <%= h.changeCase.pascal(component_name) %>
