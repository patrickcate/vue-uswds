import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaCollection from './UsaCollection.vue'

describe('UsaCollection', () => {
  it('renders the component', () => {
    mount(UsaCollection, {})

    cy.get('.usa-collection').should('exist')
  })
})
