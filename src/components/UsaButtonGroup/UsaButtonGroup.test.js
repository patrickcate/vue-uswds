import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaButtonGroup from './UsaButtonGroup.vue'
import UsaButtonGroupItem from '@/components/UsaButtonGroupItem'

describe('UsaButtonGroup', () => {
  it('renders the component', () => {
    cy.mount(UsaButtonGroup, {
      slots: {
        default: () => h(UsaButtonGroupItem, {}, () => 'Test button'),
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('ul.usa-button-group').should('contain', 'Test button')

    cy.get('@wrapper').invoke('setProps', { segmented: true })

    cy.get('ul.usa-button-group--segmented').should('exist')
  })
})
