import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaNavDropdown from './UsaNavDropdown.vue'

describe('UsaNavDropdown', () => {
  it('renders the component', () => {
    cy.mount(UsaNavDropdown, {
      props: {
        id: 'test-dropdown-id',
      },
      slots: {
        default: () => 'Test dropdown items',
      },
      global: {
        provide: {
          registerDropdown: cy.stub().as('registerDropdown'),
          unregisterDropdown: cy.stub().as('unregisterDropdown'),
        },
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('@registerDropdown').should(
      'be.calledWith',
      'test-dropdown-id',
      false,
    )

    cy.get('li.usa-nav__primary-item')
      .as('dropdown')
      .should('contain', 'Test dropdown items')

    cy.get('@wrapper').invoke('unmount')

    cy.get('@unregisterDropdown').should('be.calledWith', 'test-dropdown-id')
  })

  it('registers dropdown as open by default', () => {
    cy.mount(UsaNavDropdown, {
      props: {
        open: true,
      },
      slots: {
        default: () => 'Test dropdown items',
      },
      global: {
        provide: {
          registerDropdown: cy.stub().as('registerDropdown'),
          unregisterDropdown: () => {},
        },
      },
    })

    cy.get('@registerDropdown').should(
      'be.calledWithMatch',
      'vuswds-id-global-usa-nav-dropdown',
      true,
    )
  })
})
