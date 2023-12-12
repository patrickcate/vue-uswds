import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaProcessList from './UsaProcessList.vue'

describe('UsaProcessList', () => {
  it('renders the component', () => {
    cy.mount(UsaProcessList, {
      slots: {
        default: () => h('li', null, 'Test'),
      },
    })

    cy.get('ol.usa-process-list').should('exist')
    cy.get('li').should('contain', 'Test')
  })
})
