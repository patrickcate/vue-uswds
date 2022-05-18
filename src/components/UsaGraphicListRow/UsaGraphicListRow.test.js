import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaGraphicListRow from './UsaGraphicListRow.vue'

describe('UsaGraphicListRow', () => {
  it('renders the component', () => {
    mount(UsaGraphicListRow, {
      slots: {
        default: () => 'Test row',
      },
    })

    cy.get('.usa-graphic-list__row').should('contain', 'Test row')
  })
})
