---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.test.js
---
import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import <%= h.changeCase.pascal(component_name) %> from './<%= h.changeCase.pascal(component_name) %>.vue'

describe('<%= h.changeCase.pascal(component_name) %>', () => {
  it('renders the component', () => {
    mount(<%= h.changeCase.pascal(component_name) %>, {})
    cy.get('.<%= h.changeCase.kebab(component_name) %>').should('exist')
  })
})
