import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaButtonGroupItem from './UsaButtonGroupItem.vue'

describe('UsaButtonGroupItem', () => {
  it('renders the component', () => {
    cy.mount(UsaButtonGroupItem, {
      slots: {
        default: () => h('button', { class: 'usa-button' }, 'Test button'),
      },
    })

    cy.get('li.usa-button-group__item').should('exist')

    cy.get('li.usa-button-group__item button.usa-button').should(
      'contain',
      'Test button',
    )
  })
})
