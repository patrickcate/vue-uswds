import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { ref } from 'vue'
import UsaChecklist from './UsaChecklist.vue'

describe('UsaChecklist', () => {
  it('renders the component', () => {
    mount(UsaChecklist, {})

    cy.get('ul.usa-checklist').should('be.empty')
  })

  it('shows slot content', () => {
    mount(UsaChecklist, {
      slots: {
        default: () => 'Test slot content',
      },
    })

    cy.get('.usa-checklist').should('contain', 'Test slot content')
  })

  it('shows checked items', () => {
    const testItems = ref([
      {
        id: 'item1',
        checked: false,
        text: 'Test item 1',
      },
      {
        id: 'item2',
        checked: true,
        text: 'Test item 2',
      },
      {
        checked: false,
        text: 'Test item 3',
      },
    ])

    mount(UsaChecklist, {
      props: {
        items: testItems.value,
      },
    })

    cy.get('.usa-checklist li').should('have.length', 3)

    cy.get('li:nth-of-type(1)')
      .should('have.attr', 'aria-checked', 'false')
      .and('contain', 'Test item 1')

    cy.get('li:nth-of-type(2)')
      .should('have.class', 'usa-checklist__item--checked')
      .and('have.attr', 'aria-checked', 'true')
      .and('contain', 'Test item 2')

    cy.get('li:nth-of-type(3)')
      .as('item3')
      .should('have.attr', 'aria-checked', 'false')
      .and('contain', 'Test item 3')
      .then(() => {
        testItems.value[2].checked = true

        cy.get('@item3')
          .should('have.attr', 'aria-checked', 'true')
          .and('have.class', 'usa-checklist__item--checked')
      })
  })
})
