import { h } from 'vue'
import { mount } from '@cypress/vue'
import UsaProcessList from './UsaProcessList.vue'

describe('UsaProcessList', () => {
  it('renders the component', () => {
    mount(UsaProcessList, {
      slots: {
        default: () => h('li', null, 'Test'),
      },
    })

    cy.get('ol.usa-process-list').should('exist')
    cy.get('li').should('contain', 'Test')
  })
})
