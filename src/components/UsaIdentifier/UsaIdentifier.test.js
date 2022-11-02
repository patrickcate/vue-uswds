import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaIdentifier from './UsaIdentifier.vue'

describe('UsaIdentifier', () => {
  it('renders the component', () => {
    mount(UsaIdentifier, {
      slots: {
        default: () => 'Test',
      },
    })

    cy.get('.usa-identifier').should('contain', 'Test')
  })
})
