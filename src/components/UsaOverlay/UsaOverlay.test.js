import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaOverlay from './UsaOverlay.vue'

describe('UsaOverlay', () => {
  it('renders the component', () => {
    cy.mount(UsaOverlay, {}).its('wrapper').as('wrapper')

    cy.get('.usa-overlay').should('not.be.visible')

    cy.get('@wrapper').invoke('setProps', { visible: true })

    cy.get('.usa-overlay').should('be.visible').and('have.class', 'is-visible')
  })
})
