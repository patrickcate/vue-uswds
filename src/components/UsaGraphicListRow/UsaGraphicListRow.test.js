import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaGraphicListRow from './UsaGraphicListRow.vue'

describe('UsaGraphicListRow', () => {
  it('renders the component', () => {
    cy.mount(UsaGraphicListRow, {
      slots: {
        default: () => 'Test row',
      },
    })

    cy.get('.usa-graphic-list__row').should('contain', 'Test row')
  })
})
