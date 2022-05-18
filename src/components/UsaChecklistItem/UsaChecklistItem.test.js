import { mount } from '@cypress/vue'
import UsaChecklistItem from './UsaChecklistItem.vue'

describe('UsaChecklistItem', () => {
  it('renders the component', () => {
    mount(UsaChecklistItem, {
      slots: {
        default: () => 'Test item 1',
      },
    }).as('wrapper')

    cy.get('li.usa-checklist__item')
      .as('item1')
      .should('have.attr', 'aria-checked', 'false')
      .and('contain', 'Test item 1')

    cy.get('@wrapper').invoke('setProps', { checked: true })

    cy.get('@item1')
      .should('have.attr', 'aria-checked', 'true')
      .and('have.class', 'usa-checklist__item--checked')
  })
})
