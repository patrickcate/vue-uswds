import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaIdentifier from './UsaIdentifier.vue'

describe('UsaIdentifier', () => {
  it('renders the component', () => {
    cy.mount(UsaIdentifier, {
      slots: {
        default: () => 'Test',
      },
    })

    cy.get('.usa-identifier').should('contain', 'Test')
  })
})
