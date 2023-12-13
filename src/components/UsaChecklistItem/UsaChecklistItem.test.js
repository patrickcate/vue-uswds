import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaChecklistItem from './UsaChecklistItem.vue'

describe('UsaChecklistItem', () => {
  it('renders the component', () => {
    cy.mount(UsaChecklistItem, {
      props: {
        checked: false,
        ariaLabel: 'invalid',
      },
      slots: {
        default: () => 'Test item 1',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('li.usa-checklist__item')
      .as('item1')
      .should('have.attr', 'aria-label', 'invalid')
      .and('contain', 'Test item 1')

    cy.get('@wrapper').invoke('setProps', { checked: true, ariaLabel: 'valid' })

    cy.get('@item1')
      .should('have.attr', 'aria-label', 'valid')
      .and('have.class', 'usa-checklist__item--checked')
  })
})
