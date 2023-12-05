---
to: src/components/index.js
inject: true
before: '\nexport {'
skip_if: 'import <%= h.changeCase.pascal(component_name) %>'
sh: npx eslint --fix src/components/index.js
---
import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>'
