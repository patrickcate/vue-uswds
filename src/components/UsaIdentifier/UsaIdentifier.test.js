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
