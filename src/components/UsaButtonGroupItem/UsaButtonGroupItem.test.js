import '@module/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import { mount } from '@cypress/vue'
import UsaButtonGroupItem from './UsaButtonGroupItem.vue'

describe('UsaButtonGroupItem', () => {
  it.only('renders the component', () => {
    mount(UsaButtonGroupItem, {
      slots: {
        default: () => h('button', { class: 'usa-button' }, 'Test button'),
      },
    })

    cy.get('li.usa-button-group__item').should('exist')

    cy.get('li.usa-button-group__item button.usa-button').should(
      'contain',
      'Test button'
    )
  })
})
